import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()

function collectSourceFiles(dir: string, acc: string[] = []): string[] {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name)
		if (entry.isDirectory()) {
			if (entry.name === 'snippets') continue
			collectSourceFiles(full, acc)
		} else if (/\.(astro|ts|tsx|js|jsx)$/.test(entry.name)) {
			acc.push(full)
		}
	}
	return acc
}

describe('Static security baseline', () => {
	it('configures production HTTP security headers in vercel.json', () => {
		const vercelPath = path.join(ROOT, 'vercel.json')
		assert.ok(fs.existsSync(vercelPath), 'vercel.json must exist for production security headers')

		const config = JSON.parse(fs.readFileSync(vercelPath, 'utf8'))
		const allHeaders = (config.headers || []).flatMap(
			(rule: { headers: Array<{ key: string; value: string }> }) => rule.headers
		)
		const headerMap = new Map(
			allHeaders.map((h: { key: string; value: string }) => [h.key.toLowerCase(), h.value])
		)

		assert.equal(headerMap.get('x-content-type-options'), 'nosniff')
		assert.ok(headerMap.get('x-frame-options'), 'X-Frame-Options header is required')
		assert.ok(headerMap.get('referrer-policy'), 'Referrer-Policy header is required')
		assert.ok(headerMap.get('permissions-policy'), 'Permissions-Policy header is required')
		assert.ok(
			String(headerMap.get('strict-transport-security') || '').includes('max-age='),
			'Strict-Transport-Security header is required'
		)
	})

	it('sandboxes ComponentPreview iframes without popups or top-level navigation', () => {
		const previewSrc = fs.readFileSync(
			path.join(ROOT, 'src/modules/core/components/ComponentPreview.tsx'),
			'utf8'
		)
		const match = previewSrc.match(/sandbox="([^"]+)"/)
		assert.ok(match, 'ComponentPreview iframe must declare a sandbox attribute')
		const tokens = new Set(match[1].split(/\s+/))
		assert.ok(!tokens.has('allow-top-navigation'), 'iframe must not allow top-level navigation')
		assert.ok(!tokens.has('allow-popups'), 'iframe must not allow popups')
		assert.ok(!tokens.has('allow-modals'), 'iframe must not allow blocking modals')
	})

	it('enforces rel="noopener noreferrer" on all target="_blank" links and forbids insecure http:// URLs', () => {
		const files = collectSourceFiles(path.join(ROOT, 'src'))
		const violations: string[] = []

		for (const file of files) {
			const relPath = path.relative(ROOT, file)
			const lines = fs.readFileSync(file, 'utf8').split(/\r?\n/)

			lines.forEach((line, idx) => {
				if (/http:\/\//i.test(line) && !/www\.w3\.org|localhost/i.test(line)) {
					violations.push(`Insecure http:// URL in ${relPath}:${idx + 1}`)
				}

				if (/target\s*=\s*['"]_blank['"]/i.test(line)) {
					const context = lines
						.slice(Math.max(0, idx - 2), Math.min(lines.length, idx + 3))
						.join(' ')
					if (!/noopener/.test(context) || !/noreferrer/.test(context)) {
						violations.push(`target="_blank" missing noopener noreferrer in ${relPath}:${idx + 1}`)
					}
				}
			})
		}

		assert.deepEqual(violations, [])
	})
})
