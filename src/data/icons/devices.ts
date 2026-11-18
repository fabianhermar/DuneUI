import type { SvgIconItem } from './types'

export const DEVICES_ICONS: SvgIconItem[] = [
	{
		name: 'laptop',
		category: 'Devices',
		tags: 'macbook computer desktop notebook',
		outlinePaths: ['M4.5 6.5A2 2 0 0 1 6.5 4.5h11a2 2 0 0 1 2 2v9h-15v-9Z', 'M2 18.5h20'],
		accentPaths: ['M9.5 15.5h5'],
		duotonePaths: ['M4.5 6.5A2 2 0 0 1 6.5 4.5h11a2 2 0 0 1 2 2v9h-15v-9Z']
	},
	{
		name: 'monitor',
		category: 'Devices',
		tags: 'screen display imac workstation',
		outlinePaths: ['M2.5 6A2.5 2.5 0 0 1 5 3.5h14A2.5 2.5 0 0 1 21.5 6v8.5A2.5 2.5 0 0 1 19 17H5a2.5 2.5 0 0 1-2.5-2.5V6Z'],
		accentPaths: ['M12 17v3.5', 'M8 20.5h8'],
		duotonePaths: ['M2.5 6A2.5 2.5 0 0 1 5 3.5h14A2.5 2.5 0 0 1 21.5 6v8.5A2.5 2.5 0 0 1 19 17H5a2.5 2.5 0 0 1-2.5-2.5V6Z']
	},
	{
		name: 'smartphone',
		category: 'Devices',
		tags: 'mobile iphone android phone',
		outlinePaths: ['M6.5 4.5A2.5 2.5 0 0 1 9 2h6a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 15 22H9a2.5 2.5 0 0 1-2.5-2.5v-15Z'],
		accentPaths: ['M10.5 5h3', 'M12 18.5h.01'],
		duotonePaths: ['M6.5 4.5A2.5 2.5 0 0 1 9 2h6a2.5 2.5 0 0 1 2.5 2.5v15A2.5 2.5 0 0 1 15 22H9a2.5 2.5 0 0 1-2.5-2.5v-15Z']
	},
	{
		name: 'tablet',
		category: 'Devices',
		tags: 'ipad surface screen responsive',
		outlinePaths: ['M4.5 5A2.5 2.5 0 0 1 7 2.5h10A2.5 2.5 0 0 1 19.5 5v14a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5Z'],
		accentPaths: ['M12 18h.01'],
		duotonePaths: ['M4.5 5A2.5 2.5 0 0 1 7 2.5h10A2.5 2.5 0 0 1 19.5 5v14a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 19V5Z']
	},
	{
		name: 'watch',
		category: 'Devices',
		tags: 'smartwatch wearable fitness time',
		outlinePaths: ['M6.5 8.5A2.5 2.5 0 0 1 9 6h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 15 18H9a2.5 2.5 0 0 1-2.5-2.5v-7Z', 'M9 6l.7-3.5h4.6L15 6', 'M9 18l.7 3.5h4.6L15 18'],
		accentPaths: ['M12 9.5v2.8l2 1.2'],
		duotonePaths: ['M6.5 8.5A2.5 2.5 0 0 1 9 6h6a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 15 18H9a2.5 2.5 0 0 1-2.5-2.5v-7Z']
	},
	{
		name: 'keyboard',
		category: 'Devices',
		tags: 'typing shortcut mechanical keys',
		outlinePaths: ['M2.5 8A2.5 2.5 0 0 1 5 5.5h14A2.5 2.5 0 0 1 21.5 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8Z'],
		accentPaths: ['M6.5 9.5h.01', 'M10 9.5h.01', 'M14 9.5h.01', 'M17.5 9.5h.01', 'M6.5 12.5h.01', 'M17.5 12.5h.01', 'M8 15.5h8'],
		duotonePaths: ['M2.5 8A2.5 2.5 0 0 1 5 5.5h14A2.5 2.5 0 0 1 21.5 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8Z']
	},
	{
		name: 'mouse',
		category: 'Devices',
		tags: 'click pointer scroll peripheral',
		outlinePaths: ['M6.5 8.5a5.5 5.5 0 0 1 11 0v7a5.5 5.5 0 0 1-11 0v-7Z'],
		accentPaths: ['M12 7v3'],
		duotonePaths: ['M6.5 8.5a5.5 5.5 0 0 1 11 0v7a5.5 5.5 0 0 1-11 0v-7Z']
	},
	{
		name: 'printer',
		category: 'Devices',
		tags: 'print paper output pdf',
		outlinePaths: ['M6.5 8V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v4', 'M3 10.5A2.5 2.5 0 0 1 5.5 8h13A2.5 2.5 0 0 1 21 10.5V16a1.5 1.5 0 0 1-1.5 1.5H17', 'M6.5 17.5H4.5A1.5 1.5 0 0 1 3 16v-5.5'],
		accentPaths: ['M6.5 14.5h11V20a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-5.5Z', 'M17 11.5h.01'],
		duotonePaths: ['M3 10.5A2.5 2.5 0 0 1 5.5 8h13A2.5 2.5 0 0 1 21 10.5V16a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 16v-5.5Z']
	},
	{
		name: 'wifi',
		category: 'Devices',
		tags: 'wireless network internet online',
		outlinePaths: ['M3.2 8.5a13 13 0 0 1 17.6 0', 'M6.5 12.2a8.5 8.5 0 0 1 11 0', 'M9.8 15.8a4 4 0 0 1 4.4 0'],
		accentPaths: ['M12 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
		duotonePaths: ['M12 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z']
	},
	{
		name: 'wifi-off',
		category: 'Devices',
		tags: 'offline disconnected no signal',
		outlinePaths: ['M9.5 6.3a13 13 0 0 1 11.3 2.2', 'M3.2 8.5a13 13 0 0 1 2.8-2', 'M13.8 10.6a8.5 8.5 0 0 1 3.7 1.6', 'M6.5 12.2a8.5 8.5 0 0 1 2.6-1.4', 'M9.8 15.8a4 4 0 0 1 4.4 0', 'M12 19.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
		accentPaths: ['M3 3l18 18']
	},
	{
		name: 'bluetooth',
		category: 'Devices',
		tags: 'wireless pair device sync',
		outlinePaths: ['M7 7.5 17 16.5 12 21V3l5 4.5L7 16.5']
	},
	{
		name: 'cast',
		category: 'Devices',
		tags: 'chromecast stream mirror display',
		outlinePaths: ['M3 7.5V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4'],
		accentPaths: ['M3 19.5h.01', 'M3 15.5a4 4 0 0 1 4 4', 'M3 11.5a8 8 0 0 1 8 8'],
		duotonePaths: ['M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3V6Z']
	},
	{
		name: 'battery-full',
		category: 'Devices',
		tags: 'power charge full energy',
		outlinePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z', 'M21.5 10.5v3'],
		accentPaths: ['M6.5 10v4', 'M10.5 10v4', 'M14.5 10v4'],
		duotonePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z']
	},
	{
		name: 'battery-charging',
		category: 'Devices',
		tags: 'power bolt fast charge',
		outlinePaths: ['M15.5 6.5H17A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5h-1.5', 'M8.5 6.5H5A2.5 2.5 0 0 0 2.5 9v6A2.5 2.5 0 0 0 5 17.5h3.5', 'M21.5 10.5v3'],
		accentPaths: ['M12 7.5 9.5 12h4L11 16.5'],
		duotonePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z']
	},
	{
		name: 'cloud',
		category: 'Devices',
		tags: 'sync storage saas edge',
		outlinePaths: ['M6.5 19h11a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.7 9.5 4.5 4.5 0 0 0 6.5 19Z'],
		duotonePaths: ['M6.5 19h11a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.7 9.5 4.5 4.5 0 0 0 6.5 19Z']
	},
	{
		name: 'cloud-upload',
		category: 'Devices',
		tags: 'deploy sync backup upload',
		outlinePaths: ['M18 18.5a4 4 0 0 0 .3-7.9A5.5 5.5 0 0 0 7.7 9 4.5 4.5 0 0 0 6.5 18.5'],
		accentPaths: ['M12 20.5v-8', 'M9 15l3-3 3 3'],
		duotonePaths: ['M6.5 18.5h11a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.7 9a4.5 4.5 0 0 0-1.2 9.5Z']
	},
	{
		name: 'cloud-download',
		category: 'Devices',
		tags: 'fetch pull install backup',
		outlinePaths: ['M18 18.5a4 4 0 0 0 .3-7.9A5.5 5.5 0 0 0 7.7 9 4.5 4.5 0 0 0 6.5 18.5'],
		accentPaths: ['M12 12.5v8', 'M9 17.5l3 3 3-3'],
		duotonePaths: ['M6.5 18.5h11a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.7 9a4.5 4.5 0 0 0-1.2 9.5Z']
	},
	{
		name: 'cloud-check',
		category: 'Devices',
		tags: 'synced saved online ready',
		outlinePaths: ['M6.5 19h11a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.7 9.5 4.5 4.5 0 0 0 6.5 19Z'],
		accentPaths: ['M9.5 13.8 11.3 15.6 15 11.8'],
		duotonePaths: ['M6.5 19h11a4 4 0 0 0 .8-7.9A5.5 5.5 0 0 0 7.7 9.5 4.5 4.5 0 0 0 6.5 19Z']
	},
	{
		name: 'signal',
		category: 'Devices',
		tags: 'cellular bars network strength',
		outlinePaths: ['M4 18v-2', 'M9 18v-5', 'M14 18V9', 'M19 18V5'],
		accentPaths: ['M14 18V9', 'M19 18V5']
	},
	{
		name: 'router',
		category: 'Devices',
		tags: 'gateway modem network wifi',
		outlinePaths: ['M3 15.5A2 2 0 0 1 5 13.5h14a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5Z', 'M7 13.5V8', 'M17 13.5V8'],
		accentPaths: ['M12 17.2h.01', 'M16 17.2h.01', 'M4.8 6a3.5 3.5 0 0 1 4.4 0', 'M14.8 6a3.5 3.5 0 0 1 4.4 0'],
		duotonePaths: ['M3 15.5A2 2 0 0 1 5 13.5h14a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3.5Z']
	}
]
