import type { SvgIconItem } from './types'

export const INTERFACE_ICONS: SvgIconItem[] = [
	{
		name: 'plus',
		category: 'Interface',
		tags: 'add new create insert',
		outlinePaths: ['M12 5v14', 'M5 12h14'],
		accentPaths: ['M12 9v6', 'M9 12h6']
	},
	{
		name: 'plus-circle',
		category: 'Interface',
		tags: 'add new create circle round',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 8.5v7', 'M8.5 12h7'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'plus-square',
		category: 'Interface',
		tags: 'add new create box',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M12 8.5v7', 'M8.5 12h7'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'minus',
		category: 'Interface',
		tags: 'subtract remove collapse line',
		outlinePaths: ['M5 12h14']
	},
	{
		name: 'minus-circle',
		category: 'Interface',
		tags: 'subtract remove circle',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M8.5 12h7'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'x-close',
		category: 'Interface',
		tags: 'close cancel remove dismiss cross',
		outlinePaths: ['M18 6 6 18', 'M6 6l12 12']
	},
	{
		name: 'x-circle',
		category: 'Interface',
		tags: 'close cancel error circle dismiss',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M14.8 9.2 9.2 14.8', 'M9.2 9.2l5.6 5.6'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'check',
		category: 'Interface',
		tags: 'done confirm success tick',
		outlinePaths: ['M4.5 12.5 9.5 17.5 19.5 6.5']
	},
	{
		name: 'check-circle',
		category: 'Interface',
		tags: 'verified done ok approved',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M8.5 12.3 10.8 14.6 15.8 9.4'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'check-double',
		category: 'Interface',
		tags: 'read seen verified all done',
		outlinePaths: ['M1.5 12.5 6.5 17.5 17 7'],
		accentPaths: ['M10.2 16 11.7 17.5 22.2 7']
	},
	{
		name: 'search',
		category: 'Interface',
		tags: 'find filter magnifying glass lookup',
		outlinePaths: ['M10.8 18.1a7.3 7.3 0 1 0 0-14.6 7.3 7.3 0 0 0 0 14.6Z'],
		accentPaths: ['M20.5 20.5 16 16'],
		duotonePaths: ['M10.8 18.1a7.3 7.3 0 1 0 0-14.6 7.3 7.3 0 0 0 0 14.6Z']
	},
	{
		name: 'zoom-in',
		category: 'Interface',
		tags: 'magnify enlarge scale',
		outlinePaths: ['M10.8 18.1a7.3 7.3 0 1 0 0-14.6 7.3 7.3 0 0 0 0 14.6Z', 'M20.5 20.5 16 16'],
		accentPaths: ['M10.8 8v5.6', 'M8 10.8h5.6'],
		duotonePaths: ['M10.8 18.1a7.3 7.3 0 1 0 0-14.6 7.3 7.3 0 0 0 0 14.6Z']
	},
	{
		name: 'zoom-out',
		category: 'Interface',
		tags: 'shrink minify scale',
		outlinePaths: ['M10.8 18.1a7.3 7.3 0 1 0 0-14.6 7.3 7.3 0 0 0 0 14.6Z', 'M20.5 20.5 16 16'],
		accentPaths: ['M8 10.8h5.6'],
		duotonePaths: ['M10.8 18.1a7.3 7.3 0 1 0 0-14.6 7.3 7.3 0 0 0 0 14.6Z']
	},
	{
		name: 'sliders',
		category: 'Interface',
		tags: 'filter settings preferences equalizer controls',
		outlinePaths: ['M3 6.5h4', 'M12 6.5h9', 'M3 12h11', 'M19 12h2', 'M3 17.5h6', 'M14 17.5h7'],
		accentPaths: [
			'M9.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M16.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M11.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
		],
		duotonePaths: [
			'M9.5 8.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M16.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M11.5 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
		]
	},
	{
		name: 'sliders-vertical',
		category: 'Interface',
		tags: 'mixer fader audio levels settings',
		outlinePaths: ['M6 20.5v-5', 'M6 10.5v-7', 'M12 20.5v-9', 'M12 6.5v-3', 'M18 20.5v-6', 'M18 9.5v-6'],
		accentPaths: [
			'M6 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
		],
		duotonePaths: [
			'M6 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'
		]
	},
	{
		name: 'settings',
		category: 'Interface',
		tags: 'cog gear config preferences',
		outlinePaths: [
			'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z'
		],
		accentPaths: ['M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z'],
		duotonePaths: [
			'M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.26.6.85 1 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z'
		]
	},
	{
		name: 'sparkles',
		category: 'Interface',
		tags: 'ai magic shine generate polish',
		outlinePaths: ['M10.5 3.5 12.2 8.3a2.5 2.5 0 0 0 1.5 1.5l4.8 1.7-4.8 1.7a2.5 2.5 0 0 0-1.5 1.5l-1.7 4.8-1.7-4.8a2.5 2.5 0 0 0-1.5-1.5L2.5 11.5l4.8-1.7a2.5 2.5 0 0 0 1.5-1.5l1.7-4.8Z'],
		accentPaths: ['M19 3v3.5', 'M17.25 4.75h3.5', 'M19 16.5v3', 'M17.5 18h3'],
		duotonePaths: ['M10.5 3.5 12.2 8.3a2.5 2.5 0 0 0 1.5 1.5l4.8 1.7-4.8 1.7a2.5 2.5 0 0 0-1.5 1.5l-1.7 4.8-1.7-4.8a2.5 2.5 0 0 0-1.5-1.5L2.5 11.5l4.8-1.7a2.5 2.5 0 0 0 1.5-1.5l1.7-4.8Z']
	},
	{
		name: 'wand',
		category: 'Interface',
		tags: 'magic transform auto design',
		outlinePaths: ['M15.5 4.5 19.5 8.5 7.5 20.5a1.8 1.8 0 0 1-2.55 0l-1.45-1.45a1.8 1.8 0 0 1 0-2.55L15.5 4.5Z', 'M12.5 7.5l4 4'],
		accentPaths: ['M5 4.5v3', 'M3.5 6h3', 'M19 15.5v3', 'M17.5 17h3'],
		duotonePaths: ['M15.5 4.5 19.5 8.5 7.5 20.5a1.8 1.8 0 0 1-2.55 0l-1.45-1.45a1.8 1.8 0 0 1 0-2.55L15.5 4.5Z']
	},
	{
		name: 'layers',
		category: 'Interface',
		tags: 'stack design figma depth',
		outlinePaths: ['M12 2.5 21 7l-9 4.5L3 7l9-4.5Z'],
		accentPaths: ['M3 12l9 4.5 9-4.5', 'M3 17l9 4.5 9-4.5'],
		duotonePaths: ['M12 2.5 21 7l-9 4.5L3 7l9-4.5Z']
	},
	{
		name: 'layout-grid',
		category: 'Interface',
		tags: 'bento dashboard tiles apps',
		outlinePaths: [
			'M3 5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z',
			'M13.5 5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V5Z',
			'M3 15.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5Z'
		],
		accentPaths: ['M13.5 15.5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5Z'],
		duotonePaths: ['M13.5 15.5a2 2 0 0 1 2-2H19a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5Z', 'M3 5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z']
	},
	{
		name: 'layout-list',
		category: 'Interface',
		tags: 'rows items stack feed',
		outlinePaths: [
			'M3 5.5A1.5 1.5 0 0 1 4.5 4h3A1.5 1.5 0 0 1 9 5.5v3A1.5 1.5 0 0 1 7.5 10h-3A1.5 1.5 0 0 1 3 8.5v-3Z',
			'M3 15.5A1.5 1.5 0 0 1 4.5 14h3A1.5 1.5 0 0 1 9 15.5v3A1.5 1.5 0 0 1 7.5 20h-3A1.5 1.5 0 0 1 3 18.5v-3Z'
		],
		accentPaths: ['M13 5.5h8', 'M13 8.5h5', 'M13 15.5h8', 'M13 18.5h5'],
		duotonePaths: [
			'M3 5.5A1.5 1.5 0 0 1 4.5 4h3A1.5 1.5 0 0 1 9 5.5v3A1.5 1.5 0 0 1 7.5 10h-3A1.5 1.5 0 0 1 3 8.5v-3Z',
			'M3 15.5A1.5 1.5 0 0 1 4.5 14h3A1.5 1.5 0 0 1 9 15.5v3A1.5 1.5 0 0 1 7.5 20h-3A1.5 1.5 0 0 1 3 18.5v-3Z'
		]
	},
	{
		name: 'layout-masonry',
		category: 'Interface',
		tags: 'bento cards dashboard collage',
		outlinePaths: [
			'M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z',
			'M13 13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-6Z'
		],
		accentPaths: [
			'M13 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V5Z',
			'M3 17a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z'
		],
		duotonePaths: [
			'M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z',
			'M13 13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-6Z'
		]
	},
	{
		name: 'copy',
		category: 'Interface',
		tags: 'clipboard duplicate clone',
		outlinePaths: ['M8.5 10.5A2.5 2.5 0 0 1 11 8h7.5A2.5 2.5 0 0 1 21 10.5v8a2.5 2.5 0 0 1-2.5 2.5H11a2.5 2.5 0 0 1-2.5-2.5v-8Z'],
		accentPaths: ['M5.5 15.5A2.5 2.5 0 0 1 3 13V5.5A2.5 2.5 0 0 1 5.5 3H13a2.5 2.5 0 0 1 2.5 2.5'],
		duotonePaths: ['M8.5 10.5A2.5 2.5 0 0 1 11 8h7.5A2.5 2.5 0 0 1 21 10.5v8a2.5 2.5 0 0 1-2.5 2.5H11a2.5 2.5 0 0 1-2.5-2.5v-8Z']
	},
	{
		name: 'clipboard-check',
		category: 'Interface',
		tags: 'paste copied task verified',
		outlinePaths: [
			'M8.5 4.5H7A2.5 2.5 0 0 0 4.5 7v11.5A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 17 4.5h-1.5',
			'M8.5 4.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 14 7h-4a1.5 1.5 0 0 1-1.5-1.5v-1Z'
		],
		accentPaths: ['M9 13.8 11 15.8 15.5 11.2'],
		duotonePaths: ['M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v11.5A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5V7Z']
	},
	{
		name: 'trash',
		category: 'Interface',
		tags: 'delete bin remove discard',
		outlinePaths: [
			'M3.5 6.5h17',
			'M18.5 6.5l-.8 12A2.5 2.5 0 0 1 15.2 21H8.8a2.5 2.5 0 0 1-2.5-2.5l-.8-12',
			'M8.5 6.5V4.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v2'
		],
		accentPaths: ['M10 11v5.5', 'M14 11v5.5'],
		duotonePaths: ['M5.5 6.5h13l-.8 12A2.5 2.5 0 0 1 15.2 21H8.8a2.5 2.5 0 0 1-2.5-2.5l-.8-12Z']
	},
	{
		name: 'edit-pen',
		category: 'Interface',
		tags: 'write compose pencil modify',
		outlinePaths: ['M16.2 3.8a2.2 2.2 0 0 1 3.1 0l.9.9a2.2 2.2 0 0 1 0 3.1L8.8 19.2 3.5 20.5l1.3-5.3L16.2 3.8Z'],
		accentPaths: ['M13.8 6.2l4 4', 'M12.5 20.5h8'],
		duotonePaths: ['M16.2 3.8a2.2 2.2 0 0 1 3.1 0l.9.9a2.2 2.2 0 0 1 0 3.1L8.8 19.2 3.5 20.5l1.3-5.3L16.2 3.8Z']
	},
	{
		name: 'eye',
		category: 'Interface',
		tags: 'preview view watch visible',
		outlinePaths: ['M2 12C6 2.7 18 2.7 22 12c-4 9.3-16 9.3-20 0Z'],
		accentPaths: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
		duotonePaths: ['M2 12C6 2.7 18 2.7 22 12c-4 9.3-16 9.3-20 0Z']
	},
	{
		name: 'eye-off',
		category: 'Interface',
		tags: 'hide hidden private mask',
		outlinePaths: [
			'M2 12C6 2.7 18 2.7 22 12c-4 9.3-16 9.3-20 0Z',
			'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'
		],
		accentPaths: ['M3 3l18 18'],
		duotonePaths: ['M2 12C6 2.7 18 2.7 22 12c-4 9.3-16 9.3-20 0Z']
	},
	{
		name: 'filter',
		category: 'Interface',
		tags: 'funnel sort refine query',
		outlinePaths: ['M3.5 5.5A1.5 1.5 0 0 1 5 4h14a1.5 1.5 0 0 1 1.15 2.46L14.5 13.2v5.3a1.5 1.5 0 0 1-.8 1.33l-2.7 1.44a1 1 0 0 1-1.5-.88v-7.19L3.85 6.46A1.5 1.5 0 0 1 3.5 5.5Z'],
		duotonePaths: ['M3.5 5.5A1.5 1.5 0 0 1 5 4h14a1.5 1.5 0 0 1 1.15 2.46L14.5 13.2v5.3a1.5 1.5 0 0 1-.8 1.33l-2.7 1.44a1 1 0 0 1-1.5-.88v-7.19L3.85 6.46A1.5 1.5 0 0 1 3.5 5.5Z']
	},
	{
		name: 'more-horizontal',
		category: 'Interface',
		tags: 'dots menu ellipsis options',
		outlinePaths: [
			'M5 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M19 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		],
		duotonePaths: [
			'M5 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M19 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		]
	},
	{
		name: 'maximize',
		category: 'Interface',
		tags: 'expand fullscreen resize enlarge',
		outlinePaths: ['M8 3.5H5.5a2 2 0 0 0-2 2V8', 'M20.5 8V5.5a2 2 0 0 0-2-2H16', 'M16 20.5h2.5a2 2 0 0 0 2-2V16', 'M3.5 16v2.5a2 2 0 0 0 2 2H8'],
		accentPaths: ['M14.5 9.5 19 5', 'M9.5 14.5 5 19']
	},
	{
		name: 'toggle-right',
		category: 'Interface',
		tags: 'switch on active boolean control',
		outlinePaths: ['M8.5 5.5h7a6.5 6.5 0 0 1 0 13h-7a6.5 6.5 0 0 1 0-13Z'],
		accentPaths: ['M15.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		duotonePaths: [
			'M8.5 5.5h7a6.5 6.5 0 0 1 0 13h-7a6.5 6.5 0 0 1 0-13Z',
			'M15.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'
		]
	},
	{
		name: 'info-circle',
		category: 'Interface',
		tags: 'details help about tooltip',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 16v-4.5', 'M12 8.2h.01'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	}
]
