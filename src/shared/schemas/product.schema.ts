import { z } from 'astro/zod'

export const productSchema = z.object({
	title: z.string(),
	description: z.string(),
	price: z.number(),
	currency: z.string(),
	category: z.enum(['sweatshirts', 'tshirts', 'shorts', 'accessories']),
	isOnSale: z.boolean().default(false),
	isNew: z.boolean().default(false),
	sizes: z.array(z.string()),
	material: z.string(),
	composition: z.string(),
	country: z.string(),
	manufacturer: z.string()
})
