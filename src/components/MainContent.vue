<template>
  <div class="column-align">
    <div class="output-display">
      <h1>
        {{ lastNumber }}
      </h1>
    </div>

    <div class="virtual-keyboard">
      <div v-if="!isPlaying" class="start-area">
        <button @click="start">
          Começar
        </button>
      </div>
      <div v-else class="keys">
        <button
          v-for="label in keyLabels"
          :key="label"
          @click="addGuess(label)"
          class="key"
        >
          {{ label }}
        </button>

        <button @click="check">
          Verificar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import {computed, ref} from 'vue';

export default {
  name: 'MainContent',
  setup() {
    const numbers = ref([])
    const isPlaying = ref(false)
    const showNumber = ref(false)

    let guess = []
    const timeToHide = 2000
    const keyLabels = Array.from(Array(10).keys())

    const lastNumber = computed(() => {
      return showNumber.value ? numbers.value.at(-1) : '?'
    })

    const revealAndHide = function () {
      showNumber.value = true

      setTimeout(function () {
        showNumber.value = false
      }, timeToHide)
    }

    const addNewNumber = function () {
      const newNumber = Math.round(Math.random() * 9)

      numbers.value.push(newNumber)

      revealAndHide()
    }

    const start = function () {
      isPlaying.value = true
      newRound()
    }

    const newRound = function () {
      addNewNumber()
    }

    const addGuess = function (number) {
      guess.push(number)
    }

    const resetGuess = function () {
      guess = []
    }

    const gameOver = function () {
      isPlaying.value = false
    }

    const check = function () {
      const guessString = guess.join(',')
      const numbersString = numbers.value.join(',')

      resetGuess()

      if (guessString !== numbersString) {
        gameOver()
        return
      }

      addNewNumber()
    }

    return {
      start,
      isPlaying,
      lastNumber,
      numbers,
      keyLabels,
      addGuess,
      check,
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
    background: #f60;
    border: 1px solid #fc0;
    border-radius: 6px;
    color: #111;
    cursor: pointer;
    font-size: 26px;
    margin: 4px;
    padding: 10px 20px;

    &:active {
      background-color: orangered;
      color: #fff;
    }
  }
}
</style>
