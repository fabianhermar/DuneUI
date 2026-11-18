import type { SvgIconItem } from './types'

export const NAVIGATION_ICONS: SvgIconItem[] = [
	{
		name: 'arrow-right',
		category: 'Navigation',
		tags: 'next forward cta continue',
		outlinePaths: ['M4.5 12h15'],
		accentPaths: ['M13.5 6 19.5 12l-6 6']
	},
	{
		name: 'arrow-left',
		category: 'Navigation',
		tags: 'back previous return undo',
		outlinePaths: ['M19.5 12h-15'],
		accentPaths: ['M10.5 6 4.5 12l6 6']
	},
	{
		name: 'arrow-up',
		category: 'Navigation',
		tags: 'top scroll ascend upload',
		outlinePaths: ['M12 19.5v-15'],
		accentPaths: ['M6 10.5 12 4.5l6 6']
	},
	{
		name: 'arrow-down',
		category: 'Navigation',
		tags: 'bottom scroll descend',
		outlinePaths: ['M12 4.5v15'],
		accentPaths: ['M6 13.5 12 19.5l6-6']
	},
	{
		name: 'arrow-up-right',
		category: 'Navigation',
		tags: 'external link open diagonal',
		outlinePaths: ['M6.5 17.5 17.5 6.5'],
		accentPaths: ['M8.5 6.5h9v9']
	},
	{
		name: 'arrow-down-left',
		category: 'Navigation',
		tags: 'inbound reply diagonal',
		outlinePaths: ['M17.5 6.5 6.5 17.5'],
		accentPaths: ['M15.5 17.5h-9v-9']
	},
	{
		name: 'arrow-left-right',
		category: 'Navigation',
		tags: 'swap exchange transfer switch',
		outlinePaths: ['M4 8.5h15.5', 'M20 15.5H4.5'],
		accentPaths: ['M16 5l3.5 3.5L16 12', 'M8 12l-3.5 3.5L8 19']
	},
	{
		name: 'arrow-up-down',
		category: 'Navigation',
		tags: 'sort reorder vertical',
		outlinePaths: ['M8.5 4v15.5', 'M15.5 20V4.5'],
		accentPaths: ['M5 16l3.5 3.5L12 16', 'M12 8l3.5-3.5L19 8']
	},
	{
		name: 'corner-down-right',
		category: 'Navigation',
		tags: 'enter return reply indent',
		outlinePaths: ['M4.5 4.5v6a3 3 0 0 0 3 3h12'],
		accentPaths: ['M15 9l4.5 4.5L15 18']
	},
	{
		name: 'refresh-cw',
		category: 'Navigation',
		tags: 'sync reload update retry',
		outlinePaths: ['M20 11.5A8 8 0 0 0 6.2 6.2L4 8.5', 'M4 12.5a8 8 0 0 0 13.8 5.3L20 15.5'],
		accentPaths: ['M4 4.5v4h4', 'M20 19.5v-4h-4']
	},
	{
		name: 'rotate-ccw',
		category: 'Navigation',
		tags: 'undo revert reset back',
		outlinePaths: ['M4 12a8 8 0 1 0 2.3-5.6L4 8.8'],
		accentPaths: ['M4 4.5v4.3h4.3']
	},
	{
		name: 'chevron-down',
		category: 'Navigation',
		tags: 'dropdown expand accordion',
		outlinePaths: ['M6 9.5 12 15.5l6-6']
	},
	{
		name: 'chevron-up',
		category: 'Navigation',
		tags: 'collapse close top',
		outlinePaths: ['M6 14.5 12 8.5l6 6']
	},
	{
		name: 'chevron-left',
		category: 'Navigation',
		tags: 'back previous slide',
		outlinePaths: ['M14.5 6 8.5 12l6 6']
	},
	{
		name: 'chevron-right',
		category: 'Navigation',
		tags: 'breadcrumb next step',
		outlinePaths: ['M9.5 6 15.5 12l-6 6']
	},
	{
		name: 'chevrons-right',
		category: 'Navigation',
		tags: 'fast forward skip end',
		outlinePaths: ['M6.5 7 11.5 12l-5 5'],
		accentPaths: ['M12.5 7 17.5 12l-5 5']
	},
	{
		name: 'chevrons-up-down',
		category: 'Navigation',
		tags: 'select combobox dropdown',
		outlinePaths: ['M7.5 9 12 4.5 16.5 9'],
		accentPaths: ['M7.5 15 12 19.5 16.5 15']
	},
	{
		name: 'menu',
		category: 'Navigation',
		tags: 'hamburger drawer navigation bars',
		outlinePaths: ['M4 6.5h16', 'M4 17.5h16'],
		accentPaths: ['M4 12h11']
	},
	{
		name: 'sidebar-left',
		category: 'Navigation',
		tags: 'panel layout navigation drawer',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M9 3v18', 'M5.8 8h1', 'M5.8 11.5h1'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3H9v18H6.5A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'panel-right',
		category: 'Navigation',
		tags: 'inspector drawer sidebar right',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M15 3v18'],
		duotonePaths: ['M15 3h2.5A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5H15V3Z']
	},
	{
		name: 'home',
		category: 'Navigation',
		tags: 'house index root dashboard',
		outlinePaths: ['M3.5 10.2a2.5 2.5 0 0 1 .9-1.9l6.3-5.2a2 2 0 0 1 2.6 0l6.3 5.2a2.5 2.5 0 0 1 .9 1.9v8.3a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5v-8.3Z'],
		accentPaths: ['M9.5 21v-6a2.5 2.5 0 0 1 5 0v6'],
		duotonePaths: ['M3.5 10.2a2.5 2.5 0 0 1 .9-1.9l6.3-5.2a2 2 0 0 1 2.6 0l6.3 5.2a2.5 2.5 0 0 1 .9 1.9v8.3a2.5 2.5 0 0 1-2.5 2.5H6a2.5 2.5 0 0 1-2.5-2.5v-8.3Z']
	},
	{
		name: 'compass',
		category: 'Navigation',
		tags: 'explore discover safari direction',
		outlinePaths: ['M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z'],
		accentPaths: ['M15.8 8.2 13.7 13.7 8.2 15.8l2.1-5.5 5.5-2.1Z'],
		duotonePaths: ['M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z']
	},
	{
		name: 'globe',
		category: 'Navigation',
		tags: 'world edge language web international',
		outlinePaths: ['M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z'],
		accentPaths: ['M2.8 12h18.4', 'M12 2.5a13.5 13.5 0 0 1 3.6 9.5 13.5 13.5 0 0 1-3.6 9.5 13.5 13.5 0 0 1-3.6-9.5 13.5 13.5 0 0 1 3.6-9.5Z'],
		duotonePaths: ['M12 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19Z']
	},
	{
		name: 'map',
		category: 'Navigation',
		tags: 'atlas travel route territory',
		outlinePaths: ['M3 6.2a1.5 1.5 0 0 1 1-.4l5 1.7 6-2 5 1.7a1 1 0 0 1 .7.95v10.65a1 1 0 0 1-1.3.95L15 18l-6 2-5-1.7a1 1 0 0 1-.7-.95V6.7a1 1 0 0 1-.3-.5Z'],
		accentPaths: ['M9 7.5v12.5', 'M15 5.5V18'],
		duotonePaths: ['M9 7.5l6-2V18l-6 2V7.5Z']
	},
	{
		name: 'map-pin',
		category: 'Navigation',
		tags: 'location address place gps',
		outlinePaths: ['M19.5 10c0 5.5-7.5 11.5-7.5 11.5S4.5 15.5 4.5 10a7.5 7.5 0 0 1 15 0Z'],
		accentPaths: ['M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
		duotonePaths: ['M19.5 10c0 5.5-7.5 11.5-7.5 11.5S4.5 15.5 4.5 10a7.5 7.5 0 0 1 15 0Z']
	},
	{
		name: 'navigation-pointer',
		category: 'Navigation',
		tags: 'gps cursor send direction arrow',
		outlinePaths: ['M3.5 11.2 20 4l-7.2 16.5-2.1-6.5-7.2-2.8Z'],
		duotonePaths: ['M3.5 11.2 20 4l-7.2 16.5-2.1-6.5-7.2-2.8Z']
	},
	{
		name: 'route',
		category: 'Navigation',
		tags: 'path journey waypoints itinerary',
		outlinePaths: ['M8 18.5h6.5a3.5 3.5 0 0 0 0-7h-5a3.5 3.5 0 0 1 0-7H16'],
		accentPaths: ['M6 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M18 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z'],
		duotonePaths: ['M6 20.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M18 6.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z']
	},
	{
		name: 'flag',
		category: 'Navigation',
		tags: 'milestone report goal bookmark',
		outlinePaths: ['M5 21V4.5', 'M5 4.5c2.5-1.5 5.5 1.5 8 0s4.5-1 6 0v9c-1.5-1-3.5-1.5-6 0s-5.5-1.5-8 0'],
		duotonePaths: ['M5 4.5c2.5-1.5 5.5 1.5 8 0s4.5-1 6 0v9c-1.5-1-3.5-1.5-6 0s-5.5-1.5-8 0V4.5Z']
	}
]
