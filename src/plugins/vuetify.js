// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Vuetify
import { createVuetify } from 'vuetify';
let theme = 'dark';

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    theme = 'dark'
} else {
	theme = 'light'
}

console.log(theme)
export default createVuetify({
	// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides,
	theme: {
		defaultTheme: theme
	},
});
