<template>
  <div>
    <h2>Soy el login</h2>
    <form @submit.prevent="pressed">
      <div>
        <input type="email" v-model="email" placeholder="email@ejemplo.com" />
      </div>
      <div class="password">
        <input type="password" v-model="password" placeholder="contraseña" />
      </div>
      <button type="submit">Entrar</button>
    </form>
    <button @click="google">google</button>

  </div>
</template>

<script>
import { fire,provider } from "@/firebase";



export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    async pressed() {
      try {
        const data = await fire.signInWithEmailAndPassword(
          this.email,
          this.password
        );
        console.log(data);
        this.$router.replace({ name: "Secreto" });
      } catch (error) {
        alert(error);
        console.log(error.a);
      }
    },
    async google(){
        try {
           const user = await fire.signInWithPopup(provider);
           console.log(user);
           this.$router.replace({ name: "Secreto" });

        } catch (error) {
            alert(error);
        }
    }
  }
};
</script>

<style>
</style>