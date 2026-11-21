import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/sidebar.mjs';

const site = 'https://docs.debitmydata.io';

export default defineConfig({
  site,
  integrations: [
    starlight({
      title: 'DebitMyData Docs',
      description:
        'Everything about DebitMyData in one place: the DMD coin and its Proof-of-Work chain, wallets, mining, explorers, the DID-LLM and the Agent Gateway, stats, analytics and every public API.',
      logo: { light: './src/assets/debitmydata-logo.png', dark: './src/assets/debitmydata-logo-dark.png', alt: '' },
      favicon: '/favicon.ico',
      head: [
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '64x64', href: '/favicon.png' } },
        { tag: 'link', attrs: { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#0b0a0f', media: '(prefers-color-scheme: dark)' } },
        { tag: 'meta', attrs: { property: 'og:image', content: `${site}/og.png` } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { name: 'twitter:card', content: 'summary_large_image' } },
        { tag: 'link', attrs: { rel: 'alternate', type: 'text/plain', title: 'llms.txt', href: '/llms.txt' } },
        {
          tag: 'link',
          attrs: { rel: 'preload', href: '/fonts/inter-wght.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        },
        {
          tag: 'link',
          attrs: { rel: 'preload', href: '/fonts/sora-wght.woff2', as: 'font', type: 'font/woff2', crossorigin: '' },
        },
      ],
      social: [
        { icon: 'discord', label: 'Discord', href: 'https://discord.gg/PSK436rP4Y' },
        { icon: 'x.com', label: 'X', href: 'https://x.com/debitmydataPOW' },
        { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com/@DebitMyData' },
        { icon: 'github', label: 'GitHub', href: 'https://github.com/DebitMyData-PoW' },
      ],
      customCss: ['./src/styles/debitmydata.css', './src/styles/aurora.css'],
      components: {
        SiteTitle: './src/components/SiteTitle.astro',
        PageTitle: './src/components/PageTitle.astro',
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro',
        Footer: './src/components/Footer.astro',
      },
      sidebar,
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      lastUpdated: false,
      credits: false,
    }),
  ],
});
