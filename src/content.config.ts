import { file, glob } from 'astro/loaders'
import { z } from 'astro/zod'
import { defineCollection } from 'astro:content'

const sweatshirts = defineCollection({
	loader: file('src/shared/content/sweatshirts.json'),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		price: z.number(),
		currency: z.string(),
		isOnSale: z.boolean()
	})
})
const sweatshirts_md = defineCollection({
	loader: glob({ base: 'src/shared/content/sweatshirts', pattern: '*.md' }),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		price: z.number(),
		currency: z.string(),
		isOnSale: z.boolean(),
		sizes: z.array(z.string()),
		material: z.string(),
		composition: z.string(),
		country: z.string(),
		manufacturer: z.string()
	})
})
const newItems = defineCollection({
	loader: glob({ base: 'src/shared/content/new', pattern: '*.md' }),
	schema: z.object({
		id: z.string(),
		title: z.string(),
		description: z.string(),
		price: z.number(),
		currency: z.string(),
		isOnSale: z.boolean(),
		sizes: z.array(z.string()),
		material: z.string(),
		composition: z.string(),
		country: z.string(),
		manufacturer: z.string()
	})
})

export const collections = { sweatshirts, sweatshirts_md, newItems }
