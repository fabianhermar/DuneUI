import type { SvgIconItem } from './types'

export const LIFESTYLE_ICONS: SvgIconItem[] = [
	{
		name: 'coffee',
		category: 'Lifestyle',
		tags: 'cafe espresso drink cup break',
		outlinePaths: ['M4.5 9.5h11.5v5.5a5 5 0 0 1-5 5H9.5a5 5 0 0 1-5-5V9.5Z', 'M16 10.5h2a2.5 2.5 0 0 1 0 5h-2'],
		accentPaths: ['M7.5 4v2.5', 'M10.5 3.5v3', 'M13.5 4v2.5'],
		duotonePaths: ['M4.5 9.5h11.5v5.5a5 5 0 0 1-5 5H9.5a5 5 0 0 1-5-5V9.5Z']
	},
	{
		name: 'cup-soda',
		category: 'Lifestyle',
		tags: 'beverage drink straw takeaway',
		outlinePaths: ['M6 8h12l-1.3 11a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8L6 8Z', 'M4.5 8h15'],
		accentPaths: ['M12 8V4l3.5-1'],
		duotonePaths: ['M6.5 11.5h11l-.8 7.5a2 2 0 0 1-2 1.8H9.3a2 2 0 0 1-2-1.8l-.8-7.5Z']
	},
	{
		name: 'utensils',
		category: 'Lifestyle',
		tags: 'restaurant food dining menu',
		outlinePaths: ['M5.5 3.5v5.5a3 3 0 0 0 6 0V3.5', 'M8.5 3.5v17'],
		accentPaths: ['M16.5 3.5v17', 'M16.5 3.5c2 0 3 2.2 3 5.5s-1 4-3 4'],
		duotonePaths: ['M16.5 3.5c2 0 3 2.2 3 5.5s-1 4-3 4v-9.5Z']
	},
	{
		name: 'pizza',
		category: 'Lifestyle',
		tags: 'food slice restaurant delivery',
		outlinePaths: [
			'M3.5 20.5 9.2 2.8A18.5 18.5 0 0 1 21.2 14.8L3.5 20.5Z',
			'M8.1 6.2A15 15 0 0 1 17.8 15.9'
		],
		accentPaths: [
			'M11.2 13.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
			'M8 15.8h.01',
			'M14.2 13.8h.01'
		],
		duotonePaths: ['M3.5 20.5 8.1 6.2A15 15 0 0 1 17.8 15.9L3.5 20.5Z']
	},
	{
		name: 'cake',
		category: 'Lifestyle',
		tags: 'birthday celebration party dessert',
		outlinePaths: ['M4 13.5A2.5 2.5 0 0 1 6.5 11h11a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-5Z'],
		accentPaths: ['M4 15.5c1.5 1 3 1 4 0s2.5-1 4 0 3 1 4 0 2.5-1 4 0', 'M8.5 11V8', 'M12 11V8', 'M15.5 11V8', 'M8.5 5.5h.01', 'M12 5.5h.01', 'M15.5 5.5h.01'],
		duotonePaths: ['M4 13.5A2.5 2.5 0 0 1 6.5 11h11a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 17.5 21h-11A2.5 2.5 0 0 1 4 18.5v-5Z']
	},
	{
		name: 'leaf',
		category: 'Lifestyle',
		tags: 'eco nature green organic sustainability',
		outlinePaths: ['M6.5 17.5C3.5 14.5 7.5 4.5 20 4c-.5 12.5-10.5 16.5-13.5 13.5Z'],
		accentPaths: ['M3.5 20.5 14.5 9.5'],
		duotonePaths: ['M6.5 17.5C3.5 14.5 7.5 4.5 20 4c-.5 12.5-10.5 16.5-13.5 13.5Z']
	},
	{
		name: 'tree-pine',
		category: 'Lifestyle',
		tags: 'forest nature outdoors camping',
		outlinePaths: ['M12 3 6.5 10.5h3L5 17h14l-4.5-6.5h3L12 3Z'],
		accentPaths: ['M12 17v4'],
		duotonePaths: ['M12 3 6.5 10.5h3L5 17h14l-4.5-6.5h3L12 3Z']
	},
	{
		name: 'paw-print',
		category: 'Lifestyle',
		tags: 'pet dog cat animal veterinary',
		outlinePaths: [
			'M12 11.5c-2.2 0-3.6 1.5-4.6 3.2-.8 1.3-1.1 2.2-1.1 3.1a2.7 2.7 0 0 0 2.7 2.7c1.1 0 1.9-.6 3-.6s1.9.6 3 .6a2.7 2.7 0 0 0 2.7-2.7c0-.9-.3-1.8-1.1-3.1-1-1.7-2.4-3.2-4.6-3.2Z'
		],
		accentPaths: [
			'M4.8 12.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M9.3 7.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M14.7 7.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M19.2 12.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z'
		],
		duotonePaths: [
			'M12 11.5c-2.2 0-3.6 1.5-4.6 3.2-.8 1.3-1.1 2.2-1.1 3.1a2.7 2.7 0 0 0 2.7 2.7c1.1 0 1.9-.6 3-.6s1.9.6 3 .6a2.7 2.7 0 0 0 2.7-2.7c0-.9-.3-1.8-1.1-3.1-1-1.7-2.4-3.2-4.6-3.2Z'
		]
	},
	{
		name: 'bed',
		category: 'Lifestyle',
		tags: 'hotel sleep room stay booking',
		outlinePaths: ['M3 6.5v13', 'M21 11.5v8', 'M3 16.5h18', 'M3 11.5h14.5A3.5 3.5 0 0 1 21 15v1.5'],
		accentPaths: ['M6.5 11.5v-2A1.5 1.5 0 0 1 8 8h2a1.5 1.5 0 0 1 1.5 1.5v2'],
		duotonePaths: ['M3 11.5h14.5A3.5 3.5 0 0 1 21 15v1.5H3v-5Z']
	},
	{
		name: 'lamp-desk',
		category: 'Lifestyle',
		tags: 'workspace light study office',
		outlinePaths: [
			'M14.5 5 11 3.5 5.5 9l3.5 3.5 5.5-7.5Z',
			'M13 6.5 18.5 11a1.5 1.5 0 0 1 .2 2L14 20',
			'M8.5 20h10'
		],
		accentPaths: ['M6.2 10.2a1.8 1.8 0 0 0 2.5 2.5'],
		duotonePaths: ['M14.5 5 11 3.5 5.5 9l3.5 3.5 5.5-7.5Z']
	},
	{
		name: 'shirt',
		category: 'Lifestyle',
		tags: 'apparel fashion clothing store tshirt',
		outlinePaths: [
			'M8.5 3.5 3 6.5 5.2 11 7 10v9.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5V10l1.8 1L21 6.5 15.5 3.5'
		],
		accentPaths: ['M8.5 3.5a3.5 3.5 0 0 0 7 0'],
		duotonePaths: [
			'M15.5 3.5a3.5 3.5 0 0 1-7 0L3 6.5 5.2 11 7 10v9.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5V10l1.8 1L21 6.5 15.5 3.5Z'
		]
	},
	{
		name: 'glasses',
		category: 'Lifestyle',
		tags: 'read eyewear geek focus',
		outlinePaths: [
			'M6.5 17.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z',
			'M17.5 17.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z'
		],
		accentPaths: [
			'M9.7 14.3a2.3 2.3 0 0 1 4.6 0',
			'M3.4 13.5 5 7.2A1.5 1.5 0 0 1 6.5 6H7',
			'M20.6 13.5 19 7.2A1.5 1.5 0 0 0 17.5 6H17'
		],
		duotonePaths: [
			'M6.5 17.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z',
			'M17.5 17.5a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z'
		]
	},
	{
		name: 'dumbbell',
		category: 'Lifestyle',
		tags: 'fitness gym workout sport health',
		outlinePaths: ['M6.5 6.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 9 19H8a1.5 1.5 0 0 1-1.5-1.5v-11Z', 'M13.5 6.5A1.5 1.5 0 0 1 15 5h1a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 16 19h-1a1.5 1.5 0 0 1-1.5-1.5v-11Z'],
		accentPaths: ['M10.5 12h3', 'M3.5 9v6', 'M20.5 9v6'],
		duotonePaths: ['M6.5 6.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 9 19H8a1.5 1.5 0 0 1-1.5-1.5v-11Z', 'M13.5 6.5A1.5 1.5 0 0 1 15 5h1a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 16 19h-1a1.5 1.5 0 0 1-1.5-1.5v-11Z']
	},
	{
		name: 'bike',
		category: 'Lifestyle',
		tags: 'cycling commute eco delivery',
		outlinePaths: ['M5.2 20.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z', 'M18.8 20.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z'],
		accentPaths: ['M5.2 17 9.5 10.5h6L12 17H5.2Z', 'M12 17 8.8 8.2', 'M7.2 8.2h3.2', 'M18.8 17 14.5 7.8h2.5'],
		duotonePaths: ['M5.2 20.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z', 'M18.8 20.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z']
	},
	{
		name: 'car',
		category: 'Lifestyle',
		tags: 'drive vehicle transport mobility',
		outlinePaths: ['M5 11.5 6.8 6.5A2 2 0 0 1 8.7 5h6.6a2 2 0 0 1 1.9 1.5l1.8 5', 'M3 13.5A2 2 0 0 1 5 11.5h14a2 2 0 0 1 2 2V17a1.5 1.5 0 0 1-1.5 1.5H19', 'M5 18.5H4.5A1.5 1.5 0 0 1 3 17v-3.5'],
		accentPaths: ['M7 20a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z', 'M17 20a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z', 'M8.8 18.2h6.4'],
		duotonePaths: ['M3 13.5A2 2 0 0 1 5 11.5h14a2 2 0 0 1 2 2V17a1.5 1.5 0 0 1-1.5 1.5H4.5A1.5 1.5 0 0 1 3 17v-3.5Z']
	},
	{
		name: 'plane',
		category: 'Lifestyle',
		tags: 'flight travel airport trip',
		outlinePaths: ['M21 15.5v-2l-7.5-4.5V4.5a1.5 1.5 0 0 0-3 0V9L3 13.5v2l7.5-2.2V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13.5 18v-4.7l7.5 2.2Z'],
		duotonePaths: ['M21 15.5v-2l-7.5-4.5V4.5a1.5 1.5 0 0 0-3 0V9L3 13.5v2l7.5-2.2V18l-2 1.5V21l3.5-1 3.5 1v-1.5L13.5 18v-4.7l7.5 2.2Z']
	},
	{
		name: 'train',
		category: 'Lifestyle',
		tags: 'transit metro rail travel',
		outlinePaths: ['M5.5 6.5A3 3 0 0 1 8.5 3.5h7a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3h-7a3 3 0 0 1-3-3v-9Z'],
		accentPaths: ['M5.5 11.5h13', 'M9 15h.01', 'M15 15h.01', 'M8 18.5 6 21', 'M16 18.5l2 2.5'],
		duotonePaths: ['M5.5 6.5A3 3 0 0 1 8.5 3.5h7a3 3 0 0 1 3 3v5h-13v-5Z']
	},
	{
		name: 'luggage',
		category: 'Lifestyle',
		tags: 'suitcase travel vacation bag',
		outlinePaths: ['M5.5 9A2.5 2.5 0 0 1 8 6.5h8A2.5 2.5 0 0 1 18.5 9v9.5A2.5 2.5 0 0 1 16 21H8a2.5 2.5 0 0 1-2.5-2.5V9Z', 'M9.5 6.5V4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5'],
		accentPaths: ['M9.5 10.5v6.5', 'M14.5 10.5v6.5'],
		duotonePaths: ['M5.5 9A2.5 2.5 0 0 1 8 6.5h8A2.5 2.5 0 0 1 18.5 9v9.5A2.5 2.5 0 0 1 16 21H8a2.5 2.5 0 0 1-2.5-2.5V9Z']
	},
	{
		name: 'pill',
		category: 'Lifestyle',
		tags: 'medicine pharmacy health care',
		outlinePaths: ['M10.5 20.5 20.5 10.5a4.95 4.95 0 0 0-7-7L3.5 13.5a4.95 4.95 0 0 0 7 7Z'],
		accentPaths: ['M8.5 8.5l7 7'],
		duotonePaths: ['M8.5 8.5 13.5 3.5a4.95 4.95 0 0 1 7 7l-5 5-7-7Z']
	},
	{
		name: 'stethoscope',
		category: 'Lifestyle',
		tags: 'doctor clinic medical health',
		outlinePaths: ['M5.5 3.5v5a4.5 4.5 0 0 0 9 0v-5', 'M10 13v2.5a4.5 4.5 0 0 0 9 0V11'],
		accentPaths: ['M19 11a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z', 'M4.5 3.5h2', 'M13.5 3.5h2'],
		duotonePaths: ['M19 11a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z']
	},
	{
		name: 'gamepad',
		category: 'Lifestyle',
		tags: 'gaming controller play esports',
		outlinePaths: ['M6.5 7.5h11a4 4 0 0 1 3.9 4.8l-.8 3.6A2.5 2.5 0 0 1 18.1 18c-1 0-1.9-.5-2.4-1.3L14.5 15h-5l-1.2 1.7A2.8 2.8 0 0 1 5.9 18a2.5 2.5 0 0 1-2.5-2.1l-.8-3.6a4 4 0 0 1 3.9-4.8Z'],
		accentPaths: ['M7.5 10v3', 'M6 11.5h3', 'M15.5 10.8h.01', 'M17.5 12.2h.01'],
		duotonePaths: ['M6.5 7.5h11a4 4 0 0 1 3.9 4.8l-.8 3.6A2.5 2.5 0 0 1 18.1 18c-1 0-1.9-.5-2.4-1.3L14.5 15h-5l-1.2 1.7A2.8 2.8 0 0 1 5.9 18a2.5 2.5 0 0 1-2.5-2.1l-.8-3.6a4 4 0 0 1 3.9-4.8Z']
	},
	{
		name: 'dice',
		category: 'Lifestyle',
		tags: 'random game luck roll',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M8.5 8.5h.01', 'M15.5 8.5h.01', 'M12 12h.01', 'M8.5 15.5h.01', 'M15.5 15.5h.01'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'lightbulb',
		category: 'Lifestyle',
		tags: 'idea tip insight innovation',
		outlinePaths: ['M15 15.5c.6-1.2 2-2.5 2-5a5 5 0 0 0-10 0c0 2.5 1.4 3.8 2 5h6Z'],
		accentPaths: ['M9.5 18.5h5', 'M10.5 21h3', 'M12 2.5v1'],
		duotonePaths: ['M15 15.5c.6-1.2 2-2.5 2-5a5 5 0 0 0-10 0c0 2.5 1.4 3.8 2 5h6Z']
	},
	{
		name: 'recycle',
		category: 'Lifestyle',
		tags: 'eco green loop circular',
		outlinePaths: [
			'M19.2 13.5 20.66 16a2 2 0 0 1-1.73 3H13.5',
			'M15.7 16.8 13.5 19 15.7 21.2',
			'M9.1 19H5.07a2 2 0 0 1-1.73-3L6.05 11.3',
			'M3.05 12.1 6.05 11.3 6.86 14.3'
		],
		accentPaths: [
			'M7.7 8 10.27 4a2 2 0 0 1 3.46 0l2.72 4.7',
			'M13.44 7.9 16.45 8.7 17.25 5.7'
		],
		duotonePaths: ['M12 5.5 18.8 17.5H5.2L12 5.5Z']
	},
	{
		name: 'backpack',
		category: 'Lifestyle',
		tags: 'school student travel bag',
		outlinePaths: ['M5 10.5A5.5 5.5 0 0 1 10.5 5h3A5.5 5.5 0 0 1 19 10.5V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.5Z', 'M9.5 5V3.8A1.3 1.3 0 0 1 10.8 2.5h2.4a1.3 1.3 0 0 1 1.3 1.3V5'],
		accentPaths: ['M8 14.5A1.5 1.5 0 0 1 9.5 13h5a1.5 1.5 0 0 1 1.5 1.5V21H8v-6.5Z', 'M8 10h8'],
		duotonePaths: ['M5 10.5A5.5 5.5 0 0 1 10.5 5h3A5.5 5.5 0 0 1 19 10.5V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-8.5Z']
	},
	{
		name: 'shopping-basket',
		category: 'Lifestyle',
		tags: 'groceries market checkout retail',
		outlinePaths: ['M3.5 10h17l-1.5 8.5a2 2 0 0 1-2 1.6H7a2 2 0 0 1-2-1.6L3.5 10Z'],
		accentPaths: ['M8 10l2.5-5.5', 'M16 10l-2.5-5.5', 'M9.5 14v2.5', 'M14.5 14v2.5'],
		duotonePaths: ['M3.5 10h17l-1.5 8.5a2 2 0 0 1-2 1.6H7a2 2 0 0 1-2-1.6L3.5 10Z']
	},
	{
		name: 'mountain',
		category: 'Lifestyle',
		tags: 'outdoors peak adventure nature',
		outlinePaths: ['M3 19.5 9.5 6.5l4.2 7.5 2.8-4.2L21 19.5H3Z'],
		accentPaths: ['M7.3 11l2.2 1.5 2-1.5'],
		duotonePaths: ['M3 19.5 9.5 6.5l4.2 7.5 2.8-4.2L21 19.5H3Z']
	},
	{
		name: 'flower',
		category: 'Lifestyle',
		tags: 'bloom spring garden wellness',
		outlinePaths: [
			'M9.7 8a2.7 2.7 0 1 1 4.6 0 2.7 2.7 0 1 1 2.3 4 2.7 2.7 0 1 1-2.3 4 2.7 2.7 0 1 1-4.6 0 2.7 2.7 0 1 1-2.3-4 2.7 2.7 0 1 1 2.3-4Z'
		],
		accentPaths: ['M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		duotonePaths: [
			'M9.7 8a2.7 2.7 0 1 1 4.6 0 2.7 2.7 0 1 1 2.3 4 2.7 2.7 0 1 1-2.3 4 2.7 2.7 0 1 1-4.6 0 2.7 2.7 0 1 1-2.3-4 2.7 2.7 0 1 1 2.3-4Z'
		]
	},
	{
		name: 'sofa',
		category: 'Lifestyle',
		tags: 'furniture living room home',
		outlinePaths: ['M5 10.5V7A2.5 2.5 0 0 1 7.5 4.5h9A2.5 2.5 0 0 1 19 7v3.5', 'M3 12.5A2 2 0 0 1 5 10.5a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 4 0V17a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17v-4.5Z'],
		accentPaths: ['M5.5 18.5V20', 'M18.5 18.5V20'],
		duotonePaths: ['M3 12.5A2 2 0 0 1 5 10.5a2 2 0 0 1 2 2v2h10v-2a2 2 0 0 1 4 0V17a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17v-4.5Z']
	},
	{
		name: 'apple-fruit',
		category: 'Lifestyle',
		tags: 'food healthy nutrition snack',
		outlinePaths: [
			'M12 20.5c1.5 0 2.6.9 3.8.9 2.7 0 5.2-6.2 5.2-10.2A4.4 4.4 0 0 0 16.6 6.8c-1.7 0-3.2 1.2-4.6 1.2S9.1 6.8 7.4 6.8A4.4 4.4 0 0 0 3 11.2c0 4 2.5 10.2 5.2 10.2 1.2 0 2.3-.9 3.8-.9Z'
		],
		accentPaths: ['M12 8c0-2.5 1-4.5 2.8-5.5', 'M12 5.8c0-1.8 1.5-3 3.5-2.8-.2 2-1.6 3.1-3.5 2.8Z'],
		duotonePaths: [
			'M12 20.5c1.5 0 2.6.9 3.8.9 2.7 0 5.2-6.2 5.2-10.2A4.4 4.4 0 0 0 16.6 6.8c-1.7 0-3.2 1.2-4.6 1.2S9.1 6.8 7.4 6.8A4.4 4.4 0 0 0 3 11.2c0 4 2.5 10.2 5.2 10.2 1.2 0 2.3-.9 3.8-.9Z'
		]
	},
	{
		name: 'music-cd',
		category: 'Lifestyle',
		tags: 'podcast entertainment dj track',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: [
			'M12 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
			'M6.25 12A5.75 5.75 0 0 1 12 6.25',
			'M17.75 12A5.75 5.75 0 0 1 12 17.75'
		],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'gift-card',
		category: 'Lifestyle',
		tags: 'voucher present reward celebration',
		outlinePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z'],
		accentPaths: ['M2.5 11h19', 'M9.5 4.5v15', 'M9.5 11c-1.5 0-2.5-1-2.5-2s1-1.5 2.5 0', 'M9.5 11c1.5 0 2.5-1 2.5-2s-1-1.5-2.5 0'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	}
]
