<template>
  <div class="collapsWrap">
    <HiToast :message="`게시판을 선택해주세요.`" open />
  </div>
</template>

<script>
import HiButton from "@/components/Button/HiButton.vue";
import HiToast from "@/components/Toast/HiToast.vue";
//import HiSelectBox from "@/components/Form/HiSelectBox.vue";
//import HiSwitch from "@/components/Form/HiSwitch.vue";

export default {
  name: "ComponentsToast",
  components: { HiButton, HiToast },
  data() {
    return {};
  },
  methods: {
    deleteItem() {
      const options = {
        type: "info", // 토스트 유형 ('info', 'success', 'error' 등)
        duration: 5000, // 표시 시간 (밀리초)
        position: "top-right", // 위치 ('top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left')
        className: "custom-toast-class", // 사용자 정의 클래스
        icon: "check", // 아이콘 추가 (FontAwesome 같은 라이브러리 사용 가능)
        action: {
          // 액션 버튼 추가 가능
          text: "닫기",
          onClick: (e, toastObject) => {
            toastObject.goAway(0); // 클릭 시 토스트 닫기
          },
        },
      };

      this.$toasted.show("제출한 내역이 삭제되었습니다.", options);
    },
  },
};
</script>
