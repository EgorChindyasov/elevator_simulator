<template>
    <div class="buttonsGroup">
        <div 
            v-for="count in floorsNumber" 
            :key="count"
            :style="{width: '100%', height: `${500 / floorsNumber}px`}"
        >
            <button 
                @click="countLog(floorsNumber - count + 1)"
            >
                Вызвать
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
import {defineComponent} from 'vue'
import {useStore} from 'vuex'
  
export default defineComponent({
    setup() {
        const store = useStore()
        const countLog = (count: number) => {
            console.log(count)
        }

        return {
            floorsNumber: store.getters.getFloorsNumber,
            countLog
        }
    }
})
</script>
  
<style scoped lang="scss">
    .buttonsGroup {
        height: 500px;
        width: 200px;
        border: 2px solid black;
        box-sizing: border-box;
    }
</style>