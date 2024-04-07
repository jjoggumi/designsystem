import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      headTitle: {
        title: "",
        description: "",
        version: "",
        date: "",
        name: "",
        figmaLink: "",
        scssLink: "",
        jsLink: ""
      }, 
    }
  },
  mutations: {
    setHeadTitle(state, data) {
      state.headTitle = data
    }
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
