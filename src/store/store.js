import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      headTitle: [
        {title: "", description: "", version: "", date: "", name: "", figmaLink: "", scssLink: "", jsLink: "" },

        {title: "Color",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Shadow",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Breakpoints",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Grid",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Images",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Table",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Form",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Checks & Radios & Swiches",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Button",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Modal",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Dropdown",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Collapse",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Tab",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},

        {title: "Alerts",
        description: `Colors help to represent hierarchy, establish brand identity, and convey meaning and status of elements.<br>
        색상은 계층 구조를 표현하고, 브랜드 정체성을 확립하고, 요소의 의미,  상태를 나타내는 데 도움이 됩니다.`,
        version: "1.0.0", date: "2023년 02월 21일 업로드", name: "김은영", figmaLink: "/", scssLink: "/", jsLink: "/"},


      



      ]
    }
  },
  mutations: {
    setHeadTitle(state, data) {
      state.headTitle = data
    },
  },
  actions: {
    updateHeadTitle({ commit }, data) {
      commit('setHeadTitle', data)
    }
  },
  getters: {
    getHeadTitle(state) {
      return state.headTitle
    }
  }
})

export default store
