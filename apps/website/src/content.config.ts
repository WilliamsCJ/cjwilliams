import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const experienceCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./content/experience" }),
  schema: z.object({
    index: z.number(),
    company: z.string(),
    dates: z.string(),
    positions: z.array(z.object({
      title: z.string(),
      dates: z.string()
    })),
  }),
});

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.date(),
    tags: z.array(z.string())
  }),
});

const portfolioCollection = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./content/portfolio" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string().pipe( z.coerce.date() ),
    link: z.string().url()
  })
})

export const collections = {
  'experience': experienceCollection,
  'blog': blogCollection,
  'portfolio': portfolioCollection
};