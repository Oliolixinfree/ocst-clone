import { glob } from 'astro/loaders'
import { defineCollection } from 'astro:content'
import { productSchema } from './shared/schemas/product.schema'

const products = defineCollection({
	loader: glob({ base: 'src/shared/content/products', pattern: '**/*.md' }),
	schema: productSchema
})

export const collections = { products }
