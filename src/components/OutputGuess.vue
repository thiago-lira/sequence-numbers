<template>
  <div class="output-display">
    <GuessResults
      v-if="hasFinished"
      :numbers="props.numbers"
      :guess="props.guess"
    />

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
import GuessResults from './GuessResults.vue';

export default {
    name: "OutputGuess",
    components: {
      GuessResults
    },
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
        const hasFinished = computed(() => props.isGameOver);
        const hiddenNumbers = computed(() => {
            const { guess } = props;
            if (guess.length === 0) {
                return "-";
            }
            return guess.join("-").replaceAll(/[0-9]/g, "x");
        });
        return {
            props,
            hasFinished,
            hiddenNumbers,
        };
    },
}
</script>

<style lang="scss" scoped>
.output-display {
  padding-top: 100px;

  .gray-text {
    color: gray;
  }
}
</style>
