<template>
  <button>
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'ButtonUI',
  props: {
    label: {
      type: [String, Number],
      required: true,
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
