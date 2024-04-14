<template>
  <article  class="collapseSys">
    <section>
      <h2>Collapse</h2>
      <div class="collapseSet">
        <Collapse onActive>
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
        </Collapse>    
        <Collapse>
          <template #tit>
            collapse title
          </template>
          <template #con>
            <div class="inner" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </template>
        </Collapse>    
      </div>
    </section>
    <section>
      <h2 class="my-3">Single Active Item</h2>
      <Accordion :content="data1" @toggle="toggleItem"></Accordion>
    </section>
  </article>  
</template>

<script>
import Collapse from '@/components/Collapse.vue';
import Accordion from '@/components/Accordion.vue';

export default {
  name : 'ComponentsCollapse',
  components : {Collapse, Accordion},
  data(){
    return{      
      data1: {
        name : 'data1',
        item : [
          { id: 1, active: true, title: "Title 1", details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
          { id: 2, active: false, title: "Title 2", details: "content 2" },
          { id: 3, active: false, title: "Title 3", details: "content 3" }
        ]
      }
    }
  },
  methods: {
    toggleItem([dataSet,itemId]) {
      const targetItem = this[dataSet].item.find(i => i.id === itemId);
      if (targetItem.active === true) {
        this[dataSet].item.map((x) => {
          x.active = false;
        });
      }else{
        this[dataSet].item.map((x) => {
          x.active = false;
        });
        targetItem.active = true
      }
    },
  },
  mounted() {
    this.$store.dispatch('updateHeadTitle', {
      title: "Collapse ",
      description: `Users can understand the height distance and hierarchical relationship between the elements by simulating the projection of the elements.<br>
      사용자는 요소의 그림자효과를 통해 요소 간의 높이 거리 및 계층적 관계를 이해할 수 있습니다.`,
      version: "1.0.0",
      date: "2023년 02월 21일 업로드",
      name: "김은영",
      figmaLink: "/",
      scssLink: "/",
      jsLink: "/"
    })
  }
}
</script>