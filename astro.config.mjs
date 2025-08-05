// @ts-check
import { defineConfig } from "astro/config";

import partytown from '@astrojs/partytown'

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

import mdx from '@astrojs/mdx'

import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
	site: 'https://duneui.com',
	integrations: [react(), tailwind(), partytown(), mdx(), sitemap()],
	adapter: vercel(),
	output: 'static'
})
