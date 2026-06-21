/**
 * Global site configuration.
 *
 * `url` is a PLACEHOLDER — change it to the real domain when deploying.
 * It is the single source of truth for canonical URLs, hreflang, OG tags
 * and the sitemap.
 */
export const SITE = {
  // Live deployment. Swap for a custom domain if one is set up later.
  url: 'https://lobinuxsoft.vercel.app',
  defaultLang: 'en' as const,
  author: 'Matias Ezequiel Galarza Fernandez',
  // Used as the global OG image fallback (lives in /public).
  ogImage: '/og/og-default.png',
};

/** Social / contact links (shared across both languages). */
export const SOCIAL = {
  email: 'lobinuxsoft@gmail.com',
  github: 'https://github.com/lobinuxsoft',
  githubHandle: 'lobinuxsoft',
  linkedin: 'https://linkedin.com/in/lobinux',
  linkedinHandle: 'lobinux',
  location: 'Greater Buenos Aires, Argentina (UTC-3)',
} as const;
