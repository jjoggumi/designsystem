<template>   
  <article  class="modalSys">
    <section>
      <h2>Modal</h2>
      <modal size="sm" type="type1" :bgStatic="true">
        <template #button>show modal</template>
        <template #header>
          <h3>custom header</h3>
        </template>
        <template #body>
          custom body
        </template>
        <template #footer>
          custom footer
        </template>
      </modal>
    </section>
  </article>  
</template>

<script>
import Modal from '@/components/Modal.vue'
export default {
  name : 'ComponentsModal',
  components : {Modal},
   
  mounted() {
    this.$store.dispatch('updateHeadTitle', {
      title: "Modal",
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