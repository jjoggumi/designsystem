<template>
  <button class="btn btn-primary">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name : "ComponentsButton",
  props: {   
  },
  data() {
    return {
    };
  },  
  methods: {
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
@import url(/src/styles/scss/common/_button.scss);
</style>