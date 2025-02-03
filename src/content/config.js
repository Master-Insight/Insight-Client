import { defineCollection, z } from 'astro:content';

// Esta colección luego se debe pedir a la BBDD

const samplesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    order: z.number(),
    title: z.string(), // Título del sample
    description: z.string(), // Descripción del sample
    staff: z.array(z.string()), // IDs de usuarios relacionados
    media: z.array(z.string().url()).optional(), // URLs de medios relacionados
    deploy: z.string().url().optional(), // URL de despliegue (opcional)
    images: z.array(z.string()).optional(),
  }),
});


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
    complexityLevel: z.enum(['baja', 'media', 'alta']),
    created: z.date(),
    updated: z.date(),
    active: z.boolean(),
  }),
});

const staffCollection = defineCollection({
  type: 'content',
  schema: z.object({
    fullName: z.string(), // Nombre completo
    linkedin: z.string().optional(), // ID de LinkedIn
    photo: z.string().url().optional(), // Foto de perfil
    gender: z.enum(['boy', 'girl']),
    language: z.array(z.string()), // Lenguaje de programación
    roleIT: z.array(z.string()), // Rol en TI
  }),
});

export const collections = {
  samples: samplesCollection,
  services: servicesCollection,
  staff: staffCollection,
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
