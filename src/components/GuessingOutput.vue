<template>
  <div class="output-display">
    <GuessingResults
      v-if="hasFinished"
      :numbers="props.numbers"
      :guess="props.guess"
    />
    <GuessingDisplay
      v-else
      :guess="props.guess"
      :label="label"
    />
  </div>
</template>

<script>
import {computed} from 'vue';
import GuessingDisplay from './GuessingDisplay.vue';
import GuessingResults from './GuessingResults.vue';

export default {
  name: "OutputGuess",
  components: {
    GuessingResults,
    GuessingDisplay
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
    return {
      props,
      hasFinished: computed(() => props.isGameOver)
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
