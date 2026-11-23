// The site's sections and their pages, in reading order. The sidebar, llms.txt and
// llms-full.txt all follow this list, so a new page is added here once.
//
// The RPC reference's command pages are listed by scripts/rpc-reference.mjs (in
// rpc-commands.mjs): the sidebar shows them by group, and llms.txt points to their list.
import { rpcCategories } from './rpc-commands.mjs';

export const sections = [
  {
    label: 'Start here',
    items: ['start/what-is-debitmydata', 'start/all-links'],
  },
  {
    label: 'The DMD coin',
    items: ['coin/overview', 'coin/wallets', 'coin/node', 'coin/mining'],
  },
  {
    label: 'DMD coin API',
    items: ['api/coin-data', 'api/rich-list', 'api/listings'],
  },
  {
    label: 'RPC reference',
    items: ['rpc'],
  },
  {
    label: 'DID-LLM',
    items: ['did-llm/overview', 'did-llm/get-one', 'did-llm/own-and-manage'],
  },
  {
    label: 'Developers and agents',
    items: [
      'developers/connect-an-agent',
      'developers/sign-in',
      'developers/rest-api',
      'developers/staging',
    ],
  },
  {
    label: 'Explorers and data',
    items: ['data/explorers', 'data/stats', 'data/analytics', 'data/reference-price'],
  },
  {
    label: 'Project',
    items: ['project/source-code', 'project/community'],
  },
];

const rpcGroups = rpcCategories.map(({ label, commands }) => ({
  label,
  collapsed: true,
  items: commands.map((name) => `rpc/${name}`),
}));

export const sidebar = sections.map(({ label, items }) =>
  label === 'RPC reference' ? { label, collapsed: true, items: [...items, ...rpcGroups] } : { label, items },
);

export const pageOrder = sections.flatMap(({ items }) => items);
