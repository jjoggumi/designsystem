<template>
<div class="designSys">
  <Aside :sysMenu="sysMenu" :activeMenu="activeMenu" @menuLink="activeMenu = $event" />
  <main>
    <header>
      <h1>{{ activeMenuData.name }} System</h1>
      <p class="smr" v-html="activeMenuData.smr"></p>
      <p class="info">
        1.0.0<span>/</span> 2024년 10월 30일 업데이트 <span>/</span>
        김은영
      </p>
    </header>
    <Button v-if="activeMenu === 'Button'" />
    <Alerts v-if="activeMenu === 'Alerts'" />
    <Toast v-if="activeMenu === 'Toast'" />
    <Collapse v-if="activeMenu === 'Collapse'" />
    <Dropdown v-if="activeMenu === 'Dropdown'" />
    <Modal v-if="activeMenu === 'Modal'" />
    <Tab v-if="activeMenu === 'Tab'" />
    <Table v-if="activeMenu === 'Table'" />
    <Color v-if="activeMenu === 'Color'" />
    <Icon v-if="activeMenu === 'Icon'" />
    <Typography v-if="activeMenu === 'Typography'" />
    <Grid v-if="activeMenu === 'Grid'" />
    <Form v-if="activeMenu === 'Form'" />
    <Checks v-if="activeMenu === 'Check & Radio & Switch'" />
  </main>
  </div>
</template>

<script>
import { sysMenu } from "@/views/layout/menu.js";
import Aside from "@/views/layout/Aside";
import Button from "@/views/page/components/Button.vue";
import Alerts from "@/views/page/components/Alerts.vue";
import Toast from "@/views/page/components/Toast.vue";
import Collapse from "@/views/page/components/Collapse.vue";
import Dropdown from "@/views/page/components/Dropdown.vue";
import Modal from "@/views/page/components/Modal.vue";
import Tab from "@/views/page/components/Tab.vue";
import Table from "@/views/page/components/Table.vue";
import Color from "@/views/page/foundation/Color.vue";
import Icon from "@/views/page/foundation/Icon.vue";
import Typography from "@/views/page/foundation/Typography.vue";
import Grid from "@/views/page/foundation/Grid.vue";
import Form from "@/views/page/form/Form.vue";
import Checks from "@/views/page/form/Checks.vue";
export default {
  name: "App",
  components: {
    Aside,
    Button,
    Alerts,
    Toast,
    Collapse,
    Dropdown,
    Modal,
    Tab,
    Table,
    Color,
    Icon,
    Typography,
    Grid,
    Form,
    Checks,
  },
  data() {
    return {
      sysMenu: sysMenu,
      activeMenu: "",
    };
  },
  computed: {
    activeMenuData() {
      for (const category of this.sysMenu) {
        const found = category.children.find((item) => item.name === this.activeMenu);
        if (found) return found;
      }
      return {
        name: "Design",
        smr: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
  색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
      };
    },
  },
};
</script>
