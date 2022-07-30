import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './plugins/router'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');

// createApp(App)
//   .use(vuetify)
//   .use(router)
//   .mount('#app')
