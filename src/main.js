import { createApp } from 'vue'
import App from './App.vue'
//routes
import router from "./routers/index";

const app = createApp(App)

//routes 
app.use(router)
app.mount('#app')
