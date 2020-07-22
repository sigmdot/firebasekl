<template>
  <div>
      <div id="container" v-if="selected">
          <audio v-if="selected" :src="selected.url" id="audio" controls crossorigin="anonymous"></audio>
      </div>
      <ul>
          <li v-for="(mu,i) in tracks" :key="i" @click="seleccionar(i)"> {{mu.nombre}}  </li>
      </ul>
  </div>
</template>

<script>
import AudioMotionAnalyzer from "audiomotion-analyzer";
import { anonimo } from "@/firebase.js";

export default {
  data(){
      return{
          selected:null,
          tracks:[],
          url:"../music/1.mp3"
      }
  },
  methods:{
      seleccionar(i){
          this.selected = this.tracks[i];
          console.log(this.selected.src);
          
      }
  },
  updated() {
    if(this.selected){
      const audioMotion = new AudioMotionAnalyzer(
      document.getElementById("container"),
      {
        source: document.getElementById("audio"),
        height: 400,
        width:400,
        gradient:'classic',
        showLeds:true,
        smoothing:0.9,
        mode:6

      }
    );
    console.log(audioMotion.source);
    }
    
  },
  firestore(){
    return{
      tracks:anonimo
    }
  }
};
</script>

<style>
</style>