import { defineCollection, z } from "astro:content";

export const advisorySchema = z.object({
  title: z.string(),
  description: z.string(),
  cve: z.string().optional(),
  affecting: z.array(z.object({
    name: z.string(),
    version: z.string()
  })),
  date: z.date(),
  severity: z.enum(['HIGH', 'MEDIUM', 'LOW']),
  authors: z.array(z.object({
    name: z.string(),
    handle: z.string()
  })),
  references: z.array(z.string()).optional()
});

const advisories = defineCollection({
  type: 'content',
  schema: advisorySchema
});

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string().max(60).min(10),
    hero: image(),
    heroAlt: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    authors: z.array(z.object({
      name: z.string(),
      handle: z.string()
    })),
  })
});

const authors = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    avatarPath: z.string(),
    github: z.string().url().optional(),
    twitter: z.string().url().optional(),
    linkedin: z.string().url().optional(),
    website: z.string().url().optional(),
    handle: z.string(),
    order: z.number(),
    tools: z.array(z.object({
      name: z.string(),
      url: z.string().url(),
      description: z.string().optional(),
      date: z.date().optional()
    })).optional(),
    externalWritings: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      date: z.date().optional(),
      description: z.string().optional(),
      authors: z.array(z.object({
        name: z.string(),
        handle: z.string()
      }))
    })).optional(),
    talks: z.array(z.object({
      title: z.string(),
      url: z.string().url(),
      date: z.date().optional(),
      description: z.string().optional()
    })).optional()
  })
});

export const collections = {
  advisories,
  blog,
  authors,
};
