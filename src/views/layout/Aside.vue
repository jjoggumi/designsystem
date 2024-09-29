<template>
  <aside>
    <div class="navBrand">
      <a href="@/">HiClass <span>Creative Lab</span></a>
    </div>
    <div class="collapseSet type02">
      <div class="collapsList nonChild">
        <div class="collapsible">
          <a href="/" class="">Design System</a>
        </div>
      </div>
      <CollapseAside
        v-for="(menu, index) in sysMenu"
        :key="index"
        :active="true"
        :isActive="activeMenu === menu.name"
        :nonChild="!menu.children"
      >
        <template #tit>
          <a>{{ menu.name }}</a>
        </template>
        <template #con>
          <div
            v-for="(childMenu, subIndex) in menu.children"
            :key="subIndex"
            class="item"
          >
            <a
              :class="{ active: activeMenu === childMenu.name }"
              @click="$emit('menuLink', childMenu.name)"
              >{{ childMenu.name }}</a
            >
          </div>
        </template>
      </CollapseAside>
    </div>
  </aside>
</template>

<script>
import CollapseAside from "@/components/CollapseAside.vue";
export default {
  components: { CollapseAside },
  name: "AsideLayout",
  props: {
    sysMenu: Array,
    activeMenu: String,
  },
  data() {
    return {};
  },
};
</script>
