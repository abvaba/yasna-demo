import {app} from '@/globals';
import { routers } from "@/router";
import { VueQueryPlugin } from "vue-query";
import '@/styles/main.sass';


app.use(routers);
app.use(VueQueryPlugin);
app.mount("#app");
