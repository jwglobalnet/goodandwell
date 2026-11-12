import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const localized = z.object({ en: z.string(), fr: z.string(), ja: z.string(), ko: z.string(), zh: z.string() });
const localizedList = z.object({ en: z.array(z.string()), fr: z.array(z.string()), ja: z.array(z.string()), ko: z.array(z.string()), zh: z.array(z.string()) });
/** A spec value: same text in every language, or one per language. */
const value = z.union([z.string(), localized]).nullable().optional();

const variant = z.object({
  label: localized,
  sheetSize: value,
  netWeight: value,
  perCarton: value,
  containerLoad: value,
  shelfLife: value,
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
    features: localizedList.optional(),
    uses: localized.optional(),
    ingredients: localized.optional(),
    origin: localized.optional(),
    storage: localized.nullable().optional(),
    packaging: localized.nullable().optional(),
    flavours: z.array(z.string()).optional(),
    flavoursVerify: z.boolean().optional(),
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
    lang: z.enum(['en', 'fr', 'ja', 'ko', 'zh']),
    summary: z.string(),
  }),
});

export const collections = { products, news };
