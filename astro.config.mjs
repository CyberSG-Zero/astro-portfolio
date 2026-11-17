// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://cybersg.dev',
  adapter: vercel(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: {
      // El inglés vive en la raíz; español y catalán se sirven bajo /es y /ca.
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    // Alias antiguo del formulario en español.
    '/gracias': '/es/gracias',
  },
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        return !/\/(gracias|gracies|thank-you-page|404)\/?$/.test(pathname);
      },
      // Canonical y hreflang no usan barra final (salvo la raíz); alineamos el
      // sitemap para evitar redirecciones 308 desde los buscadores.
      serialize(item) {
        const strip = (url) => (url === 'https://cybersg.dev/' ? url : url.replace(/\/$/, ''));
        item.url = strip(item.url);
        if (item.links) {
          item.links = item.links.map((link) => ({ ...link, url: strip(link.url) }));
        }
        return item;
      },
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es-ES',
          ca: 'ca-ES',
        },
      },
    }),
  ],
});
