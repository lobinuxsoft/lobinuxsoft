import { ui, defaultLang, languages, type Lang, type UiKey } from './ui';

/** All supported language codes. */
export const locales = Object.keys(languages) as Lang[];

/** Extract the current language from a URL pathname (e.g. `/es/...` -> `es`). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in languages) return segment as Lang;
  return defaultLang;
}

/** Returns a translator `t(key)` bound to the given language. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build a localized, root-relative path.
 * `localizePath('en', '/projects')` -> `/en/projects`
 * `localizePath('es', '/')`         -> `/es/`
 */
export function localizePath(lang: Lang, path = '/'): string {
  const clean = path.replace(/^\/+/, '');
  return clean ? `/${lang}/${clean}` : `/${lang}/`;
}

/**
 * Given the current URL, return the equivalent path in the other language,
 * used by the language toggle.
 */
export function getAlternatePath(url: URL, target: Lang): string {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments.length && segments[0] in languages) {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return `/${segments.join('/')}` + (url.pathname.endsWith('/') ? '/' : '');
}

/** Pick the localized value from a `{ en, es }` bilingual field. */
export function pick<T>(field: Record<Lang, T>, lang: Lang): T {
  return field[lang] ?? field[defaultLang];
}

export type LocalizedString = Record<Lang, string>;
