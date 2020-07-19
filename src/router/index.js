import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Secreto from '../views/Secreto.vue'
import store from '@/store'
import Profile from '../views/Profile.vue'
import Error404 from '../views/Error.vue'
import {fire} from '@/firebase.js'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{Auth:true}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/login',
    name:'Login',
    component: Login,
    meta:{guest:true}

  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{guest:true}

  },
  {
    path: '/secreto',
    name: 'Secreto',
    component: Secreto,
    meta:{Auth:true}
  },
  {
    path:'/profile',
    name:'Profile',
    component:Profile,
    meta:{Auth:true}
  },
  {
    path:'/*',
    name:'404',
    component:Error404,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to,from,next)=>{
  const auth = to.matched.some(record => record.meta.Auth);
  const guest = to.matched.some(record => record.meta.guest);
  const join = store.state.user;
  console.log(join);
  console.log(fire.currentUser);
  if(auth){
    if(!join){
      console.log('KE?');
      console.log(store.state.user);
      next("/login");
    }else{
      console.log(join);
      next();
    }
  }
  else if(guest){
    console.log('soy guest');
    if(join){
      console.log(join);
      next("/secreto");
    }
    else{
      console.log(join);
      next();
    }
  }else{
    next();
  }
})




export default router
