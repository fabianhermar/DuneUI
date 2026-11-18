import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import type { IconCategory, SvgIconItem } from '../../src/data/icons/types.ts'

const VALID_CATEGORIES = new Set<IconCategory>([
	'Interface',
	'Navigation',
	'Design',
	'Development',
	'AI & Data',
	'Files',
	'Productivity',
	'Commerce',
	'Communication',
	'Media',
	'Security',
	'Users',
	'Devices',
	'Time & Weather',
	'Lifestyle',
	'Shapes'
])

const ICONS_DIR = path.resolve(process.cwd(), 'src/data/icons')
const VALID_PATH_RE = /^[Mm][-0-9.,\sAaCcHhLlMmQqSsTtVvZz]+$/

async function loadAllIcons(): Promise<SvgIconItem[]> {
	const files = fs
		.readdirSync(ICONS_DIR)
		.filter((f) => f.endsWith('.ts') && f !== 'types.ts')
		.sort()

	const icons: SvgIconItem[] = []
	for (const file of files) {
		const mod = await import(pathToFileURL(path.join(ICONS_DIR, file)).href)
		for (const value of Object.values(mod)) {
			if (Array.isArray(value)) {
				icons.push(...(value as SvgIconItem[]))
			}
		}
	}
	return icons
}

describe('SVG icons catalog integrity', () => {
	it('contains 600+ unique, valid, and safe SVG icon definitions', async () => {
		const icons = await loadAllIcons()
		assert.ok(icons.length >= 600, `Expected >= 600 icons, got ${icons.length}`)

		const seenNames = new Set<string>()
		for (const icon of icons) {
			assert.ok(icon.name.trim().length > 0, 'Icon name must not be empty')
			assert.ok(/^[a-z0-9-]+$/.test(icon.name), `Icon name must be kebab-case: ${icon.name}`)
			assert.ok(!seenNames.has(icon.name), `Duplicate icon name detected: ${icon.name}`)
			seenNames.add(icon.name)

			assert.ok(
				VALID_CATEGORIES.has(icon.category),
				`Invalid category "${icon.category}" on icon "${icon.name}"`
			)
			assert.ok(icon.tags.trim().length > 0, `Missing tags on icon "${icon.name}"`)
			assert.ok(
				Array.isArray(icon.outlinePaths) && icon.outlinePaths.length > 0,
				`Icon "${icon.name}" must define at least one outlinePath`
			)

			const allPaths = [
				...icon.outlinePaths,
				...(icon.accentPaths || []),
				...(icon.duotonePaths || [])
			]

			for (const d of allPaths) {
				assert.ok(
					VALID_PATH_RE.test(d.trim()),
					`Suspicious or malformed SVG path d="${d}" in icon "${icon.name}"`
				)
				assert.ok(
					!/[<>"']/.test(d),
					`Disallowed HTML/XML characters in path of icon "${icon.name}"`
				)
			}
		}
	})
})
