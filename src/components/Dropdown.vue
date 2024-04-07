
<template>
    <div class="wrapper">
      <button @click="toggle" class="btn">
        <slot name="button">Click me</slot>
      </button>
      <div v-show="isOpen" class="content">        
        <slot name="list">
          <ul class="list">
            <li>Nuxt</li>
            <li>Vue</li>
            <li>Webpack</li>
          </ul>
        </slot>        
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name : "ComponentsDropdown",
    data() {
      return {
        isOpen: false
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;
      }
    }
  };
  </script>
  <style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .btn {
    width: 182px;
    font-size: 14px;
    color: #fff;
    background-color: #28a745;
    border-color: #28a745;
    padding: 8px;
  }
  
  .content {
    border: 1px solid lightblue;
    width: 180px;
  }
  .list {
    list-style: none;
    margin: 0;
    padding: 20px;
  }
  </style>
  