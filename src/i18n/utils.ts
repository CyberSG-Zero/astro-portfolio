import { ui, defaultLang, type Lang, type UIKey } from './ui';

/** Devuelve el idioma a partir del primer segmento de la URL. */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment && segment in ui) return segment as Lang;
  return defaultLang;
}

/** Devuelve una función `t(key)` atada a un idioma. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Convierte una ruta sin idioma en la ruta localizada.
 * localizePath('es', '/work') -> '/es/work'
 * localizePath('en', '/work') -> '/work'
 */
export function localizePath(lang: Lang, path: string): string {
  const clean = '/' + path.replace(/^\/+/, '');
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}` : `/${lang}${clean}`;
}

/**
 * Quita el prefijo de idioma de una ruta.
 * stripLocale('/es/work') -> '/work'
 * stripLocale('/ca') -> '/'
 */
export function stripLocale(pathname: string): string {
  const match = pathname.match(/^\/(?:es|ca)(?=\/|$)/);
  if (!match) return pathname || '/';
  const rest = pathname.slice(match[0].length);
  return rest === '' ? '/' : rest;
}
