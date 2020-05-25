require("./bootstrap");

window.Vue = require("vue");

import Vuetify from "../plugins/vuetify";

Vue.component(
    "app-container",
    require("./components/AppContainer.vue").default
);

const app = new Vue({
    vuetify: Vuetify,
    el: "#app"
});
