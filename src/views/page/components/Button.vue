<template>
  <article class="buttonSys">
    <section>
      <h2>Btn Type</h2>
      <div>
        <HiButton color="primary" size="md">basic</HiButton>
        <HiButton color="line-primary" size="md">outline</HiButton>
        <HiButton color="primary" size="md" bitrounded>bitrounded</HiButton>
        <HiButton color="primary" size="md" square>square</HiButton>
        <!-- html
        <button type="button" class="hi-btn btn-md btn-primary">basic</button>
        <button type="button" class="hi-btn btn-md btn-line-primary">outline</button>
        <button type="button" class="hi-btn btn-md btn-primary btn-bitrounded">
          bitrounded
        </button>
        <button type="button" class="hi-btn btn-md btn-primary btn-square">square</button> -->
      </div>
    </section>
    <section>
      <h2>Btn Color</h2>
      <div>
        <HiButton color="link" size="md">link</HiButton>
        <HiButton color="default" size="md">default</HiButton>
        <HiButton color="primary" size="md" disabled>disabled</HiButton>
        <HiButton color="primary" size="md">primary</HiButton>
        <HiButton color="secondary" size="md">secondary</HiButton>
        <HiButton color="success" size="md">success</HiButton>
        <HiButton color="info" size="md">info</HiButton>
        <HiButton color="warning" size="md">warning</HiButton>
        <HiButton color="purple" size="md">purple</HiButton>
        <HiButton color="yellow" size="md">yellow</HiButton>
        <HiButton color="jungle" size="md">jungle</HiButton>
        <HiButton color="orange" size="md">orange</HiButton>
        <HiButton color="gray" size="md">gray</HiButton>
        <HiButton color="black" size="md">black</HiButton>
        <span style="background: rgb(71 120 222); display: inline-block; padding: 5px; border-radius: 5px">
          <HiButton color="white" size="md">white</HiButton>
        </span>
        <!-- html
        <button type="button" class="hi-btn btn-default">default</button>
        <button type="button" class="hi-btn btn-primary" disabled>disabled</button>
        <button type="button" class="hi-btn btn-primary">primary</button>
        <button type="button" class="hi-btn btn-secondary">secondary</button>
        <button type="button" class="hi-btn btn-success">success</button>
        <button type="button" class="hi-btn btn-info">info</button>
        <button type="button" class="hi-btn btn-warning">warning</button>
        <button type="button" class="hi-btn btn-purple">purple</button>
        <button type="button" class="hi-btn btn-yellow">yellow</button>
        <button type="button" class="hi-btn btn-jungle">jungle</button>
        <button type="button" class="hi-btn btn-orange">orange</button>
        <button type="button" class="hi-btn btn-gray">gray</button>
        <button type="button" class="hi-btn btn-black">black</button>
        <button type="button" class="hi-btn btn-white">white</button> -->
      </div>
    </section>
    <section>
      <h2>Btn Outline Color</h2>
      <div>
        <HiButton color="line-default" size="md">default</HiButton>
        <HiButton color="line-primary" size="md" disabled>disabled</HiButton>
        <HiButton color="line-primary" size="md">primary</HiButton>
        <HiButton color="line-secondary" size="md">secondary</HiButton>
        <HiButton color="line-success" size="md">success</HiButton>
        <HiButton color="line-info" size="md">info</HiButton>
        <HiButton color="line-warning" size="md">warning</HiButton>
        <HiButton color="line-purple" size="md">purple</HiButton>
        <HiButton color="line-yellow" size="md">yellow</HiButton>
        <HiButton color="line-jungle" size="md">jungle</HiButton>
        <HiButton color="line-orange" size="md">orange</HiButton>
        <HiButton color="line-gray" size="md">gray</HiButton>
        <HiButton color="line-black" size="md">black</HiButton>
        <span style="background: rgb(71 120 222); display: inline-block; padding: 5px; border-radius: 5px">
          <HiButton color="line-white" size="md">white</HiButton>
        </span>
        <!-- html
        <button type="button" class="hi-btn btn-line-default">default</button>
        <button type="button" class="hi-btn btn-line-primary" disabled>disabled</button>
        <button type="button" class="hi-btn btn-line-primary">primary</button>
        <button type="button" class="hi-btn btn-line-secondary">secondary</button>
        <button type="button" class="hi-btn btn-line-success">success</button>
        <button type="button" class="hi-btn btn-line-info">info</button>
        <button type="button" class="hi-btn btn-line-warning">warning</button>
        <button type="button" class="hi-btn btn-line-purple">purple</button>
        <button type="button" class="hi-btn btn-line-yellow">yellow</button>
        <button type="button" class="hi-btn btn-line-jungle">jungle</button>
        <button type="button" class="hi-btn btn-line-orange">orange</button>
        <button type="button" class="hi-btn btn-line-gray">gray</button>
        <button type="button" class="hi-btn btn-line-black">black</button>
        <button type="button" class="hi-btn btn-line-white">white</button> -->
      </div>
    </section>
    <section>
      <h2>Btn Size</h2>
      <div>
        <HiButton color="primary" size="xl">extraLarge</HiButton>
        <HiButton color="primary" size="lg">large</HiButton>
        <HiButton color="primary" size="md">medium</HiButton>
        <HiButton color="primary" size="sm">small</HiButton>
        <HiButton color="primary" size="xs">extraSmall</HiButton>
        <HiButton color="primary" size="block">width 100%</HiButton>
        <!-- html 
        <button type="button" class="hi-btn btn-primary btn-xl">extraLarge</button>
        <button type="button" class="hi-btn btn-primary btn-lg">large</button>
        <button type="button" class="hi-btn btn-primary btn-md">medium</button>
        <button type="button" class="hi-btn btn-primary btn-sm">small</button>
        <button type="button" class="hi-btn btn-primary btn-xs">extraSmall</button>
        <button type="button" class="hi-btn btn-primary btn-block">width 100%</button> -->
      </div>
    </section>

    <div class="ctrArea">
      <div class="elArea">
        <button
          type="button"
          :class="[
            'hi-btn',
            propsVal.color ? (propsVal.outline === true ? 'btn-line-' + propsVal.color : 'btn-' + propsVal.color) : propsVal.outline === true ? 'btn-line' : '',
            propsVal.shap ? 'btn-' + propsVal.shap : '',
            propsVal.size ? 'btn-' + propsVal.size : '',
            propsVal.block === true ? 'btn-block' : '',
          ]"
          :disabled="propsVal.disabled === true"
        >
          Button element
        </button>
        <HiButton
          :color="propsVal.color"
          :size="propsVal.size"
          :outline="propsVal.outline === true"
          :disabled="propsVal.disabled === true"
          :block="propsVal.block === true"
          :bitrounded="propsVal.shap === 'bitrounded'"
          :square="propsVal.shap === 'square'"
        >
          HiButton Component
        </HiButton>
      </div>
      <ul class="propArea">
        <li>
          <label>COLOR</label>
          <hi-select-box :value="propsVal.color" @update:value="propsVal.color = $event" :items="propsOpt.color" empty-title="COLOR" />
        </li>
        <li>
          <label>OUTLINE</label>
          <hi-switch v-model="propsVal.outline" @update:model="propsVal.outline = $event" />
        </li>
        <li>
          <label>ROUNDED</label>
          <hi-select-box :value="propsVal.shap" @update:value="propsVal.shap = $event" :items="propsOpt.shap" empty-title="SHAP" />
        </li>
        <li>
          <label>SIZE</label>
          <hi-select-box :value="propsVal.size" @update:value="propsVal.size = $event" :items="propsOpt.size" empty-title="SIZE" />
        </li>
        <li>
          <label>BLOCK</label>
          <hi-switch v-model="propsVal.block" @update:model="propsVal.block = $event" />
        </li>
        <li>
          <label>DISABLED</label>
          <hi-switch v-model="propsVal.disabled" @update:model="propsVal.disabled = $event" />
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
import HiButton from "@/components/Button/HiButton.vue";
import HiSelectBox from "@/components/Form/HiSelectBox.vue";
import HiSwitch from "@/components/Form/HiSwitch.vue";
import designsysData from "@/assets/js/designsysData.js";

export default {
  name: "ComponentsHiButton",
  components: { HiButton, HiSelectBox, HiSwitch },
  data() {
    return {
      propsVal: {
        shap: "",
        color: "",
        outline: false,
        disabled: false,
        size: "",
        block: false,
      },
      propsOpt: {
        shap: [
          { value: "", title: "rounded" },
          { value: "bitrounded", title: "bitrounded" },
          { value: "square", title: "square" },
        ],
        color: designsysData.btnColor,
        size: designsysData.size,
      },
    };
  },
  computed: {
    generatedCode() {
      // Generate class list for the button element
      const classes = [
        "hi-btn",
        this.propsVal.color ? (this.propsVal.outline === true ? `btn-line-${this.propsVal.color}` : `btn-${this.propsVal.color}`) : this.propsVal.outline === true ? `btn-line` : "",
        this.propsVal.shap ? `btn-${this.propsVal.shap}` : "",
        this.propsVal.size ? `btn-${this.propsVal.size}` : "",
        this.propsVal.block === true ? `btn-block` : "",
      ]
        .filter(Boolean)
        .join(" ");

      const hiBtnAttrs = [this.propsVal.disabled ? `disabled` : ""].filter(Boolean).join(" ");

      // Generate HiButton component attributes
      const hiButtonAttrs = [
        this.propsVal.color ? `color="${this.propsVal.color}"` : "",
        this.propsVal.size ? `size="${this.propsVal.size}"` : "",
        this.propsVal.outline ? `line` : "",
        this.propsVal.disabled ? `disabled` : "",
        this.propsVal.block ? `block` : "",
        this.propsVal.shap === "bitrounded" ? `bitrounded` : "",
        this.propsVal.shap === "square" ? `square` : "",
      ]
        .filter(Boolean)
        .join(" ");

      // Generate HTML code for the button and HiButton component
      return `
      &lt;button type="button" class="${classes}" ${hiBtnAttrs}&gt;
        Button element
      &lt;/button&gt;

      &lt;HiButton ${hiButtonAttrs}&gt;
        HiButton Component
      &lt;/HiButton&gt;
    `;
    },
  },
};
</script>
<style lang="scss" scoped>
.buttonSys {
  button {
    margin: 0.3rem;
  }
}
</style>
