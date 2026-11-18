import type { SvgIconItem } from './types'

export const GENERAL_EXPANDED_ICONS: SvgIconItem[] = [
	// Interface & Controls
	{
		name: 'toggle-left',
		category: 'Interface',
		tags: 'switch off disabled control',
		outlinePaths: ['M8.5 5.5h7a6.5 6.5 0 0 1 0 13h-7a6.5 6.5 0 0 1 0-13Z'],
		accentPaths: ['M8.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		duotonePaths: ['M8.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'copy-check',
		category: 'Interface',
		tags: 'copied clipboard success done',
		outlinePaths: ['M8.5 10.5A2.5 2.5 0 0 1 11 8h7.5A2.5 2.5 0 0 1 21 10.5v8a2.5 2.5 0 0 1-2.5 2.5H11a2.5 2.5 0 0 1-2.5-2.5v-8Z', 'M5.5 15.5A2.5 2.5 0 0 1 3 13V5.5A2.5 2.5 0 0 1 5.5 3H13a2.5 2.5 0 0 1 2.5 2.5'],
		accentPaths: ['M12 14.5 13.8 16.3 17.5 12.5'],
		duotonePaths: ['M8.5 10.5A2.5 2.5 0 0 1 11 8h7.5A2.5 2.5 0 0 1 21 10.5v8a2.5 2.5 0 0 1-2.5 2.5H11a2.5 2.5 0 0 1-2.5-2.5v-8Z']
	},
	{
		name: 'filter-x',
		category: 'Interface',
		tags: 'clear reset filter query',
		outlinePaths: ['M3.5 5.4A1.4 1.4 0 0 1 4.9 4h13.2a1.4 1.4 0 0 1 1.1 2.27L13.5 13v5.5a1.2 1.2 0 0 1-.66 1.07l-2.1 1.05A.8.8 0 0 1 9.5 19.9V13L3.8 6.27A1.4 1.4 0 0 1 3.5 5.4Z'],
		accentPaths: ['M16 14.5l4.5 4.5', 'M20.5 14.5 16 19'],
		duotonePaths: ['M3.5 5.4A1.4 1.4 0 0 1 4.9 4h13.2a1.4 1.4 0 0 1 1.1 2.27L13.5 13v5.5a1.2 1.2 0 0 1-.66 1.07l-2.1 1.05A.8.8 0 0 1 9.5 19.9V13L3.8 6.27A1.4 1.4 0 0 1 3.5 5.4Z']
	},
	{
		name: 'panel-top',
		category: 'Interface',
		tags: 'header navbar layout window',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M3 9h18'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5V9H3V6.5Z']
	},
	{
		name: 'layout-columns',
		category: 'Interface',
		tags: 'split grid columns dashboard',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M12 3v18'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3H12v18H6.5A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'sparkles-clean',
		category: 'Interface',
		tags: 'polish sanitize format auto',
		outlinePaths: ['M9.5 3.5 11 7.5l4 1.5-4 1.5-1.5 4L8 10.5 4 9l4-1.5 1.5-4Z'],
		accentPaths: ['M17.5 12.5 18.5 15l2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z'],
		duotonePaths: ['M9.5 3.5 11 7.5l4 1.5-4 1.5-1.5 4L8 10.5 4 9l4-1.5 1.5-4Z']
	},

	// Navigation
	{
		name: 'arrow-up-left',
		category: 'Navigation',
		tags: 'diagonal back top left',
		outlinePaths: ['M17.5 17.5 6.5 6.5'],
		accentPaths: ['M6.5 15.5v-9h9']
	},
	{
		name: 'arrow-down-right',
		category: 'Navigation',
		tags: 'diagonal forward bottom right',
		outlinePaths: ['M6.5 6.5 17.5 17.5'],
		accentPaths: ['M17.5 8.5v9h-9']
	},
	{
		name: 'chevrons-left',
		category: 'Navigation',
		tags: 'rewind start first page',
		outlinePaths: ['M17.5 7 12.5 12l5 5'],
		accentPaths: ['M11.5 7 6.5 12l5 5']
	},
	{
		name: 'chevrons-up',
		category: 'Navigation',
		tags: 'scroll top jump',
		outlinePaths: ['M7 17.5 12 12.5l5 5'],
		accentPaths: ['M7 11.5 12 6.5l5 5']
	},
	{
		name: 'chevrons-down',
		category: 'Navigation',
		tags: 'scroll bottom expand all',
		outlinePaths: ['M7 6.5 12 11.5l5-5'],
		accentPaths: ['M7 12.5 12 17.5l5-5']
	},
	{
		name: 'undo-2',
		category: 'Navigation',
		tags: 'revert back history edit',
		outlinePaths: ['M9 14 4 9l5-5'],
		accentPaths: ['M4 9h10.5a5.5 5.5 0 0 1 0 11H11']
	},
	{
		name: 'redo-2',
		category: 'Navigation',
		tags: 'forward repeat history edit',
		outlinePaths: ['M15 14l5-5-5-5'],
		accentPaths: ['M20 9H9.5a5.5 5.5 0 0 0 0 11H13']
	},

	// Commerce
	{
		name: 'cart-plus',
		category: 'Commerce',
		tags: 'add to cart buy shop',
		outlinePaths: ['M2.5 3.5h2.4a1.5 1.5 0 0 1 1.45 1.13L8.2 13.5a2 2 0 0 0 1.95 1.55h7.4a2 2 0 0 0 1.93-1.48l1.2-4.5A1.2 1.2 0 0 0 19.5 7.5H7', 'M9.5 19.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z', 'M17.5 19.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z'],
		accentPaths: ['M13.5 3.5v4', 'M11.5 5.5h4'],
		duotonePaths: ['M7 7.5h12.5a1.2 1.2 0 0 1 1.18 1.57l-1.2 4.5a2 2 0 0 1-1.93 1.48h-7.4A2 2 0 0 1 8.2 13.5L7 7.5Z']
	},
	{
		name: 'credit-card-lock',
		category: 'Commerce',
		tags: 'secure checkout 3ds pci payment',
		outlinePaths: ['M13 19.5H4.5A2.5 2.5 0 0 1 2 17V7a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 7v4', 'M2 9.5h20'],
		accentPaths: ['M15.5 15.5a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1V19a1 1 0 0 1-1 1h-3.5a1 1 0 0 1-1-1v-3.5Z', 'M16.8 14.5v-1a1.45 1.45 0 0 1 2.9 0v1'],
		duotonePaths: ['M2 7a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 7v2.5H2V7Z']
	},
	{
		name: 'qr-scan',
		category: 'Commerce',
		tags: 'camera scan ticket pay',
		outlinePaths: ['M7.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v2.5', 'M16.5 3.5H19a1.5 1.5 0 0 1 1.5 1.5v2.5', 'M20.5 16.5V19a1.5 1.5 0 0 1-1.5 1.5h-2.5', 'M3.5 16.5V19A1.5 1.5 0 0 0 5 20.5h2.5'],
		accentPaths: ['M7 7h3v3H7z', 'M14 7h3v3h-3z', 'M7 14h3v3H7z', 'M14 14h3v3h-3z', 'M4 12h16'],
		duotonePaths: ['M7 7h3v3H7z', 'M14 7h3v3h-3z', 'M7 14h3v3H7z']
	},
	{
		name: 'badge-dollar',
		category: 'Commerce',
		tags: 'pricing plan billing enterprise',
		outlinePaths: ['M12 2.5l2.1 1.7 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7 1.7 2.1-1.7 2.1.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 21.5l-2.1-1.7-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2.1 12l1.7-2.1-.2-2.7 2.5-1.1L7.2 3.6l2.7.2L12 2.5Z'],
		accentPaths: ['M12 7v10', 'M14.3 9.2c-.5-.7-1.4-1-2.3-1-1.3 0-2.3.7-2.3 1.8s1 1.6 2.3 1.8 2.3.7 2.3 1.9-1 1.9-2.3 1.9c-1 0-1.9-.4-2.4-1.1'],
		duotonePaths: ['M12 2.5l2.1 1.7 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7 1.7 2.1-1.7 2.1.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 21.5l-2.1-1.7-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2.1 12l1.7-2.1-.2-2.7 2.5-1.1L7.2 3.6l2.7.2L12 2.5Z']
	},

	// Communication
	{
		name: 'mail-plus',
		category: 'Communication',
		tags: 'compose new email draft',
		outlinePaths: ['M21.5 11.5V7A2.5 2.5 0 0 0 19 4.5H5A2.5 2.5 0 0 0 2.5 7v10A2.5 2.5 0 0 0 5 19.5h7.5', 'M3 6.5l7.7 5.5a2.2 2.2 0 0 0 2.6 0L21 6.5'],
		accentPaths: ['M18 14.5v6', 'M15 17.5h6'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'mail-search',
		category: 'Communication',
		tags: 'find email inbox lookup',
		outlinePaths: ['M21.5 11V7A2.5 2.5 0 0 0 19 4.5H5A2.5 2.5 0 0 0 2.5 7v10A2.5 2.5 0 0 0 5 19.5h6.5', 'M3 6.5l7.7 5.5a2.2 2.2 0 0 0 2.6 0L21 6.5'],
		accentPaths: ['M17 19a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M21 21l-2.2-2.2'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'message-plus',
		category: 'Communication',
		tags: 'new chat start conversation',
		outlinePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H8.2L4 21v-3.8A2.5 2.5 0 0 1 3.5 15V6Z'],
		accentPaths: ['M12 7.5v6', 'M9 10.5h6'],
		duotonePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H8.2L4 21v-3.8A2.5 2.5 0 0 1 3.5 15V6Z']
	},
	{
		name: 'phone-off',
		category: 'Communication',
		tags: 'hangup end call mute',
		outlinePaths: [
			'M5.5 3.5h3.2a1.5 1.5 0 0 1 1.45 1.12l.8 2.9a1.5 1.5 0 0 1-.42 1.48l-1.5 1.4a13 13 0 0 0 4.6 4.6l1.4-1.5a1.5 1.5 0 0 1 1.48-.42l2.9.8a1.5 1.5 0 0 1 1.12 1.45V18.5A2 2 0 0 1 18.5 20.5C10.5 20.5 3.5 13.5 3.5 5.5a2 2 0 0 1 2-2Z'
		],
		accentPaths: ['M3 3l18 18'],
		duotonePaths: [
			'M5.5 3.5h3.2a1.5 1.5 0 0 1 1.45 1.12l.8 2.9a1.5 1.5 0 0 1-.42 1.48l-1.5 1.4a13 13 0 0 0 4.6 4.6l1.4-1.5a1.5 1.5 0 0 1 1.48-.42l2.9.8a1.5 1.5 0 0 1 1.12 1.45V18.5A2 2 0 0 1 18.5 20.5C10.5 20.5 3.5 13.5 3.5 5.5a2 2 0 0 1 2-2Z'
		]
	},
	{
		name: 'video-off',
		category: 'Communication',
		tags: 'camera off mute meeting',
		outlinePaths: [
			'M2.5 8A2.5 2.5 0 0 1 5 5.5h8.5A2.5 2.5 0 0 1 16 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8Z',
			'M16 10.2 20.3 7.5a.8.8 0 0 1 1.2.68v7.64a.8.8 0 0 1-1.2.68L16 13.8v-3.6Z'
		],
		accentPaths: ['M3 3l18 18'],
		duotonePaths: [
			'M2.5 8A2.5 2.5 0 0 1 5 5.5h8.5A2.5 2.5 0 0 1 16 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8Z'
		]
	},

	// Media
	{
		name: 'image-plus',
		category: 'Media',
		tags: 'upload photo add gallery',
		outlinePaths: ['M21 12.5V17.5A3.5 3.5 0 0 1 17.5 21h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3H12', 'M3.8 18.2 9 13l3.2 3.2 2.8-2.8 5.2 5.2'],
		accentPaths: ['M18 3v5', 'M15.5 5.5h5', 'M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'images',
		category: 'Media',
		tags: 'album carousel gallery stack',
		outlinePaths: ['M7 5.5A2.5 2.5 0 0 1 9.5 3h9A2.5 2.5 0 0 1 21 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 7 14.5v-9Z', 'M3.5 8.5v9A3.5 3.5 0 0 0 7 21h9'],
		accentPaths: ['M7.5 14.2 11.5 10.5l3 2.8 2-2 4 3.7', 'M11.5 8a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z'],
		duotonePaths: ['M7 5.5A2.5 2.5 0 0 1 9.5 3h9A2.5 2.5 0 0 1 21 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 7 14.5v-9Z']
	},
	{
		name: 'volume-1',
		category: 'Media',
		tags: 'speaker low audio sound',
		outlinePaths: ['M11 5.2a.8.8 0 0 0-1.3-.62L5.5 8H3.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16h2l4.2 3.42A.8.8 0 0 0 11 18.8V5.2Z'],
		accentPaths: ['M15.5 9.2a4.5 4.5 0 0 1 0 5.6'],
		duotonePaths: ['M11 5.2a.8.8 0 0 0-1.3-.62L5.5 8H3.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16h2l4.2 3.42A.8.8 0 0 0 11 18.8V5.2Z']
	},

	// Security
	{
		name: 'shield-plus',
		category: 'Security',
		tags: 'add protection security rule',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		accentPaths: ['M12 9v6', 'M9 12h6'],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'shield-x',
		category: 'Security',
		tags: 'unprotected disabled alert block',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		accentPaths: ['M9.5 9.5l5 5', 'M14.5 9.5l-5 5'],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'key-square',
		category: 'Security',
		tags: 'passkey hardware yubikey fido',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M9 14.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z', 'M11.3 12.5H17', 'M15 12.5v2'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},

	// Users & Time & Weather
	{
		name: 'users-plus',
		category: 'Users',
		tags: 'add team invite collaborators',
		outlinePaths: [
			'M7.5 10.7a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z',
			'M2 20a5.5 5.5 0 0 1 11 0',
			'M13 4.3a3.2 3.2 0 0 1 0 6.2'
		],
		accentPaths: ['M18.5 13.2v5.6', 'M15.7 16h5.6'],
		duotonePaths: ['M7.5 10.7a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z', 'M2 20a5.5 5.5 0 0 1 11 0H2Z']
	},
	{
		name: 'cloud-drizzle',
		category: 'Time & Weather',
		tags: 'light rain mist forecast',
		outlinePaths: ['M6.5 15.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 7.2a4 4 0 0 0-2 8.3Z'],
		accentPaths: ['M8 18.5v1.5', 'M12 19.5V21', 'M16 18.5v1.5'],
		duotonePaths: ['M6.5 15.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 7.2a4 4 0 0 0-2 8.3Z']
	},
	{
		name: 'waves',
		category: 'Time & Weather',
		tags: 'ocean water sea surf',
		outlinePaths: ['M2.5 7.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 3-1.5', 'M2.5 12.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 3-1.5'],
		accentPaths: ['M2.5 17.5c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 3-1.5']
	}
]
