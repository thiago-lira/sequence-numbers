<template>
  <div class="game-over">
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
</template>

<script>
import {computed} from 'vue';

export default {
  name: 'GuessResults',
  props: {
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
    const correctSequence = computed(() => props.numbers.join('-'))

    const wrongSequence = computed(() => props.guess.join('-'))

    return {
      correctSequence,
      wrongSequence,
    }
  }
}
</script>

<style lang="scss" scoped>
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
