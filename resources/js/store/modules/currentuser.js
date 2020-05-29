import axios from "axios";

const state = {
    user: {}
};
const getters = {};
const actions = {
    getUser({ commit }) {
        axios
            .get("/api/users/current-users")
            .then(resp => {
                commit("setUser", resp.data);
            })
            .catch(error => console.log(error));
    },
    loginUser({}, user) {
        axios
            .post("/api/users/login", {
                email: user.email,
                password: user.password
            })
            .then(resp => {
                if (resp.data.access_token) {
                    // save token in localstorage
                    localStorage.setItem("blog-token", resp.data.access_token);
                }
                window.location.replace("/home");
            })
            .catch(error => console.log(error));
    }
};
const mutations = {
    setUser(state, data) {
        state.user = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
