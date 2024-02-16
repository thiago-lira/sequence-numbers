
<template>
  <div class="input-guess">
    <ButtonUI
      v-if="!isPlaying"
      @click="$emit('start')"
      label="Começar"
    />
    <VirtualKeyboard
      v-else
      @guess="$emit('guess', $event)"
      @check="$emit('check')"
      @delete="$emit('delete')"
    />
  </div>
</template>

<script>
import ButtonUI from './ui/ButtonUI.vue';
import VirtualKeyboard from './VirtualKeyboard.vue';

export default {
  name: "InputGuess",
  components: {
    VirtualKeyboard,
    ButtonUI,
},
  props: {
    isPlaying: {
      type: Boolean,
      required: true,
    }
  },
}
</script>
