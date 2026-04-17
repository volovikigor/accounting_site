// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { fileURLToPath } from 'url';
import path from 'path';

// Схема для услуг
const servicesSchema = z.object({
  title: z.string(),
  price: z.string().optional(),
  image: z.string().optional(),
});

// Схема для команды
const teamSchema = z.object({
  name: z.string(),
  position: z.string(),
  photo: z.string().optional(),
  bio: z.string().optional(),
  email: z.string().optional(),
  phone: z.string().optional(),
});

// Схема для страниц
const pagesSchema = z.object({
  title: z.string(),
  language: z.enum(['es', 'ru', 'en']),
  slug: z.string(),
});

// Коллекции для услуг
const servicesEsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services/es" }),
  schema: servicesSchema,
});

const servicesRuCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services/ru" }),
  schema: servicesSchema,
});

const servicesEnCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services/en" }),
  schema: servicesSchema,
});

// Коллекции для команды
const teamEsCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team/es" }),
  schema: teamSchema,
});

const teamRuCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team/ru" }),
  schema: teamSchema,
});

const teamEnCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/team/en" }),
  schema: teamSchema,
});

// Коллекция для страниц
const pagesCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
  schema: pagesSchema,
});

export const collections = {
  'services_es': servicesEsCollection,
  'services_ru': servicesRuCollection,
  'services_en': servicesEnCollection,
  'team_es': teamEsCollection,
  'team_ru': teamRuCollection,
  'team_en': teamEnCollection,
  'pages': pagesCollection,
};