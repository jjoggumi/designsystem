<template>
  <article  class="buttonSys">
    <section>
      <h2>Button</h2>
      <Buttons>
        버튼을 누르세요
      </Buttons>
    </section>
  </article>  
</template>

<script>
import Buttons from '@/components/Buttons.vue';

export default {
  name : 'ComponentsButton',
  components : {Buttons},
  mounted() {
    this.$store.dispatch('updateHeadTitle', {
      title: "Button ",
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