import type { SvgIconItem } from './types'

export const EVERYDAY_PLUS_ICONS: SvgIconItem[] = [
	// Files
	{
		name: 'file-audio',
		category: 'Files',
		tags: 'mp3 wav sound podcast file',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M9 14v2', 'M12 12v5', 'M15 13v3'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-video',
		category: 'Files',
		tags: 'mp4 mov clip media file',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M10 12.2a.5.5 0 0 1 .76-.43l4.2 2.5a.5.5 0 0 1 0 .86l-4.2 2.5a.5.5 0 0 1-.76-.43v-5Z'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-warning',
		category: 'Files',
		tags: 'corrupt error alert document',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M12 11.5v3.5', 'M12 17.5h.01'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-minus',
		category: 'Files',
		tags: 'remove delete document',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M9.5 14h5'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'folder-minus',
		category: 'Files',
		tags: 'remove folder directory',
		outlinePaths: ['M12 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4V14'],
		accentPaths: ['M14.5 17.5h6']
	},
	{
		name: 'folder-check',
		category: 'Files',
		tags: 'verified directory synced',
		outlinePaths: ['M12 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4V11.5'],
		accentPaths: ['M14 17.5 16.3 19.8 21 14.5']
	},
	{
		name: 'folder-search',
		category: 'Files',
		tags: 'find directory locate',
		outlinePaths: ['M10 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4'],
		accentPaths: ['M16 18.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z', 'M20.8 20.1 18.3 17.6'],
		duotonePaths: ['M16 18.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z']
	},
	{
		name: 'folder-sync',
		category: 'Files',
		tags: 'cloud backup directory sync',
		outlinePaths: ['M10 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4'],
		accentPaths: [
			'M13.2 14.8a3.8 3.8 0 0 1 7.2 0',
			'M20.4 12.5v2.3h-2.3',
			'M20.4 17.2a3.8 3.8 0 0 1-7.2 0',
			'M13.2 19.5v-2.3h2.3'
		],
		duotonePaths: ['M16.8 19.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z']
	},

	// Devices
	{
		name: 'speaker-audio',
		category: 'Devices',
		tags: 'hifi music studio monitor',
		outlinePaths: ['M5 5A2.5 2.5 0 0 1 7.5 2.5h9A2.5 2.5 0 0 1 19 5v14a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19V5Z'],
		accentPaths: ['M12 17a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z', 'M12 7.2h.01'],
		duotonePaths: ['M5 5A2.5 2.5 0 0 1 7.5 2.5h9A2.5 2.5 0 0 1 19 5v14a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19V5Z']
	},
	{
		name: 'webcam',
		category: 'Devices',
		tags: 'video stream camera desk',
		outlinePaths: ['M12 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z', 'M7 20.5h10', 'M12 17v3.5'],
		accentPaths: ['M12 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		duotonePaths: ['M12 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z']
	},
	{
		name: 'battery-low',
		category: 'Devices',
		tags: 'power charge low energy',
		outlinePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z', 'M21.5 10.5v3'],
		accentPaths: ['M6.5 10v4'],
		duotonePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z']
	},
	{
		name: 'battery-medium',
		category: 'Devices',
		tags: 'power charge half energy',
		outlinePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z', 'M21.5 10.5v3'],
		accentPaths: ['M6.5 10v4', 'M10.5 10v4'],
		duotonePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h12A2.5 2.5 0 0 1 19.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z']
	},
	{
		name: 'smartphone-nfc',
		category: 'Devices',
		tags: 'tap pay contactless apple pay',
		outlinePaths: ['M4.5 5.5A2.5 2.5 0 0 1 7 3h5a2.5 2.5 0 0 1 2.5 2.5v13A2.5 2.5 0 0 1 12 21H7a2.5 2.5 0 0 1-2.5-2.5v-13Z'],
		accentPaths: ['M17.5 8.5a4.5 4.5 0 0 1 0 7', 'M19.8 6a8 8 0 0 1 0 12'],
		duotonePaths: ['M4.5 5.5A2.5 2.5 0 0 1 7 3h5a2.5 2.5 0 0 1 2.5 2.5v13A2.5 2.5 0 0 1 12 21H7a2.5 2.5 0 0 1-2.5-2.5v-13Z']
	},
	{
		name: 'laptop-code',
		category: 'Devices',
		tags: 'developer workspace ide macbook',
		outlinePaths: ['M4.5 6.5A2 2 0 0 1 6.5 4.5h11a2 2 0 0 1 2 2v9h-15v-9Z', 'M2 18.5h20'],
		accentPaths: ['M10 8.5 8 10.5l2 2', 'M14 8.5l2 2-2 2'],
		duotonePaths: ['M4.5 6.5A2 2 0 0 1 6.5 4.5h11a2 2 0 0 1 2 2v9h-15v-9Z']
	},

	// Lifestyle
	{
		name: 'ship',
		category: 'Lifestyle',
		tags: 'cruise ferry ocean travel',
		outlinePaths: ['M4 13.5 5.5 7.5A1.5 1.5 0 0 1 7 6.5h10a1.5 1.5 0 0 1 1.5 1l1.5 6', 'M3 14.5l9-3 9 3-1.8 4.5H4.8L3 14.5Z'],
		accentPaths: ['M9 6.5V4h6v2.5', 'M3 20.5c1.5 0 2-1 3-1s1.5 1 3 1 2-1 3-1 1.5 1 3 1 2-1 3-1 1.5 1 3 1'],
		duotonePaths: ['M3 14.5l9-3 9 3-1.8 4.5H4.8L3 14.5Z']
	},
	{
		name: 'bus',
		category: 'Lifestyle',
		tags: 'transit shuttle transport city',
		outlinePaths: ['M5 6.5A3 3 0 0 1 8 3.5h8a3 3 0 0 1 3 3v10a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5v-10Z'],
		accentPaths: ['M5 12h14', 'M8.5 15.5h.01', 'M15.5 15.5h.01', 'M7 19v2', 'M17 19v2'],
		duotonePaths: ['M5 6.5A3 3 0 0 1 8 3.5h8a3 3 0 0 1 3 3V12H5V6.5Z']
	},
	{
		name: 'fuel-pump',
		category: 'Lifestyle',
		tags: 'gas ev station energy charge',
		outlinePaths: ['M4.5 6A2.5 2.5 0 0 1 7 3.5h5.5A2.5 2.5 0 0 1 15 6v14.5H4.5V6Z', 'M3 20.5h13.5'],
		accentPaths: ['M7.5 7.5h4.5v4H7.5z', 'M15 11h1.5a2 2 0 0 1 2 2v4a1.5 1.5 0 0 0 3 0V8.5L18.5 5.5'],
		duotonePaths: ['M4.5 6A2.5 2.5 0 0 1 7 3.5h5.5A2.5 2.5 0 0 1 15 6v14.5H4.5V6Z']
	},
	{
		name: 'tent',
		category: 'Lifestyle',
		tags: 'camping outdoors adventure nature',
		outlinePaths: ['M3 19.5 12 4.5l9 15H3Z'],
		accentPaths: ['M12 4.5 9.5 2', 'M12 4.5l2.5-2.5', 'M9.5 19.5 12 13l2.5 6.5'],
		duotonePaths: ['M3 19.5 12 4.5l9 15H3Z']
	},
	{
		name: 'wine-glass',
		category: 'Lifestyle',
		tags: 'drink dining bar celebration',
		outlinePaths: ['M7.5 3.5h9l.8 5.2a5.3 5.3 0 0 1-10.6 0l.8-5.2Z', 'M12 14v6.5', 'M8.5 20.5h7'],
		accentPaths: ['M7 8.5h10'],
		duotonePaths: ['M7 8.5h10a5.3 5.3 0 0 1-10 0Z']
	},
	{
		name: 'ice-cream',
		category: 'Lifestyle',
		tags: 'dessert sweet summer treat',
		outlinePaths: ['M7.5 10.5a4.5 4.5 0 0 1 9 0', 'M7 10.5A1.5 1.5 0 0 0 7 13.5h10a1.5 1.5 0 0 0 0-3', 'M8.5 13.5 12 21l3.5-7.5'],
		duotonePaths: ['M7.5 10.5a4.5 4.5 0 0 1 9 0H7.5Z']
	},
	{
		name: 'guitar',
		category: 'Lifestyle',
		tags: 'music instrument acoustic rock band',
		outlinePaths: [
			'M12.5 9.8C10.8 8.2 8.2 8.4 7.2 10c-.6 1-.3 2.1-1 2.8-.8.8-2.2.8-3 2-.9 1.4-.4 3.7 1.1 5.1 1.4 1.4 3.7 1.9 5.1 1 1.2-.8 1.2-2.2 2-3 .7-.7 1.8-.4 2.8-1 1.6-1 1.8-3.6.2-5.3L12.5 9.8Z',
			'M13.5 10.5 18.8 5.2',
			'M17.8 4.6 19.6 2.8a1 1 0 0 1 1.4 0l.5.5a1 1 0 0 1 0 1.4L19.7 6.5l-1.9-1.9Z'
		],
		accentPaths: [
			'M9.8 15.8a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4Z',
			'M5.6 16.6l1.8 1.8'
		],
		duotonePaths: [
			'M12.5 9.8C10.8 8.2 8.2 8.4 7.2 10c-.6 1-.3 2.1-1 2.8-.8.8-2.2.8-3 2-.9 1.4-.4 3.7 1.1 5.1 1.4 1.4 3.7 1.9 5.1 1 1.2-.8 1.2-2.2 2-3 .7-.7 1.8-.4 2.8-1 1.6-1 1.8-3.6.2-5.3L12.5 9.8Z'
		]
	},
	{
		name: 'fish',
		category: 'Lifestyle',
		tags: 'food ocean seafood pet',
		outlinePaths: ['M6.5 12s3-5.5 8-5.5c3.2 0 5.5 2.5 6.5 5.5-1 3-3.3 5.5-6.5 5.5-5 0-8-5.5-8-5.5Z', 'M6.5 12 3 8.5v7L6.5 12Z'],
		accentPaths: ['M16.5 11.2h.01'],
		duotonePaths: ['M6.5 12s3-5.5 8-5.5c3.2 0 5.5 2.5 6.5 5.5-1 3-3.3 5.5-6.5 5.5-5 0-8-5.5-8-5.5Z']
	},
	{
		name: 'cat-face',
		category: 'Lifestyle',
		tags: 'pet animal kitty cute',
		outlinePaths: ['M3.5 12.5 4.5 4 9 7.2a6.5 6.5 0 0 1 6 0L19.5 4l1 8.5a8.5 7.5 0 0 1-17 0Z'],
		accentPaths: [
			'M8.5 11.5v.8',
			'M15.5 11.5v.8',
			'M12 14.3v1.3',
			'M9.6 16.2a1.4 1.4 0 0 0 2.4-.6 1.4 1.4 0 0 0 2.4.6'
		],
		duotonePaths: ['M3.5 12.5 4.5 4 9 7.2a6.5 6.5 0 0 1 6 0L19.5 4l1 8.5a8.5 7.5 0 0 1-17 0Z']
	},
	{
		name: 'egg',
		category: 'Lifestyle',
		tags: 'food breakfast easter oval',
		outlinePaths: ['M12 3C8.5 3 5.5 8.5 5.5 13.5A6.5 6.5 0 0 0 18.5 13.5C18.5 8.5 15.5 3 12 3Z'],
		accentPaths: ['M9 14a3 3 0 0 0 3 3'],
		duotonePaths: ['M12 3C8.5 3 5.5 8.5 5.5 13.5A6.5 6.5 0 0 0 18.5 13.5C18.5 8.5 15.5 3 12 3Z']
	},

	// Users
	{
		name: 'user-minus',
		category: 'Users',
		tags: 'remove member revoke account',
		outlinePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0'],
		accentPaths: ['M15.7 13.5h5.6'],
		duotonePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0H2.2Z']
	},
	{
		name: 'user-star',
		category: 'Users',
		tags: 'vip member favorite influencer',
		outlinePaths: ['M7.5 10.7a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z', 'M2.2 20a5.3 5.3 0 0 1 10.6 0'],
		accentPaths: ['M18 9.8l1.12 2.46 2.68.3-1.99 1.81.55 2.65L18 15.7l-2.36 1.32.55-2.65-1.99-1.81 2.68-.3L18 9.8Z'],
		duotonePaths: [
			'M7.5 10.7a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z',
			'M2.2 20a5.3 5.3 0 0 1 10.6 0H2.2Z',
			'M18 9.8l1.12 2.46 2.68.3-1.99 1.81.55 2.65L18 15.7l-2.36 1.32.55-2.65-1.99-1.81 2.68-.3L18 9.8Z'
		]
	},
	{
		name: 'user-lock',
		category: 'Users',
		tags: 'private profile suspended auth',
		outlinePaths: ['M7.8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.3 20a5.5 5.5 0 0 1 11 0'],
		accentPaths: [
			'M15.6 14a1.1 1.1 0 0 1 1.1-1.1h4a1.1 1.1 0 0 1 1.1 1.1v2.4a1.1 1.1 0 0 1-1.1 1.1h-4a1.1 1.1 0 0 1-1.1-1.1V14Z',
			'M17.1 12.9v-1.3a1.6 1.6 0 0 1 3.2 0v1.3'
		],
		duotonePaths: [
			'M7.8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
			'M2.3 20a5.5 5.5 0 0 1 11 0H2.3Z',
			'M15.6 14a1.1 1.1 0 0 1 1.1-1.1h4a1.1 1.1 0 0 1 1.1 1.1v2.4a1.1 1.1 0 0 1-1.1 1.1h-4a1.1 1.1 0 0 1-1.1-1.1V14Z'
		]
	},
	{
		name: 'user-search',
		category: 'Users',
		tags: 'find people directory lookup',
		outlinePaths: ['M7.8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.3 20a5.5 5.5 0 0 1 11 0'],
		accentPaths: ['M17.8 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M19.57 14.77 21.6 16.8'],
		duotonePaths: [
			'M7.8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z',
			'M2.3 20a5.5 5.5 0 0 1 11 0H2.3Z',
			'M17.8 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
		]
	},

	// Time & Weather
	{
		name: 'sun-moon',
		category: 'Time & Weather',
		tags: 'day night cycle auto theme',
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
		name: 'cloud-fog',
		category: 'Time & Weather',
		tags: 'mist haze weather forecast',
		outlinePaths: ['M6.5 14.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 6.2a4 4 0 0 0-2 8.3Z'],
		accentPaths: ['M4.5 17.5h15', 'M7 20.5h10'],
		duotonePaths: ['M6.5 14.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 6.2a4 4 0 0 0-2 8.3Z']
	},
	{
		name: 'calendar-days',
		category: 'Time & Weather',
		tags: 'month schedule grid planner',
		outlinePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7Z', 'M8 2.5v3', 'M16 2.5v3', 'M3 9.5h18'],
		accentPaths: ['M7 13h2', 'M11 13h2', 'M15 13h2', 'M7 16.5h2', 'M11 16.5h2'],
		duotonePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v2.5H3V7Z']
	},
	{
		name: 'clock-check',
		category: 'Time & Weather',
		tags: 'ontime sla completed schedule',
		outlinePaths: ['M20.5 11.5a8.5 8.5 0 1 0-9 9', 'M12 7.5V12l2.5 1.5'],
		accentPaths: ['M15.5 18 17.5 20 21.5 16'],
		duotonePaths: ['M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z']
	},
	{
		name: 'tornado',
		category: 'Time & Weather',
		tags: 'storm cyclone weather alert',
		outlinePaths: ['M3.5 5.5h17', 'M5 9.5h14', 'M7.5 13.5h9', 'M10 17.5h5'],
		accentPaths: ['M11.5 21h2.5']
	}
]
