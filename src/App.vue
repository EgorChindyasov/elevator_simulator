<template>
    <div class="container">
        <elevator-shaft></elevator-shaft>
        <elevator></elevator>
        <floor-markup></floor-markup>
    </div>
</template>
  
<script lang="ts">
import {onMounted, defineComponent} from 'vue'
import {useStore} from 'vuex'
import ElevatorShaft from './components/ElevatorShaft.vue'
import FloorMarkup from './components/FloorMarkup.vue'
import Elevator from './components/Elevator.vue'
  
export default defineComponent({
    components: {ElevatorShaft, FloorMarkup, Elevator},
    setup() {
        const store = useStore()

        onMounted(() => {
            const storage = window.sessionStorage

            store.commit(
                'changeElevatorPosition', 
                Number(storage.getItem('elevatorPosition')) ? Number(storage.getItem('lastElevatorPosition')) : 1
            )
            store.commit(
                'changeIsMoved', 
                // @ts-ignore
                eval(storage.getItem('isMoved')) ? eval(storage.getItem('isMoved')) : false
            )
            store.commit(
                'setQueueCalls', 
                storage.getItem('queueCalls') ? storage.getItem('queueCalls')?.split(',').map(i => +i) : []
            )
        })
    }
})
</script>
  
<style scoped lang="scss">
    .container {
        margin: 30px;
        position: relative;
    }
</style>
  