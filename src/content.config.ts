import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";

const carClasses = defineCollection({
  loader: file("src/data/car-classes.json"),
  schema: z.object({
    id: z.string(),
    heading: z.string(),
    paragraph: z.string(),
    link: z.string(),
    icon: z.string(),
  }),
});

export const collections = { carClasses };
