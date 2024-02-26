import { createApp, defineAsyncComponent } from 'vue'
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

const Modal_Async = defineAsyncComponent({
  loader:() => import('./Modal.vue')
})


const vuetify = createVuetify({
    components,
    directives,
  })
  

const app = createApp(App)

const pinia = createPinia()

app.component('Modal', Modal_Async);
app.use(vuetify)
app.use(pinia)

app.mount('#app')
