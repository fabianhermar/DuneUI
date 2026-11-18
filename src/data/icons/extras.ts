import type { SvgIconItem } from './types'

export const EXTRA_ICONS: SvgIconItem[] = [
	// Interface
	{
		name: 'minimize',
		category: 'Interface',
		tags: 'collapse shrink exit fullscreen',
		outlinePaths: ['M4 8.5h3a1.5 1.5 0 0 0 1.5-1.5V4', 'M20 8.5h-3A1.5 1.5 0 0 1 15.5 7V4', 'M4 15.5h3A1.5 1.5 0 0 1 8.5 17v3', 'M20 15.5h-3a1.5 1.5 0 0 0-1.5 1.5v3']
	},
	{
		name: 'more-vertical',
		category: 'Interface',
		tags: 'kebab menu dots options',
		outlinePaths: [
			'M12 6.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 20.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		],
		duotonePaths: [
			'M12 6.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 20.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		]
	},
	{
		name: 'pin',
		category: 'Interface',
		tags: 'sticky attach keep top',
		outlinePaths: ['M9 4.5h6l-.8 5.2 2.8 2.8v2H7v-2l2.8-2.8L9 4.5Z'],
		accentPaths: ['M12 14.5v6.5'],
		duotonePaths: ['M9 4.5h6l-.8 5.2 2.8 2.8v2H7v-2l2.8-2.8L9 4.5Z']
	},
	{
		name: 'loader',
		category: 'Interface',
		tags: 'spinner loading wait progress',
		outlinePaths: ['M12 3v3', 'M12 18v3', 'M5.6 5.6l2.1 2.1', 'M16.3 16.3l2.1 2.1'],
		accentPaths: ['M3 12h3', 'M18 12h3', 'M5.6 18.4l2.1-2.1', 'M16.3 7.7l2.1-2.1']
	},
	{
		name: 'grip-vertical',
		category: 'Interface',
		tags: 'drag handle reorder sort',
		outlinePaths: [
			'M9 6.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M9 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M9 20.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		],
		accentPaths: [
			'M15 6.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M15 13.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M15 20.2a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		]
	},
	{
		name: 'command-palette',
		category: 'Interface',
		tags: 'spotlight search modal shortcut',
		outlinePaths: ['M3 6.5A3 3 0 0 1 6 3.5h12a3 3 0 0 1 3 3v11a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-11Z', 'M3 9.5h18'],
		accentPaths: ['M7 6.5h4', 'M7.5 13.5h9', 'M7.5 16.5h5'],
		duotonePaths: ['M3 6.5A3 3 0 0 1 6 3.5h12a3 3 0 0 1 3 3v3H3v-3Z']
	},
	{
		name: 'help-circle',
		category: 'Interface',
		tags: 'faq support question tooltip',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M9.5 9.5a2.5 2.5 0 0 1 4.9.8c0 1.6-2.4 2.2-2.4 3.5', 'M12 16.8h.01'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'alert-triangle',
		category: 'Interface',
		tags: 'warning caution danger notice',
		outlinePaths: ['M10.4 4.4a1.8 1.8 0 0 1 3.2 0l7.5 13.5A1.8 1.8 0 0 1 19.5 20.5h-15a1.8 1.8 0 0 1-1.6-2.6L10.4 4.4Z'],
		accentPaths: ['M12 9.5v4.5', 'M12 17h.01'],
		duotonePaths: ['M10.4 4.4a1.8 1.8 0 0 1 3.2 0l7.5 13.5A1.8 1.8 0 0 1 19.5 20.5h-15a1.8 1.8 0 0 1-1.6-2.6L10.4 4.4Z']
	},
	{
		name: 'ban',
		category: 'Interface',
		tags: 'block disable forbid restrict',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M5.7 5.7l12.6 12.6'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'moon-sun',
		category: 'Interface',
		tags: 'theme toggle appearance dark light',
		outlinePaths: [
			'M9.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
			'M9.5 8.5V7.3',
			'M9.5 21.7v-1.2',
			'M3.5 14.5H2.3',
			'M5.3 10.3l-.9-.9',
			'M5.3 18.7l-.9.9',
			'M13.7 18.7l.9.9'
		],
		accentPaths: ['M16.2 3a4.2 4.2 0 1 0 4.8 4.8 3.5 3.5 0 0 1-4.8-4.8Z'],
		duotonePaths: ['M9.5 18a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M16.2 3a4.2 4.2 0 1 0 4.8 4.8 3.5 3.5 0 0 1-4.8-4.8Z']
	},
	{
		name: 'pin-off',
		category: 'Interface',
		tags: 'unpin detach remove sticky',
		outlinePaths: ['M9 4.5h6l-.8 5.2 2.8 2.8v2H7v-2l2-2', 'M12 14.5v6.5'],
		accentPaths: ['M3.5 3.5l17 17']
	},
	{
		name: 'expand-diagonal',
		category: 'Interface',
		tags: 'resize scale modal dialog',
		outlinePaths: ['M14.5 3.5h6v6', 'M9.5 20.5h-6v-6'],
		accentPaths: ['M20.5 3.5 14 10', 'M3.5 20.5 10 14']
	},

	// Navigation
	{
		name: 'external-link',
		category: 'Navigation',
		tags: 'open new tab url redirect',
		outlinePaths: ['M18 13v5.5a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2H11'],
		accentPaths: ['M15 3.5h5.5V9', 'M10.5 13.5 20.5 3.5'],
		duotonePaths: ['M3.5 8a2 2 0 0 1 2-2H13v10.5a2 2 0 0 1-2 2H5.5a2 2 0 0 1-2-2V8Z']
	},
	{
		name: 'move',
		category: 'Navigation',
		tags: 'drag pan position four-way',
		outlinePaths: ['M12 3v18', 'M3 12h18'],
		accentPaths: ['M9.5 5.5 12 3l2.5 2.5', 'M9.5 18.5 12 21l2.5-2.5', 'M5.5 9.5 3 12l2.5 2.5', 'M18.5 9.5 21 12l-2.5 2.5']
	},
	{
		name: 'anchor',
		category: 'Navigation',
		tags: 'link section dock marine',
		outlinePaths: ['M12 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M12 7.5V21'],
		accentPaths: ['M9 10.5h6', 'M4.5 14a7.5 7.5 0 0 0 15 0', 'M3.5 14h2.5', 'M18 14h2.5'],
		duotonePaths: ['M12 7.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z']
	},
	{
		name: 'locate-fixed',
		category: 'Navigation',
		tags: 'gps center current location',
		outlinePaths: ['M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Z', 'M12 2v3', 'M12 19v3', 'M2 12h3', 'M19 12h3'],
		accentPaths: ['M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		duotonePaths: ['M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'crossroads',
		category: 'Navigation',
		tags: 'signpost split decision path',
		outlinePaths: ['M12 3v18', 'M6 6h9.5l2.5 2.2-2.5 2.3H6V6Z'],
		accentPaths: ['M18 13.5H8.5L6 15.7 8.5 18H18v-4.5Z'],
		duotonePaths: ['M6 6h9.5l2.5 2.2-2.5 2.3H6V6Z']
	},
	{
		name: 'panel-bottom',
		category: 'Navigation',
		tags: 'dock drawer footer console',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M3 15h18'],
		duotonePaths: ['M3 15h18v2.5a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5V15Z']
	},

	// Commerce
	{
		name: 'euro-circle',
		category: 'Commerce',
		tags: 'eur currency money billing',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M15.2 8.7a4.2 4.2 0 1 0 0 6.6', 'M7.5 11h5.5', 'M7.5 13.5h4.5'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'wallet-cards',
		category: 'Commerce',
		tags: 'cards apple pay methods',
		outlinePaths: ['M3 9A2.5 2.5 0 0 1 5.5 6.5h13A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5V9Z'],
		accentPaths: ['M5.5 6.5V5A1.5 1.5 0 0 1 7 3.5h10A1.5 1.5 0 0 1 18.5 5v1.5', 'M3 11.5h18', 'M7 15.5h4'],
		duotonePaths: ['M3 9A2.5 2.5 0 0 1 5.5 6.5h13A2.5 2.5 0 0 1 21 9v2.5H3V9Z']
	},
	{
		name: 'scale',
		category: 'Commerce',
		tags: 'compare legal balance pricing',
		outlinePaths: ['M12 3.5v17', 'M7 20.5h10', 'M4.5 7.5h15'],
		accentPaths: ['M4.5 7.5 2.5 13a3 3 0 0 0 6 0l-2-5.5Z', 'M17.5 7.5 15.5 13a3 3 0 0 0 6 0l-2-5.5Z'],
		duotonePaths: ['M2.5 13a3 3 0 0 0 6 0h-6Z', 'M15.5 13a3 3 0 0 0 6 0h-6Z']
	},
	{
		name: 'percent-circle',
		category: 'Commerce',
		tags: 'tax interest rate ratio',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M9 15l6-6', 'M9.5 10a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z', 'M14.5 15.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},

	// Development
	{
		name: 'code-xml',
		category: 'Development',
		tags: 'html jsx markup tag',
		outlinePaths: ['M18 16.5 22 12l-4-4.5', 'M6 7.5 2 12l4 4.5'],
		accentPaths: ['M14 5l-4 14']
	},
	{
		name: 'git-compare',
		category: 'Development',
		tags: 'diff changes compare pr',
		outlinePaths: ['M6 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M18 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		accentPaths: ['M13 5.5h2.5a2 2 0 0 1 2 2V16', 'M11 18.5H8.5a2 2 0 0 1-2-2V8'],
		duotonePaths: ['M6 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M18 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'brackets-square',
		category: 'Development',
		tags: 'array json syntax code',
		outlinePaths: ['M8.5 4H5.6a.8.8 0 0 0-.8.8v14.4a.8.8 0 0 0 .8.8h2.9', 'M15.5 4h2.9a.8.8 0 0 1 .8.8v14.4a.8.8 0 0 1-.8.8h-2.9'],
		accentPaths: [
			'M8.8 12.7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z',
			'M12 12.7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z',
			'M15.2 12.7a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z'
		]
	},
	{
		name: 'microchip',
		category: 'Development',
		tags: 'silicon soc hardware board',
		outlinePaths: ['M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z', 'M2 8h3', 'M2 12h3', 'M2 16h3', 'M19 8h3', 'M19 12h3', 'M19 16h3'],
		accentPaths: ['M9 9h6v6H9z'],
		duotonePaths: ['M5 7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7Z']
	},
	{
		name: 'bug-play',
		category: 'Development',
		tags: 'run debugger test inspect',
		outlinePaths: [
			'M5.5 10.5a4 4 0 0 1 8 0v.5',
			'M5.5 10.5v4a4 4 0 0 0 6 3.7',
			'M5.7 10h7.6',
			'M9.5 10v8',
			'M7 4.2 8.5 6.5',
			'M12 4.2 10.5 6.5',
			'M3 8.5l2.7 1.5',
			'M16 8.5 13.3 10',
			'M2.5 13h3',
			'M3.5 17.5 6 15.8'
		],
		accentPaths: ['M15.4 13.5 21 17l-5.6 3.5v-7Z'],
		duotonePaths: ['M15.4 13.5 21 17l-5.6 3.5v-7Z']
	},
	{
		name: 'square-code',
		category: 'Development',
		tags: 'editor ide sandbox snippet',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M10 9.5 7.5 12l2.5 2.5', 'M14 9.5l2.5 2.5-2.5 2.5'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},

	// AI & Data
	{
		name: 'radar',
		category: 'AI & Data',
		tags: 'sonar discover scan signal',
		outlinePaths: [
			'M7.5 4.2A9 9 0 1 1 4.2 7.5',
			'M12 17.2A5.2 5.2 0 1 1 14.6 7.5',
			'M12 13.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z'
		],
		accentPaths: [
			'M13.1 10.9 18.3 5.7',
			'M5.5 6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
			'M15.8 16.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'
		],
		duotonePaths: ['M12 13.6a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z']
	},
	{
		name: 'bar-chart-horizontal',
		category: 'AI & Data',
		tags: 'ranking breakdown horizontal bars',
		outlinePaths: ['M3.5 3.5v15.5a1.5 1.5 0 0 0 1.5 1.5h15.5'],
		accentPaths: [
			'M6 5h9a1.3 1.3 0 0 1 1.3 1.3v.4A1.3 1.3 0 0 1 15 8H6V5Z',
			'M6 10h13a1.3 1.3 0 0 1 1.3 1.3v.4a1.3 1.3 0 0 1-1.3 1.3H6v-3Z',
			'M6 15h6a1.3 1.3 0 0 1 1.3 1.3v.4a1.3 1.3 0 0 1-1.3 1.3H6v-3Z'
		],
		duotonePaths: [
			'M6 5h9a1.3 1.3 0 0 1 1.3 1.3v.4A1.3 1.3 0 0 1 15 8H6V5Z',
			'M6 10h13a1.3 1.3 0 0 1 1.3 1.3v.4a1.3 1.3 0 0 1-1.3 1.3H6v-3Z',
			'M6 15h6a1.3 1.3 0 0 1 1.3 1.3v.4a1.3 1.3 0 0 1-1.3 1.3H6v-3Z'
		]
	},
	{
		name: 'sparkles-grid',
		category: 'AI & Data',
		tags: 'ai studio prompt matrix generate',
		outlinePaths: [
			'M4 5.5A1.5 1.5 0 0 1 5.5 4H9a1.5 1.5 0 0 1 1.5 1.5V9A1.5 1.5 0 0 1 9 10.5H5.5A1.5 1.5 0 0 1 4 9V5.5Z',
			'M4 15a1.5 1.5 0 0 1 1.5-1.5H9a1.5 1.5 0 0 1 1.5 1.5v3.5A1.5 1.5 0 0 1 9 20H5.5A1.5 1.5 0 0 1 4 18.5V15Z',
			'M13.5 15a1.5 1.5 0 0 1 1.5-1.5h3.5A1.5 1.5 0 0 1 20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z'
		],
		accentPaths: ['M17 3.5 18 6.2 20.7 7.2 18 8.2 17 10.9 16 8.2 13.3 7.2 16 6.2 17 3.5Z'],
		duotonePaths: [
			'M4 5.5A1.5 1.5 0 0 1 5.5 4H9a1.5 1.5 0 0 1 1.5 1.5V9A1.5 1.5 0 0 1 9 10.5H5.5A1.5 1.5 0 0 1 4 9V5.5Z',
			'M13.5 15a1.5 1.5 0 0 1 1.5-1.5h3.5A1.5 1.5 0 0 1 20 15v3.5a1.5 1.5 0 0 1-1.5 1.5H15a1.5 1.5 0 0 1-1.5-1.5V15Z'
		]
	},
	{
		name: 'chart-scatter',
		category: 'AI & Data',
		tags: 'clusters correlation points ml',
		outlinePaths: ['M3.5 3.5v15a2 2 0 0 0 2 2h15'],
		accentPaths: [
			'M8.5 14.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M12 9.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M16.5 13.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z',
			'M18.5 7.5a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'
		]
	},

	// Users
	{
		name: 'user-x',
		category: 'Users',
		tags: 'remove revoke ban user',
		outlinePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0'],
		accentPaths: ['M16.2 11.2l4.6 4.6', 'M20.8 11.2l-4.6 4.6'],
		duotonePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0H2.2Z']
	},
	{
		name: 'thumbs-down',
		category: 'Users',
		tags: 'dislike reject downvote feedback',
		outlinePaths: ['M17 13.5V4h2.5A1.5 1.5 0 0 1 21 5.5V12a1.5 1.5 0 0 1-1.5 1.5H17Zm0 0-3.2 6.7a1.7 1.7 0 0 1-3.2-.7v-4H5.3a2 2 0 0 1-1.97-2.34l1.1-6.5A2 2 0 0 1 6.4 4.5H17'],
		duotonePaths: ['M17 13.5 13.8 20.2a1.7 1.7 0 0 1-3.2-.7v-4H5.3a2 2 0 0 1-1.97-2.34l1.1-6.5A2 2 0 0 1 6.4 4.5H17v9Z']
	},
	{
		name: 'heart-pulse',
		category: 'Users',
		tags: 'wellness health sponsor telemetry',
		outlinePaths: ['M19 14c1.6-1.55 3-3.4 3-5.6A5.4 5.4 0 0 0 16.5 3c-1.8 0-3.2.8-4.5 2.1C10.7 3.8 9.3 3 7.5 3A5.4 5.4 0 0 0 2 8.4c0 2.2 1.4 4.05 3 5.6l7 7 7-7Z'],
		accentPaths: ['M7 11.5h2.5l1.5-2.5 2 5 1.5-2.5H17'],
		duotonePaths: ['M19 14c1.6-1.55 3-3.4 3-5.6A5.4 5.4 0 0 0 16.5 3c-1.8 0-3.2.8-4.5 2.1C10.7 3.8 9.3 3 7.5 3A5.4 5.4 0 0 0 2 8.4c0 2.2 1.4 4.05 3 5.6l7 7 7-7Z']
	},

	// Devices
	{
		name: 'tv',
		category: 'Devices',
		tags: 'television screen display media',
		outlinePaths: ['M2.5 8.5A2.5 2.5 0 0 1 5 6h14a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5v-9Z'],
		accentPaths: ['M8 3l4 3 4-3'],
		duotonePaths: ['M2.5 8.5A2.5 2.5 0 0 1 5 6h14a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5v-9Z']
	},
	{
		name: 'usb',
		category: 'Devices',
		tags: 'port drive connect cable',
		outlinePaths: ['M12 20v-14', 'M10 6l2-3 2 3H10Z'],
		accentPaths: ['M12 16l-4.5-3.5V9.5', 'M12 13l4.5-3V8', 'M7.5 9.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M15.5 6.5h2v2h-2z']
	},
	{
		name: 'plug-power',
		category: 'Devices',
		tags: 'electric outlet charge energy',
		outlinePaths: ['M7 8.5h10v4a5 5 0 0 1-10 0v-4Z', 'M12 17.5V21'],
		accentPaths: ['M9.5 4v4.5', 'M14.5 4v4.5'],
		duotonePaths: ['M7 8.5h10v4a5 5 0 0 1-10 0v-4Z']
	},
	{
		name: 'airplay',
		category: 'Devices',
		tags: 'screen share apple cast stream',
		outlinePaths: ['M5.5 17H4.5A2.5 2.5 0 0 1 2 14.5v-8A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v8a2.5 2.5 0 0 1-2.5 2.5h-1'],
		accentPaths: ['M12 14.5 17 20H7l5-5.5Z'],
		duotonePaths: ['M12 14.5 17 20H7l5-5.5Z']
	},

	// Time & Weather
	{
		name: 'stopwatch',
		category: 'Time & Weather',
		tags: 'lap speed race timing',
		outlinePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'M10 2.5h4', 'M18 6l1.5-1.5'],
		accentPaths: ['M12 13l2.8-2.8'],
		duotonePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z']
	},
	{
		name: 'calendar-range',
		category: 'Time & Weather',
		tags: 'date picker span range booking',
		outlinePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7Z', 'M8 2.5v3', 'M16 2.5v3', 'M3 9.5h18'],
		accentPaths: ['M7 13.5h8', 'M9 17h8'],
		duotonePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v2.5H3V7Z']
	},
	{
		name: 'sunset',
		category: 'Time & Weather',
		tags: 'evening dusk horizon',
		outlinePaths: ['M3 17.5h18', 'M7.5 17.5a4.5 4.5 0 0 1 9 0', 'M6 20.5h12'],
		accentPaths: ['M12 3.5v6', 'M9.2 6.7 12 9.5l2.8-2.8', 'M5.8 11.3 7.2 12.7', 'M18.2 11.3 16.8 12.7'],
		duotonePaths: ['M7.5 17.5a4.5 4.5 0 0 1 9 0H7.5Z']
	},
	{
		name: 'cloud-snow',
		category: 'Time & Weather',
		tags: 'snowy winter forecast weather',
		outlinePaths: ['M6.5 15.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 7.2a4 4 0 0 0-2 8.3Z'],
		accentPaths: ['M8 18.5h.01', 'M12 19.5h.01', 'M16 18.5h.01', 'M10 21h.01', 'M14 21h.01'],
		duotonePaths: ['M6.5 15.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 7.2a4 4 0 0 0-2 8.3Z']
	},

	// Communication & Media extras
	{
		name: 'phone-incoming',
		category: 'Communication',
		tags: 'inbound call support answer',
		outlinePaths: ['M5 4.5h2.8a1.3 1.3 0 0 1 1.25.95l.7 2.5a1.3 1.3 0 0 1-.35 1.28L8 10.5a11.5 11.5 0 0 0 4.5 4.5l1.27-1.4a1.3 1.3 0 0 1 1.28-.35l2.5.7a1.3 1.3 0 0 1 .95 1.25V18a2 2 0 0 1-2 2C9.5 20 3 13.5 3 6.5a2 2 0 0 1 2-2Z'],
		accentPaths: ['M15 9l5-5', 'M15 4.5V9h4.5'],
		duotonePaths: ['M5 4.5h2.8a1.3 1.3 0 0 1 1.25.95l.7 2.5a1.3 1.3 0 0 1-.35 1.28L8 10.5a11.5 11.5 0 0 0 4.5 4.5l1.27-1.4a1.3 1.3 0 0 1 1.28-.35l2.5.7a1.3 1.3 0 0 1 .95 1.25V18a2 2 0 0 1-2 2C9.5 20 3 13.5 3 6.5a2 2 0 0 1 2-2Z']
	},
	{
		name: 'clapperboard',
		category: 'Media',
		tags: 'video production film studio',
		outlinePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-9Z', 'M3 10.5h18'],
		accentPaths: ['M7 6l2.5 4.5', 'M13.5 6 16 10.5'],
		duotonePaths: ['M3 10.5h18v7A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-7Z']
	},
	{
		name: 'sliders-audio',
		category: 'Media',
		tags: 'studio equalizer sound mix',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M8 16V8', 'M12 16v-5', 'M16 16V9'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'sparkles-wand',
		category: 'Media',
		tags: 'retouch ai photo filter magic',
		outlinePaths: [
			'M3.5 18.5 12.5 9.5a1.41 1.41 0 0 1 2 2l-9 9a1.41 1.41 0 0 1-2-2Z',
			'M10.5 11.5l2 2'
		],
		accentPaths: [
			'M18 2.5l.8 2.2 2.2.8-2.2.8L18 8.5l-.8-2.2-2.2-.8 2.2-.8.8-2.2Z',
			'M7.5 4v3.5',
			'M5.75 5.75h3.5',
			'M18.5 14.5V18',
			'M16.75 16.25h3.5'
		],
		duotonePaths: [
			'M3.5 18.5 12.5 9.5a1.41 1.41 0 0 1 2 2l-9 9a1.41 1.41 0 0 1-2-2Z',
			'M18 2.5l.8 2.2 2.2.8-2.2.8L18 8.5l-.8-2.2-2.2-.8 2.2-.8.8-2.2Z'
		]
	},
	{
		name: 'stop-circle',
		category: 'Media',
		tags: 'end halt record stop',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M9 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-5Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	}
]
