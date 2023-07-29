import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import {Button} from "vant"

const app = createApp(App)

app.use(Button)

createApp(App).use(router).mount('#app')
