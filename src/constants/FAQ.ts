export interface FAQ {
	key: number
	label: string
	title: string
	content: string
}

export const FAQS: FAQ[] = [
	{
		key: 3,
		label: 'Which JS framework is used?',
		title: 'Which JS framework is used?',
		content:
			'You can use the JS framework of your choice, be it React, Svelte, Vue, Astro, or vanilla HTML. Components that include motion or rich interactions include clear structural markup you can adapt anywhere.'
	},
	{
		key: 4,
		label: 'Which version of Tailwind CSS is used?',
		title: 'Which version of Tailwind CSS is used?',
		content:
			'Every component and template developed by the DuneUI team uses Tailwind CSS v4 alongside pure CSS options for maximum cross-browser compatibility.'
	},
	{
		key: 5,
		label: 'Which browsers support Tailwind CSS?',
		title: 'Which browsers support Tailwind CSS?',
		content:
			'DuneUI works in the latest stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.'
	},
	{
		key: 7,
		label: 'Is DuneUI affiliated with Tailwind CSS?',
		title: 'Is DuneUI affiliated with Tailwind CSS?',
		content:
			'No, DuneUI is an independent open-source project and is not affiliated with Tailwind Labs.'
	},
	{
		key: 8,
		label: 'Can I use DuneUI in commercial or open source projects?',
		title: 'Can I use DuneUI in commercial or open source projects?',
		content:
			'Yes. You can use DuneUI components in personal, commercial, client, SaaS, and open-source projects with no attribution required. Please refer to /license for details.'
	},
	{
		key: 9,
		label: 'Can I sell templates/themes that I have built with DuneUI?',
		title: 'Can I sell templates/themes that I have built with DuneUI?',
		content:
			'No, the DuneUI license does not permit repackaging and redistributing our components as competing UI kits, template packs, or page builders.'
	}
]
