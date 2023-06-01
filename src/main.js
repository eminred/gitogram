import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import trendings from './store/modules/trendings'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.use(trendings)
