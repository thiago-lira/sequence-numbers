<template>
  <div class="virtual-keyboard">
    <div class="numbers-grid">
      <ButtonUI
        v-for="label in keyLabels"
        :key="label"
        @click="$emit('guess', label)"
        :label="label"
      />

      <ButtonUI @click="$emit('check')" label="Verificar" />

      <ButtonUI @click="$emit('delete')" label="Apagar Último" />
    </div>

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

<style lang="scss" scoped>
.numbers-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 650px;
  margin: auto;
}
</style>
