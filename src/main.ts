import { createApp } from "vue";
import App from "@/App.vue";
import { routers } from "@/router";
import { VueQueryPlugin } from "vue-query";
import "./assets/main.css";

const app = createApp(App);

app.use(routers);
app.use(VueQueryPlugin);
app.mount("#app");
