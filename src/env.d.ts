// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module 'astro:content' {
  interface Render {
    '.mdx': Promise<{
      Content: import('astro').MarkdownInstance<{}>['Content'];
      headings: import('astro').MarkdownHeading[];
      remarkPluginFrontmatter: Record<string, any>;
    }>;
  }
}

// Declare content collection types
declare module 'astro:content' {
  export interface CollectionEntry<C> {
    data: C extends "advisories" ? {
      title: string;
      description: string;
      cve?: string;
      affecting: Array<{
        name: string;
        version: string;
      }>;
      date: Date;
      severity: 'HIGH' | 'MEDIUM' | 'LOW';
      author: string;
      references?: string[];
    } : C extends "blog" ? {
      title: string;
      description: string;
      author: string;
      heroAlt: string;
      pubDate: Date;
      handle: string;
      hero?: any;
      updatedDate?: Date;
    } : never;
  }

  type Config = typeof import("./content/config");
  type Collections = Config["collections"];

  export type CollectionTypes = keyof Collections;
}
