<template>
  <header v-for="(menu, index) in sysMenu" :key="index">
    <div v-for="(childMenu, subIndex) in menu.children" :key="subIndex">
      <template v-if="activeMenu === childMenu.name">
        <h1>{{ childMenu.name }} System</h1>
        <p class="smr">{{ childMenu.smr }}</p>
        <p class="info">
          1.0.0<span>/</span> 2024년 10월 30일 업데이트 <span>/</span>
          김은영
        </p>
      </template>
    </div>
  </header>
</template>

<script>
export default {
  name: "App",
  props: {
    activeMenu: String,
    sysMenu: Array,
  },
  data() {
    return {};
  },
};
</script>

<style></style>
