<template>
  <div class="collapsWrap">
    <HiButton color="primary">extraLarge</HiButton>
  </div>
</template>

<script>
import HiButton from "@/components/Button/HiButton.vue";
//import HiSelectBox from "@/components/Form/HiSelectBox.vue";
//import HiSwitch from "@/components/Form/HiSwitch.vue";

export default {
  name: "ComponentsToast",
  components: { HiButton },
  data() {
    return {};
  },
  methods: {
    deleteItem() {
      const options = {
        type: "success", // 성공 메시지
        duration: 3000, // 메시지가 표시되는 시간 (3초)
        icon: "check_circle", // 아이콘 추가
        position: "top-right", // 메시지 위치
      };

      this.$toasted.show("제출한 내역이 삭제되었습니다.", options);
    },
  },
};
</script>
