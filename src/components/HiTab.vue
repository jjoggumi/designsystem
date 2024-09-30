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
    active: {
      type: Boolean,
      default: false,
    },
    new: { 
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isActive: this.active, 
      isNew: this.new, 
    };
  },
  mounted() {
    this.$parent.addTab(this);
  },
};
</script>
