import { defineCollection, z } from 'astro:content';

// Esta colección luego se debe pedir a la BBDD
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    price: z.number(),
    maintenance: z.number(),
    image: z.string(),
    characteristics: z.string(),
    tags: z.array(z.string()),
    serviceType: z.string(),
    complexityLevel: z.enum(['low', 'medium', 'high']),
    created: z.date(),
    updated: z.date(),
    active: z.boolean(),
  }),
});

export const collections = {
  services: servicesCollection,
};