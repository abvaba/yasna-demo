import { createApp } from "vue";

const app = createApp({})
app.config.globalProperties.apiRoot = () => {
  return 'http://'
}