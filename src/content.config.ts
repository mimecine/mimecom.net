import { date } from "astro/zod";
import { defineCollection, reference, z } from "astro:content";
import { glob, file } from "astro/loaders";


const pages = defineCollection({
  // type: "content",
  loader: glob({ pattern: "**/*.md", base: "./src/pages" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      layout: z.string().default('../layouts/Layout.astro'),
      featuredImage: image().optional(),
      hidden: z.boolean().optional(),
    }),
});


export const collections = { pages };
