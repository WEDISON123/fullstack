import { createApp } from 'vue';
import './assets/styles/reset.css';
import 'element-plus/dist/index.css';
import './assets/styles/tailwind.css';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import router from './router';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
app
    .use(router)
    .use(createPinia())    
    .mount('#app')