import type { SvgIconItem } from './types'

export const FILES_ICONS: SvgIconItem[] = [
	{
		name: 'file',
		category: 'Files',
		tags: 'document page blank sheet',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z'],
		accentPaths: ['M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-text',
		category: 'Files',
		tags: 'document blog article notes readme',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M8.5 12h7', 'M8.5 15.5h7', 'M8.5 8.5h3'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-code',
		category: 'Files',
		tags: 'script source tsx astro html',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M10 12.5 8 14.5l2 2', 'M14 12.5l2 2-2 2'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-json',
		category: 'Files',
		tags: 'config schema data object',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M10 11.5c-1 0-1 1-1 1.8s-.5 1.2-1 1.2c.5 0 1 .4 1 1.2s0 1.8 1 1.8', 'M14 11.5c1 0 1 1 1 1.8s.5 1.2 1 1.2c-.5 0-1 .4-1 1.2s0 1.8-1 1.8'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-spreadsheet',
		category: 'Files',
		tags: 'csv excel table grid data',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M8 11.5h8v6H8z', 'M8 14.5h8', 'M12 11.5v6'],
		duotonePaths: ['M8 11.5h8v6H8z']
	},
	{
		name: 'file-image',
		category: 'Files',
		tags: 'photo svg png asset media',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M5.5 18.5 10 13.5l3 3 2.2-2.2 3.3 3.7', 'M9.5 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-plus',
		category: 'Files',
		tags: 'new document create add',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M12 11.5v5', 'M9.5 14h5'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-check',
		category: 'Files',
		tags: 'approved signed ready document',
		outlinePaths: [
			'M12 21.5H7.5A2.5 2.5 0 0 1 5 19V5a2.5 2.5 0 0 1 2.5-2.5H14L19 7.5v5.5',
			'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'
		],
		accentPaths: ['M14 18.5 16.3 20.8 21 15.5']
	},
	{
		name: 'file-search',
		category: 'Files',
		tags: 'inspect audit find document',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M11.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M15 17l-1.7-1.7'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'folder',
		category: 'Files',
		tags: 'directory archive project workspace',
		outlinePaths: ['M2.5 6.5A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19a2.5 2.5 0 0 1 2.5 2.5v8.1A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5V6.5Z'],
		accentPaths: ['M2.5 9.5h19'],
		duotonePaths: ['M2.5 9.5h19v8A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5v-8Z']
	},
	{
		name: 'folder-open',
		category: 'Files',
		tags: 'directory browse active workspace',
		outlinePaths: ['M3 18.5V6.5A2.5 2.5 0 0 1 5.5 4h3.6a2 2 0 0 1 1.6.8l.9 1.2a2 2 0 0 0 1.6.8H18a2 2 0 0 1 2 2v1.7', 'M3 18.5l2.2-6.5A2 2 0 0 1 7.1 10.5h12.6a1.5 1.5 0 0 1 1.4 2l-2 6a2 2 0 0 1-1.9 1.5H4.5A1.5 1.5 0 0 1 3 18.5Z'],
		duotonePaths: ['M3 18.5l2.2-6.5A2 2 0 0 1 7.1 10.5h12.6a1.5 1.5 0 0 1 1.4 2l-2 6a2 2 0 0 1-1.9 1.5H4.5A1.5 1.5 0 0 1 3 18.5Z']
	},
	{
		name: 'folder-plus',
		category: 'Files',
		tags: 'new folder create directory',
		outlinePaths: ['M12 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4V11.5'],
		accentPaths: ['M17.5 14v6', 'M14.5 17h6']
	},
	{
		name: 'folder-lock',
		category: 'Files',
		tags: 'private directory encrypted vault',
		outlinePaths: ['M11 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4'],
		accentPaths: [
			'M13.5 16.4a1.2 1.2 0 0 1 1.2-1.2h4.6a1.2 1.2 0 0 1 1.2 1.2v2.8a1.2 1.2 0 0 1-1.2 1.2h-4.6a1.2 1.2 0 0 1-1.2-1.2v-2.8Z',
			'M15 15.2v-1.7a2 2 0 0 1 4 0v1.7'
		],
		duotonePaths: ['M13.5 16.4a1.2 1.2 0 0 1 1.2-1.2h4.6a1.2 1.2 0 0 1 1.2 1.2v2.8a1.2 1.2 0 0 1-1.2 1.2h-4.6a1.2 1.2 0 0 1-1.2-1.2v-2.8Z']
	},
	{
		name: 'folder-zip',
		category: 'Files',
		tags: 'compressed bundle archive export',
		outlinePaths: ['M2.5 6.5A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19a2.5 2.5 0 0 1 2.5 2.5v8.1A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5V6.5Z'],
		accentPaths: [
			'M9.6 9h2',
			'M12.4 11.1h2',
			'M9.6 13.2h2',
			'M10.5 15.4h3v1.3a.9.9 0 0 1-.9.9h-1.2a.9.9 0 0 1-.9-.9v-1.3Z'
		],
		duotonePaths: ['M2.5 6.5A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19a2.5 2.5 0 0 1 2.5 2.5v8.1A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5V6.5Z']
	},
	{
		name: 'archive',
		category: 'Files',
		tags: 'box storage backup drawer',
		outlinePaths: ['M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5V8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5.5Z', 'M4.5 9h15v8.5A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5V9Z'],
		accentPaths: ['M10 13.5h4'],
		duotonePaths: ['M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5V8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5.5Z']
	},
	{
		name: 'book-open',
		category: 'Files',
		tags: 'docs documentation guide manual',
		outlinePaths: ['M2.5 5.5A2 2 0 0 1 4.5 3.5H9a3 3 0 0 1 3 3v14a2.5 2.5 0 0 0-2.5-2.5h-5a2 2 0 0 1-2-2v-10.5Z', 'M21.5 5.5a2 2 0 0 0-2-2H15a3 3 0 0 0-3 3v14a2.5 2.5 0 0 1 2.5-2.5h5a2 2 0 0 0 2-2v-10.5Z'],
		accentPaths: ['M5.5 8h3.5', 'M5.5 11.5h3.5', 'M15 8h3.5', 'M15 11.5h3.5'],
		duotonePaths: ['M2.5 5.5A2 2 0 0 1 4.5 3.5H9a3 3 0 0 1 3 3v14a2.5 2.5 0 0 0-2.5-2.5h-5a2 2 0 0 1-2-2v-10.5Z']
	},
	{
		name: 'bookmark',
		category: 'Files',
		tags: 'save read later pin',
		outlinePaths: ['M5.5 5A2.5 2.5 0 0 1 8 2.5h8A2.5 2.5 0 0 1 18.5 5v15.6a.8.8 0 0 1-1.3.63L12 17.2l-5.2 4.03a.8.8 0 0 1-1.3-.63V5Z'],
		accentPaths: ['M9 7.5h6'],
		duotonePaths: ['M5.5 5A2.5 2.5 0 0 1 8 2.5h8A2.5 2.5 0 0 1 18.5 5v15.6a.8.8 0 0 1-1.3.63L12 17.2l-5.2 4.03a.8.8 0 0 1-1.3-.63V5Z']
	},
	{
		name: 'notebook',
		category: 'Files',
		tags: 'journal diary memo notes',
		outlinePaths: ['M5.5 4.5A2.5 2.5 0 0 1 8 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2.5 2.5 0 0 1-2.5-2.5v-15Z'],
		accentPaths: ['M9.5 2v20', 'M3.5 7h3', 'M3.5 12h3', 'M3.5 17h3', 'M13 8h4', 'M13 12h4'],
		duotonePaths: ['M9.5 2H18a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9.5V2Z']
	},
	{
		name: 'newspaper',
		category: 'Files',
		tags: 'blog press release changelog news',
		outlinePaths: ['M3 5.5A2 2 0 0 1 5 3.5h11a2 2 0 0 1 2 2V18a2.5 2.5 0 0 1-2.5 2.5H5.5A2.5 2.5 0 0 1 3 18V5.5Z', 'M18 8h1.5A1.5 1.5 0 0 1 21 9.5V18a2.5 2.5 0 0 1-2.5 2.5H16'],
		accentPaths: ['M6.5 7.5h8v4h-8z', 'M6.5 14.5h8', 'M6.5 17.5h5'],
		duotonePaths: ['M6.5 7.5h8v4h-8z']
	},
	{
		name: 'paperclip',
		category: 'Files',
		tags: 'attach attachment upload file',
		outlinePaths: ['M20.5 11.2 11.7 20a5.2 5.2 0 0 1-7.4-7.4l9.2-9.2a3.4 3.4 0 0 1 4.8 4.8l-9.2 9.2a1.7 1.7 0 0 1-2.4-2.4l8.2-8.2']
	},
	{
		name: 'download',
		category: 'Files',
		tags: 'export save install offline',
		outlinePaths: ['M3.5 15.5v2A2.5 2.5 0 0 0 6 20h12a2.5 2.5 0 0 0 2.5-2.5v-2'],
		accentPaths: ['M12 3.5v11.5', 'M7.5 10.5 12 15l4.5-4.5'],
		duotonePaths: ['M3.5 15.5h17V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-2.5Z']
	},
	{
		name: 'upload',
		category: 'Files',
		tags: 'import publish deploy push',
		outlinePaths: ['M3.5 15.5v2A2.5 2.5 0 0 0 6 20h12a2.5 2.5 0 0 0 2.5-2.5v-2'],
		accentPaths: ['M12 15V3.5', 'M7.5 8 12 3.5 16.5 8'],
		duotonePaths: ['M3.5 15.5h17V18a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-2.5Z']
	},
	{
		name: 'share-box',
		category: 'Files',
		tags: 'export external open forward',
		outlinePaths: ['M14.5 3.5h6v6', 'M11 13 20.5 3.5'],
		accentPaths: ['M19.5 13v4.5A2.5 2.5 0 0 1 17 20H6.5A2.5 2.5 0 0 1 4 17.5V7a2.5 2.5 0 0 1 2.5-2.5H11'],
		duotonePaths: ['M4 7a2.5 2.5 0 0 1 2.5-2.5H14v9.5a2.5 2.5 0 0 1-2.5 2.5H4V7Z']
	},
	{
		name: 'file-pdf',
		category: 'Files',
		tags: 'adobe print export report',
		outlinePaths: [
			'M5 10.1V5A2.5 2.5 0 0 1 7.5 2.5H14L19 7.5v2.6',
			'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19',
			'M5 19.9a1.6 1.6 0 0 0 1.6 1.6h10.8a1.6 1.6 0 0 0 1.6-1.6'
		],
		accentPaths: [
			'M5.1 17.5v-5h1.5a1.3 1.3 0 0 1 0 2.6H5.1',
			'M10.3 12.5v5h1.1a2.1 2.5 0 0 0 0-5h-1.1Z',
			'M16 17.5v-5h2.8',
			'M16 15h2.1'
		],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14.9a1.6 1.6 0 0 0 1.6 1.6h10.8a1.6 1.6 0 0 0 1.6-1.6V7.5L14 2.5Z']
	}
]
