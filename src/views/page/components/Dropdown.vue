<template>
  <article  class="dropdownSys">
    <section>
      <h2>Dropdown</h2>
      <Dropdown addClass="" type="type01">      
        <template #button>Click Me</template>
        <template #list>        
          <ul class="list">
            <li>aaNuxt</li>
            <li>aaVue</li>
            <li>aaWebpack</li>
          </ul>
        </template>
      </Dropdown>
    </section>
  </article>  
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
  name : 'ComponentsDropdown',
  components : {Dropdown},
  mounted() {
    this.$store.dispatch('updateHeadTitle', {
      title: "Dropdown ",
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