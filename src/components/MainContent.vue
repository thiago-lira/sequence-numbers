<template>
  <div class="column-align">
    <OutputGuess
      :is-game-over="isGameOver"
      :label="lastNumber"
      :numbers="numbers"
      :guess="guess"
    />

    <InputGuess
      :is-playing="isPlaying"
      @start="start"
      @guess="addGuess"
      @check="check"
      @delete="deleteLastGuess"
    />

  </div>
</template>

<script>
import {computed, ref} from 'vue';

import InputGuess from './InputGuess.vue';
import OutputGuess from './OutputGuess.vue';

export default {
  name: 'MainContent',
  components: {
    InputGuess,
    OutputGuess,
  },
  setup() {
    const numbers = ref([])
    const guess = ref([])
    const isPlaying = ref(false)
    const showNumber = ref(false)

    const timeToHide = 1000

    const lastNumber = computed(() => {
      return showNumber.value ? numbers.value.at(-1) : '?'
    })

    const isGameOver = computed(() => !isPlaying.value && numbers.value.length > 0)

    const revealAndHide = function () {
      showNumber.value = true

      setTimeout(function () {
        showNumber.value = false
      }, timeToHide)
    }

    const addNewNumber = function () {
      const newNumber = Math.round(Math.random() * 9)

      numbers.value.push(newNumber)

      guess.value = []

      revealAndHide()
    }

    const setGame = function () {
      numbers.value = []
      guess.value = []

      isPlaying.value = true
    }

    const start = function () {
      setGame()

      newRound()
    }

    const newRound = function () {
      addNewNumber()
    }

    const addGuess = function (number) {
      guess.value.push(number)
    }

    const gameOver = function () {
      isPlaying.value = false
    }

    const check = function () {
      const guessString = guess.value.join(',')
      const numbersString = numbers.value.join(',')

      if (guessString !== numbersString) {
        gameOver()
        return
      }

      addNewNumber()
    }

    const deleteLastGuess = function () {
      guess.value.pop()
    }

    return {
      guess,
      start,
      isGameOver,
      isPlaying,
      lastNumber,
      numbers,
      addGuess,
      check,
      deleteLastGuess,
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
</style>
