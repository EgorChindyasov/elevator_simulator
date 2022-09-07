import {createStore} from 'vuex'

export default createStore({
    state: {
        floorsNumber: 5,
    },
    getters: {
        getFloorsNumber: (state) => {
            return state.floorsNumber
        }
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})