<template>
    <div>
        <div 
            v-for="count in floorsNumbers" 
            :key="count"
            class="floor"
            :style="{width: '100%', height: `${500 / floorsNumbers.length}px`}"
        >{{count}}</div>
    </div>
</template>
  
<script lang="ts">
import {ref, defineComponent} from 'vue'
  
export default defineComponent({
    props: ['floorsNumbers']
})
</script>
  
<style scoped lang="scss">
    $floorBorder: 1px solid rgb(162, 159, 159);
    .floor {
        width: 100%;
        display: flex;
        justify-content: end;
        border-top: $floorBorder;
        border-bottom: $floorBorder;
        box-sizing: border-box;
    }
</style>