import { createApp } from 'vue'
import './assets/main.css'
import './assets/main.scss'
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import App from './App.vue';
import { createPinia } from 'pinia'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'


const vuetify = createVuetify({
    components,
    directives,
  })
  

const app = createApp(App)

const pinia = createPinia()


app.use(vuetify)
app.use(pinia)

app.mount('#app')
