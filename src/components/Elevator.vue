<template>
    <div 
        ref="elevatorRef"
        class="elevator"
    ></div>
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

        const oldFloor = ref(1)
        const targetFloor = ref(store.getters.getCallFloor)
        const elevatorRef = ref<HTMLDivElement | null>(null)

        const callFloor = computed(() => store.getters.getCallFloor)

        watch(callFloor, (newValue, oldValue) => {
            if (elevatorRef.value) {
                const animationDuration = Math.abs(newValue - oldValue)

                elevatorRef.value.style.bottom = `${100 * (newValue - 1)}px`
                elevatorRef.value.style.transition = `${animationDuration}s linear`
            
                targetFloor.value = newValue
                oldFloor.value = oldValue

                setTimeout(() => {
                    if (elevatorRef.value) {
                        elevatorRef.value.animate(
                            [
                                {opacity: 1},
                                {opacity: 0},
                                {opacity: 1}
                            ], 
                            {
                                duration: 1000,
                                iterations: 3
                            }
                        )
                    }
                }, animationDuration * 1000)
            }
        })

        return {
            oldFloor,
            targetFloor,
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
    }
</style>