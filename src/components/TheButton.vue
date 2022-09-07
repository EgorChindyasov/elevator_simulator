<template>
    <div 
        class="button" 
        @click="callElevator(floorsNumber - count + 1)"
    >
        <div 
            class="buttonInner"
            ref="buttonRef"
            :style="{borderColor: setButtonColor(floorsNumber - count + 1)}"
        ></div>
    </div>
</template>

<script lang="ts">
import {
    ref, 
    computed, 
    watch, 
    defineComponent
} from 'vue'
import {useStore} from 'vuex'
  
export default defineComponent({
    props: ['count', 'floorsNumber'],
    setup(props) {
        const store = useStore()

        const elevatorPosition = ref(store.state.elevatorPosition)
        const nextElevatorPosition = ref(store.getters.getNextCallFloor)
        const isMoved = ref(store.state.isMoved)
        const buttonRef = ref<HTMLDivElement | null>(null)

        const elevatorPositionComputed = computed(() => store.getters.getElevatorPositon)
        const nextElevatorPositionComputed = computed(() => store.getters.getNextCallFloor)
        const isMovedComputed = computed(() => store.getters.getIsMoved)
        const queueCallsComputed = computed(() => store.getters.getQueueCalls)

        watch(elevatorPositionComputed, (newValue, oldValue) => {
            elevatorPosition.value = newValue
        })

        watch(isMovedComputed, (newValue, oldValue) => {
            isMoved.value = newValue

            if (!newValue && props.count === props.floorsNumber - nextElevatorPosition.value + 1) {
                if (buttonRef.value) {
                    buttonRef.value.animate(
                        [
                            {opacity: 1, borderColor: 'red'},
                            {opacity: 0, borderColor: 'red'},
                            {opacity: 1, borderColor: 'red'}
                        ], 
                        {
                            duration: 1000,
                            iterations: 3
                        }
                    )
                }
            }
        })

        watch(nextElevatorPositionComputed, (newValue, oldValue) => {
            nextElevatorPosition.value = newValue
        })

        const callElevator = (count: number) => {
            store.commit('addToQueueCalls', count)
        }

        const setButtonColor = (count: number) => {
            return queueCallsComputed.value.includes(count) ? 'red' : 'black'
        }

        return {
            callElevator,
            setButtonColor,
            buttonRef
        }
    }
})
</script>
  
<style scoped lang="scss">
    .button {
        width: 30px;
        height: 30px;
        border: 3px solid black;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        cursor: pointer;

        .buttonInner {
            width: 10px;
            height: 10px;
            border: 3px solid black;
            border-radius: 50%;
            opacity: 1;
        }
    }
</style>