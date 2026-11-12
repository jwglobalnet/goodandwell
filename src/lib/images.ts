import type { ImageMetadata } from 'astro';

// Photos live in /assets: catalog crops (2017) at the top level, stills from the company's
// factory video in /assets/factory-video. Pass the path below /assets, e.g. 'factory-video/step-01.jpg'.
const files = import.meta.glob<{ default: ImageMetadata }>('/assets/**/*.{jpg,jpeg,png,webp}', { eager: true });

export function img(name: string): ImageMetadata | undefined {
  return files[`/assets/${name}`]?.default;
}
