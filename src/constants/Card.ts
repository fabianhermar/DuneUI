export interface Card {
	index: string
	slug: string
	title: string
	quantity: string
	image: string
	href: string
	alt: string
	tag: string
}

export const CARDS: Card[] = (
	[
	{
		index: '01',
		slug: 'accordion',
		title: 'Accordion',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Accordion.svg',
		href: '/components/accordion',
		alt: 'Accordion components',
		tag: 'Disclosure'
	},
	{
		index: '02',
		slug: 'alerts',
		title: 'Alerts',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Alerts.svg',
		href: '/components/alerts',
		alt: 'Alerts components',
		tag: 'Feedback'
	},
	{
		index: '03',
		slug: 'avatar',
		title: 'Avatar',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Avatar.svg',
		href: '/components/avatar',
		alt: 'Avatar components',
		tag: 'Identity'
	},
	{
		index: '04',
		slug: 'badges',
		title: 'Badges',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Badges.svg',
		href: '/components/badges',
		alt: 'Badges components',
		tag: 'Status'
	},
	{
		index: '05',
		slug: 'breadcrumb',
		title: 'Breadcrumb',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Breadcrumbs.svg',
		href: '/components/breadcrumb',
		alt: 'Breadcrumb components',
		tag: 'Navigation'
	},
	{
		index: '06',
		slug: 'button-group',
		title: 'Button Group',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Button-group.svg',
		href: '/components/button-group',
		alt: 'Button Group components',
		tag: 'Actions'
	},
	{
		index: '07',
		slug: 'buttons',
		title: 'Buttons',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Buttons.svg',
		href: '/components/buttons',
		alt: 'Buttons components',
		tag: 'Actions'
	},
	{
		index: '08',
		slug: 'cards',
		title: 'Cards',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Cards.svg',
		href: '/components/cards',
		alt: 'Cards components',
		tag: 'Containers'
	},
	{
		index: '09',
		slug: 'dropdown',
		title: 'Dropdown',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Dropdown.svg',
		href: '/components/dropdown',
		alt: 'Dropdown components',
		tag: 'Overlays'
	},
	{
		index: '10',
		slug: 'footer',
		title: 'Footer',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Footer.svg',
		href: '/components/footer',
		alt: 'Footer components',
		tag: 'Layout'
	},
	{
		index: '11',
		slug: 'forms',
		title: 'Forms',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Forms.svg',
		href: '/components/forms',
		alt: 'Forms components',
		tag: 'Inputs'
	},
	{
		index: '12',
		slug: 'list-group',
		title: 'List Group',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/List-group.svg',
		href: '/components/list-group',
		alt: 'List Group components',
		tag: 'Data Display'
	},
	{
		index: '13',
		slug: 'modals',
		title: 'Modals',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Modal.svg',
		href: '/components/modals',
		alt: 'Modals components',
		tag: 'Overlays'
	},
	{
		index: '14',
		slug: 'navbars',
		title: 'Navbars',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Navbars.svg',
		href: '/components/navbars',
		alt: 'Navbars components',
		tag: 'Navigation'
	},
	{
		index: '15',
		slug: 'pagination',
		title: 'Pagination',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Pagination.svg',
		href: '/components/pagination',
		alt: 'Pagination components',
		tag: 'Navigation'
	},
	{
		index: '16',
		slug: 'sidebars',
		title: 'Sidebars',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Sidebars.svg',
		href: '/components/sidebars',
		alt: 'Sidebars components',
		tag: 'Layout'
	},
	{
		index: '17',
		slug: 'tabs',
		title: 'Tabs',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Tabs.svg',
		href: '/components/tabs',
		alt: 'Tabs components',
		tag: 'Navigation'
	},
	{
		index: '18',
		slug: 'typography',
		title: 'Typography',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Typography.svg',
		href: '/components/typography',
		alt: 'Typography components',
		tag: 'Editorial'
	},
	{
		index: '19',
		slug: 'tables',
		title: 'Data Tables',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Tables.svg',
		href: '/components/tables',
		alt: 'Data Tables components',
		tag: 'Data Display'
	},
	{
		index: '21',
		slug: 'stats',
		title: 'Stats & KPIs',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Stats.svg',
		href: '/components/stats',
		alt: 'Stats and KPIs components',
		tag: 'Analytics'
	},
	{
		index: '22',
		slug: 'toggles',
		title: 'Toggles',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Toggles.svg',
		href: '/components/toggles',
		alt: 'Toggles and switches components',
		tag: 'Controls'
	},
	{
		index: '23',
		slug: 'command',
		title: 'Command ⌘K',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Command.svg',
		href: '/components/command',
		alt: 'Command Palette components',
		tag: 'Productivity'
	},
	{
		index: '24',
		slug: 'bento',
		title: 'Bento Grids',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Bento.svg',
		href: '/components/bento',
		alt: 'Bento Grids components',
		tag: 'Layout'
	},
	{
		index: '25',
		slug: 'heroes',
		title: 'Hero Sections',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Heroes.svg',
		href: '/components/heroes',
		alt: 'Hero Sections components',
		tag: 'Marketing'
	},
	{
		index: '26',
		slug: 'cta',
		title: 'Call to Actions',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/CTA.svg',
		href: '/components/cta',
		alt: 'Call to Actions components',
		tag: 'Marketing'
	},
	{
		index: '27',
		slug: 'testimonials',
		title: 'Testimonials',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Testimonials.svg',
		href: '/components/testimonials',
		alt: 'Testimonials components',
		tag: 'Social Proof'
	},
	{
		index: '28',
		slug: 'steps',
		title: 'Steps & Steppers',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Steps.svg',
		href: '/components/steps',
		alt: 'Steps and Steppers components',
		tag: 'Progress'
	},
	{
		index: '29',
		slug: 'progress',
		title: 'Progress Bars',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Progress.svg',
		href: '/components/progress',
		alt: 'Progress Bars components',
		tag: 'Feedback'
	},
	{
		index: '30',
		slug: 'skeletons',
		title: 'Skeleton Loaders',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Skeletons.svg',
		href: '/components/skeletons',
		alt: 'Skeleton Loaders components',
		tag: 'Feedback'
	},
	{
		index: '31',
		slug: 'empty-states',
		title: 'Empty States',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/EmptyStates.svg',
		href: '/components/empty-states',
		alt: 'Empty States components',
		tag: 'Feedback'
	},
	{
		index: '32',
		slug: 'toasts',
		title: 'Toasts',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Toasts.svg',
		href: '/components/toasts',
		alt: 'Toasts components',
		tag: 'Feedback'
	},
	{
		index: '33',
		slug: 'tooltips',
		title: 'Tooltips & Popovers',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Tooltips.svg',
		href: '/components/tooltips',
		alt: 'Tooltips and Popovers components',
		tag: 'Overlays'
	},
	{
		index: '34',
		slug: 'auth',
		title: 'Authentication',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Auth.svg',
		href: '/components/auth',
		alt: 'Authentication components',
		tag: 'Templates'
	},
	{
		index: '35',
		slug: 'ecommerce',
		title: 'E-Commerce',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Ecommerce.svg',
		href: '/components/ecommerce',
		alt: 'E-Commerce components',
		tag: 'Commerce'
	},
	{
		index: '36',
		slug: 'feature-grids',
		title: 'Feature Grids',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Features.svg',
		href: '/components/feature-grids',
		alt: 'Feature Grids components',
		tag: 'Marketing'
	},
	{
		index: '37',
		slug: 'faq-sections',
		title: 'FAQ Sections',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/FAQ.svg',
		href: '/components/faq-sections',
		alt: 'FAQ Sections components',
		tag: 'Marketing'
	},
	{
		index: '38',
		slug: 'team',
		title: 'Team & Profiles',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Team.svg',
		href: '/components/team',
		alt: 'Team and Profiles components',
		tag: 'Marketing'
	},
	{
		index: '39',
		slug: 'file-upload',
		title: 'File Upload',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Upload.svg',
		href: '/components/file-upload',
		alt: 'File Upload components',
		tag: 'Inputs'
	},
	{
		index: '40',
		slug: 'calendars',
		title: 'Calendars & Booking',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Calendars.svg',
		href: '/components/calendars',
		alt: 'Calendars and Booking components',
		tag: 'Productivity'
	},
	{
		index: '41',
		slug: 'newsletter',
		title: 'Newsletter',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Newsletter.svg',
		href: '/components/newsletter',
		alt: 'Newsletter signup components',
		tag: 'Marketing'
	},
	{
		index: '42',
		slug: 'blog-sections',
		title: 'Blog Sections',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/BlogSections.svg',
		href: '/components/blog-sections',
		alt: 'Blog Sections components',
		tag: 'Marketing'
	},
	{
		index: '43',
		slug: 'contact',
		title: 'Contact Sections',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Contact.svg',
		href: '/components/contact',
		alt: 'Contact Sections components',
		tag: 'Marketing'
	},
	{
		index: '44',
		slug: 'logo-clouds',
		title: 'Logo Clouds',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/LogoClouds.svg',
		href: '/components/logo-clouds',
		alt: 'Logo Clouds components',
		tag: 'Marketing'
	},
	{
		index: '45',
		slug: 'banners',
		title: 'Banners',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Banners.svg',
		href: '/components/banners',
		alt: 'Banners components',
		tag: 'Marketing'
	},
	{
		index: '46',
		slug: '404-pages',
		title: '404 Pages',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Pages404.svg',
		href: '/components/404-pages',
		alt: '404 Pages components',
		tag: 'Feedback'
	},
	{
		index: '47',
		slug: 'landing-pages',
		title: 'Landing Pages',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/LandingPages.svg',
		href: '/components/landing-pages',
		alt: 'Landing Page examples',
		tag: 'Templates'
	},
	{
		index: '48',
		slug: 'pricing-pages',
		title: 'Pricing Pages',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/PricingPages.svg',
		href: '/components/pricing-pages',
		alt: 'Pricing Page examples',
		tag: 'Templates'
	},
	{
		index: '49',
		slug: 'drawers',
		title: 'Drawers & Slide-overs',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Drawers.svg',
		href: '/components/drawers',
		alt: 'Drawers and Slide-overs components',
		tag: 'Overlays'
	},
	{
		index: '50',
		slug: 'select-menus',
		title: 'Select & Comboboxes',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/SelectMenus.svg',
		href: '/components/select-menus',
		alt: 'Select Menus and Comboboxes components',
		tag: 'Inputs'
	},
	{
		index: '51',
		slug: 'description-lists',
		title: 'Description Lists',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/DescriptionLists.svg',
		href: '/components/description-lists',
		alt: 'Description Lists components',
		tag: 'Data Display'
	},
	{
		index: '52',
		slug: 'feeds',
		title: 'Feeds & Activity',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Feeds.svg',
		href: '/components/feeds',
		alt: 'Feeds and Activity components',
		tag: 'Data Display'
	},
	{
		index: '53',
		slug: 'action-panels',
		title: 'Action Panels',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/ActionPanels.svg',
		href: '/components/action-panels',
		alt: 'Action Panels components',
		tag: 'Controls'
	},
	{
		index: '54',
		slug: 'page-headings',
		title: 'Page Headings',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/PageHeadings.svg',
		href: '/components/page-headings',
		alt: 'Page Headings components',
		tag: 'Layout'
	},
	{
		index: '55',
		slug: 'shopping-carts',
		title: 'Shopping Carts',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/ShoppingCarts.svg',
		href: '/components/shopping-carts',
		alt: 'Shopping Carts components',
		tag: 'Commerce'
	},
	{
		index: '56',
		slug: 'checkout-forms',
		title: 'Checkout Forms',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/CheckoutForms.svg',
		href: '/components/checkout-forms',
		alt: 'Checkout Forms components',
		tag: 'Commerce'
	},
	{
		index: '57',
		slug: 'product-overviews',
		title: 'Product Overviews',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/ProductOverviews.svg',
		href: '/components/product-overviews',
		alt: 'Product Overviews components',
		tag: 'Commerce'
	},
	{
		index: '58',
		slug: 'order-summaries',
		title: 'Order Summaries',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/OrderSummaries.svg',
		href: '/components/order-summaries',
		alt: 'Order Summaries components',
		tag: 'Commerce'
	},
	{
		index: '59',
		slug: 'category-previews',
		title: 'Category Previews',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/CategoryPreviews.svg',
		href: '/components/category-previews',
		alt: 'Category Previews components',
		tag: 'Commerce'
	},
	{
		index: '60',
		slug: 'category-filters',
		title: 'Category Filters',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/CategoryFilters.svg',
		href: '/components/category-filters',
		alt: 'Category Filters components',
		tag: 'Commerce'
	},
	{
		index: '61',
		slug: 'loaders',
		title: 'Loaders & Spinners',
		quantity: '10 live specs',
		image: '/svg/ApplicationUI/Loaders.svg',
		href: '/components/loaders',
		alt: 'Loaders and Spinners components',
		tag: 'Feedback'
	}
] as const satisfies readonly Card[]
).map((card, idx) => ({
	...card,
	index: String(idx + 1).padStart(2, '0')
}))
