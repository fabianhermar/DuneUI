import type { SvgIconItem } from './types'

export const DEV_EXPANDED_ICONS: SvgIconItem[] = [
	{
		name: 'git-fork',
		category: 'Development',
		tags: 'github repository clone branch',
		outlinePaths: ['M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M17.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M12 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		accentPaths: ['M6.5 8.5v2.2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V8.5', 'M12 12.7v2.8'],
		duotonePaths: ['M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M17.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M12 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'terminal-plus',
		category: 'Development',
		tags: 'new shell tab cli console',
		outlinePaths: [
			'M12.5 20.5H6.5A3.5 3.5 0 0 1 3 17V7a3.5 3.5 0 0 1 3.5-3.5h11A3.5 3.5 0 0 1 21 7v5.5',
			'M7 9.5 10 12l-3 2.5',
			'M10.5 14.5h2.5'
		],
		accentPaths: ['M18 14.5v6', 'M15 17.5h6']
	},
	{
		name: 'code-diff',
		category: 'Development',
		tags: 'patch merge compare changes',
		outlinePaths: [
			'M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z',
			'M12.5 9.5H17',
			'M12.5 14.5H17'
		],
		accentPaths: ['M8.5 8v3', 'M7 9.5h3', 'M7 14.5h3'],
		duotonePaths: ['M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Z']
	},
	{
		name: 'database-lock',
		category: 'Development',
		tags: 'encrypted sql backup vault',
		outlinePaths: [
			'M9 7.5c3.04 0 5.5-1.03 5.5-2.3S12.04 2.9 9 2.9 3.5 3.93 3.5 5.2 5.96 7.5 9 7.5Z',
			'M3.5 5.2v11.6c0 1.27 2.46 2.3 5.5 2.3.85 0 1.66-.08 2.38-.22',
			'M3.5 11c0 1.27 2.46 2.3 5.5 2.3s5.5-1.03 5.5-2.3',
			'M14.5 5.2V11'
		],
		accentPaths: [
			'M15 16.4a1.1 1.1 0 0 1 1.1-1.1h3.8a1.1 1.1 0 0 1 1.1 1.1v2.6a1.1 1.1 0 0 1-1.1 1.1h-3.8a1.1 1.1 0 0 1-1.1-1.1v-2.6Z',
			'M16.4 15.3v-1.5a1.6 1.6 0 0 1 3.2 0v1.5'
		],
		duotonePaths: [
			'M9 7.5c3.04 0 5.5-1.03 5.5-2.3S12.04 2.9 9 2.9 3.5 3.93 3.5 5.2 5.96 7.5 9 7.5Z',
			'M15 16.4a1.1 1.1 0 0 1 1.1-1.1h3.8a1.1 1.1 0 0 1 1.1 1.1v2.6a1.1 1.1 0 0 1-1.1 1.1h-3.8a1.1 1.1 0 0 1-1.1-1.1v-2.6Z'
		]
	},
	{
		name: 'database-backup',
		category: 'Development',
		tags: 'restore snapshot sql sync',
		outlinePaths: [
			'M9 7.5c3.04 0 5.5-1.03 5.5-2.3S12.04 2.9 9 2.9 3.5 3.93 3.5 5.2 5.96 7.5 9 7.5Z',
			'M3.5 5.2v11.6c0 1.27 2.46 2.3 5.5 2.3.85 0 1.66-.08 2.38-.22',
			'M3.5 11c0 1.27 2.46 2.3 5.5 2.3s5.5-1.03 5.5-2.3',
			'M14.5 5.2V11'
		],
		accentPaths: ['M15.6 15.4a2.8 2.8 0 1 1-.3 2.5', 'M15.3 13.4v2.1h2.1'],
		duotonePaths: ['M9 7.5c3.04 0 5.5-1.03 5.5-2.3S12.04 2.9 9 2.9 3.5 3.93 3.5 5.2 5.96 7.5 9 7.5Z']
	},
	{
		name: 'server-crash',
		category: 'Development',
		tags: 'downtime outage incident 500',
		outlinePaths: [
			'M3 5.5a2 2 0 0 1 2-2h13.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z',
			'M6.5 6.5h.01',
			'M10 6.5h6.5',
			'M12 18H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h9',
			'M6.5 15h.01'
		],
		accentPaths: ['M18 11.5 14 16.5h3.5l-1 4.5 4.5-5.5h-3.5l.5-4Z'],
		duotonePaths: [
			'M3 5.5a2 2 0 0 1 2-2h13.5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2Z',
			'M18 11.5 14 16.5h3.5l-1 4.5 4.5-5.5h-3.5l.5-4Z'
		]
	},
	{
		name: 'cloud-cog',
		category: 'Development',
		tags: 'devops infrastructure terraform',
		outlinePaths: ['M5.2 17A4.2 4.2 0 0 1 6.4 9.68 5.5 5.5 0 0 1 17 10.4 4.2 4.2 0 0 1 18.8 17'],
		accentPaths: [
			'M12 18.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z',
			'M12 12.6v1.6',
			'M12 18.8v1.6',
			'M8.1 16.5h1.6',
			'M14.3 16.5h1.6',
			'M9.2 13.7l1.1 1.1',
			'M13.7 18.2l1.1 1.1',
			'M14.8 13.7l-1.1 1.1',
			'M10.3 18.2l-1.1 1.1'
		],
		duotonePaths: ['M12 18.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z']
	},
	{
		name: 'cloud-off',
		category: 'Development',
		tags: 'offline disconnected sync error',
		outlinePaths: [
			'M9.5 6.3a5.5 5.5 0 0 1 7.5 4.1 3.8 3.8 0 0 1 3.1 5.8',
			'M6.2 10.2A4.2 4.2 0 0 0 7.2 18h10'
		],
		accentPaths: ['M3 3l18 18']
	},
	{
		name: 'api-gateway',
		category: 'Development',
		tags: 'rest graphql proxy endpoint',
		outlinePaths: [
			'M4 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
			'M4 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
			'M5.5 7.5H9.5',
			'M5.5 16.5H9.5',
			'M14.5 12H21',
			'M18.5 9.5 21 12l-2.5 2.5'
		],
		accentPaths: [
			'M9.5 6A1.5 1.5 0 0 1 11 4.5h2A1.5 1.5 0 0 1 14.5 6v12a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 18V6Z',
			'M12 9.5v5'
		],
		duotonePaths: ['M9.5 6A1.5 1.5 0 0 1 11 4.5h2A1.5 1.5 0 0 1 14.5 6v12a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 18V6Z']
	},
	{
		name: 'network-switch',
		category: 'Development',
		tags: 'ethernet lan topology hub',
		outlinePaths: ['M9.5 4h5v4h-5z', 'M3.5 16h5v4h-5z', 'M15.5 16h5v4h-5z'],
		accentPaths: ['M12 8v4', 'M6 16v-2.5A1.5 1.5 0 0 1 7.5 12h9a1.5 1.5 0 0 1 1.5 1.5V16'],
		duotonePaths: ['M9.5 4h5v4h-5z', 'M3.5 16h5v4h-5z', 'M15.5 16h5v4h-5z']
	},
	{
		name: 'test-tube',
		category: 'Development',
		tags: 'unit test qa vitest jest',
		outlinePaths: [
			'M13.5 3.5l7 7',
			'M19.2 9.2 10 18.4a3.11 3.11 0 0 1-4.4-4.4l9.2-9.2',
			'M11.8 7.8l1.2 1.2',
			'M9.8 9.8l1.2 1.2'
		],
		accentPaths: ['M6.6 13c1.8-.8 2.8.8 4.4 0s2.6-.8 4.4 0', 'M8.8 16.2h.01'],
		duotonePaths: ['M6.6 13h8.8L10 18.4a3.11 3.11 0 0 1-4.4-4.4L6.6 13Z']
	},
	{
		name: 'shield-code',
		category: 'Development',
		tags: 'sast security lint audit',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		accentPaths: ['M9.5 10 7.5 12l2 2', 'M14.5 10l2 2-2 2'],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'file-diff',
		category: 'Development',
		tags: 'git changes patch file',
		outlinePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z', 'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'],
		accentPaths: ['M12 9v3.5', 'M10.25 10.75h3.5', 'M10.25 16.8h3.5'],
		duotonePaths: ['M14 2.5H7.5A2.5 2.5 0 0 0 5 5v14a2.5 2.5 0 0 0 2.5 2.5h9A2.5 2.5 0 0 0 19 19V7.5L14 2.5Z']
	},
	{
		name: 'file-lock',
		category: 'Development',
		tags: 'env secret config lockfile',
		outlinePaths: [
			'M11 21.5H7.5A2.5 2.5 0 0 1 5 19V5a2.5 2.5 0 0 1 2.5-2.5H14L19 7.5V10',
			'M14 2.5v3.5A1.5 1.5 0 0 0 15.5 7.5H19'
		],
		accentPaths: [
			'M13.5 16.4a1.2 1.2 0 0 1 1.2-1.2h4.6a1.2 1.2 0 0 1 1.2 1.2v2.8a1.2 1.2 0 0 1-1.2 1.2h-4.6a1.2 1.2 0 0 1-1.2-1.2v-2.8Z',
			'M15 15.2v-1.7a2 2 0 0 1 4 0v1.7'
		],
		duotonePaths: ['M13.5 16.4a1.2 1.2 0 0 1 1.2-1.2h4.6a1.2 1.2 0 0 1 1.2 1.2v2.8a1.2 1.2 0 0 1-1.2 1.2h-4.6a1.2 1.2 0 0 1-1.2-1.2v-2.8Z']
	},
	{
		name: 'folder-git',
		category: 'Development',
		tags: 'repo workspace project branch',
		outlinePaths: ['M10 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4'],
		accentPaths: [
			'M13.8 13.4v4.4',
			'M19.6 14.8a4.4 4.4 0 0 1-4.4 4.4',
			'M13.8 13.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M13.8 20.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M19.6 14.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z'
		],
		duotonePaths: [
			'M13.8 13.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M13.8 20.6a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M19.6 14.8a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z'
		]
	},
	{
		name: 'folder-code',
		category: 'Development',
		tags: 'src directory codebase',
		outlinePaths: ['M10 20H5a2.5 2.5 0 0 1-2.5-2.5v-11A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19A2.5 2.5 0 0 1 21.5 9.4V11.5'],
		accentPaths: ['M15.2 14.5 12.7 17l2.5 2.5', 'M18.8 14.5 21.3 17l-2.5 2.5']
	},
	{
		name: 'package-plus',
		category: 'Development',
		tags: 'npm install dependency add',
		outlinePaths: [
			'M12 21.5a2 2 0 0 1-1-.26l-6.5-3.6a2 2 0 0 1-1-1.74V8.1a2 2 0 0 1 1-1.74l6.5-3.6a2 2 0 0 1 2 0l6.5 3.6a2 2 0 0 1 1 1.74v3.4',
			'M3.8 7 12 11.5 20.2 7',
			'M12 21.5V11.5',
			'M7.9 4.7 16.1 9.2'
		],
		accentPaths: ['M18 14.5v6', 'M15 17.5h6'],
		duotonePaths: ['M12 11.5 3.8 7 12 2.4 20.2 7 12 11.5Z']
	},
	{
		name: 'circuit-board',
		category: 'Development',
		tags: 'pcb electronics embedded iot',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: [
			'M3 9h4.5l2 2h4.1',
			'M15 12.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M11 3v2.5L12.5 7h3.6',
			'M17.5 8.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M15 21v-3l-2-2H9.4',
			'M8 17.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z'
		],
		duotonePaths: [
			'M15 12.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M17.5 8.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z',
			'M8 17.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z'
		]
	},
	{
		name: 'inspect-dom',
		category: 'Development',
		tags: 'devtools element selector debug',
		outlinePaths: [
			'M19.5 11.5V6.5a3 3 0 0 0-3-3h-10a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3H11',
			'M7.5 8.5h6',
			'M7.5 12h4'
		],
		accentPaths: ['M12.5 12.5 15.5 21l1.7-3.8L21 15.5l-8.5-3Z'],
		duotonePaths: ['M12.5 12.5 15.5 21l1.7-3.8L21 15.5l-8.5-3Z']
	},
	{
		name: 'memory-ram',
		category: 'Development',
		tags: 'hardware stick performance cache',
		outlinePaths: ['M3 8.5A2 2 0 0 1 5 6.5h14a2 2 0 0 1 2 2v7a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.5v-7Z'],
		accentPaths: ['M6.5 10v3.5', 'M10 10v3.5', 'M14 10v3.5', 'M17.5 10v3.5', 'M6 17v2.5', 'M10 17v2.5', 'M14 17v2.5', 'M18 17v2.5'],
		duotonePaths: ['M3 8.5A2 2 0 0 1 5 6.5h14a2 2 0 0 1 2 2v7a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 15.5v-7Z']
	},
	{
		name: 'markdown',
		category: 'Development',
		tags: 'mdx readme docs syntax',
		outlinePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z'],
		accentPaths: ['M6 15V9l2.5 3L11 9v6', 'M16.5 9v6', 'M14.5 13l2 2 2-2'],
		duotonePaths: ['M2.5 7A2.5 2.5 0 0 1 5 4.5h14A2.5 2.5 0 0 1 21.5 7v10a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 17V7Z']
	},
	{
		name: 'satellite-dish',
		category: 'Development',
		tags: 'telemetry signal edge cdn',
		outlinePaths: ['M4 11a9 9 0 0 0 9 9', 'M4.5 10.5 13.5 19.5'],
		accentPaths: ['M9 14l4-4', 'M13.5 5.5a5 5 0 0 1 5 5', 'M13.5 2.5a8 8 0 0 1 8 8'],
		duotonePaths: ['M4 11a9 9 0 0 0 9 9L4 11Z']
	},
	{
		name: 'key-ssh',
		category: 'Development',
		tags: 'auth deploy cert git',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M9 14.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z', 'M11.2 12.3H17', 'M15.5 12.3v2'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'layers-stack',
		category: 'Development',
		tags: 'middleware architecture tech stack',
		outlinePaths: ['M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z', 'M3 15.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z'],
		duotonePaths: ['M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z', 'M3 15.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1Z']
	},
	{
		name: 'webhook-trigger',
		category: 'Development',
		tags: 'automation hook event zap',
		outlinePaths: [
			'M13 16.98h-1c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2',
			'M6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06',
			'M12 6l2.5 4.5',
			'M12 7.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M6 18.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z'
		],
		accentPaths: ['M18.5 11.5 14.5 16.8h3.4l-.9 4.7 4.5-5.7h-3.4l.4-4.3Z'],
		duotonePaths: [
			'M12 7.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M6 18.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M18.5 11.5 14.5 16.8h3.4l-.9 4.7 4.5-5.7h-3.4l.4-4.3Z'
		]
	},
	{
		name: 'git-commit-vertical',
		category: 'Development',
		tags: 'timeline deploy commit node',
		outlinePaths: ['M12 2.5v6', 'M12 15.5v6'],
		accentPaths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		duotonePaths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'brackets-angle',
		category: 'Development',
		tags: 'generics typescript angle jsx',
		outlinePaths: ['M8 6.5 2.5 12 8 17.5', 'M16 6.5 21.5 12 16 17.5']
	},
	{
		name: 'bug-slash',
		category: 'Development',
		tags: 'resolved fix debug clean',
		outlinePaths: [
			'M7.5 11.5a4.5 4.5 0 0 1 9 0v3.5a4.5 4.5 0 0 1-9 0v-3.5Z',
			'M7.8 11h8.4',
			'M8.5 4.8 10.2 7.2',
			'M15.5 4.8 13.8 7.2',
			'M4 9.5l3.5 1.5',
			'M20 9.5l-3.5 1.5',
			'M3.5 14h4',
			'M16.5 14h4',
			'M4.5 19l3.3-1.8',
			'M19.5 19l-3.3-1.8'
		],
		accentPaths: ['M3 3l18 18'],
		duotonePaths: ['M7.8 11h8.4v4a4.5 4.5 0 0 1-9 0v-4Z']
	}
]
