import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import {Button,Tabbar,Swipe, SwipeItem} from "vant"

const app = createApp(App)

app.use(Button).use(Tabbar).use(Swipe).use(SwipeItem)

createApp(App).use(router).mount('#app')
