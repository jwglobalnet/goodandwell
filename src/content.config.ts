import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ en: z.string(), ja: z.string(), ko: z.string() });

const variant = z.object({
  label: localized,
  sheetSize: z.string().nullable().optional(),
  netWeight: z.string().nullable().optional(),
  perCarton: z.string().nullable().optional(),
  containerLoad: z.string().nullable().optional(),
  shelfLife: z.string().nullable().optional(),
});

const products = defineCollection({
  loader: file('content/products.json', {
    parser: (text) => JSON.parse(text).products,
  }),
  schema: z.object({
    id: z.string(),
    priority: z.number(),
    status: z.enum(['active', 'verify']),
    images: z.array(z.string()).optional(),
    name: localized,
    tagline: localized.optional(),
    description: localized.optional(),
    flavours: z.array(z.string()).optional(),
    variants: z.array(variant).optional(),
    markets: localized.optional(),
    specSheet: z.string().nullable().optional(),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['en', 'ja', 'ko']),
    summary: z.string(),
  }),
});

export const collections = { products, news };
