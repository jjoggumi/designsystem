<template>
  <header>
    <h1>{{ headTitle.title }} System</h1>
    <p class="smr" v-html="headTitle.description"></p>
    <p class="info">
      {{ headTitle.version }}<span>/</span>{{ headTitle.date }} <span>/</span>
      {{ headTitle.name }}
    </p>
  </header>
</template>

<script>
export default {
  data() {
    return {
      headTitles: [
        {
          title: "",
          description: "",
          version: "",
          date: "",
          name: "",
          figmaLink: "",
          scssLink: "",
          jsLink: "",
        },
        {
          title: "Color",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
      색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Typography",
          description: `Typography is an essential part of design systems, and good typographic rules help to present content clearly and efficiently.<br>
타이포그래피는 디자인 시스템의 중요한 부분이며 좋은 타이포그래피 규칙은 콘텐츠를 명확하고 효율적으로 표현하는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Icon",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Grid",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Breakpoints",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Form",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Checks & Radios & Swiches",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Button",
          description: `Buttons are elements for actions, encompassing various states and corresponding behavior rules based on their shape, size, and color.<br>
        버튼은 동작을 위한 요소로 모양, 크기, 색상에 따라 다양한 상태와 그에 따른 행동 규칙을 포함합니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Modal",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Dropdown",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Collapse",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Tab",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Alerts",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
        {
          title: "Table",
          description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
          version: "1.0.0",
          date: "2024년 10월 30일 업데이트",
          name: "김은영",
          figmaLink: "/",
          scssLink: "/",
          jsLink: "/",
        },
      ],
    };
  },
  computed: {
    headTitle() {
      const match = this.headTitles.find(
        (item) => item.title === this.$route.name
      );
      return match || this.headTitles[0];
    },
  },
};
</script>

<style></style>
