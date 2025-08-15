// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const bins = defineCollection({
  loader: file('src/data/bins.json'),
  schema: z.object({
    fileName: z.string(),
    slug: z.string(),
    localAuthorityCountry: z.string(),
    localAuthorityCode: z.string(),
    collectionDate: z.coerce.date(),
    colour: z.string(),
    councilName: z.string(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { bins };
