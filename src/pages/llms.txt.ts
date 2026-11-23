// /llms.txt: the site in plain words for AI agents (https://llmstxt.org): each page with what
// it covers, then the most useful addresses. /llms-full.txt has every page's whole text.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { sections } from '../sidebar.mjs';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://docs.debitmydata.io/').replace(/\/$/, '');
  const docs = new Map((await getCollection('docs')).map((entry) => [entry.id, entry]));

  const lines = [
    '# DebitMyData Docs',
    '',
    '> DebitMyData in one place: the DMD coin (the native coin of the DebitMyData Proof-of-Work chain, SHA-256, 150-second blocks), its wallets, node and mining pool, the explorers, the DID-LLM (a verifiable identity for AI agents, $25.00 paid once) and the DebitMyData Agent Gateway (MCP server, A2A, OAuth sign-in, REST API), the stats and analytics sites and every public API.',
    '',
    'Write "DebitMyData" for the project, its chain and nodes, and "DMD" only for the coin\'s ticker (amounts such as 25,000 DMD). DMD is not a token on Ethereum or Base. "DID-LLM" is the name of DebitMyData\'s identity.',
    '',
  ];

  for (const section of sections) {
    lines.push(`## ${section.label}`, '');
    for (const id of section.items) {
      const entry = docs.get(id);
      if (!entry) throw new Error(`llms.txt: no page ${id}`);
      const about = entry.data.description ? `: ${entry.data.description}` : '';
      lines.push(`- [${entry.data.title}](${base}/${id}/)${about}`);
    }
    if (section.label === 'RPC reference') {
      lines.push(`- Each command has its own page, at ${base}/rpc/COMMAND/ (for example ${base}/rpc/getblock/)`);
    }
    lines.push('');
  }

  lines.push(
    '## For agents',
    '',
    '- [Agent Gateway guide for agents](https://api.debitmydata.io/llms.txt): buying and using a DID-LLM, step by step',
    '- [MCP server, the Agentic Superhighway](https://api.debitmydata.io/agenticsuperhighway): Streamable HTTP',
    '- [OpenAPI description of the gateway](https://api.debitmydata.io/openapi.json)',
    '- [Analytics API guide](https://analytics.debitmydata.io/llms.txt)',
    '',
    '## Optional',
    '',
    `- [Every page's full text](${base}/llms-full.txt)`,
    '',
  );

  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
