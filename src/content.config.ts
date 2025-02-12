import { glob } from 'astro/loaders';
import { z, defineCollection, reference } from 'astro:content';

const expertises = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/expertises' }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
    }),
});

export const collections = {
  expertises,
};
