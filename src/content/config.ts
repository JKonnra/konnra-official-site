import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    category: z.string().default('Technical Guide'),
    heroImage: z.string().optional(),
    author: z.string().default('Konnra Engineering Team'),
  }),
});

export const collections = {
  'blog': blogCollection,
};
