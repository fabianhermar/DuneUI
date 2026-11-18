import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'dist/**',
			'.astro/**',
			'.vercel/**',
			'node_modules/**',
			'playwright-report/**',
			'test-results/**',
			'exports/**',
			'**/*.astro'
		]
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			}
		}
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	eslintConfigPrettier,
	{
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_', varsIgnorePattern: '^_' }
			]
		}
	},
	{
		files: ['**/*.d.ts'],
		rules: {
			'@typescript-eslint/triple-slash-reference': 'off'
		}
	}
]
