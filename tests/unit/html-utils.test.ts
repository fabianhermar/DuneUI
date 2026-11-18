import { describe, it } from 'node:test'
import assert from 'node:assert/strict'
import { stripPreviewScripts } from '../../src/lib/htmlUtils.ts'

describe('stripPreviewScripts', () => {
	it('removes inline preview <script> blocks cleanly', () => {
		const input = [
			'<div class="card">',
			'  <button data-demo>Click</button>',
			'</div>',
			'<script>',
			'  document.querySelector("[data-demo]")?.addEventListener("click", () => {});',
			'</script>'
		].join('\n')

		assert.equal(
			stripPreviewScripts(input),
			'<div class="card">\n  <button data-demo>Click</button>\n</div>'
		)
	})

	it('removes multiple <script> blocks with attributes and mixed casing', () => {
		const input = `<section>Hello</section>\n<SCRIPT type="module">console.log(1)</SCRIPT>\n<p>World</p>\n<script defer>console.log(2)</script>`
		assert.equal(stripPreviewScripts(input), '<section>Hello</section>\n<p>World</p>')
	})

	it('preserves clean HTML unchanged apart from trailing whitespace', () => {
		const input = '<button class="px-4 py-2">Save</button>\n'
		assert.equal(stripPreviewScripts(input), '<button class="px-4 py-2">Save</button>')
	})

	it('collapses excessive blank lines left by removed scripts', () => {
		const input = '<div>Top</div>\n\n\n<script>alert(1)</script>\n\n\n<div>Bottom</div>'
		assert.equal(stripPreviewScripts(input), '<div>Top</div>\n\n<div>Bottom</div>')
	})
})
