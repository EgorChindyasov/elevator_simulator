import {createStore} from 'vuex'

export default createStore({
    state: {
        floorsNumber: 5,
        callFloor: 1,
        elevator: {
            position: 1,
            isMoved: false
        }
    },
    getters: {
        getFloorsNumber: (state) => {
            return state.floorsNumber
        },
        getCallFloor: (state) => {
            return state.callFloor
        },
        getElevator: (state) => {
            return state.elevator
        }
    },
    mutations: {
        changeCallFloor: (state, newCallFloor: number) => {
            state.callFloor = newCallFloor
        }
    },
    actions: {
    },
    modules: {
    }
})