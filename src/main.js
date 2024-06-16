import './assets/main.css'

import { createApp } from 'vue'

// import vueSmoothScroll from 'vue3-smooth-scroll'

import App from './App.vue'
import router from './router'
import CanvasJsChart from '@canvasjs/vue-charts'

const app = createApp(App)
// const app  = createApp({
//     render: ()=>(App)
// });

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives
})

app.use(router)
app.use(vuetify)
app.use(CanvasJsChart)

app.mount('#app')
