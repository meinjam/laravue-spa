require("./bootstrap");

window.Vue = require("vue");

import Vuetify from "../plugins/vuetify";

import store from "./store";

Vue.component(
    "app-container",
    require("./components/AppContainer.vue").default
);

const app = new Vue({
    vuetify: Vuetify,
    store,
    el: "#app"
});
