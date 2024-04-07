<template>
  <button :class="['btn', color ? `btn-${color}` : '']">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name : "ComponentsButton",
  props: {   
    color : String
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