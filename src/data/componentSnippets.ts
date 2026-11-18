import fs from 'node:fs'
import path from 'node:path'
import type {
	CategoryCatalog,
	CategoryMeta,
	ComponentSpec,
	ComponentSpecMeta
} from '@/data/types'

export type {
	CategoryCatalog,
	CategoryMeta,
	ComponentSpec,
	ComponentSpecMeta,
	PreviewCanvas
} from '@/data/types'

interface CategoryJson {
	slug: string
	index: string
	tag: string
	title: string
	description: string
	specs: ComponentSpecMeta[]
}

interface DiscoveredCategory {
	dir: string
	meta: CategoryMeta
	specMetas: ComponentSpecMeta[]
}

const SNIPPETS_ROOT = path.resolve(process.cwd(), 'src/data/snippets')

let cachedIndex: DiscoveredCategory[] | null = null

/**
 * Discover all category folders under `src/data/snippets/<domain>/<category>/category.json`.
 * Reads only lightweight JSON metadata so build-time path generation stays fast.
 */
function discoverCategories(): DiscoveredCategory[] {
	if (cachedIndex && !import.meta.env.DEV) return cachedIndex

	const entries: DiscoveredCategory[] = []
	if (!fs.existsSync(SNIPPETS_ROOT)) {
		return entries
	}

	const domainDirs = fs.readdirSync(SNIPPETS_ROOT, { withFileTypes: true })
	for (const domainEntry of domainDirs) {
		if (!domainEntry.isDirectory()) continue
		const domainPath = path.join(SNIPPETS_ROOT, domainEntry.name)

		const categoryDirs = fs.readdirSync(domainPath, { withFileTypes: true })
		for (const catEntry of categoryDirs) {
			if (!catEntry.isDirectory()) continue
			const catPath = path.join(domainPath, catEntry.name)
			const metaPath = path.join(catPath, 'category.json')
			if (!fs.existsSync(metaPath)) continue

			const parsed = JSON.parse(fs.readFileSync(metaPath, 'utf8')) as CategoryJson
			entries.push({
				dir: catPath,
				meta: {
					slug: parsed.slug,
					index: parsed.index,
					tag: parsed.tag,
					title: parsed.title,
					description: parsed.description,
					specCount: parsed.specs.length
				},
				specMetas: parsed.specs
			})
		}
	}

	entries.sort((a, b) => Number(a.meta.index) - Number(b.meta.index))
	cachedIndex = entries.map((entry, idx) => ({
		...entry,
		meta: {
			...entry.meta,
			index: String(idx + 1).padStart(2, '0')
		}
	}))

	return cachedIndex
}

/** Return metadata for all categories sorted by index, without reading `.html` files. */
export function getAllCategoriesMeta(): CategoryMeta[] {
	return discoverCategories().map((entry) => entry.meta)
}

/** Load a single category and its `.html` snippet files from disk. */
export function getCategoryBySlug(slug: string): CategoryCatalog | undefined {
	const found = discoverCategories().find((entry) => entry.meta.slug === slug)
	if (!found) return undefined

	const specs: ComponentSpec[] = found.specMetas.map((specMeta) => {
		const htmlPath = path.join(found.dir, specMeta.file)
		const html = fs.readFileSync(htmlPath, 'utf8').trim()
		return {
			title: specMeta.title,
			styleTag: specMeta.styleTag,
			...(specMeta.canvas ? { canvas: specMeta.canvas } : {}),
			html
		}
	})

	return {
		slug: found.meta.slug,
		index: found.meta.index,
		tag: found.meta.tag,
		title: found.meta.title,
		description: found.meta.description,
		specs
	}
}

/** Load all categories with their HTML snippets. Prefer `getCategoryBySlug` per page. */
export function getAllCategories(): CategoryCatalog[] {
	return discoverCategories()
		.map((entry) => getCategoryBySlug(entry.meta.slug))
		.filter((cat): cat is CategoryCatalog => Boolean(cat))
}
