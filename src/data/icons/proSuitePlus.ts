import type { SvgIconItem } from './types'

export const PRO_SUITE_PLUS_ICONS: SvgIconItem[] = [
	// Interface
	{
		name: 'chevron-first',
		category: 'Interface',
		tags: 'start beginning pagination first',
		outlinePaths: ['M17.5 17.5 12 12l5.5-5.5'],
		accentPaths: ['M6.5 6.5v11']
	},
	{
		name: 'chevron-last',
		category: 'Interface',
		tags: 'end pagination last',
		outlinePaths: ['M6.5 6.5 12 12l-5.5 5.5'],
		accentPaths: ['M17.5 6.5v11']
	},
	{
		name: 'columns-3',
		category: 'Interface',
		tags: 'grid layout masonry 3col',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M9 3v18', 'M15 3v18'],
		duotonePaths: ['M9 3h6v18H9V3Z']
	},
	{
		name: 'rows-3',
		category: 'Interface',
		tags: 'stack layout list 3row',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M3 9h18', 'M3 15h18'],
		duotonePaths: ['M3 9h18v6H3V9Z']
	},
	{
		name: 'square-check',
		category: 'Interface',
		tags: 'checkbox selected verified',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M8.5 12.2 10.8 14.5 15.8 9.5'],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z']
	},
	{
		name: 'circle-alert',
		category: 'Interface',
		tags: 'error warning info status',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 7.5v5.5', 'M12 16.5h.01'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'sort-asc',
		category: 'Interface',
		tags: 'order ascending filter list',
		outlinePaths: ['M11 6h9', 'M11 12h6', 'M11 18h3'],
		accentPaths: ['M6 4v16', 'M3.5 17.5 6 20l2.5-2.5']
	},
	{
		name: 'sort-desc',
		category: 'Interface',
		tags: 'order descending filter list',
		outlinePaths: ['M11 6h3', 'M11 12h6', 'M11 18h9'],
		accentPaths: ['M6 20V4', 'M3.5 6.5 6 4l2.5 2.5']
	},
	{
		name: 'panel-left-close',
		category: 'Interface',
		tags: 'collapse sidebar drawer',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z', 'M9 3v18'],
		accentPaths: ['M15.5 9.5 13 12l2.5 2.5'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3H9v18H6.5A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'panel-left-open',
		category: 'Interface',
		tags: 'expand sidebar drawer',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z', 'M9 3v18'],
		accentPaths: ['M13 9.5 15.5 12 13 14.5'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3H9v18H6.5A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'split-horizontal',
		category: 'Interface',
		tags: 'pane layout workspace view',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M3 12h18'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5V12H3V6.5Z']
	},

	// AI & Data
	{
		name: 'chart-candlestick',
		category: 'AI & Data',
		tags: 'stocks trading crypto finance',
		outlinePaths: ['M3.5 3.5v15a2 2 0 0 0 2 2h15'],
		accentPaths: [
			'M9 5v3',
			'M7.5 8.8a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v3.9a.8.8 0 0 1-.8.8H8.3a.8.8 0 0 1-.8-.8V8.8Z',
			'M9 13.5v3',
			'M16 4v2.5',
			'M14.5 7.3a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8V7.3Z',
			'M16 12.5v3.5'
		],
		duotonePaths: [
			'M7.5 8.8a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v3.9a.8.8 0 0 1-.8.8H8.3a.8.8 0 0 1-.8-.8V8.8Z',
			'M14.5 7.3a.8.8 0 0 1 .8-.8h1.4a.8.8 0 0 1 .8.8v4.4a.8.8 0 0 1-.8.8h-1.4a.8.8 0 0 1-.8-.8V7.3Z'
		]
	},
	{
		name: 'chart-spline',
		category: 'AI & Data',
		tags: 'smooth curve analytics telemetry',
		outlinePaths: ['M3.5 3.5v15a2 2 0 0 0 2 2h15'],
		accentPaths: ['M6.5 15.5c2-6 4.5-6 6.5-1s4.5 1 7-6.5']
	},
	{
		name: 'database-search',
		category: 'AI & Data',
		tags: 'query vector search sql',
		outlinePaths: [
			'M9.5 7.6c3.31 0 6-1.07 6-2.4s-2.69-2.4-6-2.4-6 1.07-6 2.4 2.69 2.4 6 2.4Z',
			'M3.5 5.2v11.6c0 1.33 2.69 2.4 6 2.4.9 0 1.75-.08 2.5-.22',
			'M3.5 11c0 1.33 2.69 2.4 6 2.4s6-1.07 6-2.4',
			'M15.5 5.2V11'
		],
		accentPaths: ['M17.8 19a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z', 'M21.4 20.2 19.6 18.4'],
		duotonePaths: [
			'M9.5 7.6c3.31 0 6-1.07 6-2.4s-2.69-2.4-6-2.4-6 1.07-6 2.4 2.69 2.4 6 2.4Z',
			'M17.8 19a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z'
		]
	},
	{
		name: 'brain-circuit',
		category: 'AI & Data',
		tags: 'machine learning ai neural',
		outlinePaths: [
			'M12 4.5a3 3 0 0 0-5.8 1.1A3.5 3.5 0 0 0 3.8 11a3.5 3.5 0 0 0 1.2 5.4A3.7 3.7 0 0 0 12 18V4.5Z',
			'M9 12.5a3.5 3.5 0 0 0 3-3.5'
		],
		accentPaths: [
			'M12 7h4.2l1.6-1.6',
			'M18.7 5.7a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 12h6.3',
			'M19.5 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 16.5h4.2l1.6 1.6',
			'M18.7 20.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		],
		duotonePaths: ['M12 4.5a3 3 0 0 0-5.8 1.1A3.5 3.5 0 0 0 3.8 11a3.5 3.5 0 0 0 1.2 5.4A3.7 3.7 0 0 0 12 18V4.5Z']
	},
	{
		name: 'bot-off',
		category: 'AI & Data',
		tags: 'human disable ai agent',
		outlinePaths: [
			'M10.5 7.5H17a3 3 0 0 1 3 3v6c0 .5-.12.97-.34 1.38',
			'M4 10.5v6a3 3 0 0 0 3 3h8.5',
			'M12 7.5V4.5',
			'M12 4.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M2 13.5h2',
			'M20 13.5h2',
			'M15 11.5v2'
		],
		accentPaths: ['M3 3l18 18']
	},
	{
		name: 'activity-square',
		category: 'AI & Data',
		tags: 'metrics pulse dashboard card',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M6.5 12.5h2l2-4 3 7 2-3h2'],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z']
	},

	// Commerce
	{
		name: 'credit-card-plus',
		category: 'Commerce',
		tags: 'add payment method billing',
		outlinePaths: ['M13 19.5H4.5A2.5 2.5 0 0 1 2 17V7a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 7v4.5', 'M2 9.5h20'],
		accentPaths: ['M18 14.5v6', 'M15 17.5h6'],
		duotonePaths: ['M2 7a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 7v2.5H2V7Z']
	},
	{
		name: 'shopping-bag-check',
		category: 'Commerce',
		tags: 'order confirmed checkout done',
		outlinePaths: ['M5.5 7.5A1.5 1.5 0 0 1 7 6h10a1.5 1.5 0 0 1 1.5 1.5l1.2 10.7A2.5 2.5 0 0 1 17.2 21H6.8a2.5 2.5 0 0 1-2.5-2.8L5.5 7.5Z', 'M8.5 6V5.5a3.5 3.5 0 0 1 7 0V6'],
		accentPaths: ['M9.5 13.8 11.3 15.6 15 11.8'],
		duotonePaths: ['M5.5 7.5A1.5 1.5 0 0 1 7 6h10a1.5 1.5 0 0 1 1.5 1.5l1.2 10.7A2.5 2.5 0 0 1 17.2 21H6.8a2.5 2.5 0 0 1-2.5-2.8L5.5 7.5Z']
	},
	{
		name: 'percent-square',
		category: 'Commerce',
		tags: 'discount coupon code promo',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M9 15l6-6', 'M9.5 10a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z', 'M14.5 15.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z'],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z']
	},
	{
		name: 'receipt-dollar',
		category: 'Commerce',
		tags: 'billing invoice statement',
		outlinePaths: ['M4.5 3.5A1.5 1.5 0 0 1 6 2h12a1.5 1.5 0 0 1 1.5 1.5V21l-2.5-1.5L14.5 21 12 19.5 9.5 21 7 19.5 4.5 21V3.5Z'],
		accentPaths: ['M12 6.5v9', 'M14.2 8.7c-.4-.6-1.3-.9-2.2-.9-1.2 0-2.1.6-2.1 1.6s.9 1.4 2.1 1.6 2.1.6 2.1 1.7-.9 1.7-2.1 1.7c-.9 0-1.8-.3-2.2-.9'],
		duotonePaths: ['M4.5 3.5A1.5 1.5 0 0 1 6 2h12a1.5 1.5 0 0 1 1.5 1.5V21l-2.5-1.5L14.5 21 12 19.5 9.5 21 7 19.5 4.5 21V3.5Z']
	},
	{
		name: 'truck-fast',
		category: 'Commerce',
		tags: 'express shipping prime delivery',
		outlinePaths: [
			'M6.2 15V8a2 2 0 0 1 2-2h7.3v10.5H10.4',
			'M15.5 9h2.7a1.5 1.5 0 0 1 1.3.75l1.6 2.75a1.5 1.5 0 0 1 .2.75v2.25a1 1 0 0 1-1 1h-.4',
			'M10.4 16.5h5.7'
		],
		accentPaths: [
			'M8.5 19.1a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Z',
			'M18 19.1a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8Z',
			'M2 8.5h2.4',
			'M1.8 11.5h2.8',
			'M2.5 14.5h1.9'
		],
		duotonePaths: ['M6.2 8a2 2 0 0 1 2-2h7.3v10.5H6.2V8Z']
	},

	// Design
	{
		name: 'paint-bucket',
		category: 'Design',
		tags: 'fill color background swatch',
		outlinePaths: [
			'M10.5 4 18.2 11.7l-6.4 6.4a2.4 2.4 0 0 1-3.4 0L4 13.7a2.4 2.4 0 0 1 0-3.4L10.5 4Z',
			'M6.8 7.7 5.2 6.1a2.1 2.1 0 0 1 3-3l1.6 1.6'
		],
		accentPaths: [
			'M19.5 13.8s2.3 2.5 2.3 4.1a2.3 2.3 0 1 1-4.6 0c0-1.6 2.3-4.1 2.3-4.1Z',
			'M4.3 12.2h12.6'
		],
		duotonePaths: [
			'M4.3 12.2h12.6l-5.1 5.9a2.4 2.4 0 0 1-3.4 0L4 13.7a2.4 2.4 0 0 1 .3-1.5Z',
			'M19.5 13.8s2.3 2.5 2.3 4.1a2.3 2.3 0 1 1-4.6 0c0-1.6 2.3-4.1 2.3-4.1Z'
		]
	},
	{
		name: 'contrast',
		category: 'Design',
		tags: 'theme brightness polarity dark',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 3a9 9 0 0 1 0 18V3Z'],
		duotonePaths: ['M12 3a9 9 0 0 1 0 18V3Z']
	},
	{
		name: 'aspect-ratio',
		category: 'Design',
		tags: '16:9 frame resize screen',
		outlinePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z'],
		accentPaths: ['M7 11V8.5h2.5', 'M17 13v2.5h-2.5'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'pen-line',
		category: 'Design',
		tags: 'edit rename underline write',
		outlinePaths: ['M15.5 4.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L8.8 19.2 4 20.5l1.3-4.8L15.5 4.5Z'],
		accentPaths: ['M12 20.5h8.5'],
		duotonePaths: ['M15.5 4.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L8.8 19.2 4 20.5l1.3-4.8L15.5 4.5Z']
	},
	{
		name: 'grid-2x2',
		category: 'Design',
		tags: 'modules matrix four squares',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M12 3.5v17', 'M3.5 12h17'],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h5V12H3.5V7Z', 'M12 12h8.5v5a3.5 3.5 0 0 1-3.5 3.5h-5V12Z']
	},
	{
		name: 'mask-circle',
		category: 'Design',
		tags: 'clipping mask layer shape',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z'],
		duotonePaths: ['M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z']
	},
	{
		name: 'layers-3',
		category: 'Design',
		tags: 'depth elevation z-index stack',
		outlinePaths: ['M12 3 20.5 7.5 12 12 3.5 7.5 12 3Z'],
		accentPaths: ['M3.5 12l8.5 4.5 8.5-4.5', 'M3.5 16.5 12 21l8.5-4.5'],
		duotonePaths: ['M12 3 20.5 7.5 12 12 3.5 7.5 12 3Z']
	}
]
