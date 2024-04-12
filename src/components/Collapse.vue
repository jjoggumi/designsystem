<template>
  <div class="collapsList" :class="{ active: active,  on: isActive, nonChild: nonChild }">
    <div class="collapsible" @click="toggleCollapse">
      <slot name="tit"></slot>
    </div>
    <div class="collapsCon" ref="collapsCon" :style="{ maxHeight: activeMaxHeight + 'px' }" >
      <slot name="con"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name : "ComponentsCollapse",
  props: {   
    isActive : Boolean,
    nonChild : Boolean,
    onActive :Boolean
  },
  data() {
    return {
      active: null,
      activeMaxHeight: 0
    };
  },  
  methods: {
    toggleCollapse() {
      this.active = !this.active;
      if (!this.active) {
        this.activeMaxHeight = '0';
      } else {
        this.$nextTick(() => {
          this.activeMaxHeight = this.$refs.collapsCon.scrollHeight;
        });
      }
    }
  },
  mounted() {
    this.active = this.onActive
    if (this.active === true) {
      this.activeMaxHeight = this.$refs.collapsCon.scrollHeight;
    } else {
      this.activeMaxHeight = '0';
    }
  }
}
</script>