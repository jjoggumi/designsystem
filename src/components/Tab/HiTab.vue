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
    onActive: {
      type: Boolean,
      default: false,
    },
    onNew: { 
      type: Boolean,
      default: false,
    },
    ico:{
      type: String,
      default: null
    }
  },
  data() {
    return {
      isActive: this.onActive, 
      isNew: this.onNew, 
      isIco: this.ico, 
    };
  },
  mounted() {
    this.$parent.addTab(this);
  },
};
</script>
