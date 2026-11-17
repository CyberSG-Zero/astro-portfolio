/**
 * Diccionario de la interfaz compartida (header, footer, accesibilidad).
 * El inglés es la fuente de verdad: `es` y `ca` deben tener exactamente las mismas claves.
 */

export const languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

const en = {
  'nav.home': 'Home',
  'nav.work': 'Work',
  'nav.contact': "[ Let's Connect ]",
  'nav.main': 'Main navigation',
  'nav.lang': 'Language',
  'nav.backToWork': 'Back to Work',

  'a11y.skip': 'Skip to main content',
  'a11y.instagram': 'Instagram',
  'a11y.linkedin': 'LinkedIn',
  'a11y.github': 'GitHub',

  'footer.home': 'Home',
  'footer.work': 'Work',
  'footer.contact': "[ Let's Connect ]",
  'footer.prompt': 'Got a project in mind?',
  'footer.sub': "Let's make something happen together",
  'footer.cta': 'Contact me',
  'footer.rights': '© 2026 CyberSG',
};

export type UIKey = keyof typeof en;

const es = {
  'nav.home': 'Inicio',
  'nav.work': 'Proyectos',
  'nav.contact': '[ Hablemos ]',
  'nav.main': 'Navegación principal',
  'nav.lang': 'Idioma',
  'nav.backToWork': 'Volver a proyectos',

  'a11y.skip': 'Saltar al contenido principal',
  'a11y.instagram': 'Instagram',
  'a11y.linkedin': 'LinkedIn',
  'a11y.github': 'GitHub',

  'footer.home': 'Inicio',
  'footer.work': 'Proyectos',
  'footer.contact': '[ Hablemos ]',
  'footer.prompt': '¿Tienes un proyecto en mente?',
  'footer.sub': 'Hagamos que pase algo juntos',
  'footer.cta': 'Contáctame',
  'footer.rights': '© 2026 CyberSG',
} satisfies typeof en;

const ca = {
  'nav.home': 'Inici',
  'nav.work': 'Projectes',
  'nav.contact': '[ Parlem ]',
  'nav.main': 'Navegació principal',
  'nav.lang': 'Idioma',
  'nav.backToWork': 'Torna als projectes',

  'a11y.skip': 'Ves al contingut principal',
  'a11y.instagram': 'Instagram',
  'a11y.linkedin': 'LinkedIn',
  'a11y.github': 'GitHub',

  'footer.home': 'Inici',
  'footer.work': 'Projectes',
  'footer.contact': '[ Parlem ]',
  'footer.prompt': 'Tens un projecte al cap?',
  'footer.sub': 'Fem que passi alguna cosa junts',
  'footer.cta': "Contacta'm",
  'footer.rights': '© 2026 CyberSG',
} satisfies typeof en;

export const ui = { en, es, ca };
