import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import {
	getAllCategoriesMeta,
	getCategoryBySlug
} from '../../src/data/componentSnippets.ts'
import { CARDS } from '../../src/constants/Card.ts'

const SNIPPETS_ROOT = path.resolve(process.cwd(), 'src/data/snippets')
const VALID_CANVASES = new Set(['light', 'muted', 'dark', 'mesh'])

describe('Snippets catalog integrity', () => {
	const categories = getAllCategoriesMeta()

	it('discovers all expected categories with unique slugs and sequential indices', () => {
		assert.ok(categories.length >= 59, `Expected >= 59 categories, got ${categories.length}`)

		const slugs = new Set<string>()
		categories.forEach((cat, idx) => {
			assert.ok(cat.slug.length > 0, 'Category slug must not be empty')
			assert.ok(!slugs.has(cat.slug), `Duplicate category slug: ${cat.slug}`)
			slugs.add(cat.slug)

			const expectedIndex = String(idx + 1).padStart(2, '0')
			assert.equal(cat.index, expectedIndex, `Unexpected index for ${cat.slug}`)
			assert.ok(cat.title.trim().length > 0, `Missing title for ${cat.slug}`)
			assert.ok(cat.description.trim().length > 0, `Missing description for ${cat.slug}`)
			assert.ok(cat.specCount > 0, `Category ${cat.slug} must have at least one spec`)
		})
	})

	it('matches every directory Card in src/constants/Card.ts to a real snippet category', () => {
		const slugSet = new Set(categories.map((c) => c.slug))
		for (const card of CARDS) {
			assert.ok(
				slugSet.has(card.slug),
				`Card "${card.slug}" in src/constants/Card.ts has no matching folder in src/data/snippets`
			)
			assert.equal(card.href, `/components/${card.slug}`)
		}
	})

	it('loads every HTML file cleanly with valid metadata, safe paths, and no orphan files', () => {
		const domainDirs = fs
			.readdirSync(SNIPPETS_ROOT, { withFileTypes: true })
			.filter((d) => d.isDirectory())

		let totalSpecs = 0

		for (const domain of domainDirs) {
			const domainPath = path.join(SNIPPETS_ROOT, domain.name)
			const catDirs = fs
				.readdirSync(domainPath, { withFileTypes: true })
				.filter((d) => d.isDirectory())

			for (const catDir of catDirs) {
				const catPath = path.join(domainPath, catDir.name)
				const metaPath = path.join(catPath, 'category.json')
				assert.ok(fs.existsSync(metaPath), `Missing category.json in ${catPath}`)

				const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'))
				const referencedFiles = new Set<string>()

				for (const spec of meta.specs) {
					assert.ok(spec.file.endsWith('.html'), `Spec file must end with .html: ${spec.file}`)
					assert.ok(!spec.file.includes('..') && !path.isAbsolute(spec.file), `Unsafe file path: ${spec.file}`)
					referencedFiles.add(spec.file)

					if (spec.canvas !== undefined) {
						assert.ok(
							VALID_CANVASES.has(spec.canvas),
							`Invalid canvas "${spec.canvas}" in ${meta.slug}/${spec.file}`
						)
					}
				}

				// Verify no orphan .html files exist in the folder
				const htmlFilesOnDisk = fs
					.readdirSync(catPath)
					.filter((f) => f.endsWith('.html'))

				for (const file of htmlFilesOnDisk) {
					assert.ok(
						referencedFiles.has(file),
						`Orphan HTML file not listed in category.json: ${domain.name}/${catDir.name}/${file}`
					)
				}

				const loaded = getCategoryBySlug(meta.slug)
				assert.ok(loaded, `Failed to load category by slug: ${meta.slug}`)
				assert.equal(loaded.specs.length, meta.specs.length)

				for (const spec of loaded.specs) {
					totalSpecs++
					assert.ok(spec.html.trim().length > 20, `Empty or tiny HTML snippet in ${meta.slug}: ${spec.title}`)
					assert.ok(
						!/javascript\s*:/i.test(spec.html),
						`Disallowed javascript: URI found in ${meta.slug} -> ${spec.title}`
					)
					assert.ok(
						!/document\.write\s*\(|\beval\s*\(/i.test(spec.html),
						`Disallowed unsafe JS call in ${meta.slug} -> ${spec.title}`
					)
				}
			}
		}

		assert.ok(totalSpecs >= 590, `Expected >= 590 total HTML specs, got ${totalSpecs}`)
	})
})
