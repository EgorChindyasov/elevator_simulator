<template>
    <div class="container">
        <elevator-shaft></elevator-shaft>
        <floor-markup></floor-markup>
    </div>
</template>
  
<script lang="ts">
import {defineComponent} from 'vue'
import ElevatorShaft from './components/ElevatorShaft.vue'
import FloorMarkup from './components/FloorMarkup.vue'
  
export default defineComponent({
    components: {ElevatorShaft, FloorMarkup},
})
</script>
  
<style scoped lang="scss">
    .container {
        margin: 30px;
        position: relative;
    }
</style>
  