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

const productsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    equivalent: z.string().optional(),
    pitch: z.string().default('4.20mm'),
    category: z.string().default('Wire-to-Board'),
    heroImage: z.string().optional(),
    gallery: z.array(z.string()).optional(),
    datasheet: z.string().optional(),
    specs: z.object({
      currentRating: z.string().default('9A AC/DC'),
      voltageRating: z.string().default('600V AC/DC'),
      contactResistance: z.string().default('10mΩ Max'),
      insulationResistance: z.string().default('1000MΩ Min'),
      tempRange: z.string().default('-40°C to +105°C'),
      circuits: z.string().default('2-24 Circuits'),
    }).optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'products': productsCollection,
};
