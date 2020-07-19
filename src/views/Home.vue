<template>
  <div class="home">
    <form @submit.prevent="rolita">
      <input type="text" placeholder="Artista" v-model="dataCancion.artista">
      
      <input type="text" placeholder="Album" v-model="dataCancion.album">
      <input type="text" placeholder="Nombre canción" v-model="dataCancion.nombre">
      <input type="file" accept="audio/*" @change="musicaSubida" />
      <button type="submit" :disabled="!data">Subir canción</button>
    </form>
    Mientras se sube podria hacer progress el mismo componente li
    <div v-if="rolas">
    <span v-if="rolas.length > 0" >
      <p v-for="(rolo,i) in rolas" :key="i" @click="cambiarRola(i)">
        {{rolo}} <br>
      </p>
    </span>
    </div>
    <br>
    <audio :src="selected.url" controls controlsList="nodownload" v-if="selected"></audio>
    
    <progress :value="progresso"></progress>
    {{progresso}}
    {{dataCancion}}
  </div>
</template>

<script>
// @ is an alias to /src
import { storage,anonimo } from "@/firebase.js";

export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      progresso:0,
      data: null,
      rolonas: [],
      player: new Audio(),
      text:null,
      selected:null,
      dataCancion:{
        nombre:null,
        artista:null,
        album:null,
        url:null
      },
      rolas:null
    };
  },
  methods: {
    musicaSubida(event) {
      this.data = event.target.files[0];
      console.log(this.data);
      if (this.data.type != "audio/mpeg" && this.data.type != "m4a") {
        alert("Solo recibimos canciones");
        this.data = null;
      }
    },
    rolita(event) {
      var storageRef = storage.ref("anonimo/" + this.data.name);
      let uploadTask = storageRef.put(this.data);
      var id = null;
      try {
        const datos = anonimo.add({
         nombre: this.dataCancion.nombre,
         artista: this.dataCancion.artista,
         album: this.dataCancion.album,
         url: null
      }).then((docRef)=>{
        console.log('key lol ', docRef.id);
        id = docRef.id;

      });
      console.log(datos);
      } catch (error) {
        alert(error);
      }
      uploadTask.on(
        "state_changed",
       (snapshot)=> {
          var load = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.progresso = load;
          console.log(this.progresso);
        },
        function(error) {
          alert(error);
        },
        function() {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL)=> {
            console.log("File disponible", downloadURL);
            anonimo.doc(id).update({
              url:downloadURL
            });
            event.target.reset();
            
          });
        }
      );
      this.dataCancion.nombre = null;
      this.dataCancion.url = null;
      this.dataCancion.artista = null;
      this.dataCancion.album = null;
    },
    async getFiles() {
      this.$store.getters.rolas;
    },
    cambiarRola(numero){
      console.log(numero);
      this.selected =this.rolas[numero];

      console.log(this.player.controls);
    }
  }
  ,
  firestore(){
    return{
      rolas: anonimo
    }
  }
  ,
  created() {
    this.getFiles();
  }
};
</script>
