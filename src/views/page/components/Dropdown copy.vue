<template>
  <article class="dropdownSys">
    <section>
      <h2>Dropdown Default</h2>
      <Dropdown title="Dropdown Default" >
        <ul class="list">
          <li v-for="(a,i) in dropdown03.options" :key="i">
            <input type="checkbox" :value="a.value" :id="'option_' + index" >
            <label for="'option_' + index">{{ a.label }}</label>
          </li>
        </ul>
      </Dropdown>
      <Dropdown title="Dropdown Block" block>
        <ul class="list">
          <li>option 01</li>
          <li>option 02</li>
          <li>option 03</li>
        </ul>
      </Dropdown>
    </section>
   
    <section>
      <h2>Dropdown Option</h2>      
      <DropdownRadio :value="dropdown01.number" @input="onChangeOption" :dropdown="dropdown01" placeholder="Select an option"/>
      <p>Selected value: {{dropdown01.number}}</p>
    </section>
    
    <section>
      <h2>Dropdown Multiple options</h2>      
      <DropdownCheck :value="dropdown01.number" @input="onChangeOption" :dropdown="dropdown02" placeholder="Select an Multiple options"/>
      <p>Selected value: {{dropdown02.number}}</p>
    </section> 
    
    <section>
      <h2>Dropdown Only</h2>      
      <DropdownOnly/>
    </section> 
  </article>  
</template>

<script>
import Dropdown from '@/components/Dropdown.vue';
import DropdownCheck from '@/components/DropdownCheck.vue';
import DropdownRadio from '@/components/DropdownRadio.vue';
import DropdownOnly from '@/components/DropdownOnly.vue';

export default {
  name : 'ComponentsDropdown',
  components : {Dropdown, DropdownCheck, DropdownRadio, DropdownOnly},
  data () {
    return {  
      dropdown01 : {
        number: null,
        options: [ // 드롭다운 옵션들
          { value: 'option1', label: 'Option 1' },
          { value: 'option2', label: 'Option 2' },
          { value: 'option3', label: 'Option 3' }
        ]
      },
      dropdown02 : {
        number: null,
        options: [ // 드롭다운 옵션들
          { value: 'aoption1', label: 'aOption 1' },
          { value: 'aoption2', label: 'aOption 2' },
          { value: 'aoption3', label: 'aOption 3' }
        ]
      },
      dropdown03 : {
        number: null,
        options: [ // 드롭다운 옵션들
          { value: 'boption1', label: 'bOption 1' },
          { value: 'boption2', label: 'bOption 2' },
          { value: 'boption3', label: 'bOption 3' }
        ]
      }
    }
  },
  methods: {
    onChangeOption (val) {
      val.target.number = val.value;
    }
  },
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
<style scoped>
.dropdown{
  margin:0.5rem;
}
</style>
  