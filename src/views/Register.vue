<template>
  <div>
      <h2>Soy el registro</h2>
      <form @submit.prevent="registro">
          <div>
              <input type="email" v-model="email" placeholder="email@ejemplo.com">
          </div>
          <div>
              <input type="text" v-model="displayName" placeholder="Nombre">
          </div>
            <div class="password">
                <input type="password" v-model="password" placeholder="contraseña">
            </div>
            <button type="submit">submit</button>
      </form>
  </div>
</template>

<script>

/* import { db } from '@/firebase' */
import { fire } from '@/firebase';

export default {
    name:'Register',
    methods:{
        async registro(){
            
            if(this.email && this.password && (this.password.length>=6)){
                console.log(this.password.length);
                try {
                    const user =await fire.createUserWithEmailAndPassword(this.email,this.password);
                    console.log(user);
                    try {
                        const profile=await fire.currentUser.updateProfile({
                        displayName:this.displayName

                    });
                    console.log(profile);
                    } catch (error) {
                        alert(error)
                    }
                    
                   
                    this.$router.replace('/secreto');
                } catch (error) {
                    alert(error)
                }
            }
            else{
                alert('Faltan parametros')
            }
            
        }
    },
    data(){
        return{
            email:null,
            password:null,
            displayName:null
        };
    },
    firestore(){
      
    }
}
</script>

<style>

</style>