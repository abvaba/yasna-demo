import { createApp } from "vue";
import App from "@/App.vue";
import axios from "axios";

const app = createApp(App);

app.config.globalProperties.GLOBALS = {
  authApi : axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: false,
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  })
}


export {app};
