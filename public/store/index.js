import Vuex from 'vuex';
import axios from 'axios';
axios.defaults.baseURL = 'https://nuxt-auth-routes.glitch.me';
const store = () => {
    return new Vuex.Store({
        state: {
            count: 1,
            authenticated: false,
            stars: null,
            index_data: null,
            authUser: null
        },
        mutations: {
            increment(state) {
                authUs
                state.count++
            },
            addData(state, data) {
                state.index_data = data;
            },
            SET_USER(state, user) {
                state.authUser = user;
                if (user) {
                    localStorage.setItem('loginState', true);
                } else {
                    localStorage.setItem('loginState', false);
                }
            }
        },
        actions: {
            // nuxtServerInit is called by Nuxt.js before server-rendering every page
            nuxtServerInit({ commit }, { req }) {
                console.log(8888, req.session, req.session.authUser);
                if (req.session && req.session.authUser) {
                    commit('SET_USER', req.session.authUser)
                }
            },
            async login({ commit }, { username, password }) {
                const { data } = await axios.post('/api/login', { username, password });
                console.log(data);
                commit('SET_USER', data);
            },
            async logout({ commit }) {
                await axios.post('/api/logout');
                commit('SET_USER', null);
            }
        }
    });
};
export default store;