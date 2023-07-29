import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import {Button,Tabbar} from "vant"

const app = createApp(App)

app.use(Button).use(Tabbar)

createApp(App).use(router).mount('#app')
