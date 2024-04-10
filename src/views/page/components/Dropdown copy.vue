<template>
  <div>
    <div>parent-compo {{number}}</div>
    <Dropdown :value="number" @input="onChangeNumber"  />
  </div>
</template>


<script>
import Dropdown from '@/components/Dropdown.vue';

export default {
  name : 'ComponentsDropdown',
  components: {
    Dropdown
  },
  data () {
    return {
      number: 50
    }
  },
  methods: {
    onChangeNumber (val) {
      this.number = val;
    }
  },
};
</script>

