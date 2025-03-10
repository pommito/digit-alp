import { glob } from 'astro/loaders';
import { z, defineCollection, reference } from 'astro:content';

const expertises = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/expertises' }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      description: z.string(),
      seo: z.object({
        metaTitle: z.string(),
        metaDescription: z.string(),
      }),
      icon: image(),
      subTitle: z.string(),
      subText: z.string(),
      specList: z.array(
        z.object({
          label: z.string(),
          illustration: image(),
          description: z.string(),
        })
      ),
      questions: z.array(
        z.object({
          label: z.string(),
          answer: z.string(),
        })
      ),
      relatedProjects: z.array(reference('projects')),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/data/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      seo: z.object({
        metaTitle: z.string(),
        metaDescription: z.string(),
      }),
      thumbnail: image().optional(),
      featuredImage: image().optional(),
      logo: image(),
      client: z.string(),
      category: z.enum(['Creation site web', 'Ecommerce', 'SEO', 'Developpement', 'Maintenance & Infogérance']),
      date: z.date(),
      clientSector: z.string(),
      technologies: z.array(z.string()),
      siteurl: z.string().optional(),
      isFeatured: z.boolean().default(false),
      relatedProjects: z.array(reference('projects')),
      isPublished: z.boolean().default(false),
    }),
});

export const collections = {
  expertises,
  projects,
};
