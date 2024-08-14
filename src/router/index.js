import { createRouter, createWebHistory } from 'vue-router';
import ComponentExample from '../components/ComponentExample.vue';
import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'helloworld',
    component: HelloWorld
  },
  {
    path: '/component',
    name: 'componentName',
    component: ComponentExample
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;