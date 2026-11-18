import type { SvgIconItem } from './types'

export const SECURITY_ICONS: SvgIconItem[] = [
	{
		name: 'fingerprint',
		category: 'Security',
		tags: 'biometric sso touch id auth passkey',
		outlinePaths: [
			'M7.5 4.2A8 8 0 0 1 20 10.5c0 3.1-.6 6.05-1.68 8.75',
			'M5.25 6.4A8 8 0 0 0 4 10.5c0 1.55-.42 3.05-1.2 4.35',
			'M5.2 18.4A11.8 11.8 0 0 0 8 10.5a4 4 0 1 1 8 0c0 .85-.07 1.68-.2 2.5'
		],
		accentPaths: [
			'M12 10.5a15.2 15.2 0 0 1-3.85 10.1',
			'M15.1 16.1a18.5 18.5 0 0 1-2.55 5.4'
		],
		duotonePaths: [
			'M12 2.5a8 8 0 0 1 8 8c0 5-2.5 9.2-8 11-5.5-1.8-8-6-8-11a8 8 0 0 1 8-8Z'
		]
	},
	{
		name: 'face-id',
		category: 'Security',
		tags: 'biometric scan recognition login',
		outlinePaths: [
			'M7.5 3H5a2 2 0 0 0-2 2v2.5',
			'M16.5 3H19a2 2 0 0 1 2 2v2.5',
			'M21 16.5V19a2 2 0 0 1-2 2h-2.5',
			'M3 16.5V19a2 2 0 0 0 2 2h2.5'
		],
		accentPaths: [
			'M8.5 9.5v1.5',
			'M15.5 9.5v1.5',
			'M12 9.5v3.5a1 1 0 0 1-1 1',
			'M9 16.2a4.5 4.5 0 0 0 6 0'
		],
		duotonePaths: [
			'M6 8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z'
		]
	},
	{
		name: 'scan-eye',
		category: 'Security',
		tags: 'iris biometric vision verify',
		outlinePaths: [
			'M7.5 3H5a2 2 0 0 0-2 2v2.5',
			'M16.5 3H19a2 2 0 0 1 2 2v2.5',
			'M21 16.5V19a2 2 0 0 1-2 2h-2.5',
			'M3 16.5V19a2 2 0 0 0 2 2h2.5',
			'M6 12s2.2-3.5 6-3.5 6 3.5 6 3.5-2.2 3.5-6 3.5S6 12 6 12Z'
		],
		accentPaths: ['M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z'],
		duotonePaths: ['M6 12s2.2-3.5 6-3.5 6 3.5 6 3.5-2.2 3.5-6 3.5S6 12 6 12Z']
	},
	{
		name: 'shield',
		category: 'Security',
		tags: 'protect guard defense safety',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'shield-check',
		category: 'Security',
		tags: 'soc2 verified safe secure trust',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		accentPaths: ['M9 12.2 11 14.2 15.5 9.6'],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'shield-alert',
		category: 'Security',
		tags: 'warning breach threat vulnerability',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		accentPaths: ['M12 8.5v4', 'M12 15.5h.01'],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'shield-lock',
		category: 'Security',
		tags: 'encrypted protected firewall auth',
		outlinePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z'],
		accentPaths: [
			'M9.5 11.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-2.5Z',
			'M10.5 10.5V9.3a1.5 1.5 0 0 1 3 0v1.2'
		],
		duotonePaths: ['M12 21.5s7.5-3.6 7.5-9.5V5.8L12 3 4.5 5.8V12c0 5.9 7.5 9.5 7.5 9.5Z']
	},
	{
		name: 'lock',
		category: 'Security',
		tags: 'auth password private closed',
		outlinePaths: [
			'M4.5 12.5A2.5 2.5 0 0 1 7 10h10a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5v-6Z',
			'M8 10V7a4 4 0 0 1 8 0v3'
		],
		accentPaths: ['M12 14.5v2.2', 'M12 14.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z'],
		duotonePaths: ['M4.5 12.5A2.5 2.5 0 0 1 7 10h10a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5v-6Z']
	},
	{
		name: 'lock-open',
		category: 'Security',
		tags: 'unlock open access public',
		outlinePaths: [
			'M4.5 12.5A2.5 2.5 0 0 1 7 10h10a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5v-6Z',
			'M8 10V7a4 4 0 0 1 7.6-1.7'
		],
		accentPaths: ['M12 14.5v2.2'],
		duotonePaths: ['M4.5 12.5A2.5 2.5 0 0 1 7 10h10a2.5 2.5 0 0 1 2.5 2.5v6A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5v-6Z']
	},
	{
		name: 'key',
		category: 'Security',
		tags: 'api token secret credential',
		outlinePaths: ['M7.5 19.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z', 'M10.7 11.8 19.5 3'],
		accentPaths: ['M16.5 6 19 8.5', 'M14 8.5l2 2', 'M7.5 15.8a.8.8 0 1 0 0-1.6.8.8 0 0 0 0 1.6Z'],
		duotonePaths: ['M7.5 19.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z']
	},
	{
		name: 'key-round',
		category: 'Security',
		tags: 'passkey ssh access token',
		outlinePaths: ['M6.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M10 12h11'],
		accentPaths: ['M17.5 12v3', 'M20.5 12v2', 'M6.5 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z'],
		duotonePaths: ['M6.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'password-dots',
		category: 'Security',
		tags: 'pin asterisks masked input secret',
		outlinePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h14A2.5 2.5 0 0 1 21.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z'],
		accentPaths: ['M7 12h.01', 'M10.3 12h.01', 'M13.7 12h.01', 'M17 12h.01'],
		duotonePaths: ['M2.5 9A2.5 2.5 0 0 1 5 6.5h14A2.5 2.5 0 0 1 21.5 9v6a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 15V9Z']
	},
	{
		name: 'vault',
		category: 'Security',
		tags: 'safe secrets store storage bank',
		outlinePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', 'M12 9V7.5', 'M12 16.5V15', 'M9 12H7.5', 'M16.5 12H15'],
		duotonePaths: ['M3 6.5A3.5 3.5 0 0 1 6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11Z']
	},
	{
		name: 'incognito',
		category: 'Security',
		tags: 'privacy anonymous stealth mask',
		outlinePaths: ['M3 11.5h18', 'M6 11.5l1.6-5.2A2 2 0 0 1 9.5 5h5a2 2 0 0 1 1.9 1.3L18 11.5'],
		accentPaths: ['M7.5 18.5a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z', 'M16.5 18.5a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z', 'M10.3 15.7h3.4'],
		duotonePaths: ['M6 11.5l1.6-5.2A2 2 0 0 1 9.5 5h5a2 2 0 0 1 1.9 1.3L18 11.5H6Z']
	},
	{
		name: 'siren',
		category: 'Security',
		tags: 'alarm emergency alert incident',
		outlinePaths: ['M6.5 17.5V12a5.5 5.5 0 0 1 11 0v5.5', 'M4.5 17.5h15a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-1.5a1 1 0 0 1 1-1Z'],
		accentPaths: ['M12 2.5v2', 'M5.2 5.2l1.4 1.4', 'M18.8 5.2l-1.4 1.4', 'M10.5 11.5a1.5 1.5 0 0 1 1.5-1.5'],
		duotonePaths: ['M6.5 17.5V12a5.5 5.5 0 0 1 11 0v5.5h-11Z']
	},
	{
		name: 'verified-badge',
		category: 'Security',
		tags: 'check seal authentic official',
		outlinePaths: ['M12 2.5l2.1 1.7 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7 1.7 2.1-1.7 2.1.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 21.5l-2.1-1.7-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2.1 12l1.7-2.1-.2-2.7 2.5-1.1L7.2 3.6l2.7.2L12 2.5Z'],
		accentPaths: ['M9 12.2 11 14.2 15.3 9.7'],
		duotonePaths: ['M12 2.5l2.1 1.7 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7 1.7 2.1-1.7 2.1.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 21.5l-2.1-1.7-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2.1 12l1.7-2.1-.2-2.7 2.5-1.1L7.2 3.6l2.7.2L12 2.5Z']
	},
	{
		name: 'certificate',
		category: 'Security',
		tags: 'ssl tls license diploma',
		outlinePaths: ['M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9A2.5 2.5 0 0 1 17.5 17H6.5A2.5 2.5 0 0 1 4 14.5v-9Z', 'M8 7.5h8', 'M8 11h4'],
		accentPaths: ['M15.5 15.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M14 15v6l1.5-1 1.5 1v-6'],
		duotonePaths: ['M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v9A2.5 2.5 0 0 1 17.5 17H6.5A2.5 2.5 0 0 1 4 14.5v-9Z']
	},
	{
		name: 'file-shield',
		category: 'Security',
		tags: 'audit policy compliance document',
		outlinePaths: [
			'M11.5 21H7a2.5 2.5 0 0 1-2.5-2.5v-13A2.5 2.5 0 0 1 7 3h6.5L19 8.5v3.5',
			'M13.5 3v4A1.5 1.5 0 0 0 15 8.5h4',
			'M8 11.5h4.5',
			'M8 15h2.5'
		],
		accentPaths: ['M16.5 21.5s3.5-1.6 3.5-4.3v-2.6l-3.5-1.3-3.5 1.3v2.6c0 2.7 3.5 4.3 3.5 4.3Z'],
		duotonePaths: [
			'M16.5 21.5s3.5-1.6 3.5-4.3v-2.6l-3.5-1.3-3.5 1.3v2.6c0 2.7 3.5 4.3 3.5 4.3Z'
		]
	},
	{
		name: 'radar-scan',
		category: 'Security',
		tags: 'monitor detect threat sweep',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z'],
		accentPaths: ['M12 12l5.8-5.8', 'M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'cctv',
		category: 'Security',
		tags: 'camera surveillance monitor security',
		outlinePaths: [
			'M4.5 6.8a2 2 0 0 1 2.4-1.4l10.6 2.8a1.8 1.8 0 0 1 1.3 2.2l-.8 3.2a1.8 1.8 0 0 1-2.2 1.3L5.2 12.1a2 2 0 0 1-1.4-2.4l.7-2.9Z',
			'M18.6 9.8l2 .5a1 1 0 0 1 .7 1.2l-.5 2a1 1 0 0 1-1.2.7l-2-.5'
		],
		accentPaths: [
			'M2.8 14v6.5',
			'M2.8 17.5H7a1.8 1.8 0 0 0 1.7-1.2l1-3.1',
			'M7.8 9h.01'
		],
		duotonePaths: [
			'M4.5 6.8a2 2 0 0 1 2.4-1.4l10.6 2.8a1.8 1.8 0 0 1 1.3 2.2l-.8 3.2a1.8 1.8 0 0 1-2.2 1.3L5.2 12.1a2 2 0 0 1-1.4-2.4l.7-2.9Z'
		]
	},
	{
		name: 'firewall',
		category: 'Security',
		tags: 'brick wall network guard',
		outlinePaths: ['M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11Z'],
		accentPaths: ['M3 9.5h18', 'M3 14.5h18', 'M9 4v5.5', 'M15 9.5v5', 'M9 14.5V20'],
		duotonePaths: ['M3 9.5h18v5H3v-5Z']
	},
	{
		name: 'bug-off',
		category: 'Security',
		tags: 'patch fix antivirus clean',
		outlinePaths: [
			'M8 10.5a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0v-4Z',
			'M9.5 6.8 7.5 4.2',
			'M14.5 6.8l2-2.6',
			'M4.5 9l3.5 1.5',
			'M4 13h4',
			'M5 17.5 8 15.5',
			'M19.5 9 16 10.5',
			'M20 13h-4',
			'M19 17.5 16 15.5'
		],
		accentPaths: ['M3.5 3.5l17 17'],
		duotonePaths: ['M8 10.5a4 4 0 0 1 8 0v4a4 4 0 0 1-8 0v-4Z']
	},
	{
		name: 'user-shield',
		category: 'Security',
		tags: 'admin rbac role permissions',
		outlinePaths: ['M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M3.5 20a6.5 6.5 0 0 1 8-6.3'],
		accentPaths: ['M16.5 21.5s3.5-1.6 3.5-4.3v-2.6l-3.5-1.3-3.5 1.3v2.6c0 2.7 3.5 4.3 3.5 4.3Z'],
		duotonePaths: ['M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z', 'M16.5 21.5s3.5-1.6 3.5-4.3v-2.6l-3.5-1.3-3.5 1.3v2.6c0 2.7 3.5 4.3 3.5 4.3Z']
	},
	{
		name: 'check-badge',
		category: 'Security',
		tags: 'approved compliant trust kyc',
		outlinePaths: ['M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v7.2c0 4-3.8 6.8-8 8.3-4.2-1.5-8-4.3-8-8.3V6Z'],
		accentPaths: ['M8.8 11.8 11 14l4.5-4.5'],
		duotonePaths: ['M4 6a2.5 2.5 0 0 1 2.5-2.5h11A2.5 2.5 0 0 1 20 6v7.2c0 4-3.8 6.8-8 8.3-4.2-1.5-8-4.3-8-8.3V6Z']
	}
]
