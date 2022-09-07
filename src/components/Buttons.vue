<template>
    <div class="buttonsGroup">
        <div 
            class="buttonContainer"
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
            store.commit('changeCallFloor', count)
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
        width: 100px;
        box-sizing: border-box;

        .buttonContainer {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>