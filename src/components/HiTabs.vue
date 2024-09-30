<template>
  <div class="hi-tabs">
    <div class="hi-tab">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{ 'is-active': tab.isActive }"
        @click="selectTab(tab)"
      >
        {{ tab.label }}
      </button>
    </div>
    <div class="hi-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HiTabs",
  data() {
    return {
      tabs: [],
    };
  },
  methods: {
    addTab(tab) {
      this.tabs.push(tab);
      if (this.tabs.length === 1 || tab.active) {
        this.selectTab(tab);
      }
    },
    selectTab(selectedTab) {
      console.log(this.tabs)
      this.tabs.forEach((tab) => {
        tab.isActive = tab === selectedTab;
      });
    },
  },
};
</script>
