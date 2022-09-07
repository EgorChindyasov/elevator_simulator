<template>
    <div class="buttonsGroup">
        <div 
            class="buttonContainer"
            v-for="count in floorsNumber" 
            :key="count"
            :style="{width: '100%', height: `${500 / floorsNumber}px`}"
        >
            <the-button 
                :count="count" 
                :floorsNumber="floorsNumber"
            ></the-button>
        </div>
    </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from 'vuex'
import TheButton from './TheButton.vue' 
  
export default defineComponent({
    components: {TheButton},
    setup() {
        const store = useStore()

        return {
            floorsNumber: store.getters.getFloorsNumber,
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
        }
    }
</style>