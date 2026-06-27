import { glob } from 'astro/loaders'
import { defineCollection, z } from 'astro:content'

const changelog = defineCollection({
	loader: glob({ base: './src/content/changelog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		version: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		image: z.string().optional(),
		tags: z.array(z.string()).optional(),
	})
})

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		readTime: z.string().optional(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		writer: z.string(),
		writerImage: z.string().optional(),
		role: z.string(),
		category: z.string()
	})
})

export const collections = { blog, changelog }
