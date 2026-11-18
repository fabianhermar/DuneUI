import type { SvgIconItem } from './types'

export const COMMERCE_ICONS: SvgIconItem[] = [
	{
		name: 'shopping-bag',
		category: 'Commerce',
		tags: 'cart retail order checkout',
		outlinePaths: ['M5.5 7.5A1.5 1.5 0 0 1 7 6h10a1.5 1.5 0 0 1 1.5 1.5l1.2 10.7A2.5 2.5 0 0 1 17.2 21H6.8a2.5 2.5 0 0 1-2.5-2.8L5.5 7.5Z'],
		accentPaths: ['M8.5 6V5.5a3.5 3.5 0 0 1 7 0V6', 'M9 10.5a3 3 0 0 0 6 0'],
		duotonePaths: ['M5.5 7.5A1.5 1.5 0 0 1 7 6h10a1.5 1.5 0 0 1 1.5 1.5l1.2 10.7A2.5 2.5 0 0 1 17.2 21H6.8a2.5 2.5 0 0 1-2.5-2.8L5.5 7.5Z']
	},
	{
		name: 'shopping-cart',
		category: 'Commerce',
		tags: 'ecommerce basket buy store',
		outlinePaths: ['M2.5 3.5h2.4a1.5 1.5 0 0 1 1.45 1.13L8.2 13.5a2 2 0 0 0 1.95 1.55h7.4a2 2 0 0 0 1.93-1.48l1.2-4.5A1.2 1.2 0 0 0 19.5 7.5H7'],
		accentPaths: ['M9.5 19.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z', 'M17.5 19.8a1.3 1.3 0 1 0 0-2.6 1.3 1.3 0 0 0 0 2.6Z'],
		duotonePaths: ['M7 7.5h12.5a1.2 1.2 0 0 1 1.18 1.57l-1.2 4.5a2 2 0 0 1-1.93 1.48h-7.4A2 2 0 0 1 8.2 13.5L7 7.5Z']
	},
	{
		name: 'store',
		category: 'Commerce',
		tags: 'shop storefront boutique merchant',
		outlinePaths: ['M3 9.5 4.8 4.5A1.5 1.5 0 0 1 6.2 3.5h11.6a1.5 1.5 0 0 1 1.4 1L21 9.5', 'M4.5 11.5v7A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.5-2.5v-7'],
		accentPaths: ['M3 9.5a2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0 2.25 2.25 0 0 0 4.5 0', 'M9.5 21v-5a1.5 1.5 0 0 1 1.5-1.5h2a1.5 1.5 0 0 1 1.5 1.5v5'],
		duotonePaths: ['M4.5 11.5h15v7A2.5 2.5 0 0 1 17 21H7a2.5 2.5 0 0 1-2.5-2.5v-7Z']
	},
	{
		name: 'credit-card',
		category: 'Commerce',
		tags: 'stripe billing checkout pay visa',
		outlinePaths: ['M2 7a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 7v10a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 17V7Z'],
		accentPaths: ['M2 9.5h20', 'M6 14.5h4', 'M15.5 14.5h2.5'],
		duotonePaths: ['M2 7a2.5 2.5 0 0 1 2.5-2.5h15A2.5 2.5 0 0 1 22 7v2.5H2V7Z']
	},
	{
		name: 'wallet',
		category: 'Commerce',
		tags: 'balance cash crypto payment',
		outlinePaths: ['M3 6.5A2.5 2.5 0 0 1 5.5 4H18a2 2 0 0 1 2 2v1.5', 'M3 6.5v11A2.5 2.5 0 0 0 5.5 20h13a2.5 2.5 0 0 0 2.5-2.5v-8A2 2 0 0 0 19 7.5H5.5A2.5 2.5 0 0 1 3 6.5Z'],
		accentPaths: ['M16.5 12h4.5v3.5h-4.5a1.75 1.75 0 1 1 0-3.5Z'],
		duotonePaths: ['M3 7.5h16a2 2 0 0 1 2 2v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-10Z']
	},
	{
		name: 'banknote',
		category: 'Commerce',
		tags: 'money currency cash bill',
		outlinePaths: ['M2.5 7.5A2.5 2.5 0 0 1 5 5h14a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 19H5a2.5 2.5 0 0 1-2.5-2.5v-9Z'],
		accentPaths: ['M12 14.8a2.8 2.8 0 1 0 0-5.6 2.8 2.8 0 0 0 0 5.6Z', 'M6 12h.01', 'M18 12h.01'],
		duotonePaths: ['M2.5 7.5A2.5 2.5 0 0 1 5 5h14a2.5 2.5 0 0 1 2.5 2.5v9A2.5 2.5 0 0 1 19 19H5a2.5 2.5 0 0 1-2.5-2.5v-9Z']
	},
	{
		name: 'coins',
		category: 'Commerce',
		tags: 'tokens credits revenue stack',
		outlinePaths: [
			'M8.5 7.4c3.04 0 5.5-.98 5.5-2.2S11.54 3 8.5 3 3 3.98 3 5.2s2.46 2.2 5.5 2.2Z',
			'M3 5.2v10.6c0 1.2 2.46 2.2 5.5 2.2.18 0 .35 0 .5-.02',
			'M14 5.2v5.1',
			'M3 8.7c0 1.2 2.46 2.2 5.5 2.2.95 0 1.84-.1 2.62-.26',
			'M3 12.2c0 1.2 2.46 2.2 5.5 2.2.18 0 .35 0 .5-.02'
		],
		accentPaths: [
			'M15 15.3c3.31 0 6-1.12 6-2.5s-2.69-2.5-6-2.5-6 1.12-6 2.5 2.69 2.5 6 2.5Z',
			'M9 12.8v6c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5v-6',
			'M9 15.8c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5'
		],
		duotonePaths: [
			'M8.5 7.4c3.04 0 5.5-.98 5.5-2.2S11.54 3 8.5 3 3 3.98 3 5.2s2.46 2.2 5.5 2.2Z',
			'M15 15.3c3.31 0 6-1.12 6-2.5s-2.69-2.5-6-2.5-6 1.12-6 2.5 2.69 2.5 6 2.5Z'
		]
	},
	{
		name: 'dollar-circle',
		category: 'Commerce',
		tags: 'price usd money cost billing',
		outlinePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z'],
		accentPaths: ['M12 6.5v11', 'M14.8 9.2a2.5 2.5 0 0 0-2.8-1.2c-1.4 0-2.5.8-2.5 2s1.1 1.8 2.5 2 2.8.7 2.8 2.1-1.2 2.1-2.8 2.1a2.7 2.7 0 0 1-2.8-1.3'],
		duotonePaths: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z']
	},
	{
		name: 'percent-badge',
		category: 'Commerce',
		tags: 'discount sale offer promo deal',
		outlinePaths: ['M12 2.5l2.1 1.7 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7 1.7 2.1-1.7 2.1.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 21.5l-2.1-1.7-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2.1 12l1.7-2.1-.2-2.7 2.5-1.1L7.2 3.6l2.7.2L12 2.5Z'],
		accentPaths: ['M9 15l6-6', 'M9.5 10a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z', 'M14.5 15.4a.7.7 0 1 0 0-1.4.7.7 0 0 0 0 1.4Z'],
		duotonePaths: ['M12 2.5l2.1 1.7 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7 1.7 2.1-1.7 2.1.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 21.5l-2.1-1.7-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2.1 12l1.7-2.1-.2-2.7 2.5-1.1L7.2 3.6l2.7.2L12 2.5Z']
	},
	{
		name: 'tag',
		category: 'Commerce',
		tags: 'price label sku category',
		outlinePaths: ['M12.6 3.5H5.5A2 2 0 0 0 3.5 5.5v7.1a2 2 0 0 0 .58 1.41l6.8 6.8a2 2 0 0 0 2.83 0l7.1-7.1a2 2 0 0 0 0-2.83l-6.8-6.8a2 2 0 0 0-1.41-.58Z'],
		accentPaths: ['M8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
		duotonePaths: ['M12.6 3.5H5.5A2 2 0 0 0 3.5 5.5v7.1a2 2 0 0 0 .58 1.41l6.8 6.8a2 2 0 0 0 2.83 0l7.1-7.1a2 2 0 0 0 0-2.83l-6.8-6.8a2 2 0 0 0-1.41-.58Z']
	},
	{
		name: 'receipt',
		category: 'Commerce',
		tags: 'invoice billing expense tax',
		outlinePaths: ['M4.5 3.5A1.5 1.5 0 0 1 6 2h12a1.5 1.5 0 0 1 1.5 1.5V21l-2.5-1.5L14.5 21 12 19.5 9.5 21 7 19.5 4.5 21V3.5Z'],
		accentPaths: ['M8.5 7.5h7', 'M8.5 11.5h7', 'M8.5 15.5h4'],
		duotonePaths: ['M4.5 3.5A1.5 1.5 0 0 1 6 2h12a1.5 1.5 0 0 1 1.5 1.5V21l-2.5-1.5L14.5 21 12 19.5 9.5 21 7 19.5 4.5 21V3.5Z']
	},
	{
		name: 'package',
		category: 'Commerce',
		tags: 'box shipping delivery parcel',
		outlinePaths: ['M20.5 7.7v8.6a2 2 0 0 1-1.02 1.74l-6.5 3.6a2 2 0 0 1-1.96 0l-6.5-3.6A2 2 0 0 1 3.5 16.3V7.7a2 2 0 0 1 1.02-1.74l6.5-3.6a2 2 0 0 1 1.96 0l6.5 3.6a2 2 0 0 1 1.02 1.74Z'],
		accentPaths: ['M3.8 7 12 11.5 20.2 7', 'M12 21.8V11.5', 'M7.8 4.6 16 9.1'],
		duotonePaths: ['M12 11.5 3.8 7l8.2-4.6L20.2 7 12 11.5Z']
	},
	{
		name: 'package-check',
		category: 'Commerce',
		tags: 'delivered fulfilled order shipped',
		outlinePaths: ['M20.5 11.5V7.7a2 2 0 0 0-1.02-1.74l-6.5-3.6a2 2 0 0 0-1.96 0l-6.5 3.6A2 2 0 0 0 3.5 7.7v8.6a2 2 0 0 0 1.02 1.74l6.5 3.6a2 2 0 0 0 1.96 0', 'M3.8 7 12 11.5 20.2 7', 'M12 21.8V11.5'],
		accentPaths: ['M15.5 18 17.5 20 21.5 16'],
		duotonePaths: ['M12 11.5 3.8 7l8.2-4.6L20.2 7 12 11.5Z']
	},
	{
		name: 'truck',
		category: 'Commerce',
		tags: 'shipping logistics courier freight',
		outlinePaths: ['M2.5 6.5A2 2 0 0 1 4.5 4.5h8.5a2 2 0 0 1 2 2v9H2.5v-9Z', 'M15 8.5h3.3a2 2 0 0 1 1.7.95l1.5 2.55v3.5a1.5 1.5 0 0 1-1.5 1.5h-1', 'M5 17H2.5'],
		accentPaths: ['M7 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M17 19.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z', 'M9 17h6'],
		duotonePaths: ['M2.5 6.5A2 2 0 0 1 4.5 4.5h8.5a2 2 0 0 1 2 2v9H2.5v-9Z']
	},
	{
		name: 'barcode',
		category: 'Commerce',
		tags: 'sku scan inventory upc',
		outlinePaths: ['M3 6v12', 'M7 6v12', 'M11 6v12', 'M15 6v12', 'M18 6v12', 'M21 6v12'],
		accentPaths: ['M7 6v12', 'M15 6v12']
	},
	{
		name: 'qr-code',
		category: 'Commerce',
		tags: 'scan pay mobile link check-in',
		outlinePaths: [
			'M3.5 5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H5A1.5 1.5 0 0 1 3.5 9V5Z',
			'M13.5 5A1.5 1.5 0 0 1 15 3.5h4A1.5 1.5 0 0 1 20.5 5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V5Z',
			'M3.5 15A1.5 1.5 0 0 1 5 13.5h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9 20.5H5A1.5 1.5 0 0 1 3.5 19v-4Z'
		],
		accentPaths: ['M14 14h2.5v2.5H14z', 'M18.5 14v2', 'M14 19.5h3', 'M19.5 18.5v2', 'M7 7h.01', 'M17 7h.01', 'M7 17h.01'],
		duotonePaths: [
			'M3.5 5a1.5 1.5 0 0 1 1.5-1.5h4A1.5 1.5 0 0 1 10.5 5v4A1.5 1.5 0 0 1 9 10.5H5A1.5 1.5 0 0 1 3.5 9V5Z',
			'M13.5 5A1.5 1.5 0 0 1 15 3.5h4A1.5 1.5 0 0 1 20.5 5v4a1.5 1.5 0 0 1-1.5 1.5h-4a1.5 1.5 0 0 1-1.5-1.5V5Z',
			'M3.5 15A1.5 1.5 0 0 1 5 13.5h4a1.5 1.5 0 0 1 1.5 1.5v4A1.5 1.5 0 0 1 9 20.5H5A1.5 1.5 0 0 1 3.5 19v-4Z'
		]
	},
	{
		name: 'gift',
		category: 'Commerce',
		tags: 'reward bonus present referral',
		outlinePaths: ['M3.5 8.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v2.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V8.5Z', 'M5 12v6.5A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V12'],
		accentPaths: ['M12 7v14', 'M12 7H8.5a2 2 0 1 1 0-4C11 3 12 7 12 7Z', 'M12 7h3.5a2 2 0 1 0 0-4C13 3 12 7 12 7Z'],
		duotonePaths: ['M3.5 8.5a1.5 1.5 0 0 1 1.5-1.5h14a1.5 1.5 0 0 1 1.5 1.5v2.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V8.5Z']
	},
	{
		name: 'ticket',
		category: 'Commerce',
		tags: 'coupon voucher pass event',
		outlinePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v1.8a1.7 1.7 0 0 0 0 3.4v1.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-1.8a1.7 1.7 0 0 0 0-3.4V8.5Z'],
		accentPaths: ['M14 6.5v2', 'M14 11v2', 'M14 15.5v2'],
		duotonePaths: ['M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v1.8a1.7 1.7 0 0 0 0 3.4v1.8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-1.8a1.7 1.7 0 0 0 0-3.4V8.5Z']
	},
	{
		name: 'trending-up',
		category: 'Commerce',
		tags: 'analytics growth revenue chart',
		outlinePaths: ['M21.5 6.5 13 15l-4.5-4.5L2.5 16.5'],
		accentPaths: ['M16.5 6.5h5v5']
	},
	{
		name: 'trending-down',
		category: 'Commerce',
		tags: 'decline drop churn chart',
		outlinePaths: ['M21.5 17.5 13 9l-4.5 4.5L2.5 7.5'],
		accentPaths: ['M16.5 17.5h5v-5']
	},
	{
		name: 'gem',
		category: 'Commerce',
		tags: 'diamond pro premium vip plan',
		outlinePaths: ['M6.5 3.5h11l4 5.5-9.5 11.5L2.5 9l4-5.5Z'],
		accentPaths: ['M2.5 9h19', 'M12 20.5 9 9l3-5.5L15 9l-3 11.5Z'],
		duotonePaths: ['M6.5 3.5h11l4 5.5-9.5 11.5L2.5 9l4-5.5Z']
	},
	{
		name: 'briefcase',
		category: 'Commerce',
		tags: 'enterprise b2b work business',
		outlinePaths: ['M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5v8.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18V9.5Z', 'M8.5 7V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v2'],
		accentPaths: ['M3 13h18', 'M12 11.5v3'],
		duotonePaths: ['M3 9.5A2.5 2.5 0 0 1 5.5 7h13A2.5 2.5 0 0 1 21 9.5V13H3V9.5Z']
	},
	{
		name: 'bank',
		category: 'Commerce',
		tags: 'finance institution treasury',
		outlinePaths: ['M3 9.5 12 3.5l9 6H3Z', 'M3.5 20.5h17', 'M5.5 17.5h13'],
		accentPaths: ['M6.5 9.5v8', 'M10.2 9.5v8', 'M13.8 9.5v8', 'M17.5 9.5v8'],
		duotonePaths: ['M3 9.5 12 3.5l9 6H3Z']
	},
	{
		name: 'piggy-bank',
		category: 'Commerce',
		tags: 'savings budget reserve',
		outlinePaths: [
			'M19.5 10.5c.9 0 1.5.5 1.5 1.4v1.6c0 .8-.6 1.5-1.4 1.5h-.9c-.4 1-.9 1.8-1.7 2.4V19a1 1 0 0 1-1 1h-1.3a1 1 0 0 1-1-1v-1h-3.4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.8c-1.5-1-2.5-2.7-2.5-4.7 0-3.4 3.2-6 7.5-6 1 0 2 .2 2.9.5L16.5 4l1.3 2.8c.9.9 1.5 2.2 1.7 3.7Z',
			'M4.5 12c-1.2 0-2-.7-2-1.6 0-.8.7-1.4 1.4-1.1'
		],
		accentPaths: ['M10 9h4', 'M16.2 10.5h.01'],
		duotonePaths: [
			'M19.5 10.5c.9 0 1.5.5 1.5 1.4v1.6c0 .8-.6 1.5-1.4 1.5h-.9c-.4 1-.9 1.8-1.7 2.4V19a1 1 0 0 1-1 1h-1.3a1 1 0 0 1-1-1v-1h-3.4v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-1.8c-1.5-1-2.5-2.7-2.5-4.7 0-3.4 3.2-6 7.5-6 1 0 2 .2 2.9.5L16.5 4l1.3 2.8c.9.9 1.5 2.2 1.7 3.7Z'
		]
	}
]
