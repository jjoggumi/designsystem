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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </template>
        </Collapse>    
        <Collapse>
          <template #tit>
            collapse title
          </template>
          <template #con>
            <div class="inner" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </template>
        </Collapse> 
        <Collapse>
          <template #tit>
            collapse title
          </template>
          <template #con>
            <div class="inner" >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </template>
        </Collapse>     
      </div>
    </section>
  </article>  
</template>

<script>
import Collapse from '@/components/Collapse.vue';

export default {
  name : 'ComponentsCollapse',
  components : {Collapse},
  data(){
    return{
      collapseOpen: [null,null,null,null,null,null,null,null]
    }
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