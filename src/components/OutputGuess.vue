<template>
  <div class="output-display">
    <div v-if="hasFinished" class="game-over">
      <p>
        <span class="icon">
          ✓
        </span>
        : {{ correctSequence }}
      </p>
      <p>
        <span class="icon">
         x 
        </span>
        : {{ wrongSequence }}
      </p>
    </div>

    <div v-else>
      <h1>
        {{ label }}
      </h1>

      <p class="gray-text">
        Sequência: {{ hiddenNumbers }}
      </p>
    </div>
  </div>
</template>

<script>
import {computed} from 'vue';

export default {
  name: 'OutputGuess',
  props: {
    label: {
      type: [String, Number],
      required: true,
    },
    isGameOver: {
      type: Boolean,
      required: true,
    },
    numbers: {
      type: Array,
      required: true,
    },
    guess: {
      type: Array,
      required: true,
    },
  },
  setup(props) {

    const hasFinished = computed(() => props.isGameOver)

    const correctSequence = computed(() => props.numbers.join('-'))

    const wrongSequence = computed(() => props.guess.join('-'))

    const hiddenNumbers = computed(() => {
      const { guess } = props

      if (guess.length === 0) {
        return '-'
      }

      return guess.join('-').replaceAll(/[0-9]/g, 'x')
    })

    return {
      hasFinished,
      correctSequence,
      wrongSequence,
      hiddenNumbers,
    }
  }
}
</script>

<style lang="scss" scoped>
.output-display {
  padding-top: 100px;

  .gray-text {
    color: gray;
  }
}

.game-over {
  font-size: 24px;
  margin-left: 50px;
  text-align: left;

  span.icon {
    display: inline-block;
    width: 24px;
  }
}
</style>
