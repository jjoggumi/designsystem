<template>
  <article class="tabSys">
    <section>
      <h2>Tab Type</h2>
      <HiTabs>
        <HiTab label="진행중" class="p-10">진행중인 컨텐츠</HiTab>
        <HiTab label="종료" class="p-10" active new>종료된 컨텐츠</HiTab>
        <HiTab label="임시저장" class="p-10">임시저장  컨텐츠</HiTab>
      </HiTabs>
      <!-- <div>
        <div class="hi-tab">
          <button class="is-active">진행중</button>
          <button>종료</button>
          <button>임시저장</button>
        </div>
      </div> -->
      
      <HiTabs addClassName="type01 tab-block">
        <HiTab label="대화상대" class="p-10" active>대화상대 컨텐츠</HiTab>
        <HiTab label="최근대화목록" class="p-10">최근대화목록 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type01 tab-block">
        <button class="is-active">대화상대</button>
        <button>최근대화목록</button>
      </div> -->

      <HiTabs addClassName="type02 j-center">
        <HiTab label="학부모" class="p-10" active>학부모 컨텐츠</HiTab>
        <HiTab label="학생" class="p-10">학생 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type02 j-center">
        <button class="is-active">학부모</button>
        <button>학생</button>
      </div> -->
      
      <HiTabs addClassName="type03 tab-block">
        <HiTab label="사용중인 양식" class="p-10" active>사용중인 양식 컨텐츠</HiTab>
        <HiTab label="제출 내역" class="p-10">제출 내역 컨텐츠</HiTab>
        <HiTab label="학생별 현황" class="p-10">학생별 현황 컨텐츠</HiTab>
        <HiTab label="신청서 관리" class="p-10">신청서 관리 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type03 tab-block">
        <button>사용중인 양식</button>
        <button class="is-active">제출 내역</button>
        <button>학생별 현황</button>
        <button>신청서 관리</button>
      </div> -->
      
      <HiTabs addClassName="type04">
        <HiTab label="전체" class="p-10" active>전체 컨텐츠</HiTab>
        <HiTab label="좋음" class="p-10">좋음 컨텐츠</HiTab>
        <HiTab label="노력" class="p-10">노력 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type04">
        <button>전체</button>
        <button class="is-active">좋음</button>
        <button>노력</button>
      </div> -->
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
  .hi-tabs {
    margin-bottom: 40px;
  }
}
</style>
