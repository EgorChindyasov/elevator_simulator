<template>
    <div class="buttonsGroup">
        <div 
            class="buttonContainer"
            v-for="count in floorsNumber" 
            :key="count"
            :style="{width: '100%', height: `${500 / floorsNumber}px`}"
        >
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
        </div>
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
    setup() {
        const store = useStore()

        const elevatorPosition = ref(store.state.elevatorPosition)
        const nextElevatorPosition = ref(store.getters.getNextCallFloor)
        const isMoved = ref(store.state.isMoved)
        const buttonRef = ref<HTMLDivElement | HTMLDivElement[] | null>(null)

        const elevatorPositionComputed = computed(() => store.getters.getElevatorPositon)
        const nextElevatorPositionComputed = computed(() => store.getters.getNextCallFloor)
        const isMovedComputed = computed(() => store.getters.getIsMoved)
        const queueCallsComputed = computed(() => store.getters.getQueueCalls)

        watch(elevatorPositionComputed, (newValue, oldValue) => {
            elevatorPosition.value = newValue
        })

        watch(isMovedComputed, (newValue, oldValue) => {
            isMoved.value = newValue

            if (!newValue) {
                // @ts-ignore
                if (buttonRef._rawValue) {
                    // @ts-ignore
                    buttonRef._rawValue[store.getters.getFloorsNumber - nextElevatorPosition.value].animate(
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
            floorsNumber: store.getters.getFloorsNumber,
            elevatorPosition,
            nextElevatorPosition,
            isMoved,
            callElevator,
            setButtonColor,
            buttonRef
        }
    }
})
</script>
  
<style scoped lang="scss">
    .buttonsGroup {
        height: 500px;
        width: 100px;
        box-sizing: border-box;

        .buttonContainer {
            display: flex;
            justify-content: center;
            align-items: center;

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
        }
    }
</style>