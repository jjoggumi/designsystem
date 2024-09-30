<template>
  <article class="buttonSys">
    <section>
      <h2>Btn Type</h2>
      <div>
        <button @click="showBasicAlert">기본버튼</button>
        <HiButton color="primary" size="md" @click="showBasicAlert">기본 알림</HiButton>
      </div>
    </section>
  </article>
</template>

<script>
import HiButton from '@/components/HiButton.vue';
export default {
  components: { HiButton },
  name: "ComponentsAlerts",
  data() {
    return {
    };
  },
  methods: {
    showBasicAlert(){
      alert('aaaa')
      this.$hiClass.confirm('ssss')
      .then(() => {
        alert('aa')
      })
      .catch(() => {
        alert('bb')
      })
    }
  },
};
</script>
