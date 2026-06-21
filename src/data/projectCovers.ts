import type { ImageMetadata } from 'astro';

/**
 * Resolves project cover images living in `src/assets/projects/`.
 * Eager glob so the metadata is available synchronously in `.astro`
 * frontmatter; the set is tiny so the build cost is negligible.
 * Keyed by `cover` filename as declared in `data/projects.ts`.
 */
const covers = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/projects/*.{png,jpg,jpeg,webp,gif,avif}',
  { eager: true },
);

export function getCover(file?: string): ImageMetadata | undefined {
  if (!file) return undefined;
  return covers[`/src/assets/projects/${file}`]?.default;
}
