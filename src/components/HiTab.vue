<template>
  <div v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "HiTab",
  props: {
    label: {
      type: String,
      required: true,
    },
    active: { // active prop 추가
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.active, 
    };
  },
  mounted() {
    this.$parent.addTab(this);
  },
};
</script>
