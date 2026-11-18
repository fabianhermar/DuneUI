import type { SvgIconItem } from './types'

export const MEDIA_ICONS: SvgIconItem[] = [
	{
		name: 'image',
		category: 'Media',
		tags: 'photo picture gallery landscape',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M3.8 18.2 9 13l3.2 3.2 2.8-2.8 5.2 5.2', 'M8.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'camera',
		category: 'Media',
		tags: 'photo capture lens snapshot',
		outlinePaths: ['M3 9a2.5 2.5 0 0 1 2.5-2.5H7l1.5-2A1.5 1.5 0 0 1 9.7 4h4.6a1.5 1.5 0 0 1 1.2.5l1.5 2h1.5A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5V9Z'],
		accentPaths: ['M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M17.5 10h.01'],
		duotonePaths: ['M3 9a2.5 2.5 0 0 1 2.5-2.5H7l1.5-2A1.5 1.5 0 0 1 9.7 4h4.6a1.5 1.5 0 0 1 1.2.5l1.5 2h1.5A2.5 2.5 0 0 1 21 9v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5V9Z']
	},
	{
		name: 'aperture',
		category: 'Media',
		tags: 'shutter optics focus studio',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: [
			'M10.4 9.2H20.55',
			'M13.6 9.2 18.7 18',
			'M15.2 12 10.1 20.8',
			'M13.6 14.8H3.45',
			'M10.4 14.8 5.3 6',
			'M8.8 12 13.9 3.2'
		],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'play',
		category: 'Media',
		tags: 'video audio stream start',
		outlinePaths: ['M6.5 4.8a1.2 1.2 0 0 1 1.82-1.03l11.2 6.9a1.5 1.5 0 0 1 0 2.56l-11.2 6.9A1.2 1.2 0 0 1 6.5 19.1V4.8Z'],
		duotonePaths: ['M6.5 4.8a1.2 1.2 0 0 1 1.82-1.03l11.2 6.9a1.5 1.5 0 0 1 0 2.56l-11.2 6.9A1.2 1.2 0 0 1 6.5 19.1V4.8Z']
	},
	{
		name: 'play-circle',
		category: 'Media',
		tags: 'demo reel watch preview',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M10.2 9a.7.7 0 0 1 1.06-.6l4.6 2.9a.8.8 0 0 1 0 1.4l-4.6 2.9a.7.7 0 0 1-1.06-.6V9Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'pause-circle',
		category: 'Media',
		tags: 'hold wait audio video pause',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M9.8 8.8v6.4', 'M14.2 8.8v6.4'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'skip-forward',
		category: 'Media',
		tags: 'next track chapter player',
		outlinePaths: ['M5.5 5.5a1 1 0 0 1 1.55-.83l8.4 5.5a1.5 1.5 0 0 1 0 2.5l-8.4 5.5A1 1 0 0 1 5.5 17.3V5.5Z'],
		accentPaths: ['M18.5 5v14'],
		duotonePaths: ['M5.5 5.5a1 1 0 0 1 1.55-.83l8.4 5.5a1.5 1.5 0 0 1 0 2.5l-8.4 5.5A1 1 0 0 1 5.5 17.3V5.5Z']
	},
	{
		name: 'skip-back',
		category: 'Media',
		tags: 'previous track rewind player',
		outlinePaths: ['M18.5 5.5a1 1 0 0 0-1.55-.83l-8.4 5.5a1.5 1.5 0 0 0 0 2.5l8.4 5.5a1 1 0 0 0 1.55-.83V5.5Z'],
		accentPaths: ['M5.5 5v14'],
		duotonePaths: ['M18.5 5.5a1 1 0 0 0-1.55-.83l-8.4 5.5a1.5 1.5 0 0 0 0 2.5l8.4 5.5a1 1 0 0 0 1.55-.83V5.5Z']
	},
	{
		name: 'volume-2',
		category: 'Media',
		tags: 'speaker sound audio loud',
		outlinePaths: ['M11 5.2a.8.8 0 0 0-1.3-.62L5.5 8H3.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16h2l4.2 3.42A.8.8 0 0 0 11 18.8V5.2Z'],
		accentPaths: ['M15 9.2a4.5 4.5 0 0 1 0 5.6', 'M17.8 6.5a8.2 8.2 0 0 1 0 11'],
		duotonePaths: ['M11 5.2a.8.8 0 0 0-1.3-.62L5.5 8H3.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16h2l4.2 3.42A.8.8 0 0 0 11 18.8V5.2Z']
	},
	{
		name: 'volume-x',
		category: 'Media',
		tags: 'mute silent sound off',
		outlinePaths: ['M11 5.2a.8.8 0 0 0-1.3-.62L5.5 8H3.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16h2l4.2 3.42A.8.8 0 0 0 11 18.8V5.2Z'],
		accentPaths: ['M20.5 9.5l-5 5', 'M15.5 9.5l5 5'],
		duotonePaths: ['M11 5.2a.8.8 0 0 0-1.3-.62L5.5 8H3.5A1.5 1.5 0 0 0 2 9.5v5A1.5 1.5 0 0 0 3.5 16h2l4.2 3.42A.8.8 0 0 0 11 18.8V5.2Z']
	},
	{
		name: 'mic',
		category: 'Media',
		tags: 'voice audio podcast dictate',
		outlinePaths: ['M9 6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V6Z'],
		accentPaths: ['M5.5 11a6.5 6.5 0 0 0 13 0', 'M12 17.5V21', 'M9 21h6'],
		duotonePaths: ['M9 6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V6Z']
	},
	{
		name: 'mic-off',
		category: 'Media',
		tags: 'mute microphone silent',
		outlinePaths: [
			'M9 6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V6Z',
			'M5.5 11a6.5 6.5 0 0 0 13 0',
			'M12 17.5V21',
			'M9 21h6'
		],
		accentPaths: ['M3 3l18 18'],
		duotonePaths: ['M9 6a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V6Z']
	},
	{
		name: 'headphones',
		category: 'Media',
		tags: 'music audio listen support',
		outlinePaths: ['M4 14v-2a8 8 0 0 1 16 0v2'],
		accentPaths: ['M4 14a2 2 0 0 1 2-2h1a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 7 19H6a2 2 0 0 1-2-2v-3Z', 'M20 14a2 2 0 0 0-2-2h-1a1.5 1.5 0 0 0-1.5 1.5v4A1.5 1.5 0 0 0 17 19h1a2 2 0 0 0 2-2v-3Z'],
		duotonePaths: ['M4 14a2 2 0 0 1 2-2h1a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 7 19H6a2 2 0 0 1-2-2v-3Z', 'M20 14a2 2 0 0 0-2-2h-1a1.5 1.5 0 0 0-1.5 1.5v4A1.5 1.5 0 0 0 17 19h1a2 2 0 0 0 2-2v-3Z']
	},
	{
		name: 'music',
		category: 'Media',
		tags: 'song note audio playlist',
		outlinePaths: ['M9 17.5V6.2a1.5 1.5 0 0 1 1.2-1.47l7.5-1.5A1.2 1.2 0 0 1 19 4.4V15.5'],
		accentPaths: ['M6.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M16.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M9 9.5l10-2'],
		duotonePaths: ['M6.5 20a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M16.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'waveform',
		category: 'Media',
		tags: 'voice equalizer sound frequency',
		outlinePaths: ['M4 10v4', 'M8 7v10', 'M12 4v16', 'M16 7v10', 'M20 10v4'],
		accentPaths: ['M8 7v10', 'M16 7v10']
	},
	{
		name: 'film',
		category: 'Media',
		tags: 'cinema reel movie video edit',
		outlinePaths: ['M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M7.5 4v16', 'M16.5 4v16', 'M3 9.5h4.5', 'M3 14.5h4.5', 'M16.5 9.5H21', 'M16.5 14.5H21', 'M7.5 12h9'],
		duotonePaths: ['M7.5 4h9v16h-9V4Z']
	},
	{
		name: 'palette',
		category: 'Media',
		tags: 'color theme paint art swatches',
		outlinePaths: ['M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9a1.8 1.8 0 0 0 1.8-1.8c0-.46-.18-.9-.5-1.22-.3-.32-.48-.74-.48-1.18a1.8 1.8 0 0 1 1.8-1.8H16.8A4.2 4.2 0 0 0 21 11.8C21 6.94 16.97 3 12 3Z'],
		accentPaths: ['M7.5 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M10.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M15 8.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z', 'M17 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
		duotonePaths: ['M12 3a9 9 0 0 0-9 9c0 4.97 4.03 9 9 9a1.8 1.8 0 0 0 1.8-1.8c0-.46-.18-.9-.5-1.22-.3-.32-.48-.74-.48-1.18a1.8 1.8 0 0 1 1.8-1.8H16.8A4.2 4.2 0 0 0 21 11.8C21 6.94 16.97 3 12 3Z']
	},
	{
		name: 'pen-tool',
		category: 'Media',
		tags: 'vector bezier figma design draw',
		outlinePaths: [
			'M15.7 19.9l4.2-4.2a1.2 1.2 0 0 0 0-1.7l-1.3-1.3a1.2 1.2 0 0 0-1.7 0l-4.2 4.2a1.2 1.2 0 0 0 0 1.7l1.3 1.3a1.2 1.2 0 0 0 1.7 0Z',
			'M16.9 12.7 14 7.3 3.5 3.5l3.8 10.5 5.4 2.9'
		],
		accentPaths: ['M3.5 3.5l6 6', 'M10.8 12.3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M16.9 12.7 14 7.3 3.5 3.5l3.8 10.5 5.4 2.9 4.2-4.2Z']
	},
	{
		name: 'crop',
		category: 'Media',
		tags: 'resize trim frame aspect',
		outlinePaths: ['M6.5 3v12.5A2 2 0 0 0 8.5 17.5H21'],
		accentPaths: ['M3 6.5h12.5A2 2 0 0 1 17.5 8.5V21']
	},
	{
		name: 'shapes',
		category: 'Media',
		tags: 'geometry components design system',
		outlinePaths: [
			'M10.9 3.6a1.3 1.3 0 0 1 2.2 0l3.7 6a1.2 1.2 0 0 1-1 1.8H8.2a1.2 1.2 0 0 1-1-1.8l3.7-6Z',
			'M13.5 15.3a1.8 1.8 0 0 1 1.8-1.8h3.4a1.8 1.8 0 0 1 1.8 1.8v3.4a1.8 1.8 0 0 1-1.8 1.8h-3.4a1.8 1.8 0 0 1-1.8-1.8v-3.4Z'
		],
		accentPaths: ['M7 20.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		duotonePaths: [
			'M10.9 3.6a1.3 1.3 0 0 1 2.2 0l3.7 6a1.2 1.2 0 0 1-1 1.8H8.2a1.2 1.2 0 0 1-1-1.8l3.7-6Z',
			'M7 20.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'
		]
	},
	{
		name: 'pipette',
		category: 'Media',
		tags: 'eyedropper color picker sample',
		outlinePaths: [
			'M13 7.5 16.5 11l-8.2 8.2a2 2 0 0 1-1.4.6H4a.8.8 0 0 1-.8-.8v-2.9a2 2 0 0 1 .6-1.4L13 7.5Z',
			'M13.6 8.1l2.7-2.7a2 2 0 0 1 2.8 2.8l-2.7 2.7',
			'M11.6 6.1l6.3 6.3'
		],
		accentPaths: ['M5.5 15h7'],
		duotonePaths: ['M5.5 15h7L8.3 19.2a2 2 0 0 1-1.4.6H4a.8.8 0 0 1-.8-.8v-2.9a2 2 0 0 1 .6-1.4L5.5 15Z']
	},
	{
		name: 'disc',
		category: 'Media',
		tags: 'vinyl album record cd',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M12 12.4a.4.4 0 1 0 0-.8.4.4 0 0 0 0 .8Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'frame',
		category: 'Media',
		tags: 'artboard canvas figma bounds',
		outlinePaths: ['M6.5 3v18', 'M17.5 3v18', 'M3 6.5h18', 'M3 17.5h18'],
		duotonePaths: ['M6.5 6.5h11v11h-11z']
	},
	{
		name: 'brush',
		category: 'Media',
		tags: 'paint studio illustrate stroke',
		outlinePaths: ['M18.5 3.5 9.8 12.2a2.5 2.5 0 0 1 2 2l8.7-8.7a1.4 1.4 0 0 0-2-2Z', 'M9.8 12.2A3.5 3.5 0 0 0 5 15.5c0 1.4-.9 2.3-2 2.7 1.4 1.2 3.3 1.8 5.2 1.3A3.5 3.5 0 0 0 11.8 14.2'],
		duotonePaths: ['M9.8 12.2A3.5 3.5 0 0 0 5 15.5c0 1.4-.9 2.3-2 2.7 1.4 1.2 3.3 1.8 5.2 1.3A3.5 3.5 0 0 0 11.8 14.2']
	}
]
