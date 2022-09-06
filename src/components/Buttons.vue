<template>
    <div class="buttonsGroup">
        <div 
            v-for="count in floorsNumbers" 
            :key="count"
            :style="{width: '100%', height: `${500 / floorsNumbers.length}px`}"
        >
            <button 
                @click="countLog(count)"
            >
                Вызвать
            </button>
        </div>
    </div>
</template>
  
<script lang="ts">
import {ref, defineComponent} from 'vue'
  
export default defineComponent({
    props: ['floorsNumbers'],
    setup(props) {
        const countLog = (count: number) => {
            console.log(count)
        }

        return {
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