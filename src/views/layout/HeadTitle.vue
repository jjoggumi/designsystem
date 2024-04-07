<template>
  <header>
    <h1>{{ headTitle.title }}</h1>
    <p class="smr" v-html="headTitle.description"></p>
    <p class="info">{{ headTitle.version }}<span>/</span>{{ headTitle.date }} <span>/</span> {{ headTitle.name }}</p>
    <p class="link">
      <button type="button" class="figma" @click="window.open(headTitle.figmaLink)" v-if="headTitle.figmaLink">figma</button>
      <button type="button" class="scss" @click="window.open(headTitle.scssLink)"  v-if="headTitle.scssLink">scss</button>
      <button type="button" class="js" @click="window.open(headTitle.jsLink)"  v-if="headTitle.jsLink">js</button>
    </p>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name : 'headTitle',  
  computed: {
    ...mapGetters(['getHeadTitle']),
    headTitle() {
      return this.getHeadTitle
    }
  }, 
}
</script>

<style>

</style>