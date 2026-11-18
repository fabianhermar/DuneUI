export type PreviewCanvas = 'light' | 'muted' | 'dark' | 'mesh'

export interface ComponentSpecMeta {
	file: string
	title: string
	styleTag: string
	canvas?: PreviewCanvas
}

export interface ComponentSpec {
	title: string
	styleTag: string
	canvas?: PreviewCanvas
	html: string
}

export interface CategoryMeta {
	slug: string
	title: string
	index: string
	tag: string
	description: string
	specCount: number
}

export interface CategoryCatalog {
	slug: string
	title: string
	index: string
	tag: string
	description: string
	specs: ComponentSpec[]
}
