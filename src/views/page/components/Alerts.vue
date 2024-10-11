<template>
  <article class="alerts Sys">
    <section>
      <h2>Btn Type</h2>
      <div>
        <HiButton color="primary" size="md" @click="showBasicAlert('삭제하시겠습니까', 'warning')">삭제하시겠습니까</HiButton>
        <HiButton color="primary" size="md" @click="showBasicAlert('저장되었습니다.', 'success')">삭제하시겠습니까</HiButton>
        <HiButton color="primary" size="md" @click="showBasicAlert('게시판(폴더)가 삭제되어 게시글을<br> 등록할 수 없습니다.', 'success')">삭제하시겠습니까</HiButton>
      </div>
    </section>
  </article>
</template>

<script>
import HiButton from "@/components/HiButton.vue";
export default {
  components: { HiButton },
  name: "ComponentsAlerts",
  data() {
    return {};
  },
  methods: {
    showBasicAlert(msg, ico) {
      this.$hiClass
        .confirm(msg, ico)
        .then(() => {
          console.log("확인");
        })
        .catch(() => {
          console.log("취소");
        });
    },
  },
};

// return this.confirm("적용 하시겠습니까?", "warning");
// return this.alert("저장 되었습니다.", "success", true);
// return this.alert("수정 되었습니다.", "success", true);
// return this.alert("삭제 되었습니다.", "success", true);
// return this.alert(
//     "서버와의 통신이 지연되고 있습니다.<br/>잠시후 다시 시도 하여 주십시오.",
//     "error"
// );
// return this.alert("검색어를 입력해주세요", "error", false);
</script>
