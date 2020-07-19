<template>
  <div>
      Logged in
      <span v-if="loggedIn">
          yes, {{emailUser}}
      </span>
      <span v-else>
          no
      </span>
      <div>
          <button @click="signOut" v-if="loggedIn"> Sign out </button>
      </div>
      <img v-if="imageUser" v-bind:src="imageUser" alt="">
  </div>
</template>

<script>
import { fire } from '@/firebase';

export default {
    name:'Top',
    created(){
        fire.onAuthStateChanged(user => {
            if(user){
                this.loggedIn = true;
                this.emailUser = user.email;
                this.imageUser = user.photoURL;
                /* console.log(user); */
            }
            else{
                this.loggedIn = false;
            }
        })
    },
    data(){
        return{
            loggedIn:false,
            emailUser:null,
            imageUser:null
        }
    },
    methods:{
        async signOut(){

            try {
                const data = await fire.signOut();
                this.imageUser = null;
                console.log(data);
                this.$router.replace({name:"Login"}).catch(function(error){
                    console.log(error);
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>

</style>