<template>
  <div id="app">
    <Top></Top>
    <nav>
      <li>
        <router-link to="/login"> Login </router-link>
      </li>
      <li>
        <router-link to="/register"> Registro </router-link>
      </li>
      <li>
        <router-link to="/"> Home </router-link>
      </li>
      <li>
        <router-link to="/about"> About </router-link>
      </li>
      <li>
        <router-link to="/secreto"> Secreto </router-link>
      </li>
      <li>
        <router-link to="/profile">Profile</router-link>
      </li>
    </nav>

    <router-view></router-view>
  </div>
</template>
<script>
import { db } from '@/firebase';

const documentPath = 'Mensajes/0d7ZqCxH86hed7pJTLQd'
import Top from '@/components/Top.vue'
export default {
  components:{
    Top
  },
  data(){
    return{
      firebaseData:null,
      fireCollection:null,
      mensajes:null
    };
  },
  firestore(){
    return{
      firebaseData: db.doc(documentPath),
      fireCollection: db.collection('Mensajes')
    };
  },
};
</script>
<style>

</style>
