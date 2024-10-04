<template>
  <article class="tabSys">
    <section>
      <h2>Tab Type</h2>
      <HiTabs size="xl">
        <HiTab label="진행중" class="p-10" onActive onNew >진행중인 컨텐츠</HiTab>
        <HiTab label="종료" class="p-10">종료된 컨텐츠</HiTab>
        <HiTab label="임시저장" class="p-10">임시저장  컨텐츠</HiTab>
      </HiTabs>
      <!-- <div>
        <div class="hi-tab tab-xl">
          <button class="is-active">진행중</button>
          <button>종료</button>
          <button>임시저장</button>
        </div>
      </div> -->
      
      <HiTabs type="type01" size="md" block>
        <HiTab label="대화상대" class="p-10" onActive>대화상대 컨텐츠</HiTab>
        <HiTab label="최근대화목록" class="p-10" >최근대화목록 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type01 tab-md tab-block">
        <button class="is-active">대화상대</button>
        <button>최근대화목록</button>
      </div> -->

      <HiTabs type="type02" align="center">
        <HiTab label="학부모" class="p-10" onActive>학부모 컨텐츠</HiTab>
        <HiTab label="학생" class="p-10">학생 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type02 j-center">
        <button class="is-active">학부모</button>
        <button>학생</button>
      </div> -->
      
      <HiTabs  type="type03" size="xl" block>
        <HiTab label="사용중인 양식" class="p-10" ico="ico-chart" >사용중인 양식 컨텐츠</HiTab>
        <HiTab label="제출 내역" class="p-10" ico="ico-chart" >제출 내역 컨텐츠</HiTab>
        <HiTab label="학생별 현황" class="p-10" ico="ico-chart" >학생별 현황 컨텐츠</HiTab>
        <HiTab label="신청서 관리" class="p-10" ico="ico-chart" onActive>신청서 관리 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type03 tab-xl tab-block">
        <button class="is-active">사용중인 양식</button>
        <button>제출 내역</button>
        <button>학생별 현황</button>
        <button>신청서 관리</button>
      </div> -->
      
      <HiTabs  type="type04" size="sm">
        <HiTab label="전체" class="p-10" onActive >전체 컨텐츠</HiTab>
        <HiTab label="좋음" class="p-10">좋음 컨텐츠</HiTab>
        <HiTab label="노력" class="p-10">노력 컨텐츠</HiTab>
      </HiTabs>
      <!-- <div class="hi-tab type04 tab-sm">
        <button class="is-active">전체</button>
        <button>좋음</button>
        <button>노력</button>
      </div> -->
    </section>
    <div class="ctrArea">
      <div class="elArea">
        <HiTabs 
          :type="propsVal.type"
          :size="propsVal.size"
          :align="propsVal.align"
          :block="propsVal.block === true"          
          >
          <HiTab label="선택 탭" class="p-10" onActive> 선택 탭 컨텐츠 01</HiTab>
          <HiTab label="신규 알림 탭" class="p-10" onNew> 신규 알림 탭 컨텐츠 02</HiTab>
          <HiTab label="아이콘 탭" class="p-10" ico="ico-chart">아이콘 탭 컨텐츠 03</HiTab>
        </HiTabs>        
      </div>
      <ul class="propArea">
        <li>
          <label>TABS TYPE</label>
          <hi-select-box :value="propsVal.type" @update:value="propsVal.type = $event" :items="propsOpt.type" empty-title="TYPE" />
        </li>
        <li>
          <label>TABS SIZE</label>
          <hi-select-box :value="propsVal.size" @update:value="propsVal.size = $event" :items="propsOpt.size" empty-title="SIZE" />
        </li>
        <li>
          <label>TABS ALIGN</label>
          <hi-select-box :value="propsVal.align" @update:value="propsVal.align = $event" :items="propsOpt.align" empty-title="ALIGN" />
        </li>
        <li>
          <label>TABS BLOCK</label>
          <hi-switch v-model="propsVal.block" @update:model="propsVal.block = $event" />
        </li>
      </ul>
      <div class="codeArea">
        <pre>
          <code v-html="generatedCode"></code>
        </pre>
      </div>
    </div>
  </article>
</template>

<script>
import HiTabs from "@/components/HiTabs.vue";
import HiTab from "@/components/HiTab.vue";
import HiSelectBox from "@/components/HiSelectBox.vue";
import HiSwitch from "@/components/HiSwitch.vue";

export default {
  name: "ComponentsTab",
  components: { HiTabs, HiTab, HiSelectBox, HiSwitch},
  data() {
    return {
      propsVal: {
        type: "",
        size: "md",
        align: "",
        block: false,
        onActive: true,
        onNew: false,
        ico: "",
      },
      propsOpt: {
        type: [
          { value: "", title: "default" },
          { value: "type01", title: "type01" },
          { value: "type02", title: "type02" },
          { value: "type03", title: "type03" },
          { value: "type04", title: "type04" },
        ],
        size: [
          { value: "xs", title: "xs" },
          { value: "sm", title: "sm" },
          { value: "md", title: "md" },
          { value: "lg", title: "lg" },
          { value: "xl", title: "xl" },
        ],
        align: [
          { value: "", title: "left" },
          { value: "center", title: "center" },
          { value: "right", title: "right" },
        ],
        ico: [
          { value: "ico-none", title: "none" },
          { value: "ico-plus", title: "plus" },
          { value: "ico-chart", title: "chart" },
          { value: "ico-close-circle-fill", title: "close-circle-fill" },
          { value: "ico-speech-bubble", title: "speech-bubble" },
          { value: "ico-volume", title: "volume" },
          { value: "ico-sort-up", title: "sort-up" },
          { value: "ico-sort-down", title: "sort-down" },
          { value: "ico-printer", title: "printer" },
          { value: "ico-pointlist", title: "pointlist" },
          { value: "ico-file-upload", title: "file-upload" },
          { value: "ico-file-down", title: "file-down" },
          { value: "ico-time-fill", title: "time-fill" },
          { value: "ico-time", title: "time" },
          { value: "ico-refresh", title: "refresh" },
          { value: "ico-refresh2", title: "refresh2" },
          { value: "ico-expand", title: "expand" },
          { value: "ico-shrink", title: "shrink" },
          { value: "ico-drawnup", title: "drawnup" },
          { value: "ico-close", title: "close" },
          { value: "ico-close2", title: "close2" },
          { value: "ico-close3", title: "close3" },
        ],
      },
    };
  },
  computed: {
    generatedCode() {
      // Generate class list for the button element
      const tabsProps = ["hi-tab", 
      this.propsVal.type ? `type="${this.propsVal.type}"` : "", 
      this.propsVal.size ? `size="tab-${this.propsVal.size}"` : "",
      this.propsVal.align ? `align="${this.propsVal.align}"` : "",
      this.propsVal.block ? "block" : "",
      ].filter(Boolean).join(" ");

      const tabProps = [
      this.propsVal.onActive ? "onActive" : "", 
      this.propsVal.onNew ? 'onNew' : "",
      this.propsVal.ico ? `ico="${this.propsVal.ico}"` : "",
      ].filter(Boolean).join(" ");

      // Generate HTML code for the button and HiButton component
      return `
        &lt;HiTabs ${tabsProps} &gt;
          &lt;HiTab label="탭메뉴01" class="p-10" onActive &gt;탭 컨텐츠 01&lt;/HiTab&gt;
          &lt;HiTab label="탭메뉴01" class="p-10" onNew &gt;탭 컨텐츠 02&lt;/HiTab&gt;
          &lt;HiTab label="탭메뉴01" class="p-10" ico="ico-chart" &gt;탭 컨텐츠 03&lt;/HiTab&gt;
        &lt;/HiTabs&gt;
    `;
    },
  },
};
</script>
<style lang="scss" scoped>
.tabSys {
  .hi-tabs {
    margin-bottom: 40px;
  }
  .ctrArea {
    flex-wrap: wrap;
    .elArea {
      position: relative;
      min-height: 270px;
      .hi-modal-common {
        position: absolute;
        z-index: 999;
      }
    }
    .codeArea {
      width: 100%;
    }
  }
}

</style>
