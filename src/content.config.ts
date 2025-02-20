import { glob } from 'astro/loaders';
import { z, defineCollection, reference } from 'astro:content';

const expertises = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/expertises' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      icon: image(),
    }),
});

const works = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/works' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      featuredImage: image(),
      client: z.string(),
      category: z.enum(['Creation site web', 'Ecommerce', 'SEO', 'Developpement', 'Maintenance & Infogérance']),
      date: z.date(),
      clientSector: z.string(),
      technologies: z.array(z.string()),
      siteurl: z.string(),
      isFeatured: z.boolean().default(false),
      relatedWorks: z.array(reference('works')),
    }),
});

export const collections = {
  expertises,
  works,
};
