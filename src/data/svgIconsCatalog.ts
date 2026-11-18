import type { IconCategory, SvgIconItem } from './icons/types'
import { INTERFACE_ICONS } from './icons/interface'
import { NAVIGATION_ICONS } from './icons/navigation'
import { DESIGN_ICONS } from './icons/design'
import { FILES_ICONS } from './icons/files'
import { PRODUCTIVITY_ICONS } from './icons/productivity'
import { COMMERCE_ICONS } from './icons/commerce'
import { DEVELOPMENT_ICONS } from './icons/development'
import { DEV_EXPANDED_ICONS } from './icons/devExpanded'
import { AI_DATA_ICONS } from './icons/aiData'
import { COMMUNICATION_ICONS } from './icons/communication'
import { MEDIA_ICONS } from './icons/media'
import { SECURITY_ICONS } from './icons/security'
import { USERS_ICONS } from './icons/users'
import { DEVICES_ICONS } from './icons/devices'
import { TIME_WEATHER_ICONS } from './icons/timeWeather'
import { LIFESTYLE_ICONS } from './icons/lifestyle'
import { SHAPES_ICONS } from './icons/shapes'
import { EXTRA_ICONS } from './icons/extras'
import { GENERAL_EXPANDED_ICONS } from './icons/generalExpanded'
import { EVERYDAY_PLUS_ICONS } from './icons/everydayPlus'
import { PRO_SUITE_PLUS_ICONS } from './icons/proSuitePlus'
import { UNIVERSAL_PACK_ICONS } from './icons/universalPack'

export type { IconCategory, SvgIconItem }

export const ICON_CATEGORIES: IconCategory[] = [
	'Interface',
	'Navigation',
	'Design',
	'Development',
	'AI & Data',
	'Files',
	'Productivity',
	'Commerce',
	'Communication',
	'Media',
	'Security',
	'Users',
	'Devices',
	'Time & Weather',
	'Lifestyle',
	'Shapes'
]

export const SVG_ICONS_CATALOG: SvgIconItem[] = [
	...INTERFACE_ICONS,
	...NAVIGATION_ICONS,
	...DESIGN_ICONS,
	...FILES_ICONS,
	...PRODUCTIVITY_ICONS,
	...COMMERCE_ICONS,
	...DEVELOPMENT_ICONS,
	...DEV_EXPANDED_ICONS,
	...AI_DATA_ICONS,
	...COMMUNICATION_ICONS,
	...MEDIA_ICONS,
	...SECURITY_ICONS,
	...USERS_ICONS,
	...DEVICES_ICONS,
	...TIME_WEATHER_ICONS,
	...LIFESTYLE_ICONS,
	...SHAPES_ICONS,
	...EXTRA_ICONS,
	...GENERAL_EXPANDED_ICONS,
	...EVERYDAY_PLUS_ICONS,
	...PRO_SUITE_PLUS_ICONS,
	...UNIVERSAL_PACK_ICONS
]
