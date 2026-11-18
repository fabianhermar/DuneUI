export type IconCategory =
	| 'Interface'
	| 'Navigation'
	| 'Design'
	| 'Development'
	| 'AI & Data'
	| 'Files'
	| 'Productivity'
	| 'Commerce'
	| 'Communication'
	| 'Media'
	| 'Security'
	| 'Users'
	| 'Devices'
	| 'Time & Weather'
	| 'Lifestyle'
	| 'Shapes'

export interface SvgIconItem {
	name: string
	category: IconCategory
	tags: string
	outlinePaths: string[]
	accentPaths?: string[]
	duotonePaths?: string[]
	solidPaths?: string[]
}
