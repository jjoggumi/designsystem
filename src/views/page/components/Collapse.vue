<template>
  <article  class="collapseSys">
    <section>
      <h2>Collapse</h2>
      <div class="collapseSet">
        <Collapse>
          <template #tit>
            제목이 들어가는
          </template>
          <template #con>
            <div class="item" >
             내용들어가는 곳
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