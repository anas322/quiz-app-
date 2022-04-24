import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

// wave
import WaveSvg from "./components/UI/WaveSvg.vue";

const app = createApp(App);
app.use(store);

app.component("wave-svg", WaveSvg);
app.mount("#app");
