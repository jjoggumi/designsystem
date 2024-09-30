import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
import store from '@/store/store'
import vClickOutside from 'v-click-outside';

//import Toasted from 'vue-toasted';
// hiClass APIs
import "@/plugins/hiClass.js";
import "@/assets/css/reset.css"             // reset
// import "@/assets/css/slick.css"             // slick plugin
// import "@/assets/css/jquery-ui.css"         // jQuery ui
import "@/assets/css/scss/common.scss"      // common scss
import "@/assets/css/common.css"            // common css
import "@/assets/css/hiclass.css"           // old css
import "@/assets/css/layout.css"            // renewal layout css
import "@/assets/css/main.css"              // 메인 화면 css
import "@/assets/css/sub.css"               // 서브페이지 css
import "@/assets/css/login.css"             // 로그인 및 가입 화면 css
import "@/assets/css/class.css"             // 클래스 화면 css
import "@/assets/css/event.css"             // 이벤트 템플릿 화면
// import "@/assets/css/index.css"             // 인덱스 화면
import "@/assets/css/board.css"             // 게시글 css
import "@/assets/css/survey.css"            // 설문,통계 css
import "@/assets/css/attendance.css"        // 출결 알리기 css
import "@/assets/css/fix.css"               // 임시저장 css
import "@/assets/css/print.css"             // 학교 양식 신청서 pdf, 프린트 css
import "@/assets/css/image-editor.css"      // 이미지 편집기

import '@/assets/css/scss/layout.scss'

// Vue 인스턴스 생성 및 mount
Vue.config.productionTip = false
Vue.use(vClickOutside);

// Vue.use(Toasted, {
//   position: 'bottom-center',
//   duration: 3000
// })

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
