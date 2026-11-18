import type { SvgIconItem } from './types'

export const PRODUCTIVITY_ICONS: SvgIconItem[] = [
	{
		name: 'checklist',
		category: 'Productivity',
		tags: 'todo tasks list done',
		outlinePaths: ['M11 6.5h9.5', 'M11 12h9.5', 'M11 17.5h9.5'],
		accentPaths: ['M3.5 6.5 5 8l2.5-2.5', 'M3.5 12 5 13.5 7.5 11', 'M3.5 17.5 5 19l2.5-2.5']
	},
	{
		name: 'note-sticky',
		category: 'Productivity',
		tags: 'memo post-it reminder note',
		outlinePaths: ['M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V15l-5 5H6.5A2.5 2.5 0 0 1 4 17.5v-11Z'],
		accentPaths: ['M15 20v-3.5a1.5 1.5 0 0 1 1.5-1.5H20', 'M8 9h8', 'M8 12.5h5'],
		duotonePaths: ['M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5V15l-5 5H6.5A2.5 2.5 0 0 1 4 17.5v-11Z']
	},
	{
		name: 'presentation',
		category: 'Productivity',
		tags: 'slides deck keynote pitch',
		outlinePaths: ['M3 4.5h18', 'M4.5 4.5v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-10', 'M12 16.5v4', 'M8.5 20.5 12 16.5l3.5 4'],
		accentPaths: ['M8 12l2.5-2.5 2 2L16 8'],
		duotonePaths: ['M4.5 4.5h15v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10Z']
	},
	{
		name: 'clipboard-list',
		category: 'Productivity',
		tags: 'agenda checklist audit form',
		outlinePaths: ['M8.5 4.5H7A2.5 2.5 0 0 0 4.5 7v11.5A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5V7A2.5 2.5 0 0 0 17 4.5h-1.5', 'M8.5 4.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 14 7h-4a1.5 1.5 0 0 1-1.5-1.5v-1Z'],
		accentPaths: ['M8.5 11.5h.01', 'M11.5 11.5h4.5', 'M8.5 15.5h.01', 'M11.5 15.5h4.5'],
		duotonePaths: ['M4.5 7A2.5 2.5 0 0 1 7 4.5h10A2.5 2.5 0 0 1 19.5 7v11.5A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5V7Z']
	},
	{
		name: 'milestone',
		category: 'Productivity',
		tags: 'roadmap release signpost goal',
		outlinePaths: ['M12 3v18', 'M4.5 7.5A1.5 1.5 0 0 1 6 6h10.5l3 2.5-3 2.5H6a1.5 1.5 0 0 1-1.5-1.5v-2Z'],
		accentPaths: ['M7 14h11'],
		duotonePaths: ['M4.5 7.5A1.5 1.5 0 0 1 6 6h10.5l3 2.5-3 2.5H6a1.5 1.5 0 0 1-1.5-1.5v-2Z']
	},
	{
		name: 'sprint-cycle',
		category: 'Productivity',
		tags: 'agile scrum iteration loop',
		outlinePaths: ['M4.5 9.3A8 8 0 0 1 19.5 9.3', 'M19.5 14.7A8 8 0 0 1 4.5 14.7'],
		accentPaths: ['M16.8 8.3 19.5 9.3l1.1-2.7', 'M7.2 15.7 4.5 14.7l-1.1 2.7'],
		duotonePaths: ['M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z']
	},
	{
		name: 'gantt-chart',
		category: 'Productivity',
		tags: 'timeline schedule bars project',
		outlinePaths: ['M3.5 3.5v15a2 2 0 0 0 2 2h15'],
		accentPaths: ['M7 7h6', 'M10 11.5h8', 'M13 16h6']
	},
	{
		name: 'stamp',
		category: 'Productivity',
		tags: 'approve sign legal seal',
		outlinePaths: ['M5 17.5A2 2 0 0 1 7 15.5h10a2 2 0 0 1 2 2V19H5v-1.5Z', 'M10 15.5v-3.8c0-.8-.5-1.5-1.2-2a3.8 3.8 0 1 1 6.4 0c-.7.5-1.2 1.2-1.2 2v3.8'],
		accentPaths: ['M4 21h16'],
		duotonePaths: ['M5 17.5A2 2 0 0 1 7 15.5h10a2 2 0 0 1 2 2V19H5v-1.5Z']
	},
	{
		name: 'signature',
		category: 'Productivity',
		tags: 'sign contract autographed legal',
		outlinePaths: ['M3 16.5c2-4.5 3.5-8 5-8s1.5 6.5 3 6.5 2-4 3.2-4 1.3 3 2.5 3 2-1.5 3.8-1.5'],
		accentPaths: ['M3 20h18']
	},
	{
		name: 'focus-mode',
		category: 'Productivity',
		tags: 'zen workspace concentrate',
		outlinePaths: ['M7.5 3.5H5A1.5 1.5 0 0 0 3.5 5v2.5', 'M16.5 3.5H19A1.5 1.5 0 0 1 20.5 5v2.5', 'M20.5 16.5V19a1.5 1.5 0 0 1-1.5 1.5h-2.5', 'M3.5 16.5V19A1.5 1.5 0 0 0 5 20.5h2.5'],
		accentPaths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z'],
		duotonePaths: ['M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z']
	},
	{
		name: 'folder-kanban',
		category: 'Productivity',
		tags: 'project board workspace',
		outlinePaths: ['M2.5 6.5A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19a2.5 2.5 0 0 1 2.5 2.5v8.1A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5V6.5Z'],
		accentPaths: ['M8 11v5', 'M12 11v3', 'M16 11v4'],
		duotonePaths: ['M2.5 6.5A2.5 2.5 0 0 1 5 4h3.9a2 2 0 0 1 1.6.8l1 1.3a2 2 0 0 0 1.6.8H19a2.5 2.5 0 0 1 2.5 2.5v8.1A2.5 2.5 0 0 1 19 20H5a2.5 2.5 0 0 1-2.5-2.5V6.5Z']
	},
	{
		name: 'calendar-x',
		category: 'Productivity',
		tags: 'cancel reschedule unavailable',
		outlinePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v11.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5V7Z', 'M8 2.5v3', 'M16 2.5v3', 'M3 9.5h18'],
		accentPaths: ['M10 13l4 4', 'M14 13l-4 4'],
		duotonePaths: ['M3 7A2.5 2.5 0 0 1 5.5 4.5h13A2.5 2.5 0 0 1 21 7v2.5H3V7Z']
	},
	{
		name: 'bookmark-plus',
		category: 'Productivity',
		tags: 'save collection add later',
		outlinePaths: ['M5.5 5A2.5 2.5 0 0 1 8 2.5h8A2.5 2.5 0 0 1 18.5 5v15.6a.8.8 0 0 1-1.3.63L12 17.2l-5.2 4.03a.8.8 0 0 1-1.3-.63V5Z'],
		accentPaths: ['M12 7.5v5', 'M9.5 10h5'],
		duotonePaths: ['M5.5 5A2.5 2.5 0 0 1 8 2.5h8A2.5 2.5 0 0 1 18.5 5v15.6a.8.8 0 0 1-1.3.63L12 17.2l-5.2 4.03a.8.8 0 0 1-1.3-.63V5Z']
	},
	{
		name: 'archive-restore',
		category: 'Productivity',
		tags: 'unarchive recover backup',
		outlinePaths: ['M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5V8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5.5Z', 'M4.5 9h15v8.5A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5V9Z'],
		accentPaths: ['M12 17v-5', 'M9.5 14.5 12 12l2.5 2.5'],
		duotonePaths: ['M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5V8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5.5Z']
	},
	{
		name: 'briefcase-check',
		category: 'Productivity',
		tags: 'hired completed work project',
		outlinePaths: ['M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18V9.5Z', 'M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2'],
		accentPaths: ['M9.5 14 11.3 15.8 15 12'],
		duotonePaths: ['M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18V9.5Z']
	},
	{
		name: 'whiteboard',
		category: 'Productivity',
		tags: 'brainstorm diagram workshop',
		outlinePaths: ['M3 5.5A2 2 0 0 1 5 3.5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10Z', 'M8 17.5 6.5 21', 'M16 17.5l1.5 3.5'],
		accentPaths: ['M7 8.5h4v4H7z', 'M14 9.5h3', 'M14 12.5h2'],
		duotonePaths: ['M3 5.5A2 2 0 0 1 5 3.5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-10Z']
	},
	{
		name: 'inbox-stack',
		category: 'Productivity',
		tags: 'queue batch backlog tray',
		outlinePaths: ['M5 7h14', 'M7 4h10', 'M3.5 12.5A2.5 2.5 0 0 1 6 10h12a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-5Z'],
		accentPaths: ['M9 14.5h6'],
		duotonePaths: ['M3.5 12.5A2.5 2.5 0 0 1 6 10h12a2.5 2.5 0 0 1 2.5 2.5v5A2.5 2.5 0 0 1 18 20H6a2.5 2.5 0 0 1-2.5-2.5v-5Z']
	},
	{
		name: 'clock-alert',
		category: 'Productivity',
		tags: 'deadline overdue urgent time',
		outlinePaths: ['M15.25 19.35A8.5 8.5 0 1 1 19.2 9.8', 'M11 7.5V12l3 2'],
		accentPaths: ['M20 13v3.8', 'M20 19.8h.01'],
		duotonePaths: ['M11 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z']
	},
	{
		name: 'tag-plus',
		category: 'Productivity',
		tags: 'label categorize add tag',
		outlinePaths: ['M12.6 3.5H5.5A2 2 0 0 0 3.5 5.5v7.1a2 2 0 0 0 .58 1.41l6.8 6.8a2 2 0 0 0 2.83 0l7.1-7.1a2 2 0 0 0 0-2.83l-6.8-6.8a2 2 0 0 0-1.41-.58Z'],
		accentPaths: ['M12 10v4', 'M10 12h4'],
		duotonePaths: ['M12.6 3.5H5.5A2 2 0 0 0 3.5 5.5v7.1a2 2 0 0 0 .58 1.41l6.8 6.8a2 2 0 0 0 2.83 0l7.1-7.1a2 2 0 0 0 0-2.83l-6.8-6.8a2 2 0 0 0-1.41-.58Z']
	},
	{
		name: 'okr-target',
		category: 'Productivity',
		tags: 'objective goal kpi arrow',
		outlinePaths: ['M19.5 12A7.5 7.5 0 1 1 12 4.5', 'M16.2 12a4.2 4.2 0 1 1-4.2-4.2'],
		accentPaths: ['M12 12l7.5-7.5', 'M16 4.5h3.5V8'],
		duotonePaths: ['M16.2 12a4.2 4.2 0 1 1-4.2-4.2A4.2 4.2 0 0 1 16.2 12Z']
	},
	{
		name: 'bell-dot',
		category: 'Productivity',
		tags: 'unread notification badge alert',
		outlinePaths: [
			'M13 4.2A5.5 5.5 0 0 0 6 9.5c0 4-1.5 5.5-2.5 6.5a.8.8 0 0 0 .6 1.4h14.8a.8.8 0 0 0 .6-1.4c-.7-.7-1.4-1.6-1.9-3.2',
			'M11.5 2.5V4',
			'M9.8 19.5a2 2 0 0 0 3.4 0'
		],
		accentPaths: ['M17.5 9.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z'],
		duotonePaths: [
			'M11.5 4A5.5 5.5 0 0 0 6 9.5c0 4-1.5 5.5-2.5 6.5a.8.8 0 0 0 .6 1.4h14.8a.8.8 0 0 0 .6-1.4c-1-1-2.5-2.5-2.5-6.5A5.5 5.5 0 0 0 11.5 4Z',
			'M17.5 9.4a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8Z'
		]
	},
	{
		name: 'list-checks',
		category: 'Productivity',
		tags: 'done checklist progress',
		outlinePaths: ['M10.5 7h9.5', 'M10.5 12.5h9.5', 'M10.5 18h9.5'],
		accentPaths: ['M3.5 6.5 5 8l2.5-2.5', 'M3.5 12 5 13.5 7.5 11', 'M4.5 17.5h2']
	},
	{
		name: 'calendar-clock',
		category: 'Productivity',
		tags: 'meeting schedule appointment',
		outlinePaths: ['M19 10.5V7A2.5 2.5 0 0 0 16.5 4.5h-11A2.5 2.5 0 0 0 3 7v11a2.5 2.5 0 0 0 2.5 2.5H10', 'M7.5 2.5v3', 'M14.5 2.5v3', 'M3 9.5h16'],
		accentPaths: ['M16.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z', 'M16.5 14.5V16.5l1.5 1'],
		duotonePaths: ['M16.5 21a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z']
	},
	{
		name: 'paper-plane-check',
		category: 'Productivity',
		tags: 'sent delivered message',
		outlinePaths: ['M19.5 4 9.2 15.9 10.5 8.5 3.8 5.1 19.5 4Z', 'M19.5 4 10.5 8.5'],
		accentPaths: ['M13.5 18l2.3 2.3L20.5 15.5'],
		duotonePaths: ['M19.5 4 9.2 15.9 10.5 8.5 3.8 5.1 19.5 4Z']
	}
]
