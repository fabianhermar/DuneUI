import type { SvgIconItem } from './types'

export const USERS_ICONS: SvgIconItem[] = [
	{
		name: 'user',
		category: 'Users',
		tags: 'account profile avatar person',
		outlinePaths: ['M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4.5 20.5a7.5 7.5 0 0 1 15 0'],
		duotonePaths: ['M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M4.5 20.5a7.5 7.5 0 0 1 15 0H4.5Z']
	},
	{
		name: 'user-plus',
		category: 'Users',
		tags: 'invite member signup add',
		outlinePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0'],
		accentPaths: ['M18.5 10.7v5.6', 'M15.7 13.5h5.6'],
		duotonePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0H2.2Z']
	},
	{
		name: 'user-check',
		category: 'Users',
		tags: 'verified member approved account',
		outlinePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0'],
		accentPaths: ['M15.2 14 17.3 16.1 21.5 11.5'],
		duotonePaths: ['M8 10.7a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.2 20a5.8 5.8 0 0 1 11.6 0H2.2Z']
	},
	{
		name: 'user-circle',
		category: 'Users',
		tags: 'avatar badge account profile',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 12.9a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z', 'M6.4 19.05a6.5 6.5 0 0 1 11.2 0'],
		duotonePaths: [
			'M12 12.9a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z',
			'M6.4 19.05a6.5 6.5 0 0 1 11.2 0A9 9 0 0 1 6.4 19.05Z'
		]
	},
	{
		name: 'users',
		category: 'Users',
		tags: 'team members group organization',
		outlinePaths: ['M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.5 20a6.5 6.5 0 0 1 13 0'],
		accentPaths: ['M14.5 4.2a3.5 3.5 0 0 1 0 6.6', 'M15.5 13.8a6 6 0 0 1 6 6.2'],
		duotonePaths: ['M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M2.5 20a6.5 6.5 0 0 1 13 0H2.5Z']
	},
	{
		name: 'id-card',
		category: 'Users',
		tags: 'badge pass identity employee',
		outlinePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z'],
		accentPaths: ['M8.5 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M5.5 16a3.2 3.2 0 0 1 6 0', 'M14 9.5h4.5', 'M14 13.5h3.5'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'crown',
		category: 'Users',
		tags: 'king pro vip admin enterprise',
		outlinePaths: ['M3.5 8.5 7.5 13 12 5.5 16.5 13l4-4.5-1.5 9.5H5L3.5 8.5Z'],
		accentPaths: ['M5 20.5h14'],
		duotonePaths: ['M3.5 8.5 7.5 13 12 5.5 16.5 13l4-4.5-1.5 9.5H5L3.5 8.5Z']
	},
	{
		name: 'award',
		category: 'Users',
		tags: 'ribbon badge recognition honor',
		outlinePaths: ['M12 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z'],
		accentPaths: ['M8.5 13.5 7 21l5-2.5L17 21l-1.5-7.5'],
		duotonePaths: ['M12 14.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z']
	},
	{
		name: 'trophy',
		category: 'Users',
		tags: 'winner champion achievement cup',
		outlinePaths: ['M7 4h10v6.5a5 5 0 0 1-10 0V4Z', 'M7 6H4.5A1.5 1.5 0 0 0 3 7.5v1A3 3 0 0 0 6 11.5h1', 'M17 6h2.5A1.5 1.5 0 0 1 21 7.5v1a3 3 0 0 1-3 3h-1'],
		accentPaths: ['M12 15.5V20', 'M8.5 20h7'],
		duotonePaths: ['M7 4h10v6.5a5 5 0 0 1-10 0V4Z']
	},
	{
		name: 'heart',
		category: 'Users',
		tags: 'like favorite sponsor love',
		outlinePaths: ['M19 14c1.6-1.55 3-3.4 3-5.6A5.4 5.4 0 0 0 16.5 3c-1.8 0-3.2.8-4.5 2.1C10.7 3.8 9.3 3 7.5 3A5.4 5.4 0 0 0 2 8.4c0 2.2 1.4 4.05 3 5.6l7 7 7-7Z'],
		duotonePaths: ['M19 14c1.6-1.55 3-3.4 3-5.6A5.4 5.4 0 0 0 16.5 3c-1.8 0-3.2.8-4.5 2.1C10.7 3.8 9.3 3 7.5 3A5.4 5.4 0 0 0 2 8.4c0 2.2 1.4 4.05 3 5.6l7 7 7-7Z']
	},
	{
		name: 'star',
		category: 'Users',
		tags: 'rating github bookmark featured',
		outlinePaths: ['M12 2.8l2.85 5.8 6.4.92-4.63 4.51 1.1 6.37L12 17.4l-5.72 3 1.1-6.37-4.63-4.51 6.4-.92L12 2.8Z'],
		duotonePaths: ['M12 2.8l2.85 5.8 6.4.92-4.63 4.51 1.1 6.37L12 17.4l-5.72 3 1.1-6.37-4.63-4.51 6.4-.92L12 2.8Z']
	},
	{
		name: 'thumbs-up',
		category: 'Users',
		tags: 'approve upvote like feedback',
		outlinePaths: ['M7 10.5v9.5H4.5A1.5 1.5 0 0 1 3 18.5v-6.5A1.5 1.5 0 0 1 4.5 10.5H7Zm0 0 3.2-6.7A1.7 1.7 0 0 1 13.4 4.5v4h5.3a2 2 0 0 1 1.97 2.34l-1.1 6.5A2 2 0 0 1 17.6 19.5H7'],
		duotonePaths: ['M7 10.5 10.2 3.8A1.7 1.7 0 0 1 13.4 4.5v4h5.3a2 2 0 0 1 1.97 2.34l-1.1 6.5A2 2 0 0 1 17.6 19.5H7v-9Z']
	},
	{
		name: 'smile',
		category: 'Users',
		tags: 'emoji happy reaction sentiment',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M9 9.5h.01', 'M15 9.5h.01', 'M8.5 14a4.2 4.2 0 0 0 7 0'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'flame',
		category: 'Users',
		tags: 'trending hot streak fire popular',
		outlinePaths: ['M12.3 2.8c.4 3.2-2.2 4.8-2.3 7.4-.1 1.4.8 2.4 2 2.4 1.6 0 2.5-1.4 2.3-3.3 2.5 1.7 4.2 4.2 4.2 6.9a6.5 6.5 0 1 1-13 0c0-3.8 2.6-7.4 6.8-13.4Z'],
		duotonePaths: ['M12.3 2.8c.4 3.2-2.2 4.8-2.3 7.4-.1 1.4.8 2.4 2 2.4 1.6 0 2.5-1.4 2.3-3.3 2.5 1.7 4.2 4.2 4.2 6.9a6.5 6.5 0 1 1-13 0c0-3.8 2.6-7.4 6.8-13.4Z']
	},
	{
		name: 'rocket',
		category: 'Users',
		tags: 'launch ship deploy startup growth',
		outlinePaths: [
			'M6.5 13.5C9 8 14 4 20.5 3.5 20 10 16 15 10.5 17.5L6.5 13.5Z',
			'M9.3 9.5H5.5l1 4',
			'M14.5 14.7v3.8l-4-1'
		],
		accentPaths: [
			'M14.2 11.4a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z',
			'M6.5 15.5c-1.5.5-2.5 1.8-3 5 3.2-.5 4.5-1.5 5-3'
		],
		duotonePaths: ['M6.5 13.5C9 8 14 4 20.5 3.5 20 10 16 15 10.5 17.5L6.5 13.5Z']
	},
	{
		name: 'graduation-cap',
		category: 'Users',
		tags: 'learn academy course tutorial',
		outlinePaths: ['M2.5 9.5 12 4.5l9.5 5L12 14.5 2.5 9.5Z', 'M6.5 11.8v5.2c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5.2'],
		accentPaths: ['M21.5 9.5V16'],
		duotonePaths: ['M2.5 9.5 12 4.5l9.5 5L12 14.5 2.5 9.5Z']
	},
	{
		name: 'accessibility',
		category: 'Users',
		tags: 'a11y inclusive universal design',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 7.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M7.5 10.5h9', 'M12 10.5v3.5', 'M12 14l-2.5 3.5', 'M12 14l2.5 3.5'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'compass-rose',
		category: 'Users',
		tags: 'values culture north star',
		outlinePaths: ['M12 2.5 14.5 9.5 21.5 12l-7 2.5L12 21.5l-2.5-7-7-2.5 7-2.5L12 2.5Z'],
		accentPaths: ['M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M12 2.5 14.5 9.5 21.5 12l-7 2.5L12 21.5l-2.5-7-7-2.5 7-2.5L12 2.5Z']
	},
	{
		name: 'user-cog',
		category: 'Users',
		tags: 'account settings preferences admin',
		outlinePaths: ['M7.5 10.7a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z', 'M2.2 20a5.3 5.3 0 0 1 10.6 0'],
		accentPaths: [
			'M18 16.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
			'M18 10.6v1.2',
			'M18 16.2v1.2',
			'M14.6 14h1.2',
			'M20.2 14h1.2',
			'M15.67 11.67l.78.78',
			'M19.55 15.55l.78.78',
			'M20.33 11.67l-.78.78',
			'M16.45 15.55l-.78.78'
		],
		duotonePaths: [
			'M7.5 10.7a3.4 3.4 0 1 0 0-6.8 3.4 3.4 0 0 0 0 6.8Z',
			'M2.2 20a5.3 5.3 0 0 1 10.6 0H2.2Z',
			'M18 16.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z'
		]
	},
	{
		name: 'contact-book',
		category: 'Users',
		tags: 'directory crm address contacts',
		outlinePaths: ['M5 4.5A2.5 2.5 0 0 1 7.5 2h10A2.5 2.5 0 0 1 20 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 5 19.5v-15Z'],
		accentPaths: ['M12.5 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M9 16a3.5 3.5 0 0 1 7 0', 'M3.5 7h2', 'M3.5 12h2', 'M3.5 17h2'],
		duotonePaths: ['M5 4.5A2.5 2.5 0 0 1 7.5 2h10A2.5 2.5 0 0 1 20 4.5v15a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 5 19.5v-15Z']
	}
]
