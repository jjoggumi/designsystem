<template>
  <article  class="collapseSys">
    <section>
      <h2>Collapse <small>(slot)</small></h2>
      <div class="collapseSet">
        <CollapseSlot onActive>
          <template #tit>
            collapse title
          </template>
          <template #con>
            <div class="inner" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </template>
        </CollapseSlot>    

        <CollapseSlot>
          <template #tit>
            collapse title
          </template>
          <template #con>
            <div class="inner" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </template>
        </CollapseSlot>    
      </div>
    </section>
    <section>
      <h2>Collapse <small>(data)</small></h2>
      <Collapse :items="CollapseData" />
    </section>
    <section>
      <h2>Accordion <small>(data)</small></h2>
      <Collapse :items="AccordionData" accordion />
    </section>
  </article>  
</template>

<script>
import CollapseSlot from '@/components/CollapseSlot.vue';
import Collapse from '@/components/Collapse.vue';

export default {
  name : 'ComponentsCollapse',
  components : {CollapseSlot, Collapse},
  data(){
    return{      
      CollapseData:  [
        { id: 1, active: true, title: "Title 1", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 2, active: false, title: "Title 2", details: "content 2" },
        { id: 3, active: false, title: "Title 3", details: "content 3" }
      ],
      AccordionData:  [
        { id: 1, active: true, title: "Title 1", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 2, active: false, title: "Title 2", details: "content 2" },
        { id: 3, active: false, title: "Title 3", details: "content 3" }
      ],       
    }
  },
}
</script>