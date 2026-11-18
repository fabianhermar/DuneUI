/**
 * Strip internal preview-only `<script>` blocks so the Code tab and clipboard
 * copy clean, portable HTML without preview harness scripts.
 */
export function stripPreviewScripts(html: string): string {
	return html
		.replace(/[ \t]*<script\b[^>]*>[\s\S]*?<\/script>[ \t]*(?:\r?\n)?/gi, '')
		.replace(/\n{3,}/g, '\n\n')
		.trimEnd()
}
