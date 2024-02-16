<template>
  <div class="virtual-keyboard">
    <ButtonUI
      v-for="label in keyLabels"
      :key="label"
      @click="$emit('guess', label)"
      :label="label"
    />

    <ButtonUI @click="$emit('check')" label="Verificar" />

    <ButtonUI @click="$emit('delete')" label="Apagar Último" />
  </div>
</template>

<script>
import ButtonUI from './ui/ButtonUI.vue';

export default {
    name: "VirtualKeyBoard",
    setup() {
        const keyLabels = Array.from(Array(10).keys());
        return {
            keyLabels,
        };
    },
    components: { ButtonUI }
}
</script>

