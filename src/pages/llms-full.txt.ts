// /llms-full.txt: every page's text in reading order, for agents that read it all at once.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { pageOrder } from '../sidebar.mjs';

export const GET: APIRoute = async ({ site }) => {
  const base = (site?.href ?? 'https://docs.debitmydata.io/').replace(/\/$/, '');
  const docs = new Map((await getCollection('docs')).map((entry) => [entry.id, entry]));

  const parts = ['# DebitMyData Docs', '', `Source: ${base}/`, ''];
  for (const id of pageOrder) {
    const entry = docs.get(id);
    if (!entry) throw new Error(`llms-full.txt: no page ${id}`);
    parts.push(
      '---',
      '',
      `# ${entry.data.title}`,
      '',
      `URL: ${base}/${id}/`,
      '',
      // Starlight's asides (:::note) read as plain paragraphs.
      (entry.body ?? '').replace(/^:::\w*(\[[^\]]*\])?\s*$/gm, '').trim(),
      '',
    );
  }

  return new Response(parts.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
