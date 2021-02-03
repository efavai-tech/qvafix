import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

if (!localStorage.getItem('dark_theme')) {
    localStorage.setItem('dark_theme', false);
}
if (!localStorage.getItem('login')) {
    localStorage.setItem('login', false);
}

export default new Vuex.Store({
    state: {
        dark_theme: JSON.parse(localStorage.getItem('dark_theme')),
        layout: "Principal",
        login: JSON.parse(localStorage.getItem('login')),
        post: {}
    },
    mutations: {
        SET_LAYOUT(state, newLayout) {
            state.layout = newLayout
        },
        ENABLE_DARK(state) {
            localStorage.setItem('dark_theme', true)
            state.dark_theme = true
        },
        DISABLE_DARK(state) {
            localStorage.setItem('dark_theme', false)
            state.dark_theme = false
        },
        Login(state) {
            localStorage.setItem("login", true)
            state.login = true
        },
        logout(state) {
            localStorage.setItem("login", false)

            state.login = false
        },
        Post(state, newPost) {
            state.post = newPost
        },
    },
    actions: {},
    getters: {},
    modules: {}
})