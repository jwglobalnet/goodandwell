import type { ImageMetadata } from 'astro';

// Photos live in /assets (cut from the 2017 catalog). Replace with new shoots when available.
const files = import.meta.glob<{ default: ImageMetadata }>('/assets/*.{jpg,jpeg,png,webp}', { eager: true });

export function img(name: string): ImageMetadata | undefined {
  return files[`/assets/${name}`]?.default;
}
