import type { SvgIconItem } from './types'

export const DESIGN_ICONS: SvgIconItem[] = [
	{
		name: 'align-left',
		category: 'Design',
		tags: 'typography text paragraph justify',
		outlinePaths: ['M3.5 6h17', 'M3.5 14h17'],
		accentPaths: ['M3.5 10h11', 'M3.5 18h11']
	},
	{
		name: 'align-center',
		category: 'Design',
		tags: 'typography text paragraph center',
		outlinePaths: ['M3.5 6h17', 'M3.5 14h17'],
		accentPaths: ['M6.5 10h11', 'M6.5 18h11']
	},
	{
		name: 'align-right',
		category: 'Design',
		tags: 'typography text paragraph right',
		outlinePaths: ['M3.5 6h17', 'M3.5 14h17'],
		accentPaths: ['M9.5 10h11', 'M9.5 18h11']
	},
	{
		name: 'align-justify',
		category: 'Design',
		tags: 'typography text block editorial',
		outlinePaths: ['M3.5 6h17', 'M3.5 10h17', 'M3.5 14h17', 'M3.5 18h17'],
		accentPaths: ['M3.5 10h17', 'M3.5 18h17']
	},
	{
		name: 'bold',
		category: 'Design',
		tags: 'font weight format rich text',
		outlinePaths: ['M6.5 4.5h6.5a3.5 3.5 0 0 1 0 7H6.5v-7Z', 'M6.5 11.5h7.5a3.8 3.8 0 0 1 0 7.6H6.5v-7.6Z'],
		duotonePaths: ['M6.5 4.5h6.5a3.5 3.5 0 0 1 0 7H6.5v-7Z', 'M6.5 11.5h7.5a3.8 3.8 0 0 1 0 7.6H6.5v-7.6Z']
	},
	{
		name: 'italic',
		category: 'Design',
		tags: 'serif emphasis slant format',
		outlinePaths: ['M11 4.5h7', 'M6 19.5h7'],
		accentPaths: ['M14.5 4.5 9.5 19.5']
	},
	{
		name: 'underline',
		category: 'Design',
		tags: 'text decoration format link',
		outlinePaths: ['M6.5 4.5v6.5a5.5 5.5 0 0 0 11 0V4.5'],
		accentPaths: ['M5 20h14']
	},
	{
		name: 'strikethrough',
		category: 'Design',
		tags: 'format delete line text',
		outlinePaths: ['M16.5 7.5c0-1.9-2-3.5-4.5-3.5s-4.5 1.3-4.5 3.2c0 1.4.9 2.2 2.3 2.8', 'M7.5 16.5c0 1.9 2 3.5 4.5 3.5s4.5-1.3 4.5-3.2c0-1-.4-1.7-1.1-2.3'],
		accentPaths: ['M4 12h16']
	},
	{
		name: 'type-font',
		category: 'Design',
		tags: 'typography letter Aa serif heading',
		outlinePaths: ['M4.5 6.5V5A1.5 1.5 0 0 1 6 3.5h12A1.5 1.5 0 0 1 19.5 5v1.5', 'M12 3.5v17'],
		accentPaths: ['M8.5 20.5h7']
	},
	{
		name: 'heading-1',
		category: 'Design',
		tags: 'h1 title markdown format',
		outlinePaths: ['M4 6v12', 'M12 6v12', 'M4 12h8'],
		accentPaths: ['M16.5 10.5 19 8.5v9.5']
	},
	{
		name: 'heading-2',
		category: 'Design',
		tags: 'h2 subtitle markdown format',
		outlinePaths: ['M3.5 6v12', 'M11 6v12', 'M3.5 12H11'],
		accentPaths: ['M15 10.5a2.5 2.5 0 0 1 5 0c0 2-5 4-5 7.5h5']
	},
	{
		name: 'list-bullet',
		category: 'Design',
		tags: 'ul items unordered points',
		outlinePaths: ['M9 6.5h11', 'M9 12h11', 'M9 17.5h11'],
		accentPaths: ['M4.5 7.3a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z', 'M4.5 12.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z', 'M4.5 18.3a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z']
	},
	{
		name: 'list-ordered',
		category: 'Design',
		tags: 'ol numbered steps sequence',
		outlinePaths: ['M10 6.5h10', 'M10 12h10', 'M10 17.5h10'],
		accentPaths: ['M4 5.5l1.5-1v4.5', 'M4 11a1.5 1.5 0 0 1 2.8.8c0 1-2.8 2-2.8 3.2h3', 'M4 17.5h1.8a1.2 1.2 0 1 1 0 2.4H4']
	},
	{
		name: 'indent',
		category: 'Design',
		tags: 'tab spacing format paragraph',
		outlinePaths: ['M11 6h9.5', 'M11 12h9.5', 'M11 18h9.5'],
		accentPaths: ['M3.5 8.5 7 12l-3.5 3.5']
	},
	{
		name: 'ruler',
		category: 'Design',
		tags: 'measure size dimension spacing',
		outlinePaths: ['M3.5 15.5 15.5 3.5a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8l-12 12a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8Z'],
		accentPaths: ['M14 6.5l2 2', 'M11.5 9l2 2', 'M9 11.5l2 2', 'M6.5 14l2 2'],
		duotonePaths: ['M3.5 15.5 15.5 3.5a2 2 0 0 1 2.8 0l2.2 2.2a2 2 0 0 1 0 2.8l-12 12a2 2 0 0 1-2.8 0l-2.2-2.2a2 2 0 0 1 0-2.8Z']
	},
	{
		name: 'component-node',
		category: 'Design',
		tags: 'figma symbol instance variant',
		outlinePaths: ['M12 3 15.5 6.5 12 10 8.5 6.5 12 3Z', 'M12 14 15.5 17.5 12 21 8.5 17.5 12 14Z'],
		accentPaths: ['M17.5 8.5 21 12l-3.5 3.5L14 12l3.5-3.5Z', 'M6.5 8.5 10 12l-3.5 3.5L3 12l3.5-3.5Z'],
		duotonePaths: ['M12 3 15.5 6.5 12 10 8.5 6.5 12 3Z', 'M12 14 15.5 17.5 12 21 8.5 17.5 12 14Z']
	},
	{
		name: 'bezier-curve',
		category: 'Design',
		tags: 'vector path nodes figma illustrator',
		outlinePaths: ['M4.5 17.5A7.5 7.5 0 0 1 12 10a7.5 7.5 0 0 1 7.5 7.5'],
		accentPaths: ['M6 6h12', 'M12 11.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z', 'M4 4h3v3H4z', 'M17 4h3v3h-3z', 'M3.5 17.5h3v3h-3z', 'M17.5 17.5h3v3h-3z'],
		duotonePaths: ['M3.5 17.5h3v3h-3z', 'M17.5 17.5h3v3h-3z']
	},
	{
		name: 'cursor-click',
		category: 'Design',
		tags: 'pointer mouse select interact',
		outlinePaths: ['M5 3.5 10.5 19l2.6-5.6 5.6-2.6L5 3.5Z'],
		accentPaths: ['M14 14l5.5 5.5'],
		duotonePaths: ['M5 3.5 10.5 19l2.6-5.6 5.6-2.6L5 3.5Z']
	},
	{
		name: 'cursor-text',
		category: 'Design',
		tags: 'ibeam caret input edit',
		outlinePaths: ['M12 4.5v15', 'M8.5 4.5A2.5 2.5 0 0 1 12 7a2.5 2.5 0 0 1 3.5-2.5', 'M8.5 19.5A2.5 2.5 0 0 0 12 17a2.5 2.5 0 0 0 3.5 2.5'],
		accentPaths: ['M9.5 12h5']
	},
	{
		name: 'flip-horizontal',
		category: 'Design',
		tags: 'mirror reflect transform canvas',
		outlinePaths: ['M8 6.5v11L3.5 12 8 6.5Z', 'M16 6.5v11L20.5 12 16 6.5Z'],
		accentPaths: ['M12 3.5v2', 'M12 8.5v2', 'M12 13.5v2', 'M12 18.5v2'],
		duotonePaths: ['M8 6.5v11L3.5 12 8 6.5Z']
	},
	{
		name: 'flip-vertical',
		category: 'Design',
		tags: 'mirror invert transform vertical',
		outlinePaths: ['M6.5 8h11L12 3.5 6.5 8Z', 'M6.5 16h11L12 20.5 6.5 16Z'],
		accentPaths: ['M3.5 12h2', 'M8.5 12h2', 'M13.5 12h2', 'M18.5 12h2'],
		duotonePaths: ['M6.5 8h11L12 3.5 6.5 8Z']
	},
	{
		name: 'group-objects',
		category: 'Design',
		tags: 'combine frame union selection',
		outlinePaths: ['M3 6.5V4a1 1 0 0 1 1-1h2.5', 'M17.5 3H20a1 1 0 0 1 1 1v2.5', 'M21 17.5V20a1 1 0 0 1-1 1h-2.5', 'M6.5 21H4a1 1 0 0 1-1-1v-2.5'],
		accentPaths: ['M6.5 8a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 13.5 8v4a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 12V8Z', 'M10.5 13.5v2.5a1.5 1.5 0 0 0 1.5 1.5h4a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-1.5-1.5h-2.5'],
		duotonePaths: ['M6.5 8a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 13.5 8v4a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 12V8Z']
	},
	{
		name: 'corner-radius',
		category: 'Design',
		tags: 'rounded border css radius ui',
		outlinePaths: ['M4 20v-7a9 9 0 0 1 9-9h7'],
		accentPaths: ['M16.5 16.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M4 13h10.5', 'M13 4v7'],
		duotonePaths: ['M16.5 16.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z']
	},
	{
		name: 'swatch-book',
		category: 'Design',
		tags: 'colors pantone palette theme',
		outlinePaths: ['M4 5.5A2.5 2.5 0 0 1 6.5 3h3A2.5 2.5 0 0 1 12 5.5v13A2.5 2.5 0 0 1 9.5 21h-3A2.5 2.5 0 0 1 4 18.5v-13Z', 'M12 7.5l4.2-2.2a2 2 0 0 1 2.7.9l1.3 2.5a2 2 0 0 1-.9 2.7L12 15.2', 'M11 21h7.5A2.5 2.5 0 0 0 21 18.5v-2a2 2 0 0 0-2-2h-5'],
		accentPaths: ['M8 17.5a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z'],
		duotonePaths: ['M4 5.5A2.5 2.5 0 0 1 6.5 3h3A2.5 2.5 0 0 1 12 5.5v13A2.5 2.5 0 0 1 9.5 21h-3A2.5 2.5 0 0 1 4 18.5v-13Z']
	},
	{
		name: 'blend-modes',
		category: 'Design',
		tags: 'overlay mask union intersect boolean',
		outlinePaths: [
			'M12 14a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z',
			'M8.8 19.7a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z'
		],
		accentPaths: ['M15.2 19.7a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z'],
		duotonePaths: [
			'M12 14a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z',
			'M15.2 19.7a5.2 5.2 0 1 0 0-10.4 5.2 5.2 0 0 0 0 10.4Z'
		]
	},
	{
		name: 'eraser',
		category: 'Design',
		tags: 'clear remove canvas stroke',
		outlinePaths: [
			'M7.2 20.5 3.6 16.9a2.2 2.2 0 0 1 0-3.1l9.2-9.2a2.2 2.2 0 0 1 3.1 0l4.5 4.5a2.2 2.2 0 0 1 0 3.1l-7.6 7.6a2.2 2.2 0 0 1-1.56.65H7.2Z',
			'M11.2 20.5H21'
		],
		accentPaths: ['M6.8 10.6l7.6 7.6'],
		duotonePaths: ['M6.8 10.6 12.8 4.6a2.2 2.2 0 0 1 3.1 0l4.5 4.5a2.2 2.2 0 0 1 0 3.1l-6 6-7.6-7.6Z']
	},
	{
		name: 'lasso',
		category: 'Design',
		tags: 'selection freehand photoshop tool',
		outlinePaths: ['M6.2 14.8C3.8 13.3 3 10.5 4.2 7.8 5.8 4.3 10.8 2.8 15.3 4.5c4.2 1.6 6.2 5.4 4.6 8.8-1.4 3-5.6 4.4-9.8 3.5'],
		accentPaths: [
			'M8 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
			'M8.5 17.8c.8 2.2 3.2 3 5.8 2s4.2-.3 5.2 1.2'
		],
		duotonePaths: ['M6.2 14.8C3.8 13.3 3 10.5 4.2 7.8 5.8 4.3 10.8 2.8 15.3 4.5c4.2 1.6 6.2 5.4 4.6 8.8-1.5 3.1-6.1 4.5-10.5 3.2L6.2 14.8Z']
	},
	{
		name: 'grid-snap',
		category: 'Design',
		tags: 'magnet guides layout columns',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M9 3v18', 'M15 3v18', 'M3 9h18', 'M3 15h18'],
		duotonePaths: ['M9 9h6v6H9z']
	},
	{
		name: 'gradient',
		category: 'Design',
		tags: 'linear fill shade css color',
		outlinePaths: [
			'M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z',
			'M7 3.5v17',
			'M10.5 3.5v17'
		],
		accentPaths: [
			'M14 6.5v3',
			'M14 14.5v3',
			'M17.2 8.5h.01',
			'M17.2 12h.01',
			'M17.2 15.5h.01'
		],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h3.5v17H7A3.5 3.5 0 0 1 3.5 17V7Z']
	},
	{
		name: 'drop-shadow',
		category: 'Design',
		tags: 'elevation depth blur css card',
		outlinePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h7A2.5 2.5 0 0 1 15.5 6v7a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 13V6Z'],
		accentPaths: [
			'M18 8.5a2.5 2.5 0 0 1 2.5 2.5v1.8',
			'M20.5 16v2a2.5 2.5 0 0 1-2.5 2.5h-2',
			'M12.8 20.5H11A2.5 2.5 0 0 1 8.5 18'
		],
		duotonePaths: ['M15.5 8.5H18a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 8.5 18v-2.5H13a2.5 2.5 0 0 0 2.5-2.5V8.5Z']
	},
	{
		name: 'prototype-play',
		category: 'Design',
		tags: 'figma preview flow interactive',
		outlinePaths: [
			'M12.5 20H6a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 6 4h10.5A2.5 2.5 0 0 1 19 6.5v4',
			'M8 10.2a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z',
			'M9.7 8.5H12a2 2 0 0 1 2 2v1.5'
		],
		accentPaths: ['M14.5 13.5 20.5 17l-6 3.5v-7Z'],
		duotonePaths: ['M14.5 13.5 20.5 17l-6 3.5v-7Z']
	},
	{
		name: 'text-size',
		category: 'Design',
		tags: 'scale font size typography',
		outlinePaths: ['M3.5 7.5h10', 'M8.5 7.5v12'],
		accentPaths: ['M14 12.5h6.5', 'M17.25 12.5v7']
	},
	{
		name: 'layers-plus',
		category: 'Design',
		tags: 'new layer stack add design',
		outlinePaths: [
			'M11.5 2.5 19.5 6.5 11.5 10.5 3.5 6.5 11.5 2.5Z',
			'M3.5 11.2 11.5 15.2l5-2.5',
			'M3.5 15.8 11.5 19.8l1.5-.75'
		],
		accentPaths: ['M18 14.7v5.6', 'M15.2 17.5h5.6'],
		duotonePaths: ['M11.5 2.5 19.5 6.5 11.5 10.5 3.5 6.5 11.5 2.5Z']
	},
	{
		name: 'zoom-fit',
		category: 'Design',
		tags: 'center frame canvas reset view',
		outlinePaths: ['M7.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v2.5', 'M16.5 3.5H19A1.5 1.5 0 0 1 20.5 5v2.5', 'M20.5 16.5V19a1.5 1.5 0 0 1-1.5 1.5h-2.5', 'M3.5 16.5V19A1.5 1.5 0 0 0 5 20.5h2.5'],
		accentPaths: ['M7.5 9A1.5 1.5 0 0 1 9 7.5h6A1.5 1.5 0 0 1 16.5 9v6a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 15V9Z'],
		duotonePaths: ['M7.5 9A1.5 1.5 0 0 1 9 7.5h6A1.5 1.5 0 0 1 16.5 9v6a1.5 1.5 0 0 1-1.5 1.5H9A1.5 1.5 0 0 1 7.5 15V9Z']
	},
	{
		name: 'vector-square',
		category: 'Design',
		tags: 'anchor points edit shape',
		outlinePaths: ['M6 6h12v12H6z'],
		accentPaths: ['M3.5 3.5h3v3h-3z', 'M17.5 3.5h3v3h-3z', 'M3.5 17.5h3v3h-3z', 'M17.5 17.5h3v3h-3z'],
		duotonePaths: ['M6 6h12v12H6z']
	},
	{
		name: 'opacity-grid',
		category: 'Design',
		tags: 'alpha transparency checkerboard',
		outlinePaths: [
			'M3.5 6.5A3 3 0 0 1 6.5 3.5h11a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-11Z',
			'M12 3.5v17'
		],
		accentPaths: [
			'M12 3.5h4.2V9H12V3.5Z',
			'M16.2 9h4.3v6h-4.3V9Z',
			'M12 15h4.2v5.5H12V15Z'
		],
		duotonePaths: [
			'M3.5 6.5A3 3 0 0 1 6.5 3.5H12v17H6.5a3 3 0 0 1-3-3v-11Z',
			'M12 3.5h4.2V9H12V3.5Z',
			'M16.2 9h4.3v6h-4.3V9Z',
			'M12 15h4.2v5.5H12V15Z'
		]
	}
]
