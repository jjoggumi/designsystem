import Vue from 'vue'
import Router from 'vue-router'

// Vue Router 플러그인 사용
Vue.use(Router)

// 라우터 정의
const router = new Router({
  mode: 'history', // history 모드 사용 (선택 사항)
  routes: [
    {
      path: '/',
      name : 'Design System',
      component :  () => import('../views/DesignSystem.vue'),
    },
    {
      path: '/foundation',
      name : 'Foundation',
      component :  () => import('../views/page/foundation/Foundation.vue'),
      children:[          
        {
          path: 'color',
          name : 'Color',
          component :() => import('../views/page/foundation/Color.vue'),
        },{
          path: 'typography',
          name : 'Typography',
          component : () => import('../views/page/foundation/Typography.vue'),
        },{
          path: 'icon',
          name : 'Icon',
          component : () => import('../views/page/foundation/Icon.vue'),
        }
      ]
    },{
      path: '/form',
      name : 'Forms',
      component : () => import('../views/page/form/Forms.vue'),
      children:[        
        {
          path: 'checks',
          name : 'Check & Radio & Switch',
          component : () => import('../views/page/form/Checks.vue'),
        },{
          path: 'selectbox',
          name : 'Selectbox',
          component : () => import('../views/page/form/Selectbox.vue'),
        }
      ]
    },{
      path: '/components',
      name: 'Components',
      component: () => import('../views/page/components/Components.vue'),
      children: [
        {
          path: 'button', 
          name: 'Button',
          component: () => import('../views/page/components/Button.vue'),
        },{
          path: 'modal', 
          name: 'Modal',
          component:  () => import('../views/page/components/Modal.vue'),
        },{
        //   path: 'collapse', 
        //   name: 'Collapse',
        //   component:() => import('../views/page/components/Collapse.vue'),
        // },{
          path: 'tab', 
          name: 'Tab',
          component:() => import('../views/page/components/Tab.vue'),
        },{
          path: 'alerts', 
          name: 'Alerts',
          component: () => import('../views/page/components/Alerts.vue'),
        },{
          path: 'table', 
          name: 'Table',
          component: () => import('../views/page/components/Table.vue'),
        }
      ]
    },    
    {
      path: '/pub',
      name : 'Pub',
      component :  () => import('../views/Pub.vue'),
    }
  ],
})

export default router