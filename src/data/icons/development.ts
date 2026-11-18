import type { SvgIconItem } from './types'

export const DEVELOPMENT_ICONS: SvgIconItem[] = [
	{
		name: 'terminal',
		category: 'Development',
		tags: 'cli shell bash command prompt',
		outlinePaths: ['M4.5 17 10.5 11.5 4.5 6'],
		accentPaths: ['M12 18h7.5']
	},
	{
		name: 'terminal-square',
		category: 'Development',
		tags: 'console window bash powershell',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M7.5 9.5 10.5 12l-3 2.5', 'M12.5 15h4'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'code-brackets',
		category: 'Development',
		tags: 'html xml react component jsx',
		outlinePaths: ['M8 6.5 2.5 12 8 17.5', 'M16 6.5 21.5 12 16 17.5'],
		accentPaths: ['M13.5 4.5 10.5 19.5']
	},
	{
		name: 'braces',
		category: 'Development',
		tags: 'json object scope curly',
		outlinePaths: [
			'M8 3.5H7a2 2 0 0 0-2 2v3.8a2 2 0 0 1-1.4 1.9L2.5 12l1.1.8A2 2 0 0 1 5 14.7v3.8a2 2 0 0 0 2 2h1',
			'M16 3.5h1a2 2 0 0 1 2 2v3.8a2 2 0 0 0 1.4 1.9l1.1.8-1.1.8a2 2 0 0 0-1.4 1.9v3.8a2 2 0 0 1-2 2h-1'
		],
		accentPaths: ['M9.5 12h.01', 'M12 12h.01', 'M14.5 12h.01']
	},
	{
		name: 'git-branch',
		category: 'Development',
		tags: 'github merge pr version',
		outlinePaths: [
			'M6.5 8.5v7',
			'M17.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
			'M6.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
			'M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'
		],
		accentPaths: ['M17.5 9.5A8.5 8.5 0 0 1 9 18'],
		duotonePaths: ['M17.5 9.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M6.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'git-commit',
		category: 'Development',
		tags: 'snapshot revision hash push',
		outlinePaths: ['M2.5 12H8.5', 'M15.5 12h6'],
		accentPaths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		duotonePaths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'git-merge',
		category: 'Development',
		tags: 'combine branch pr release',
		outlinePaths: ['M6.5 20.5v-12', 'M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M17.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		accentPaths: ['M6.5 8.5A8.5 8.5 0 0 0 15 17.5'],
		duotonePaths: ['M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M17.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'git-pull-request',
		category: 'Development',
		tags: 'review pr diff github',
		outlinePaths: ['M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M6.5 20.5v-12', 'M17.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
		accentPaths: ['M13 6h2.5a2 2 0 0 1 2 2v7.5', 'M15 4l-2 2 2 2'],
		duotonePaths: ['M6.5 8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M17.5 20.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z']
	},
	{
		name: 'cpu',
		category: 'Development',
		tags: 'compute processor chip hardware',
		outlinePaths: [
			'M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7Z',
			'M9 2v2.5', 'M15 2v2.5', 'M9 19.5V22', 'M15 19.5V22',
			'M2 9h2.5', 'M2 15h2.5', 'M19.5 9H22', 'M19.5 15H22'
		],
		accentPaths: ['M8.5 10A1.5 1.5 0 0 1 10 8.5h4A1.5 1.5 0 0 1 15.5 10v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 14v-4Z'],
		duotonePaths: ['M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v10a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 17V7Z']
	},
	{
		name: 'server',
		category: 'Development',
		tags: 'hosting rack cluster cloud node',
		outlinePaths: [
			'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v3A2.5 2.5 0 0 1 18.5 11h-13A2.5 2.5 0 0 1 3 8.5v-3Z',
			'M3 15.5A2.5 2.5 0 0 1 5.5 13h13a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-3Z'
		],
		accentPaths: ['M7 7h.01', 'M7 17h.01', 'M11 7h6', 'M11 17h6'],
		duotonePaths: [
			'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v3A2.5 2.5 0 0 1 18.5 11h-13A2.5 2.5 0 0 1 3 8.5v-3Z',
			'M3 15.5A2.5 2.5 0 0 1 5.5 13h13a2.5 2.5 0 0 1 2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-3Z'
		]
	},
	{
		name: 'database',
		category: 'Development',
		tags: 'sql postgres storage table',
		outlinePaths: [
			'M12 8.5c4.69 0 8.5-1.34 8.5-3S16.69 2.5 12 2.5 3.5 3.84 3.5 5.5 7.31 8.5 12 8.5Z',
			'M3.5 5.5v13c0 1.66 3.81 3 8.5 3s8.5-1.34 8.5-3v-13'
		],
		accentPaths: ['M3.5 12c0 1.66 3.81 3 8.5 3s8.5-1.34 8.5-3'],
		duotonePaths: ['M12 8.5c4.69 0 8.5-1.34 8.5-3S16.69 2.5 12 2.5 3.5 3.84 3.5 5.5 7.31 8.5 12 8.5Z']
	},
	{
		name: 'hard-drive',
		category: 'Development',
		tags: 'disk ssd volume storage',
		outlinePaths: ['M3.2 13.5 5.4 5.5A2 2 0 0 1 7.3 4h9.4a2 2 0 0 1 1.9 1.5l2.2 8', 'M3 14.5A2.5 2.5 0 0 1 5.5 12h13a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-3Z'],
		accentPaths: ['M7 16h.01', 'M10.5 16h.01', 'M14.5 16h3'],
		duotonePaths: ['M3 14.5A2.5 2.5 0 0 1 5.5 12h13a2.5 2.5 0 0 1 2.5 2.5v3A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-3Z']
	},
	{
		name: 'zap',
		category: 'Development',
		tags: 'fast speed lightning edge energy',
		outlinePaths: ['M13.2 2.5 4.2 13.5h7.3L10.3 21.5l9.5-11.5h-7.3l.7-7.5Z'],
		duotonePaths: ['M13.2 2.5 4.2 13.5h7.3L10.3 21.5l9.5-11.5h-7.3l.7-7.5Z']
	},
	{
		name: 'command',
		category: 'Development',
		tags: 'macos shortcut key cmd',
		outlinePaths: ['M17.5 3.5a2.5 2.5 0 0 0-2.5 2.5v12a2.5 2.5 0 1 0 2.5-2.5h-11A2.5 2.5 0 1 0 9 18V6a2.5 2.5 0 1 0-2.5 2.5h11a2.5 2.5 0 1 0 0-5Z']
	},
	{
		name: 'blocks',
		category: 'Development',
		tags: 'components plugins modules architecture',
		outlinePaths: [
			'M3 8.5A1.5 1.5 0 0 1 4.5 7H10v14H4.5A1.5 1.5 0 0 1 3 19.5v-11Z',
			'M10 14h5.5a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5H10',
			'M3 14h7'
		],
		accentPaths: ['M14 4.5A1.5 1.5 0 0 1 15.5 3h4A1.5 1.5 0 0 1 21 4.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 14 8.5v-4Z'],
		duotonePaths: [
			'M14 4.5A1.5 1.5 0 0 1 15.5 3h4A1.5 1.5 0 0 1 21 4.5v4a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 14 8.5v-4Z',
			'M3 14h7v7H4.5A1.5 1.5 0 0 1 3 19.5V14Z'
		]
	},
	{
		name: 'puzzle',
		category: 'Development',
		tags: 'plugin extension integration addon',
		outlinePaths: ['M9.5 4.5a2 2 0 1 1 4 0V6h4a2 2 0 0 1 2 2v3.5h-1.5a2 2 0 1 0 0 4H19.5V19a2 2 0 0 1-2 2h-3.8v-1.5a2 2 0 1 0-4 0V21H6a2 2 0 0 1-2-2v-3.8h1.5a2 2 0 1 0 0-4H4V8a2 2 0 0 1 2-2h3.5V4.5Z'],
		duotonePaths: ['M9.5 4.5a2 2 0 1 1 4 0V6h4a2 2 0 0 1 2 2v3.5h-1.5a2 2 0 1 0 0 4H19.5V19a2 2 0 0 1-2 2h-3.8v-1.5a2 2 0 1 0-4 0V21H6a2 2 0 0 1-2-2v-3.8h1.5a2 2 0 1 0 0-4H4V8a2 2 0 0 1 2-2h3.5V4.5Z']
	},
	{
		name: 'bug',
		category: 'Development',
		tags: 'debug issue error test',
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
		accentPaths: ['M12 11v8.5'],
		duotonePaths: ['M7.8 11h8.4v4a4.5 4.5 0 0 1-9 0v-4Z']
	},
	{
		name: 'webhook',
		category: 'Development',
		tags: 'api event trigger callback',
		outlinePaths: [
			'M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2',
			'M6 17l3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06',
			'M12 6l3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8'
		],
		accentPaths: [
			'M12 7.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M6 18.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M18 18.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z'
		],
		duotonePaths: [
			'M12 7.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M6 18.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z',
			'M18 18.1a1.1 1.1 0 1 0 0-2.2 1.1 1.1 0 0 0 0 2.2Z'
		]
	},
	{
		name: 'api-plug',
		category: 'Development',
		tags: 'connect integration endpoint sdk',
		outlinePaths: ['M12 21v-4', 'M7.5 9.5h9v3a4.5 4.5 0 0 1-9 0v-3Z'],
		accentPaths: ['M9.5 4.5v5', 'M14.5 4.5v5'],
		duotonePaths: ['M7.5 9.5h9v3a4.5 4.5 0 0 1-9 0v-3Z']
	},
	{
		name: 'container-box',
		category: 'Development',
		tags: 'docker kubernetes pod runtime',
		outlinePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-7Z'],
		accentPaths: ['M7.5 9.5v5', 'M12 9.5v5', 'M16.5 9.5v5'],
		duotonePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-7Z']
	},
	{
		name: 'workflow',
		category: 'Development',
		tags: 'pipeline automation dag nodes',
		outlinePaths: ['M3.5 5A1.5 1.5 0 0 1 5 3.5h4A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H5A1.5 1.5 0 0 1 3.5 9V5Z', 'M13.5 15a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4Z'],
		accentPaths: ['M7 10.5V15a2 2 0 0 0 2 2h4.5', 'M10.5 7H15a2 2 0 0 1 2 2v4.5'],
		duotonePaths: ['M3.5 5A1.5 1.5 0 0 1 5 3.5h4A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H5A1.5 1.5 0 0 1 3.5 9V5Z', 'M13.5 15a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5v-4Z']
	},
	{
		name: 'flask',
		category: 'Development',
		tags: 'experiment lab beta preview',
		outlinePaths: [
			'M9 3h6',
			'M10.2 3v5.2c0 .6-.2 1.2-.5 1.7l-4.5 7.3A2.4 2.4 0 0 0 7.2 21h9.6a2.4 2.4 0 0 0 2-3.8L14.3 9.9c-.3-.5-.5-1.1-.5-1.7V3'
		],
		accentPaths: [
			'M6.6 15h10.8',
			'M10.2 18.8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z',
			'M13.2 13a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z'
		],
		duotonePaths: ['M6.6 15h10.8l1.4 2.2A2.4 2.4 0 0 1 16.8 21H7.2a2.4 2.4 0 0 1-2-3.8L6.6 15Z']
	},
	{
		name: 'wrench',
		category: 'Development',
		tags: 'tool repair build fix config',
		outlinePaths: ['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a5.2 5.2 0 0 1-6.9 6.9l-7.2 7.2a2.1 2.1 0 0 1-3-3l7.2-7.2a5.2 5.2 0 0 1 6.9-6.9l-3.1 3.1Z'],
		duotonePaths: ['M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.1-3.1a5.2 5.2 0 0 1-6.9 6.9l-7.2 7.2a2.1 2.1 0 0 1-3-3l7.2-7.2a5.2 5.2 0 0 1 6.9-6.9l-3.1 3.1Z']
	},
	{
		name: 'regex',
		category: 'Development',
		tags: 'pattern match string filter',
		outlinePaths: ['M4 18.5 7 5.5', 'M17 18.5 20 5.5'],
		accentPaths: [
			'M9.2 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
			'M13.8 6.6v5.2',
			'M11.55 7.9l4.5 2.6',
			'M16.05 7.9l-4.5 2.6'
		],
		duotonePaths: ['M9.2 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z']
	},
	{
		name: 'cloud-code',
		category: 'Development',
		tags: 'serverless deploy edge function',
		outlinePaths: ['M17.5 19.2H6.8a4.5 4.5 0 0 1-1-8.89A6.1 6.1 0 0 1 17.8 11.3a4 4 0 0 1-.3 7.9Z'],
		accentPaths: ['M10 11.2 7.5 13.7 10 16.2', 'M14 11.2 16.5 13.7 14 16.2'],
		duotonePaths: ['M17.5 19.2H6.8a4.5 4.5 0 0 1-1-8.89A6.1 6.1 0 0 1 17.8 11.3a4 4 0 0 1-.3 7.9Z']
	},
	{
		name: 'binary',
		category: 'Development',
		tags: 'bits data 01 machine',
		outlinePaths: ['M5.5 5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H7A1.5 1.5 0 0 1 5.5 9V5Z', 'M13.5 15a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-4Z'],
		accentPaths: ['M15.5 3.5v7', 'M14 5l1.5-1.5', 'M7.5 13.5v7', 'M6 15l1.5-1.5'],
		duotonePaths: ['M5.5 5a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H7A1.5 1.5 0 0 1 5.5 9V5Z', 'M13.5 15a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-2a1.5 1.5 0 0 1-1.5-1.5v-4Z']
	}
]
