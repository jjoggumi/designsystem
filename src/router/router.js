import { createWebHistory, createRouter } from "vue-router";
import DesignSystem from '@/views/DesignSystem'
import GeneralPage from '@/views/page/general/General';
import ColorPage from '@/views/page/general/Color';
import ShadowPage from '@/views/page/general/Shadow';

import LayoutPage from '@/views/page/layout/LayoutPage';
import Breakpoints from '@/views/page/layout/Breakpoints';
import Grid from '@/views/page/layout/Grid';

import ContentPage from '@/views/page/content/ContentPage';
import Table from '@/views/page/content/Table';
import Images from '@/views/page/content/Images';

import FormPage from '@/views/page/form/FormPage';
import Form from '@/views/page/form/Form';
import Checks from '@/views/page/form/Checks';

import ComponentsPage from '@/views/ComponentsPage';
import Accordion from '@/components/Accordion';
import Alerts from '@/components/Alerts';

const routes = [
  {
    path: '/',
    name : 'Design System',
    component : DesignSystem,
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
    component: LayoutPage,
    children: [
      {
        path: 'breakpoints', 
        name: 'Breakpoints',
        component: Breakpoints,
      },{
        path: 'grid', 
        name: 'Grid',
        component: Grid,
      }
    ]
  },{
    path: '/content',
    name: 'Content',
    component: ContentPage,
    children: [
      {
        path: 'Images', 
        name: 'Images',
        component: Images,
      },{
        path: 'table', 
        name: 'Table',
        component: Table,
      }
    ]
  },{
    path: '/form',
    name: 'Form',
    component: FormPage,
    children: [
      {
        path: 'form', 
        name: 'Form',
        component: Form,
      },{
        path: 'checks', 
        name: 'Checks & Radios & Swiches',
        component: Checks,
      }
    ]
  },{
    path: '/components',
    name: 'Components',
    component: ComponentsPage,
    children: [
      {
        path: 'accordion', 
        name: 'Accordion',
        component: Accordion,
      },{
        path: 'alerts', 
        name: 'Alerts',
        component: Alerts,
      }
    ]
  }
];
  
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 