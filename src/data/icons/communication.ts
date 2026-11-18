import type { SvgIconItem } from './types'

export const COMMUNICATION_ICONS: SvgIconItem[] = [
	{
		name: 'mail',
		category: 'Communication',
		tags: 'email message newsletter envelope',
		outlinePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z'],
		accentPaths: ['M3 6.5l7.7 5.5a2.2 2.2 0 0 0 2.6 0L21 6.5'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'mail-open',
		category: 'Communication',
		tags: 'read email newsletter opened',
		outlinePaths: ['M21 9.5v8A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-8a2 2 0 0 1 .9-1.7l7-4.6a2 2 0 0 1 2.2 0l7 4.6a2 2 0 0 1 .9 1.7Z'],
		accentPaths: ['M3.5 9l7.3 4.8a2.2 2.2 0 0 0 2.4 0L20.5 9'],
		duotonePaths: ['M3 9.5l9 5.5 9-5.5V17.5A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-8Z']
	},
	{
		name: 'mail-check',
		category: 'Communication',
		tags: 'delivered verified email sent',
		outlinePaths: ['M21.5 11.5V7A2.5 2.5 0 0 0 19 4.5H5A2.5 2.5 0 0 0 2.5 7v10A2.5 2.5 0 0 0 5 19.5h7.5', 'M3 6.5l7.7 5.5a2.2 2.2 0 0 0 2.6 0L21 6.5'],
		accentPaths: ['M15.5 18 17.5 20 21.5 15.5'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'inbox',
		category: 'Communication',
		tags: 'tray messages archive queue',
		outlinePaths: ['M3 13.5 5.2 5.5A2 2 0 0 1 7.1 4h9.8a2 2 0 0 1 1.9 1.5l2.2 8v4A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-4Z'],
		accentPaths: ['M3 13.5h5.2a1.5 1.5 0 0 1 1.4 1l.6 1.5h3.6l.6-1.5a1.5 1.5 0 0 1 1.4-1H21'],
		duotonePaths: ['M3 13.5h5.2a1.5 1.5 0 0 1 1.4 1l.6 1.5h3.6l.6-1.5a1.5 1.5 0 0 1 1.4-1H21v4a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-4Z']
	},
	{
		name: 'send',
		category: 'Communication',
		tags: 'paper plane submit dispatch',
		outlinePaths: ['M21 3.5 14.3 20.8a.6.6 0 0 1-1.13-.04L10.3 13.7 3.24 10.83a.6.6 0 0 1-.04-1.13L21 3.5Z'],
		accentPaths: ['M21 3.5 10.3 13.7'],
		duotonePaths: ['M21 3.5 14.3 20.8a.6.6 0 0 1-1.13-.04L10.3 13.7 3.24 10.83a.6.6 0 0 1-.04-1.13L21 3.5Z']
	},
	{
		name: 'message-square',
		category: 'Communication',
		tags: 'chat support comment feedback',
		outlinePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H8.2L4 21v-3.8A2.5 2.5 0 0 1 3.5 15V6Z'],
		accentPaths: ['M8 9.5h8', 'M8 12.5h5'],
		duotonePaths: ['M3.5 6A2.5 2.5 0 0 1 6 3.5h12A2.5 2.5 0 0 1 20.5 6v9a2.5 2.5 0 0 1-2.5 2.5H8.2L4 21v-3.8A2.5 2.5 0 0 1 3.5 15V6Z']
	},
	{
		name: 'message-circle',
		category: 'Communication',
		tags: 'bubble reply dm conversation',
		outlinePaths: ['M12 20.5a8.5 8.5 0 1 0-7.2-4L3.5 20.5l4.2-1.2A8.5 8.5 0 0 0 12 20.5Z'],
		accentPaths: ['M8.5 12h.01', 'M12 12h.01', 'M15.5 12h.01'],
		duotonePaths: ['M12 20.5a8.5 8.5 0 1 0-7.2-4L3.5 20.5l4.2-1.2A8.5 8.5 0 0 0 12 20.5Z']
	},
	{
		name: 'messages-duo',
		category: 'Communication',
		tags: 'thread forum discussion group chat',
		outlinePaths: ['M14 9a2 2 0 0 1-2 2H6.5L3.5 13.5V5.5a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2V9Z'],
		accentPaths: ['M17.5 10.5H19a2 2 0 0 1 2 2v7.5L18 17.5h-6a2 2 0 0 1-2-2v-1'],
		duotonePaths: ['M14 9a2 2 0 0 1-2 2H6.5L3.5 13.5V5.5a2 2 0 0 1 2-2H12a2 2 0 0 1 2 2V9Z']
	},
	{
		name: 'quote',
		category: 'Communication',
		tags: 'testimonial citation blockquote',
		outlinePaths: [
			'M9.5 12H5a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 5 5.5h3A1.5 1.5 0 0 1 9.5 7v6a5 5 0 0 1-5 5',
			'M20.5 12H16a1.5 1.5 0 0 1-1.5-1.5V7A1.5 1.5 0 0 1 16 5.5h3A1.5 1.5 0 0 1 20.5 7v6a5 5 0 0 1-5 5'
		],
		accentPaths: [
			'M9.5 13a5 5 0 0 1-5 5',
			'M20.5 13a5 5 0 0 1-5 5'
		],
		duotonePaths: [
			'M3.5 7A1.5 1.5 0 0 1 5 5.5h3A1.5 1.5 0 0 1 9.5 7v5H5a1.5 1.5 0 0 1-1.5-1.5V7Z',
			'M14.5 7A1.5 1.5 0 0 1 16 5.5h3A1.5 1.5 0 0 1 20.5 7v5H16a1.5 1.5 0 0 1-1.5-1.5V7Z'
		]
	},
	{
		name: 'bell',
		category: 'Communication',
		tags: 'notification alert ping reminder',
		outlinePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z', 'M12 2.5v1'],
		accentPaths: ['M10 19.5a2 2 0 0 0 4 0'],
		duotonePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z']
	},
	{
		name: 'bell-ring',
		category: 'Communication',
		tags: 'active notification alarm ringing',
		outlinePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z', 'M10 19.5a2 2 0 0 0 4 0'],
		accentPaths: ['M3.8 5.2A9.5 9.5 0 0 0 2.2 10', 'M20.2 5.2A9.5 9.5 0 0 1 21.8 10'],
		duotonePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z']
	},
	{
		name: 'bell-off',
		category: 'Communication',
		tags: 'mute notifications silent dnd',
		outlinePaths: [
			'M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z',
			'M12 2.5v1',
			'M10 19.5a2 2 0 0 0 4 0'
		],
		accentPaths: ['M3 3l18 18'],
		duotonePaths: ['M18 9.5a6 6 0 1 0-12 0c0 5-2.5 7-2.5 7h17s-2.5-2-2.5-7Z']
	},
	{
		name: 'phone',
		category: 'Communication',
		tags: 'call contact support telephone',
		outlinePaths: ['M5.5 3.5h3.2a1.5 1.5 0 0 1 1.45 1.12l.8 2.9a1.5 1.5 0 0 1-.42 1.48l-1.5 1.4a13 13 0 0 0 4.6 4.6l1.4-1.5a1.5 1.5 0 0 1 1.48-.42l2.9.8a1.5 1.5 0 0 1 1.12 1.45V18.5A2 2 0 0 1 18.5 20.5C10.5 20.5 3.5 13.5 3.5 5.5a2 2 0 0 1 2-2Z'],
		duotonePaths: ['M5.5 3.5h3.2a1.5 1.5 0 0 1 1.45 1.12l.8 2.9a1.5 1.5 0 0 1-.42 1.48l-1.5 1.4a13 13 0 0 0 4.6 4.6l1.4-1.5a1.5 1.5 0 0 1 1.48-.42l2.9.8a1.5 1.5 0 0 1 1.12 1.45V18.5A2 2 0 0 1 18.5 20.5C10.5 20.5 3.5 13.5 3.5 5.5a2 2 0 0 1 2-2Z']
	},
	{
		name: 'phone-call',
		category: 'Communication',
		tags: 'ringing voice active call',
		outlinePaths: ['M5 4.5h2.8a1.3 1.3 0 0 1 1.25.95l.7 2.5a1.3 1.3 0 0 1-.35 1.28L8 10.5a11.5 11.5 0 0 0 4.5 4.5l1.27-1.4a1.3 1.3 0 0 1 1.28-.35l2.5.7a1.3 1.3 0 0 1 .95 1.25V18a2 2 0 0 1-2 2C9.5 20 3 13.5 3 6.5a2 2 0 0 1 2-2Z'],
		accentPaths: ['M14 5a5 5 0 0 1 5 5', 'M14 2.5A7.5 7.5 0 0 1 21.5 10'],
		duotonePaths: ['M5 4.5h2.8a1.3 1.3 0 0 1 1.25.95l.7 2.5a1.3 1.3 0 0 1-.35 1.28L8 10.5a11.5 11.5 0 0 0 4.5 4.5l1.27-1.4a1.3 1.3 0 0 1 1.28-.35l2.5.7a1.3 1.3 0 0 1 .95 1.25V18a2 2 0 0 1-2 2C9.5 20 3 13.5 3 6.5a2 2 0 0 1 2-2Z']
	},
	{
		name: 'video',
		category: 'Communication',
		tags: 'meeting call zoom conference',
		outlinePaths: ['M2.5 8A2.5 2.5 0 0 1 5 5.5h8.5A2.5 2.5 0 0 1 16 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8Z'],
		accentPaths: ['M16 10.2 20.3 7.5a.8.8 0 0 1 1.2.68v7.64a.8.8 0 0 1-1.2.68L16 13.8v-3.6Z'],
		duotonePaths: ['M2.5 8A2.5 2.5 0 0 1 5 5.5h8.5A2.5 2.5 0 0 1 16 8v8a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 16V8Z']
	},
	{
		name: 'megaphone',
		category: 'Communication',
		tags: 'announcement broadcast launch campaign',
		outlinePaths: ['M4 10.5v3a1.5 1.5 0 0 0 1.5 1.5H8l8.5 3.5V5.5L8 9H5.5A1.5 1.5 0 0 0 4 10.5Z', 'M16.5 9.5a2.5 2.5 0 0 1 0 5'],
		accentPaths: ['M7.5 15l1.2 4.5a1 1 0 0 0 1 .75h1a1 1 0 0 0 .95-1.3L10.5 15.5'],
		duotonePaths: ['M8 9l8.5-3.5v13L8 15H5.5A1.5 1.5 0 0 1 4 13.5v-3A1.5 1.5 0 0 1 5.5 9H8Z']
	},
	{
		name: 'at-sign',
		category: 'Communication',
		tags: 'mention handle email username',
		outlinePaths: ['M16 8.5v5a2.75 2.75 0 0 0 5.5 0V12a9.5 9.5 0 1 0-3.7 7.55'],
		accentPaths: ['M12 15.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z'],
		duotonePaths: ['M12 15.8a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z']
	},
	{
		name: 'hash',
		category: 'Communication',
		tags: 'channel tag topic number',
		outlinePaths: ['M4.5 9h15', 'M3.5 15h15'],
		accentPaths: ['M10 3.5 7.5 20.5', 'M16.5 3.5 14 20.5']
	},
	{
		name: 'rss',
		category: 'Communication',
		tags: 'feed blog syndication subscribe',
		outlinePaths: ['M4.5 10.5a9 9 0 0 1 9 9', 'M4.5 4.5a15 15 0 0 1 15 15'],
		accentPaths: ['M6 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M6 19.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z']
	},
	{
		name: 'link',
		category: 'Communication',
		tags: 'url chain anchor permalink',
		outlinePaths: ['M10 13.5a4.5 4.5 0 0 0 6.5.5l2.5-2.5a4.5 4.5 0 0 0-6.4-6.4L11 6.7'],
		accentPaths: ['M14 10.5a4.5 4.5 0 0 0-6.5-.5L5 12.5a4.5 4.5 0 0 0 6.4 6.4L13 17.3']
	},
	{
		name: 'unlink',
		category: 'Communication',
		tags: 'disconnect break chain detach',
		outlinePaths: [
			'M13.8 11.4c1.2.9 2.9.8 4-.3l2.4-2.4a3.5 3.5 0 0 0-4.9-4.9l-2.4 2.4c-1.1 1.1-1.2 2.8-.3 4',
			'M10.2 12.6c-1.2-.9-2.9-.8-4 .3l-2.4 2.4a3.5 3.5 0 0 0 4.9 4.9l2.4-2.4c1.1-1.1 1.2-2.8.3-4'
		],
		accentPaths: ['M4 4l16 16']
	},
	{
		name: 'translate',
		category: 'Communication',
		tags: 'language i18n locale dictionary',
		outlinePaths: ['M4 6h9', 'M8.5 3.5V6', 'M11 6c-.4 3.5-2.5 6.4-5.8 8.2', 'M6.5 9.5c1.1 1.9 2.7 3.5 4.8 4.7'],
		accentPaths: ['M12.5 20.5 16 11l3.5 9.5', 'M13.6 17.5h4.8']
	},
	{
		name: 'radio',
		category: 'Communication',
		tags: 'live stream signal broadcast',
		outlinePaths: ['M6.8 6.8a7.5 7.5 0 0 0 0 10.4', 'M17.2 6.8a7.5 7.5 0 0 1 0 10.4', 'M4.2 4.2a11 11 0 0 0 0 15.6', 'M19.8 4.2a11 11 0 0 1 0 15.6'],
		accentPaths: ['M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
		duotonePaths: ['M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z']
	},
	{
		name: 'voicemail',
		category: 'Communication',
		tags: 'audio message recording tape',
		outlinePaths: ['M6.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M17.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		accentPaths: ['M6.5 15.5h11'],
		duotonePaths: ['M6.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M17.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'share-nodes',
		category: 'Communication',
		tags: 'social publish forward network',
		outlinePaths: ['M18 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M18 21.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		accentPaths: ['M8.2 10.7 15.8 6.3', 'M8.2 13.3l7.6 4.4'],
		duotonePaths: ['M18 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M6 14.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M18 21.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'badge-alert',
		category: 'Communication',
		tags: 'notice status warning banner',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 7.5v5.5', 'M12 16.5h.01'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	}
]
