<template>
  <!-- <HeaderLayout/> -->
  <AsideLayout/>
  <router-view></router-view> 
</template>

<script>
import AsideLayout from './views/layout/AsideLayout.vue'
//import HeaderLayout from './views/layout/HeaderLayout.vue'
export default {
  name: 'App',
  components:{
    AsideLayout, 
    //HeaderLayout
  }
}
</script>

<style>
</style>
