import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'@cjwilliams/ui/*',
		'../../packages/ui/**/*.{js,ts,jsx,tsx,astro}'
	],
	darkMode: ['class'],
	theme: {
		extend: {
			colors: {
				axiom: '#b0b0b0'
			},
			fontFamily: {
				// serif: ['Editorial New', ...defaultTheme.fontFamily.serif],
				// display: ['Editorial Sans', ...defaultTheme.fontFamily.mono],
				sans: ['Geist', ...defaultTheme.fontFamily.sans],
				mono: ['Berkeley Mono',  ...defaultTheme.fontFamily.mono]
			},
			fontWeight: {
				thin: '100',
				extralight: '200',
				light: '300',
				normal: '400',
				medium: '500',
				bold: '700',
				extrabold: '800',
				heavy: '900',
			}
		}
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
