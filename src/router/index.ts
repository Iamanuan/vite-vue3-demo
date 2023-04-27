import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Workbench from '../views/Workbench.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/workbench",
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/workbench',
    name: 'Workbench',
    component: Workbench
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    if (to.path === "/login") {
      next();
    } else {
      next();
    }
  } else {
    if (to.path !== "/login") {
      if(to.path === "/register"){
        next();
      }else{
        next("/login");
      }
    } else {
      next();
    }
  }
});

export default router
