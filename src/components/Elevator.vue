<template>
    <div 
        ref="elevatorRef"
        class="elevator"
    >
        <div class="tabloidContainer">
            <tabloid></tabloid>
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
import Tabloid from './Tabloid.vue'
import {DURATION} from '@/constants/intex'
  
export default defineComponent({
    components: {Tabloid},
    setup() {
        const store = useStore()

        const elevatorRef = ref<HTMLDivElement | null>(null)
        const callFloor = computed(() => store.getters.getNextCallFloor)

        watch(callFloor, (newValue, oldValue) => {
            if (elevatorRef.value) {
                const animationDuration = Math.abs(newValue - oldValue)

                elevatorRef.value.style.bottom = `${100 * (newValue - 1)}px`
                elevatorRef.value.style.transition = `${animationDuration}s linear`
            
                store.commit('changeIsMoved', true)

                setTimeout(() => {
                    if (elevatorRef.value) {
                        store.commit('changeElevatorPosition', newValue)
                        store.commit('changeIsMoved', false)
                        
                        elevatorRef.value.animate(
                            [
                                {opacity: 1},
                                {opacity: 0},
                                {opacity: 1}
                            ], 
                            {
                                duration: DURATION,
                                iterations: 3
                            }
                        )

                        setTimeout(() => {
                            store.commit('removeFromQueueCalls')
                        }, 3 * DURATION)
                    }
                }, animationDuration * DURATION)
            }
        })

        return {
            elevatorRef
        }
    }
})
</script>
  
<style scoped lang="scss">
    .elevator {
        width: 200px;
        height: 100px;
        position: absolute;
        z-index: -1;
        bottom: 0px;
        background-color: lemonchiffon;
        opacity: 1;

        .tabloidContainer {
            display: flex;
            justify-content: center;
        }
    }
</style>