<template>
  <h1>
    {{ label }}
  </h1>

  <p class="gray-text">
    Sequência: {{ hiddenNumbers }}
  </p>
</template>

<script>
import {computed} from 'vue';

export default {
  name: 'GuessingDisplay',
  props: {
    guess: {
      type: Array,
      required: true,
    },
    label: {
      type: [String, Number],
      required: true,
    },
  },
  setup(props) {
    const hiddenNumbers = computed(() => {
        const { guess } = props;
        if (guess.length === 0) {
            return "-";
        }
        return guess.join("-").replaceAll(/[0-9]/g, "x");
    });

    return {
      hiddenNumbers,
    }
  }
}
</script>
