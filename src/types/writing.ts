export interface Author {
  name: string;
  handle: string;
}

export interface ExternalWriting {
  title: string;
  url: string;
  date?: Date;
  description?: string;
  authors: Author[];
}

// Type to match the schema from content/config.ts
export interface ContentExternalWriting {
  title: string;
  url: string;
  date?: Date;
  description?: string;
  authors: Author[];
}

export interface TransformedPost {
  title: string;
  url: string;
  date?: Date;
  description?: string;
  authors: Author[];
  isExternal: boolean;
  minimal: boolean;
}
