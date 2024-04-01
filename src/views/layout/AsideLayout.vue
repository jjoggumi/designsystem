<template>
  <aside>
    <div class="collapseSet type02">
      <Collapse v-for="(category, index) in menu" :key="index" :menuOn="activeCategory === category.name">
        <template #tit>
          {{category.name}}
        </template>
        <template #con>
          <div v-for="(subCategory, subIndex) in category.items" :key="subIndex" class="item">
            <router-link :to="'/' + category.name + '/' + subCategory" @click="activeCategory = category.name">{{ subCategory }}</router-link>
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
        { name: 'design system', items:null },
        { name: 'general', items: ['color', 'shadow', 'typography', 'icons'] },
        { name: 'layout', items: ['Breakpoints', 'grid'] },
        { name: 'content', items: ['Images', 'Tables', 'Figures'] },
        { name: 'form', items: ['Form', 'checks & Radios & Swiches', 'DatePicker', 'input', 'select', 'upload', 'rate'] },
        { name: 'components', items: ['accordion', 'alerts', 'badge', 'breadcrumb', 'buttons', 'card', 'collapse', 'dropdowns', 'modal', 'tab', 'pagination', 'spinners', 'toasts', 'tooltips', 'error'] }
      ],
      activeCategory: null
    }
  },
}
</script>

<style>

</style>