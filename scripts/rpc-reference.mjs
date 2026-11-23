// Writes the RPC reference (src/content/docs/rpc/) from a running DebitMyData Core node's own
// help: one page per command, the command list in rpc/index.md (between its two markers), and
// src/rpc-commands.mjs, which the sidebar reads. Run it again after each new DebitMyData Core
// release, then build the site.
//
//   DMD_CLI="debitmydata-cli" npm run rpc-reference
//
// DMD_CLI is the command that reaches the node, with any options it needs, for example
// "debitmydata-cli -datadir=/var/lib/debitmydata". Any network works (main or regtest): the help
// is the same. Only the node's help is read; nothing is changed on it.
import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const folder = join(root, 'src/content/docs/rpc');
const cli = (process.env.DMD_CLI || 'debitmydata-cli').split(/\s+/).filter(Boolean);

// The categories as the node names them, and as the docs show them.
const CATEGORY_LABELS = {
  Blockchain: 'Blockchain',
  Control: 'Control',
  Mining: 'Mining',
  Network: 'Network',
  Rawtransactions: 'Raw transactions',
  Signer: 'Signer',
  Util: 'Utility',
  Wallet: 'Wallet',
  Zmq: 'ZMQ',
};

// The commands DebitMyData Core has and Bitcoin Core doesn't, with a word about each.
const DEBITMYDATA_ONLY = {
  getdifficultyalgorithm: [
    'DebitMyData Core has this command and Bitcoin Core doesn\'t. It names the difficulty',
    'algorithm that sets the next block\'s difficulty. DebitMyData adjusts the difficulty at every',
    'block with LWMA (a linearly weighted moving average of the last 60 blocks) since block 120, so',
    'on the main network it answers `LwmaCalculateNextWorkRequired`. Before block 120 it answered',
    '`CalculateNextWorkRequired`, Bitcoin\'s adjustment. An answer starting with',
    '`Unknown Algorithm` means the node\'s two calculations disagree: tell the DebitMyData team.',
  ],
  abandonforkedtransactions: [
    'DebitMyData Core has this command and Bitcoin Core doesn\'t. It tidies a wallet after the',
    'node has left a fork: transactions that can never confirm (their inputs no longer exist on',
    'the chain) are marked abandoned, so the wallet stops counting them and stops sending them',
    'again. Transactions that are still valid are left alone. It takes no arguments and needs a',
    'loaded wallet.',
  ],
};

const START = '<!-- rpc-commands:start -->';
const END = '<!-- rpc-commands:end -->';

function run(...args) {
  return execFileSync(cli[0], [...cli.slice(1), ...args], { encoding: 'utf8', maxBuffer: 16 << 20 });
}

// ---------------------------------------------------------------------------- reading the help

function readIndex() {
  const categories = [];
  let current = null;
  for (const line of run('help').split('\n')) {
    const heading = line.match(/^== (.+) ==$/);
    if (heading) {
      current = { name: heading[1], label: CATEGORY_LABELS[heading[1]] ?? heading[1], commands: [] };
      categories.push(current);
    } else if (current && /^[a-z]/.test(line)) {
      current.commands.push(line.split(' ')[0]);
    }
  }
  return categories;
}

const SECTION = /^(Arguments|Named Arguments|Result( \(.*\))?|Examples):$/;

/** A command's help, in its parts: the usage line, the description, then each section. */
function parse(text) {
  const lines = text.replace(/\s+$/, '').split('\n');
  const usage = lines[0].trim();
  const parts = { usage, description: [], sections: [] };
  let into = parts.description;
  for (const line of lines.slice(1)) {
    const header = line.match(SECTION);
    if (header) {
      into = [];
      parts.sections.push({ title: header[1], lines: into });
    } else {
      into.push(line);
    }
  }
  return parts;
}

// ---------------------------------------------------------------------------- writing Markdown

const URL_RE = /https?:\/\/[^\s)'"]+/g;

/** Text shown as it is in Markdown: nothing in it becomes HTML, a link target or emphasis. */
function escapeText(text) {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/([\\`*_[\]|~])/g, '\\$1');
}

/** One line of prose: its web addresses as links, everything else escaped. */
function prose(line) {
  let out = '';
  let last = 0;
  for (const m of line.matchAll(URL_RE)) {
    const url = m[0].replace(/[.,;:]+$/, '');
    out += escapeText(line.slice(last, m.index)) + `<${url}>`;
    last = m.index + url.length;
  }
  out += escapeText(line.slice(last));
  // a line that would start a list, a quote or a heading stays a sentence
  return out.replace(/^(\s*)(\d+)\.(\s)/, '$1$2\\.$3').replace(/^(\s*)([-+#>])/, '$1\\$2');
}

/** Paragraphs separated by blank lines: */
function paragraphs(lines) {
  const out = [];
  let current = [];
  for (const line of lines) {
    if (line.trim() === '') {
      if (current.length) out.push(current);
      current = [];
    } else {
      current.push(line);
    }
  }
  if (current.length) out.push(current);
  return out;
}

function textBlock(lines, lang = 'text') {
  const body = lines
    .map((l) => l.trimEnd())
    .join('\n')
    .replace(/^\n+|\s+$/g, '');
  return body ? `\`\`\`${lang}\n${body}\n\`\`\`` : '';
}

/** A description: plain paragraphs become prose (a sentence ending a line keeps its line
 *  break); a paragraph with indented lines (a list, a table, addresses) stays as it is. */
function description(lines) {
  const blocks = [];
  for (const para of paragraphs(lines)) {
    if (para.slice(1).some((l) => /^\s/.test(l)) || /^\s/.test(para[0])) {
      blocks.push(textBlock(para));
      continue;
    }
    let out = '';
    para.forEach((line, i) => {
      out += prose(line.trim());
      if (i < para.length - 1) out += /[.:!?)]$/.test(line.trim()) ? '\\\n' : ' ';
    });
    blocks.push(out);
  }
  return blocks.join('\n\n');
}

/** Examples: the commands as shell blocks, the sentences between them as prose. */
function examples(lines) {
  const blocks = [];
  let shell = [];
  const flush = () => {
    if (shell.length) blocks.push(textBlock(shell, 'sh'));
    shell = [];
  };
  for (const line of lines) {
    if (line.startsWith('> ')) {
      shell.push(line.slice(2).trimEnd());
    } else {
      flush();
      if (line.trim()) blocks.push(prose(line.trim()));
    }
  }
  flush();
  return blocks.join('\n\n');
}

/** The first sentence, for search engines and the command list. */
function summary(lines) {
  const text = lines
    .map((l) => l.trim())
    .filter(Boolean)
    .join(' ');
  const sentence = (text.match(/^.*?[.:](\s|$)/)?.[0] ?? text).trim().replace(/:$/, '.');
  return sentence.length > 200 ? `${sentence.slice(0, 197).trimEnd()}…` : sentence;
}

function page(name, category, help, version) {
  const p = parse(help);
  const about = summary(p.description) || `The ${name} command.`;
  const out = [
    '---',
    `title: ${name}`,
    `description: ${JSON.stringify(`${about} DebitMyData Core RPC command.`)}`,
    'coin: true',
    '---',
    '',
    `[${category.label}](/rpc/#${category.label.toLowerCase().replace(/ /g, '-')}) command of DebitMyData Core ${version}.`,
    '',
    textBlock([p.usage]),
    '',
  ];
  const text = description(p.description);
  if (text) out.push(text, '');
  if (DEBITMYDATA_ONLY[name]) {
    out.push(':::note[DebitMyData only]', ...DEBITMYDATA_ONLY[name], ':::', '');
  }

  const results = p.sections.filter((s) => s.title.startsWith('Result'));
  let resultsShown = false;
  for (const s of p.sections) {
    if (s.title.startsWith('Result')) {
      if (results.length === 1) {
        out.push('## Result', '', textBlock(s.lines), '');
        continue;
      }
      if (!resultsShown) out.push('## Results', '');
      resultsShown = true;
      const when = s.title.replace(/^Result \((.*)\)$/, '$1');
      out.push(`### ${prose(when.charAt(0).toUpperCase() + when.slice(1))}`, '', textBlock(s.lines), '');
    } else if (s.title === 'Examples') {
      out.push('## Examples', '', examples(s.lines), '');
    } else {
      out.push(`## ${s.title}`, '', textBlock(s.lines), '');
    }
  }
  return `${out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd()}\n`;
}

// ---------------------------------------------------------------------------- the list

function commandList(categories, summaries, version) {
  const total = categories.reduce((n, c) => n + c.commands.length, 0);
  const out = [
    `DebitMyData Core ${version} has ${total} commands, in ${categories.length} groups. ` +
      'This list and the pages it leads to come from the node\'s own help.',
    '',
  ];
  for (const c of categories) {
    out.push(`## ${c.label}`, '', '| Command | What it does |', '| --- | --- |');
    for (const name of c.commands) {
      const mark = DEBITMYDATA_ONLY[name] ? ' **(DebitMyData only)**' : '';
      out.push(`| [\`${name}\`](/rpc/${name}/) | ${prose(summaries[name])}${mark} |`);
    }
    out.push('');
  }
  return out.join('\n').trimEnd();
}

// ---------------------------------------------------------------------------- main

const version = (JSON.parse(run('getnetworkinfo')).subversion.match(/:([\d.]+)/) ?? [])[1];
if (!version) throw new Error('rpc-reference: could not read the node\'s version');

const categories = readIndex();
const summaries = {};
const pages = new Map();
for (const c of categories) {
  for (const name of c.commands) {
    const help = run('help', name);
    summaries[name] = summary(parse(help).description) || name;
    pages.set(name, page(name, c, help, version));
  }
}

mkdirSync(folder, { recursive: true });
for (const file of readdirSync(folder)) {
  if (file.endsWith('.md') && file !== 'index.md') rmSync(join(folder, file));
}
for (const [name, text] of pages) writeFileSync(join(folder, `${name}.md`), text);

const indexFile = join(folder, 'index.md');
const index = readFileSync(indexFile, 'utf8');
const a = index.indexOf(START);
const b = index.indexOf(END);
if (a < 0 || b < a) throw new Error(`rpc-reference: ${indexFile} needs the ${START} and ${END} markers`);
writeFileSync(
  indexFile,
  `${index.slice(0, a + START.length)}\n\n${commandList(categories, summaries, version)}\n\n${index.slice(b)}`,
);

const sidebar = categories.map((c) => ({ label: c.label, commands: c.commands }));
writeFileSync(
  join(root, 'src/rpc-commands.mjs'),
  '// Written by scripts/rpc-reference.mjs from DebitMyData Core ' +
    `${version}'s help: the RPC reference's groups and commands, for the sidebar.\n` +
    `export const rpcVersion = ${JSON.stringify(version)};\n\n` +
    `export const rpcCategories = ${JSON.stringify(sidebar, null, 2)};\n`,
);

console.log(`rpc-reference: DebitMyData Core ${version}, ${pages.size} commands in ${categories.length} groups`);
