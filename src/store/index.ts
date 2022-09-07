import {createStore} from 'vuex'

export default createStore({
    state: {
        floorsNumber: 5,
        elevatorPosition: 1,
        isMoved: false,
        queueCalls: []
    },
    getters: {
        getFloorsNumber: (state) => {
            return state.floorsNumber
        },
        getElevatorPositon: (state) => {
            return state.elevatorPosition
        },
        getIsMoved: (state) => {
            return state.isMoved
        },
        getNextCallFloor: (state) => {
            return state.queueCalls[0] ?? state.elevatorPosition
        },
        getQueueCalls: (state) => {
            return state.queueCalls
        }
    },
    mutations: {
        changeElevatorPosition: (state, newElevatorPosition: number) => {
            state.elevatorPosition = newElevatorPosition
        },
        changeIsMoved: (state, payload: boolean) => {
            state.isMoved = payload
        },
        addToQueueCalls: (state, payload: number) => {
            const {queueCalls, elevatorPosition} = state

            if (queueCalls[queueCalls.length - 1] !== payload && elevatorPosition !== payload) {
                // @ts-ignore
                queueCalls.push(payload)
            }
        },
        removeFromQueueCalls: (state) => {
            state.queueCalls.shift()
        }
    },
    actions: {
    },
    modules: {
    }
})