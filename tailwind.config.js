/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'text': 'hsl(var(--text)/<alpha-value>)',
				'background': 'hsl(var(--background)/<alpha-value>)',
				'primary': 'hsl(var(--primary)/<alpha-value>)',
				'secondary': 'hsl(var(--secondary)/<alpha-value>)',
				'accent': 'hsl(var(--accent)/<alpha-value>)',
			}
		},
	},
	plugins: [],
}

