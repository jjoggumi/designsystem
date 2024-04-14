import { createWebHistory, createRouter } from "vue-router";

import DesignSystem from '@/views/DesignSystem';
import GeneralPage from '@/views/page/general/General';
import Color from '@/views/page/general/Color';
import Shadow from '@/views/page/general/Shadow';

import LayoutPage from '@/views/page/layout/Layout';
import Breakpoints from '@/views/page/layout/Breakpoints';
import Grid from '@/views/page/layout/Grid';

import ContentPage from '@/views/page/content/Content';
import Table from '@/views/page/content/Table';
import Images from '@/views/page/content/Images';

import FormPage from '@/views/page/form/Forms';
import Form from '@/views/page/form/Form';
import Checks from '@/views/page/form/Checks';

import ComponentsPage from '@/views/page/components/Components';
import Button from '@/views/page/components/Button';
import Modal from '@/views/page/components/Modal';
import Dropdown from '@/views/page/components/Dropdown';
import Collapse from '@/views/page/components/Collapse';
import Tab from '@/views/page/components/Tab';
import Alerts from '@/views/page/components/Alerts';


const routes = [
  {
    path: '/',
    name : 'Design System',
    component : DesignSystem,
  },
  {
    path: '/general',
    name : 'General',
    component : GeneralPage,
    children:[          
      {
        path: 'color',
        name : 'Color',
        component : Color,
      },{
        path: 'shadow',
        name : 'Shadow',
        component : Shadow,
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
        path: 'images', 
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
    name : 'Form',
    component : FormPage,
    children:[          
      {
        path: 'form',
        name : 'Form',
        component : Form,
      },{
        path: 'checks',
        name : 'Checks & Radios & Swiches',
        component : Checks,
      }
    ]
  },{
    path: '/components',
    name: 'Components',
    component: ComponentsPage,
    children: [
      {
        path: 'button', 
        name: 'Button',
        component: Button,
      },{
        path: 'modal', 
        name: 'Modal',
        component: Modal,
      },{
        path: 'dropdown', 
        name: 'Dropdown',
        component: Dropdown,
      },{
        path: 'collapse', 
        name: 'Collapse',
        component: Collapse,
      },{
        path: 'tab', 
        name: 'Tab',
        component: Tab,
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