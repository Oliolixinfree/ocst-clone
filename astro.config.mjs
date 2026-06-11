// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Exo 2',
			cssVariable: '--font-exo2',
			subsets: ['latin', 'cyrillic'],
			weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
		}
	]
})
