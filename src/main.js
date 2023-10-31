import './assets/main.css'
import { createApp } from 'vue'
import esriConfig from "@arcgis/core/config"
esriConfig.assetsPath = "./assets";
import '@arcgis/core/assets/esri/themes/light/main.css';
import App from './App.vue';
import router from '../router/index';

createApp(App).use(router).mount('#app')

