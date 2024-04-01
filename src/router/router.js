import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/views/HomePage.vue';
import GeneralPage from '@/views/general/General';
import ColorPage from '@/views/general/Color';
import ShadowPage from '@/views/general/Shadow';
import LayoutPage from '@/views/layout/LayoutPage';
import ContentPage from '@/views/content/ContentPage';
import FormPage from '@/views/form/FormPage';
import ComponentsPage from '@/views/ComponentsPage';

const routes = [
  {
    path: '/',
    component : HomePage,
  },{
    path: '/general',
    name: 'General',
    component: GeneralPage,
    children: [
      {
        path: 'color', 
        name: 'Color',
        component: ColorPage,
      },{
        path: 'shadow', 
        name: 'Shadow',
        component: ShadowPage,
      }
    ]
  },{
    path: '/layout',
    name: 'Layout',
    component: LayoutPage
  },{
    path: '/content',
    name: 'Content',
    component: ContentPage
  },{
    path: '/form',
    name: 'Form',
    component: FormPage
  },{
    path: '/components',
    name: 'Components',
    component: ComponentsPage
  }
];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 