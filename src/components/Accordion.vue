<template>
  <div class="collapsList" >
    <button v-if="expandall" @click="expandAll">
      {{ expandBtnText }} All
    </button>

    <div class="collapsList" v-for="(item) in content.item" :key="item.id">
      <div class="collapsible" @click="toggle(item.id)">{{ item.title }}</div>
      <transition name="accordion"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
        <div class="collapsCon" v-if="item.active" >
          <div class="inner">{{ item.details }} </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
export default {
  name : "ComponentsAccordion",
  props: {       
    content: {
      type: Array,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    expandall: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeMaxHeight:0
    };
  },
  methods: {
    toggle(item) {
      this.$emit('toggle', [this.content.name, item]);
    },
    expandAll() {      
      this.$emit('expand');
    },
    beforeEnter: function(el) {
      el.style.height = '0';
    },
    enter: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    beforeLeave: function(el) {
      el.style.height = el.scrollHeight + 'px';
    },
    leave: function(el) {
      el.style.height = '0';
    }
  }
}
</script>