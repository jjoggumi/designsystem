<template>
  <div class="collapsList" :class="{ active: !active,  on: menuOn} ">
    <div class="collapsible" @click="toggleCollapse">
      <slot name="tit"></slot>
    </div>
    <div class="collapsCon" ref="collapsCon" :style="{ maxHeight: calculateHeight + 'px' }" >
      <slot name="con"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name : "ComponentsCollapse",
  props: {   
    menuOn : Boolean 
  },
  data() {
    return {
      active: false,
      calculateHeight: 0
    };
  },  
  methods: {
    toggleCollapse() {
      this.active = !this.active;
      this.$nextTick(() => {
       if (!this.active) {
         this.calculateHeight = this.$refs.collapsCon.scrollHeight;
       } else {
         this.calculateHeight = 0;
       }
      });
    }
  },
  mounted() {
    if (this.$refs.collapsCon) {
      this.calculateHeight = this.$refs.collapsCon.scrollHeight ;
    }
  }
}
</script>

<style lang="scss">
.collapsList{
  .collapsible{
    width: 100%;
    padding: 0.4rem 0.8rem;
    border: 1px solid #eee;
    border-radius: 5px;
    background: #f5f5f5;
    text-align: left;
    font-weight: var(--font-bold);
  
    &:after {
      content: ""; display: block; 
      width: 5px; height: 5px;float: right; margin: 10px 6px; border-right: 1px solid #333;
      border-bottom: 1px solid #333;transform: rotate(45deg); transition: 0.5s;}
  }
  .collapsCon { 
    padding: 0.5rem 0;
    overflow: hidden; 
    transition: 0.5s;

    .item{
      padding: 0.3rem 1rem;
    }
  }
  &.active {
    .collapsible:after {
      transform: rotate(-135deg);
    }
    .collapsCon{
      transition: 0.5s;
    }
  }
}

.collapseSet.type01{
  .collapsList{
    border: 1px solid #ddd;
    border-radius: 0.5rem;
    margin-bottom: 0.5rem;

    .collapsible{
      border-radius: 0;
      border: 0;
      border-bottom: 1px solid #eee;
    }
  }
}
</style>