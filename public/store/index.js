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
            }
        },
        actions: {
            async login({ commit }, { username, password }) {
                const { data } = await axios.post('/api/login',  { username, password });
                console.log(data);
                commit('SET_USER', data);
            }
        }
    });
};
export default store;