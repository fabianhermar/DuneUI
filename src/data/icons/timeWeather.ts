import type { SvgIconItem } from './types'

export const TIME_WEATHER_ICONS: SvgIconItem[] = [
	{
		name: 'clock',
		category: 'Time & Weather',
		tags: 'time schedule history duration',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 7.5V12l3.2 2'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'alarm-clock',
		category: 'Time & Weather',
		tags: 'reminder alert morning timer',
		outlinePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'M4.5 5.5 7 3.5', 'M19.5 5.5 17 3.5', 'M6.5 19 5 21', 'M17.5 19l1.5 2'],
		accentPaths: ['M12 9v4l2.5 1.5'],
		duotonePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z']
	},
	{
		name: 'timer',
		category: 'Time & Weather',
		tags: 'stopwatch countdown benchmark',
		outlinePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'M9.5 2.5h5', 'M12 2.5V5'],
		accentPaths: ['M12 13l3-3'],
		duotonePaths: ['M12 21a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z']
	},
	{
		name: 'hourglass',
		category: 'Time & Weather',
		tags: 'loading pending wait sand',
		outlinePaths: ['M5.5 3.5h13', 'M5.5 20.5h13', 'M7 3.5v3.2a4.5 4.5 0 0 0 2.1 3.8l2.9 1.5 2.9-1.5A4.5 4.5 0 0 0 17 6.7V3.5', 'M7 20.5v-3.2a4.5 4.5 0 0 1 2.1-3.8l2.9-1.5 2.9 1.5a4.5 4.5 0 0 1 2.1 3.8v3.2'],
		duotonePaths: ['M8 17.5c0-1.5 1.8-2.5 4-2.5s4 1 4 2.5v3H8v-3Z']
	},
	{
		name: 'calendar',
		category: 'Time & Weather',
		tags: 'date booking event schedule',
		outlinePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7Z', 'M8 2.5v3', 'M16 2.5v3'],
		accentPaths: ['M3 9.5h18', 'M8 13.5h.01', 'M12 13.5h.01', 'M16 13.5h.01', 'M8 17h.01', 'M12 17h.01', 'M16 17h.01'],
		duotonePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v2.5H3V7Z']
	},
	{
		name: 'calendar-check',
		category: 'Time & Weather',
		tags: 'booked confirmed event date',
		outlinePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7Z', 'M8 2.5v3', 'M16 2.5v3', 'M3 9.5h18'],
		accentPaths: ['M9 15l2 2 4-4'],
		duotonePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v2.5H3V7Z']
	},
	{
		name: 'calendar-plus',
		category: 'Time & Weather',
		tags: 'add event schedule meeting',
		outlinePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7Z', 'M8 2.5v3', 'M16 2.5v3', 'M3 9.5h18'],
		accentPaths: ['M12 12.5v5', 'M9.5 15h5'],
		duotonePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v2.5H3V7Z']
	},
	{
		name: 'history',
		category: 'Time & Weather',
		tags: 'audit log past versions timeline',
		outlinePaths: ['M4 12a8 8 0 1 0 2.3-5.6L4 8.8', 'M4 4.5v4.3h4.3'],
		accentPaths: ['M12 7.5V12l3 2']
	},
	{
		name: 'sun',
		category: 'Time & Weather',
		tags: 'light theme day brightness',
		outlinePaths: ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'],
		accentPaths: ['M12 2.5v2', 'M12 19.5v2', 'M5.28 5.28l1.42 1.42', 'M17.3 17.3l1.42 1.42', 'M2.5 12h2', 'M19.5 12h2', 'M5.28 18.72l1.42-1.42', 'M17.3 6.7l1.42-1.42'],
		duotonePaths: ['M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z']
	},
	{
		name: 'sunrise',
		category: 'Time & Weather',
		tags: 'morning dawn horizon warm',
		outlinePaths: ['M3 17.5h18', 'M7.5 17.5a4.5 4.5 0 0 1 9 0', 'M6 20.5h12'],
		accentPaths: ['M12 9.5V3.5', 'M9.2 6.3 12 3.5l2.8 2.8', 'M5.8 11.3 7.2 12.7', 'M18.2 11.3 16.8 12.7'],
		duotonePaths: ['M7.5 17.5a4.5 4.5 0 0 1 9 0H7.5Z']
	},
	{
		name: 'moon',
		category: 'Time & Weather',
		tags: 'dark theme night sleep mode',
		outlinePaths: ['M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.8 6.8 0 0 0 9.7 9.7Z'],
		duotonePaths: ['M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.8 6.8 0 0 0 9.7 9.7Z']
	},
	{
		name: 'moon-stars',
		category: 'Time & Weather',
		tags: 'night dark mode space sleep',
		outlinePaths: ['M19.5 14a8 8 0 1 1-9.5-9.5 6.3 6.3 0 0 0 9.5 9.5Z'],
		accentPaths: ['M17.5 4v3', 'M16 5.5h3', 'M20.5 8.5v2', 'M19.5 9.5h2'],
		duotonePaths: ['M19.5 14a8 8 0 1 1-9.5-9.5 6.3 6.3 0 0 0 9.5 9.5Z']
	},
	{
		name: 'cloud-sun',
		category: 'Time & Weather',
		tags: 'partly cloudy forecast weather',
		outlinePaths: ['M6 20h8.5a3 3 0 0 0 .3-5.98A4.5 4.5 0 0 0 6 13a3.5 3.5 0 0 0 0 7Z'],
		accentPaths: [
			'M13 6.9A3.2 3.2 0 1 1 16.8 11.1',
			'M16 1.8V3',
			'M11.6 3.6l.9.9',
			'M20.4 3.6l-.9.9',
			'M22.2 8H21',
			'M20.4 12.4l-.9-.9'
		],
		duotonePaths: ['M6 20h8.5a3 3 0 0 0 .3-5.98A4.5 4.5 0 0 0 6 13a3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'cloud-rain',
		category: 'Time & Weather',
		tags: 'rainy weather storm drops',
		outlinePaths: ['M6.5 15.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 7.2a4 4 0 0 0-2 8.3Z'],
		accentPaths: ['M8 18.5l-1 2.5', 'M12 18.5l-1 2.5', 'M16 18.5l-1 2.5'],
		duotonePaths: ['M6.5 15.5h11a3.5 3.5 0 0 0 .7-6.9A5 5 0 0 0 8.5 7.2a4 4 0 0 0-2 8.3Z']
	},
	{
		name: 'cloud-lightning',
		category: 'Time & Weather',
		tags: 'thunder storm bolt weather',
		outlinePaths: ['M16.2 15.5h1a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 7.2 7.2a4.2 4.2 0 0 0-.7 8.3h1.3'],
		accentPaths: ['M13 11 10 15.5h4L11 20.5'],
		duotonePaths: ['M6.5 15.5h10.7a3.5 3.5 0 0 0 .5-6.96A5.5 5.5 0 0 0 7.2 7.2a4.2 4.2 0 0 0-.7 8.3Z']
	},
	{
		name: 'snowflake',
		category: 'Time & Weather',
		tags: 'winter cold freeze frost',
		outlinePaths: ['M12 2.5v19', 'M3.8 7.25l16.4 9.5', 'M20.2 7.25l-16.4 9.5'],
		accentPaths: [
			'M9.8 4.2 12 6l2.2-1.8',
			'M9.8 19.8 12 18l2.2 1.8',
			'M17.8 6.6 17.2 9l2.4.7',
			'M6.2 17.4 6.8 15l-2.4-.7',
			'M6.2 6.6 6.8 9l-2.4.7',
			'M17.8 17.4 17.2 15l2.4-.7'
		],
		duotonePaths: ['M12 9.5 14.2 10.75v2.5L12 14.5l-2.2-1.25v-2.5L12 9.5Z']
	},
	{
		name: 'wind',
		category: 'Time & Weather',
		tags: 'breeze air speed flow',
		outlinePaths: ['M3 8.5h11.5a2.5 2.5 0 1 0-2.5-2.5', 'M3 12.5h15.5a2.5 2.5 0 1 1-2.5 2.5'],
		accentPaths: ['M3 16.5h7.5a2 2 0 1 1-2 2']
	},
	{
		name: 'thermometer',
		category: 'Time & Weather',
		tags: 'temperature heat climate sensor',
		outlinePaths: ['M14.5 13.1V5a2.5 2.5 0 0 0-5 0v8.1a4.5 4.5 0 1 0 5 0Z'],
		accentPaths: ['M12 18.2a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z', 'M12 15.4V8.5'],
		duotonePaths: ['M14.5 13.1V5a2.5 2.5 0 0 0-5 0v8.1a4.5 4.5 0 1 0 5 0Z']
	},
	{
		name: 'droplet',
		category: 'Time & Weather',
		tags: 'water humidity rain liquid',
		outlinePaths: ['M12 2.8S6 9.5 6 14.2a6 6 0 0 0 12 0C18 9.5 12 2.8 12 2.8Z'],
		accentPaths: ['M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5'],
		duotonePaths: ['M12 2.8S6 9.5 6 14.2a6 6 0 0 0 12 0C18 9.5 12 2.8 12 2.8Z']
	},
	{
		name: 'umbrella',
		category: 'Time & Weather',
		tags: 'rain protection insurance cover',
		outlinePaths: ['M3.5 12.5a8.5 8.5 0 0 1 17 0H3.5Z', 'M12 2.5V4'],
		accentPaths: ['M12 12.5v6a2 2 0 0 0 4 0'],
		duotonePaths: ['M3.5 12.5a8.5 8.5 0 0 1 17 0H3.5Z']
	}
]
