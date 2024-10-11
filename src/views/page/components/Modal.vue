<template>
  <article class="modalSys">
    <section>
      <h2>Modal Type</h2>
      <HiButton color="primary" @click="$set(modalType, 0, true)">Default</HiButton>
      <HiButton color="primary" @click="$set(modalType, 2, true)">Type01</HiButton>
      <HiButton color="secondary" @click="$set(modalType, 1, true)">Opt : 타이틀 구분선 추가</HiButton>
      <HiButton color="secondary" @click="$set(modalType, 3, true)">Opt : 상단 닫기버튼 스킵</HiButton>
      <HiModal v-show="modalType[0]" @close="$set(modalType, 0, false)">
        <template v-slot:heading>Default :기본 모달 형태</template>
        <template v-slot:content> 기본 모달은 모달 컴포넌트에서 기본으로 제공되는 UI입니다. </template>
        <template v-slot:footer>
          <div class="group-btn">
            <HiButton color="line-default" size="lg" @click="$set(modalType, 0, false)">취소</HiButton>
            <HiButton color="primary" size="lg" @click="$set(modalType, 0, false)">확인</HiButton>
          </div>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message" v-show="modalType[2]" @close="$set(modalType, 2, false)">
        <template v-slot:heading>Type01 : 하단 버튼 영역 UI 변경</template>
        <template v-slot:content>
          <div class="desc">컨텐츠모달, 알림모달, 메시지모달 등 <br /><strong>현행에서 주로 사용되는 UI</strong> 입니다.</div>
        </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalType, 2, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalType, 2, false)">확인</HiButton>
        </template>
      </HiModal>
      <HiModal addClassName="title-line" v-show="modalType[1]" @close="$set(modalType, 1, false)">
        <template v-slot:heading>Option : 구분선 있는 타이틀</template>
        <template v-slot:content>
          <div class="desc">
            <strong>타이틀 영역을 구분하는 라인이 추가된 UI로</strong>
            <p>현재 학교 신청서 양식 > 학생별 현황 > 제출 내역 팝업에서 사용되고 있습니다.</p>
          </div>
        </template>
        <template v-slot:footer>
          <div class="group-btn">
            <HiButton color="line-default" size="lg" @click="$set(modalType, 1, false)">취소</HiButton>
            <HiButton color="primary" size="lg" @click="$set(modalType, 1, false)">확인</HiButton>
          </div>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message title-close-skip" v-show="modalType[3]" @close="$set(modalType, 3, false)">
        <template v-slot:heading>Option :상단 닫기버튼 스킵</template>
        <template v-slot:content>
          <div class="desc">메세지 알림 모달 형태로 <br />하단버튼으로 상단 닫기 이벤트를 대신함</div>
        </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalType, 3, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalType, 3, false)">확인</HiButton>
        </template>
      </HiModal>
    </section>

    <section>
      <h2>Modal Size</h2>
      <HiButton color="primary" @click="$set(modalSize, 0, true)">Small Modal</HiButton>
      <HiButton color="primary" @click="$set(modalSize, 1, true)">Medium Modal</HiButton>
      <HiButton color="primary" @click="$set(modalSize, 2, true)">Large Modal</HiButton>
      <HiButton color="primary" @click="$set(modalSize, 3, true)">Full Modal</HiButton>
      <HiModal addClassName="modal-message modal-sm" v-show="modalSize[0]" @close="$set(modalSize, 0, false)">
        <template v-slot:heading>Small Modal Title </template>
        <template v-slot:content> Small Modal Content </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalSize, 0, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalSize, 0, false)">확인</HiButton>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message modal-md" v-show="modalSize[1]" @close="$set(modalSize, 1, false)">
        <template v-slot:heading>Medium Modal Title </template>
        <template v-slot:content>Medium Modal Content </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalSize, 1, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalSize, 1, false)">확인</HiButton>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message modal-lg" v-show="modalSize[2]" @close="$set(modalSize, 2, false)">
        <template v-slot:heading>Large Modal Title </template>
        <template v-slot:content>Large Modal Content </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalSize, 2, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalSize, 2, false)">확인</HiButton>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message modal-full" v-show="modalSize[3]" @close="$set(modalSize, 3, false)">
        <template v-slot:heading>Full Modal Title </template>
        <template v-slot:content>Full Modal Content </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalSize, 3, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalSize, 3, false)">확인</HiButton>
        </template>
      </HiModal>
    </section>
    <section>
      <h2>Modal Condent Type</h2>
      <HiButton color="primary" @click="$set(modalCon, 0, true)">Default Content</HiButton>
      <HiButton color="primary" @click="$set(modalCon, 1, true)">Icon Messege</HiButton>
      <HiButton color="primary" @click="$set(modalCon, 2, true)">Progress bar</HiButton>
      <HiModal addClassName="modal-message" v-show="modalCon[0]" @close="$set(modalCon, 0, false)">
        <template v-slot:heading>
          모달 제목 영역
          <span class="highlight">제목 강조 텍스트</span>
        </template>
        <template v-slot:content>
          <p class="desc">
            텍스트 /
            <strong>Bold</strong> / <span class="txt-primary">Color</span> /
            <strong class="txt-primary">Bold & Color</strong>
          </p>
          <div class="textbox"><p>텍스트 박스</p></div>
          <p class="text-refer mt-10">※ 참조 텍스트</p>
        </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalCon, 0, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalCon, 0, false)">확인</HiButton>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message" v-show="modalCon[1]" @close="$set(modalCon, 1, false)">
        <template v-slot:heading>
          모달 제목 영역
          <span class="highlight">제목 강조 텍스트</span>
        </template>
        <template v-slot:content>
          <HiIcon name="ico-none" color="disabled" size="50" rounded="rounded" outline></HiIcon>
          <p class="desc mt-10"><strong class="txt-primary">아이콘</strong>이 추가된 메세지 모달입니다.</p>
        </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalCon, 1, false)">취소</HiButton>
          <HiButton color="primary" size="lg" @click="$set(modalCon, 1, false)">확인</HiButton>
        </template>
      </HiModal>
      <HiModal addClassName="modal-message" v-show="modalCon[2]" @close="$set(modalCon, 2, false)">
        <template v-slot:heading>전체 파일을 선택 중입니다.<br />잠시만 기다려주세요.</template>
        <template v-slot:content>
          <div class="w100">
            <p>6/77</p>
            <div class="progressbar">
              <span class="bar" style="width: calc(6 / 77 * 100%)"></span>
            </div>
          </div>
        </template>
        <template v-slot:footer>
          <HiButton color="line-default" size="lg" @click="$set(modalCon, 2, false)" style="width: 150px">취소</HiButton>
        </template>
      </HiModal>
    </section>
    <div class="ctrArea">
      <div class="elArea">
        <HiModal
          :class="[
            propsVal.type ? propsVal.type : '',
            propsVal.size ? 'modal-' + propsVal.size : '',
            propsVal.titleLine === true ? 'title-line' : '',
            propsVal.titleCloseSkip === true ? 'title-close-skip' : '',
          ]"
          @close="modalType[0] = false"
        >
          <template v-slot:heading>모달 제목 영역입니다. </template>
          <template v-slot:content> 모달 컨텐츠 영역입니다. </template>
          <template v-slot:footer>
            <div v-if="propsVal.type === ''" class="group-btn">
              <HiButton color="line-default" size="lg" @click="modalType[0] = false">취소</HiButton>
              <HiButton color="primary" size="lg" @click="modalType[0] = false">확인</HiButton>
            </div>
            <template v-else>
              <HiButton color="line-default" size="lg" @click="modalType[0] = false">취소</HiButton>
              <HiButton color="primary" size="lg" @click="modalType[0] = false">확인</HiButton>
            </template>
          </template>
        </HiModal>
      </div>
      <ul class="propArea">
        <li>
          <label>TYPE</label>
          <hi-select-box :value="propsVal.type" @update:value="propsVal.type = $event" :items="propsOpt.type" empty-title="TYPE" />
        </li>
        <li>
          <label>SIZE</label>
          <hi-select-box :value="propsVal.size" @update:value="propsVal.size = $event" :items="propsOpt.size" empty-title="SIZE" />
        </li>
        <li>
          <label>TITLE LINE</label>
          <hi-switch v-model="propsVal.titleLine" @update:model="propsVal.titleLine = $event" />
        </li>
        <li>
          <label>CLOSE SKIP</label>
          <hi-switch v-model="propsVal.titleCloseSkip" @update:model="propsVal.titleCloseSkip = $event" />
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
import HiModal from "@/components/HiModal.vue";
import HiButton from "@/components/HiButton.vue";
import HiSelectBox from "@/components/HiSelectBox.vue";
import HiSwitch from "@/components/HiSwitch.vue";
import HiIcon from "@/components/HiIcon.vue";
export default {
  name: "ComponentsModal",
  components: { HiModal, HiButton, HiSelectBox, HiSwitch, HiIcon },
  data() {
    return {
      modalType: [false, false, false, false],
      modalSize: [null, null, null, null],
      modalCon: [null, null, null, null],
      propsVal: {
        type: "",
        titleLine: false,
        titleCloseSkip: false,
        size: "sm",
      },
      propsOpt: {
        type: [
          { value: "", title: "default" },
          { value: "modal-message", title: "type01" },
        ],
        size: [
          { value: "sm", title: "sm" },
          { value: "md", title: "md" },
          { value: "lg", title: "lg" },
          { value: "full", title: "full" },
        ],
      },
    };
  },
  computed: {
    generatedCode() {
      // Generate class list for the button element
      const classes = [
        "btn",
        this.propsVal.type ? `${this.propsVal.type}` : "",
        this.propsVal.size ? `model-${this.propsVal.size}` : "",
        this.propsVal.titleLine ? "title-line" : "",
        this.propsVal.titleCloseSkip ? "title-close-skip" : "",
      ]
        .filter(Boolean)
        .join(" ");
      const btnarea = [
        this.propsVal.type === ""
          ? `&lt;div class="group-btn"&gt;
              &lt;HiButton color="line-default" size="lg" &gt;취소&lt;/HiButton&gt;
              &lt;HiButton color="primary" size="lg" &gt;확인&lt;/HiButton&gt;
            &lt;/div&gt;`
          : `&lt;HiButton color="line-default" size="lg" &gt;취소&lt;/HiButton&gt;
             &lt;HiButton color="primary" size="lg" &gt;확인&lt;/HiButton&gt;`,
      ]
        .filter(Boolean)
        .join(" ");

      // Generate HTML code for the button and HiButton component
      return `
        &lt;HiModal class="${classes}" @close=""&gt;
          &lt;template v-slot:heading&gt;모달 제목 영역입니다.&lt;/template&gt;
          &lt;template v-slot:content&gt; 모달 컨텐츠 영역입니다. &lt;/template&gt;
          &lt;template v-slot:footer&gt;
            ${btnarea}           
          &lt;/template&gt;
        &lt;/HiModal&gt;
    `;
    },
  },
};
</script>
<style lang="scss" scoped>
.modalSys {
  section > button {
    margin: 0.3rem;
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
