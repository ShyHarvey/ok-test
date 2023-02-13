import { createApp } from 'vue'
import App from './App.vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import store from './store'


const vuetify = createVuetify()

const app = createApp(App)
app.use(store)
app.use(vuetify)

app.mount('#app')
