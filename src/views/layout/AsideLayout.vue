<template>
  <aside>
    <div class="navBrand"><a href="@/">kimey Logo</a></div>
    <div class="collapseSet type02">
      <Collapse v-for="(route, index) in routes" :key="index" :menuOn="isActive(route)">
        <template #tit>
          {{ route.name }}
        </template>
        <template #con>
          <div v-for="(childRoute, subIndex) in route.children" :key="subIndex" class="item" :menuOns="isActive(childRoute)" :class="{ on: isActive(childRoute) }">
            <router-link :to="childRoute.path" @click="setActiveRoute(childRoute)">{{ childRoute.name }}</router-link>
          </div>
        </template>
      </Collapse>
    </div>
  </aside>
</template>

<script>
import Collapse from '@/components/Collapse.vue';
import router from '@/router/router.js';

export default {
  components: { Collapse },
  name: 'AsideLayout',
  data() {
    return {
      activeRoute: null,
      routes: []
    }
  },
  created() {
    this.routes = router.options.routes;
  },
  methods: {
    isActive(route) {
      return this.activeRoute && this.activeRoute.name === route.name;
    },
    setActiveRoute(route) {
      this.activeRoute = route;
    }
  }
}
</script>

<!-- <template>
  <aside>
    <div class="navBrand"><a href="@/">kimey Logo</a></div>
    <div class="collapseSet type02">
      <Collapse v-for="(cate, index) in menu" :key="index" :menuOn="activeCate.cate === cate.name">
        <template #tit>
          {{cate.name}}
        </template>
        <template #con>
          <div v-for="(subCate, subIndex) in cate.items" :key="subIndex" class="item" :menuOns="activeCate.subCate === subCate.name" :class="{ on: menuOns} ">
            <router-link :to="'/' + cate.name + '/' + subCate" @click="activeCate.cate = cate.name, activeCate.subCate = subCate.name">{{ subCate }}</router-link>
          </div>
        </template>
      </Collapse>
    </div>
  </aside>
</template>
<script>
import Collapse from '@/components/Collapse.vue';
export default {
  components: { Collapse },
  name : 'AsideLayout',
  data(){
    return{
      menu: [
        { name: 'Design system', items:null },
        { name: 'General', items: ['Color', 'Shadow', 'Typography', 'Icons'] },
        { name: 'Layout', items: ['Breakpoints', 'Grid'] },
        { name: 'Content', items: ['Images', 'Tables', 'Figures'] },
        { name: 'Form', items: ['Form', 'Checks & Radios & Swiches', 'DatePicker', 'Input', 'Select', 'Upload', 'Rate'] },
        { name: 'Components', items: ['Accordion', 'Alerts', 'Badge', 'Breadcrumb', 'Buttons', 'Card', 'Collapse', 'Dropdowns', 'Modal', 'Tab', 'Pagination', 'Spinners', 'Toasts', 'Tooltips', 'Error'] }
      ],
      activeCate:  { cate: null, subCate:null }
    }
  },
}
</script> -->