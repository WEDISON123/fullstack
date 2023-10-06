import { createApp } from 'vue';
import './assets/style/reset.css';
import './assets/style/tailwind.css';
import App from './App.vue';
import router from './router';
import {
    Notify
} from 'vant'
import 'vant/lib/index.css';
import "highlight.js/styles/dark.css";

const app = createApp(App)
app
    .use(router)
    .use(Notify)
    .mount('#app')
