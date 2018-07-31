import Vuex from 'vuex';
const store = () => {
    return new Vuex.Store({
        state: {
            count: 1,
            authenticated: false,
            stars: null,
            index_data: null
        },
        mutations: {
            increment(state) {
                // mutate state
                state.count++
            },
            addData(state, data){
                state.index_data = data;
            }
        }
    });
};
export default store;