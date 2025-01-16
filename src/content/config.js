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

// TUTORIAL = https://benborgers.com/google-sheets-json
// PLANILLA = https://docs.google.com/spreadsheets/d/1FJ5z6zcc-YF312ZLAnKn-xNUpnqtgFFFRjGJR8KKLp0/edit?usp=sharing
// BASE = https://opensheet.elk.sh/spreadsheet_id/tab_name
// URL ADAPTADA = https://opensheet.elk.sh/1FJ5z6zcc-YF312ZLAnKn-xNUpnqtgFFFRjGJR8KKLp0/Adjudicados

// const response = await fetch(
//   "https://opensheet.elk.sh/1FJ5z6zcc-YF312ZLAnKn-xNUpnqtgFFFRjGJR8KKLp0/Adjudicados",
// );

// const adjudicados = await response.json();
// console.log(adjudicados);
