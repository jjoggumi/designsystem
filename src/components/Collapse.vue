<template>
  <div class="collapsList" >
    <div class="collapsList" v-for="(item) in items" :key="item.id">
      <div class="collapsible" @click="toggle(item)">
        <slot name="title">{{ item.title }}</slot>
      </div>
      <transition name="accordion"
      v-on:before-enter="beforeEnter" v-on:enter="enter"
      v-on:before-leave="beforeLeave" v-on:leave="leave">
        <div class="collapsCon" v-if="item.active" >
          <slot name="detail"><div class="inner">{{ item.details }} </div></slot>
        </div>
      </Transition>
    </div>

  </div>
</template>
<script>
export default {
  name : "ComponentsAccordion",
  props: {       
    items: {
      type: Array,
      required: true
    },
    accordion: {
      type: Boolean,
    }
  },
  methods: {
    toggle(item) {
      this.items.forEach((x) => {
        if(this.accordion){        
          x.active = x.id === item.id && !x.active;
        }else{
          x.active = x.id === item.id ? !x.active : x.active;
        }
      });
      this.$emit('itemToggled', item);
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