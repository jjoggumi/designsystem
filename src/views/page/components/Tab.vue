<template>
  <article class="tabSys">
    <section>
      <h2>Tab Type</h2>
      <HiTabs>
        <HiTab label="진행중" class="p-10">진행중인 컨텐츠</HiTab>
        <HiTab label="종료" class="p-10" active isNew>종료된 컨텐츠</HiTab>
        <HiTab label="임시저장" class="p-10">임시저장  컨텐츠</HiTab>
      </HiTabs>
      <br>
      <br>
      <br>
      <div>
        <div class="hi-tab">
          <button class="is-active">진행중</button>
          <button>종료</button>
          <button>임시저장</button>
        </div>
      </div>
      <div class="hi-tab type01 tab-block">
        <button class="is-active">대화상대</button>
        <button>최근대화목록</button>
      </div>
      <div class="hi-tab type02 j-center">
        <button class="is-active">학부모</button>
        <button>학생</button>
      </div>
      <div class="hi-tab type03 tab-block">
        <button>사용중인 양식</button>
        <button class="is-active">제출 내역</button>
        <button>학생별 현황</button>
        <button>신청서 관리</button>
      </div>
      <div class="hi-tab type04">
        <button>전체</button>
        <button class="is-active">좋음</button>
        <button>노력</button>
      </div>
    </section>
  </article>
</template>

<script>
import HiTabs from "@/components/HiTabs.vue";
import HiTab from "@/components/HiTab.vue";

export default {
  name: "ComponentsTab",
  components: { HiTabs, HiTab },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.tabSys {
  .hi-tab {
    margin-bottom: 40px;
  }
}
</style>
