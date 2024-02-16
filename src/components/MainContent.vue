<template>
  <div class="column-align">
    <div class="output-display">
      {{ numbers }}
      <h1>
        {{ lastNumber }}
      </h1>
    </div>

    <div class="virtual-keyboard">
      <div class="keys">
        <button
          v-for="label in keyLabels"
          :key="label"
          class="key"
        >
          {{ label }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref, onMounted} from 'vue';

export default {
  name: 'MainContent',
  setup() {
    const numbers = ref([])
    const keyLabels = Array.from(Array(10).keys())

    const lastNumber = computed(() => {
      return numbers.value.at(-1)
    })

    const addNumberRandom = () =>{
      const newNumber = Math.round(Math.random() * 9)

      numbers.value.push(newNumber)
    }

    onMounted(() => {
      addNumberRandom()
    })

    return {
      lastNumber,
      numbers,
      keyLabels,
    }
  }
}
</script>

<style lang="scss" scoped>
.column-align {
  display: flex;
  flex-direction: column;
  height: 100vh;

  > * {
    flex-grow: 1;
  }
}

.output-display {
  padding-top: 100px;
}

.virtual-keyboard {
  button {
    background: #300;
    border: 1px solid #900;
    border-radius: 6px;
    color: #f00;
    font-size: 26px;
    margin: 4px;
    padding: 10px 20px;
  }
}
</style>
