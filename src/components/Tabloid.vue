<template>
    <div class="tabloid">{{targetFloor}}</div>    
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

        const targetFloor = ref(store.state.elevatorPositon)

        const nextCallFloorComputed = computed(() => store.getters.getNextCallFloor)
        const elevatorPositonComputed = computed(() => store.getters.getElevatorPositon)

        console.log(nextCallFloorComputed.value, elevatorPositonComputed.value)

        watch([nextCallFloorComputed, elevatorPositonComputed], () => {
            const elevatorPositon = elevatorPositonComputed.value
            const nextCallFloor = nextCallFloorComputed.value

            if (elevatorPositon === nextCallFloor) {
                targetFloor.value = elevatorPositon
            } else if (elevatorPositon > nextCallFloor) {
                targetFloor.value = `↓ ${nextCallFloor}`
            } else {
                targetFloor.value = `↑ ${nextCallFloor}`
            }
        })

        return {
            targetFloor
        }
    }
})
</script>
  
<style scoped lang="scss">
    .tabloid {
        width: 50px;
        height: 30px;
        border: 2px solid black;
        background-color: rgb(213, 223, 255);
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>