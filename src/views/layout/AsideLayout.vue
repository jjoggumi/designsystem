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
        { name: 'Design system', items:null },
        { name: 'General', items: ['Color', 'Shadow', 'Typography', 'Icons'] },
        { name: 'Layout', items: ['Breakpoints', 'Grid'] },
        { name: 'Content', items: ['Images', 'Tables', 'Figures'] },
        { name: 'Form', items: ['Form', 'Checks & Radios & Swiches', 'DatePicker', 'Input', 'Select', 'Upload', 'Rate'] },
        { name: 'Components', items: ['Accordion', 'Alerts', 'Badge', 'Breadcrumb', 'Buttons', 'Card', 'Collapse', 'Dropdowns', 'Modal', 'Tab', 'Pagination', 'Spinners', 'Toasts', 'Tooltips', 'Error'] }
      ],
      activeCategory: null
    }
  },
}
</script>

<style>

</style>