<template>
    <div class="container">
        <elevator-shaft 
            :floorsNumbers="floorsNumberArr"
        ></elevator-shaft>
        <floor-markup 
            :floorsNumbers="floorsNumberArr">
        </floor-markup>
    </div>
</template>
  
<script lang="ts">
import {ref, computed, defineComponent} from 'vue'
import ElevatorShaft from './components/ElevatorShaft.vue'
import FloorMarkup from './components/FloorMarkup.vue'
import Buttons from './components/Buttons.vue'
  
export default defineComponent({
    components: {ElevatorShaft, FloorMarkup, Buttons},
    setup() {
        const floorsNumber = ref(5)
        const floorsNumberArr = computed(() => {
            return Array
                .from(
                    {length: floorsNumber.value}, 
                    (v, k) => k + 1
                )
                .reverse()
        })

        return {
            floorsNumberArr
        }
    }
})
</script>
  
<style scoped lang="scss">
    .container {
        margin: 30px;
        position: relative;
    }
</style>
  