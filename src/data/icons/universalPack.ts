import type { SvgIconItem } from './types'

export const UNIVERSAL_PACK_ICONS: SvgIconItem[] = [
	{
		name: 'compass-2',
		category: 'Navigation',
		tags: 'discover explore travel guide',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M15.2 8.8l-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z', 'M12 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'],
		duotonePaths: ['M15.2 8.8l-1.9 4.5-4.5 1.9 1.9-4.5 4.5-1.9Z']
	},
	{
		name: 'map-pinned',
		category: 'Navigation',
		tags: 'checkin destination location map',
		outlinePaths: ['M16.5 8.5c0 4-4.5 7.5-4.5 7.5S7.5 12.5 7.5 8.5a4.5 4.5 0 0 1 9 0Z', 'M5 17.5h14l1.5 3.5H3.5L5 17.5Z'],
		accentPaths: ['M12 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M16.5 8.5c0 4-4.5 7.5-4.5 7.5S7.5 12.5 7.5 8.5a4.5 4.5 0 0 1 9 0Z']
	},
	{
		name: 'bell-plus',
		category: 'Communication',
		tags: 'subscribe alert reminder add',
		outlinePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z', 'M10 19.5a2 2 0 0 0 4 0'],
		accentPaths: ['M12 7.5v4', 'M10 9.5h4'],
		duotonePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z']
	},
	{
		name: 'message-heart',
		category: 'Communication',
		tags: 'like feedback love chat',
		outlinePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H8.2L4 21v-3.8A2.5 2.5 0 0 1 3.5 15V6Z'],
		accentPaths: ['M12 13.8s-3.2-2-3.2-4.1a1.8 1.8 0 0 1 3.2-1.1 1.8 1.8 0 0 1 3.2 1.1c0 2.1-3.2 4.1-3.2 4.1Z'],
		duotonePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H8.2L4 21v-3.8A2.5 2.5 0 0 1 3.5 15V6Z']
	},
	{
		name: 'phone-outgoing',
		category: 'Communication',
		tags: 'dial call outbound support',
		outlinePaths: ['M5 4.5h2.8a1.3 1.3 0 0 1 1.25.95l.7 2.5a1.3 1.3 0 0 1-.35 1.28L8 10.5a11.5 11.5 0 0 0 4.5 4.5l1.27-1.4a1.3 1.3 0 0 1 1.28-.35l2.5.7a1.3 1.3 0 0 1 .95 1.25V18a2 2 0 0 1-2 2C9.5 20 3 13.5 3 6.5a2 2 0 0 1 2-2Z'],
		accentPaths: ['M15 9l5-5', 'M15.5 4H20v4.5'],
		duotonePaths: ['M5 4.5h2.8a1.3 1.3 0 0 1 1.25.95l.7 2.5a1.3 1.3 0 0 1-.35 1.28L8 10.5a11.5 11.5 0 0 0 4.5 4.5l1.27-1.4a1.3 1.3 0 0 1 1.28-.35l2.5.7a1.3 1.3 0 0 1 .95 1.25V18a2 2 0 0 1-2 2C9.5 20 3 13.5 3 6.5a2 2 0 0 1 2-2Z']
	},
	{
		name: 'camera-off',
		category: 'Media',
		tags: 'no photo privacy camera disabled',
		outlinePaths: ['M9 4.5h5.3a1.5 1.5 0 0 1 1.2.5l1.5 2h1.5A2.5 2.5 0 0 1 21 9.5v7', 'M3 9.5A2.5 2.5 0 0 1 5.5 7H7', 'M3 9.5V17.5A2.5 2.5 0 0 0 5.5 20h12', 'M9.8 10.2a3.2 3.2 0 0 0 4.2 4.2'],
		accentPaths: ['M3 3l18 18']
	},
	{
		name: 'music-2',
		category: 'Media',
		tags: 'audio single note track',
		outlinePaths: ['M11.5 17.5V4.5l7-1.5v4.5l-7 1.5'],
		accentPaths: ['M8.5 20.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
		duotonePaths: ['M8.5 20.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z']
	},
	{
		name: 'smart-home',
		category: 'Devices',
		tags: 'iot wifi house automation',
		outlinePaths: ['M3.5 10.2a2.5 2.5 0 0 1 .9-1.9l6.3-5.2a2 2 0 0 1 2.6 0l6.3 5.2a2.5 2.5 0 0 1 .9 1.9v8.3a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5v-8.3Z'],
		accentPaths: ['M9 13.5a4.2 4.2 0 0 1 6 0', 'M12 16.8h.01'],
		duotonePaths: ['M3.5 10.2a2.5 2.5 0 0 1 .9-1.9l6.3-5.2a2 2 0 0 1 2.6 0l6.3 5.2a2.5 2.5 0 0 1 .9 1.9v8.3a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5v-8.3Z']
	},
	{
		name: 'cpu-boost',
		category: 'Development',
		tags: 'overclock turbo compute fast',
		outlinePaths: ['M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7Z', 'M9 2v2.5', 'M15 2v2.5', 'M9 19.5V22', 'M15 19.5V22'],
		accentPaths: ['M12.5 7.5 9.5 12h4L11 16.5'],
		duotonePaths: ['M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7Z']
	},
	{
		name: 'globe-lock',
		category: 'Security',
		tags: 'vpn ssl https private web',
		outlinePaths: [
			'M12.2 19.9A8.5 8.5 0 1 1 19.8 12',
			'M3.1 11.5h11',
			'M4.6 7h13.8',
			'M11.5 3a11 11 0 0 0-3 8.5 11 11 0 0 0 3 8.5',
			'M11.5 3a11 11 0 0 1 2.9 7.8'
		],
		accentPaths: [
			'M14.5 15.8a1.2 1.2 0 0 1 1.2-1.2h4.1a1.2 1.2 0 0 1 1.2 1.2v3.5a1.2 1.2 0 0 1-1.2 1.2h-4.1a1.2 1.2 0 0 1-1.2-1.2v-3.5Z',
			'M16 14.6v-1.4a1.75 1.75 0 0 1 3.5 0v1.4'
		],
		duotonePaths: [
			'M14.5 15.8a1.2 1.2 0 0 1 1.2-1.2h4.1a1.2 1.2 0 0 1 1.2 1.2v3.5a1.2 1.2 0 0 1-1.2 1.2h-4.1a1.2 1.2 0 0 1-1.2-1.2v-3.5Z'
		]
	},
	{
		name: 'eye-scan',
		category: 'Security',
		tags: 'biometric inspect verify',
		outlinePaths: ['M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z'],
		accentPaths: ['M12 14.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z', 'M4 12h16'],
		duotonePaths: ['M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z']
	},
	{
		name: 'book-closed',
		category: 'Files',
		tags: 'guide library handbook textbook',
		outlinePaths: ['M5 4.5A2.5 2.5 0 0 1 7.5 2H18a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H7.5A2.5 2.5 0 0 1 5 18.5v-14Z'],
		accentPaths: ['M5 17.5A2.5 2.5 0 0 1 7.5 15h12', 'M9 6.5h6'],
		duotonePaths: ['M5 4.5A2.5 2.5 0 0 1 7.5 2H18a1.5 1.5 0 0 1 1.5 1.5V15H7.5A2.5 2.5 0 0 0 5 17.5v-13Z']
	},
	{
		name: 'clipboard-copy',
		category: 'Files',
		tags: 'clone duplicate paste',
		outlinePaths: ['M8.5 4.5H7A2.5 2.5 0 0 0 4.5 7v11.5A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 17 4.5h-1.5', 'M8.5 4.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 14 7h-4a1.5 1.5 0 0 1-1.5-1.5v-1Z'],
		accentPaths: ['M8.5 11.5h7', 'M8.5 15.5h4.5'],
		duotonePaths: ['M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v11.5A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5V7Z']
	},
	{
		name: 'store-pin',
		category: 'Commerce',
		tags: 'branch local pickup store locator',
		outlinePaths: ['M3 9.5 4.8 4.5A1.5 1.5 0 0 1 6.2 3.5h11.6a1.5 1.5 0 0 1 1.4 1L21 9.5', 'M4.5 11.5v7A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5v-7', 'M3 9.5a2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0'],
		accentPaths: ['M12 17.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
		duotonePaths: ['M4.5 11.5h15v7A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5v-7Z']
	},
	{
		name: 'box-return',
		category: 'Commerce',
		tags: 'refund exchange parcel back',
		outlinePaths: ['M20.5 12V7.7a2 2 0 0 0-1.02-1.74l-6.5-3.6a2 2 0 0 0-1.96 0l-6.5 3.6A2 2 0 0 0 3.5 7.7v8.6a2 2 0 0 0 1.02 1.74l6.5 3.6a2 2 0 0 0 1.96 0', 'M3.8 7 12 11.5 20.2 7', 'M12 21.8V11.5'],
		accentPaths: ['M21 17.5h-5.5', 'M17.5 15l-2.5 2.5 2.5 2.5'],
		duotonePaths: ['M12 11.5 3.8 7l8.2-4.6L20.2 7 12 11.5Z']
	},
	{
		name: 'hospital-cross',
		category: 'Lifestyle',
		tags: 'medical clinic health emergency',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M12 7.5v9', 'M7.5 12h9'],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z']
	},
	{
		name: 'ticket-plane',
		category: 'Lifestyle',
		tags: 'boarding pass flight travel',
		outlinePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v1.8a1.7 1.7 0 0 0 0 3.4v1.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-1.8a1.7 1.7 0 0 0 0-3.4V8.5Z'],
		accentPaths: ['M14 6.5v11', 'M7 12h4.5', 'M9.5 9.5 11.5 12l-2 2.5'],
		duotonePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v1.8a1.7 1.7 0 0 0 0 3.4v1.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-1.8a1.7 1.7 0 0 0 0-3.4V8.5Z']
	},
	{
		name: 'umbrella-beach',
		category: 'Lifestyle',
		tags: 'vacation resort summer holiday',
		outlinePaths: ['M19.5 13.5A7.5 7.5 0 0 0 5 8.5l14.5 5Z', 'M12.2 11 9.5 20.5'],
		accentPaths: ['M5 20.5h14'],
		duotonePaths: ['M19.5 13.5A7.5 7.5 0 0 0 5 8.5l14.5 5Z']
	},
	{
		name: 'sparkles-pen',
		category: 'Design',
		tags: 'ai write copyedit magic',
		outlinePaths: ['M15 4.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L8.8 18.7 4 20l1.3-4.8L15 4.5Z'],
		accentPaths: ['M6 4v3', 'M4.5 5.5h3', 'M18.5 15.5v3', 'M17 17h3'],
		duotonePaths: ['M15 4.5a2 2 0 0 1 2.8 0l1.2 1.2a2 2 0 0 1 0 2.8L8.8 18.7 4 20l1.3-4.8L15 4.5Z']
	},
	{
		name: 'type-italic',
		category: 'Design',
		tags: 'serif slant editorial font',
		outlinePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z'],
		accentPaths: ['M10.5 8h4', 'M9.5 16h4', 'M13 8l-2 8'],
		duotonePaths: ['M3.5 7A3.5 3.5 0 0 1 7 3.5h10A3.5 3.5 0 0 1 20.5 7v10a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 17V7Z']
	},
	{
		name: 'bell-ringing',
		category: 'Productivity',
		tags: 'alarm notification alert',
		outlinePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z', 'M10 19.5a2 2 0 0 0 4 0'],
		accentPaths: ['M3 6.5A10 10 0 0 0 2 11', 'M21 6.5A10 10 0 0 1 22 11'],
		duotonePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z']
	},
	{
		name: 'kanban-2',
		category: 'Productivity',
		tags: 'cards sprint board columns',
		outlinePaths: ['M4 5.5A1.5 1.5 0 0 1 5.5 4h2A1.5 1.5 0 0 1 9 5.5v13A1.5 1.5 0 0 1 7.5 20h-2A1.5 1.5 0 0 1 4 18.5v-13Z', 'M10.5 5.5A1.5 1.5 0 0 1 12 4h2a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 14 14h-2a1.5 1.5 0 0 1-1.5-1.5v-7Z', 'M17 5.5A1.5 1.5 0 0 1 18.5 4h.5a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-.5A1.5 1.5 0 0 1 17 15.5v-10Z'],
		duotonePaths: ['M4 5.5A1.5 1.5 0 0 1 5.5 4h2A1.5 1.5 0 0 1 9 5.5v13A1.5 1.5 0 0 1 7.5 20h-2A1.5 1.5 0 0 1 4 18.5v-13Z', 'M10.5 5.5A1.5 1.5 0 0 1 12 4h2a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 14 14h-2a1.5 1.5 0 0 1-1.5-1.5v-7Z']
	},
	{
		name: 'cloud-sun-rain',
		category: 'Time & Weather',
		tags: 'mixed weather shower forecast',
		outlinePaths: ['M6 16.5h8.2a2.8 2.8 0 0 0 .3-5.58A4.2 4.2 0 0 0 6 10a3.25 3.25 0 0 0 0 6.5Z'],
		accentPaths: [
			'M13.6 5.2A2.8 2.8 0 1 1 16.9 8.9',
			'M16.2 1.5v1',
			'M20.2 2.2l-.7.7',
			'M21.5 6.2h-1',
			'M7 19l-1 2.2',
			'M10.5 19l-1 2.2',
			'M14 19l-1 2.2'
		],
		duotonePaths: ['M6 16.5h8.2a2.8 2.8 0 0 0 .3-5.58A4.2 4.2 0 0 0 6 10a3.25 3.25 0 0 0 0 6.5Z']
	},
	{
		name: 'bolt-cloud',
		category: 'Time & Weather',
		tags: 'storm electric weather power',
		outlinePaths: ['M16.5 15h.7a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 7.2 6.7a4.2 4.2 0 0 0-.7 8.3h1'],
		accentPaths: ['M13 10.5 9.8 15h4.4L11 20.5', 'M6.2 18l-1 2.2', 'M17.8 18l-1 2.2'],
		duotonePaths: ['M6.5 15h10.7a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 7.2 6.7a4.2 4.2 0 0 0-.7 8.3Z']
	},
	{
		name: 'alarm-check',
		category: 'Time & Weather',
		tags: 'reminder done morning clock',
		outlinePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'M4.5 5.5 7 3.5', 'M19.5 5.5 17 3.5'],
		accentPaths: ['M9 13l2 2 4-4'],
		duotonePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z']
	},
	{
		name: 'star-circle',
		category: 'Shapes',
		tags: 'featured badge rating award',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 7l1.5 3.2 3.5.5-2.5 2.4.6 3.5-3.1-1.7-3.1 1.7.6-3.5L7 10.7l3.5-.5L12 7Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'heart-circle',
		category: 'Shapes',
		tags: 'favorite love like badge',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 16s-4-2.4-4-5a2.2 2.2 0 0 1 4-1.3A2.2 2.2 0 0 1 16 11c0 2.6-4 5-4 5Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'sparkles-circle',
		category: 'AI & Data',
		tags: 'ai assistant badge magic',
		outlinePaths: ['M19.4 10.6A8.5 8.5 0 1 1 13.4 4.6'],
		accentPaths: [
			'M11.2 8.3c.5 2.7 1.8 4 4.5 4.5-2.7.5-4 1.8-4.5 4.5-.5-2.7-1.8-4-4.5-4.5 2.7-.5 4-1.8 4.5-4.5Z',
			'M18.5 2.9c.28 1.55 1.05 2.32 2.6 2.6-1.55.28-2.32 1.05-2.6 2.6-.28-1.55-1.05-2.32-2.6-2.6 1.55-.28 2.32-1.05 2.6-2.6Z'
		],
		duotonePaths: [
			'M11.2 8.3c.5 2.7 1.8 4 4.5 4.5-2.7.5-4 1.8-4.5 4.5-.5-2.7-1.8-4-4.5-4.5 2.7-.5 4-1.8 4.5-4.5Z',
			'M18.5 2.9c.28 1.55 1.05 2.32 2.6 2.6-1.55.28-2.32 1.05-2.6 2.6-.28-1.55-1.05-2.32-2.6-2.6 1.55-.28 2.32-1.05 2.6-2.6Z'
		]
	}
]
