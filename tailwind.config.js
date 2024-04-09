/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#04263f',
				'dark-blue-50': 'rgba(4, 38, 63, 0.5)',
				'steel-blue': '#5e7384',
				'steel-blue-50': 'rgba(94, 115, 132, 0.5)',
				maple: '#FD8831'
			}
		}
	},
	plugins: []
};
