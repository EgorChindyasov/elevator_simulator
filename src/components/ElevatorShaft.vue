<template>
    <div class="elevatorShaftContainer">
        <div class="elevatorShaft"></div>
        <buttons></buttons>
    </div>
</template>
  
<script lang="ts">
import {defineComponent} from 'vue'
import Buttons from './Buttons.vue'
  
export default defineComponent({
    components: {Buttons},
})
</script>
  
<style scoped lang="scss">
    .elevatorShaftContainer {
        position: absolute;
        display: flex;
        flex-direction: row;
        
        .elevatorShaft {
            height: 500px;
            width: 200px;
            border: 2px solid black;
            box-sizing: border-box;
        }
    }
</style>