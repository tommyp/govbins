// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Define your collection(s)
const bins = defineCollection({
  loader: file('src/data/bins.json'),
  schema: ({ image }) =>
    z.object({
      fileName: image(),
      slug: z.string(),
      localAuthorityCountry: z.optional(z.string()),
      localAuthorityCode: z.optional(z.string()),
      collectionDate: z.optional(z.coerce.date()),
      colour: z.optional(z.string()),
      councilName: z.optional(z.string()),
      retro: z.optional(z.boolean()),
      retroWhy: z.optional(z.string()),
      retroName: z.optional(z.string()),
      presentTwinFileName: z.optional(image()),
      startDate: z.optional(z.string()),
      endDate: z.optional(z.string()),
    }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { bins };
