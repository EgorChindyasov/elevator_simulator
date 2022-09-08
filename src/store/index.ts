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

            const storage = window.sessionStorage
            storage.setItem('elevatorPosition', newElevatorPosition.toString())
        },
        changeIsMoved: (state, payload: boolean) => {
            state.isMoved = payload

            const storage = window.sessionStorage
            storage.setItem('isMoved', payload.toString())
        },
        addToQueueCalls: (state, payload: number) => {
            const {queueCalls, elevatorPosition} = state

            if (queueCalls[queueCalls.length - 1] !== payload && elevatorPosition !== payload) {
                // @ts-ignore
                queueCalls.push(payload)
            }

            const storage = window.sessionStorage
            storage.setItem('queueCalls', queueCalls.toString())
        },
        removeFromQueueCalls: (state) => {
            state.queueCalls.shift()

            const storage = window.sessionStorage
            storage.setItem('queueCalls', state.queueCalls.toString())
        },
        setQueueCalls: (state, arr) => {
            state.queueCalls = arr
        }
    },
    actions: {
    },
    modules: {
    }
})