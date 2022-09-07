<template>
    <div>
        <div 
            v-for="count in floorsNumber" 
            :key="count"
            class="floor"
            :style="{width: '100%', height: `${500 / floorsNumber}px`}"
        >
            {{floorsNumber - count + 1}}
        </div>
    </div>
</template>
  
<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from 'vuex'
  
export default defineComponent({
    setup() {
        const store = useStore()

        return {
            floorsNumber: store.getters.getFloorsNumber
        }
    }
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