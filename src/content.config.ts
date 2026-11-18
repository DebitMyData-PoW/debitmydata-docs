import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // A page about the DMD coin or one of its platforms: shows the coin beside its title.
        coin: z.boolean().optional(),
      }),
    }),
  }),
};
