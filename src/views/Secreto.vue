<template>
  <div>
      <p>soy el secreto</p>
      <vue-csv-import v-model="parseCsv" :map-fields="{field1: 'Nombres', field2: 'Apellidos', field3: 'RUT'}"></vue-csv-import>
      {{parseCsv
      }}
      <button @click="uLol"> zzz </button>
      
  </div>
</template>

<script>
import { VueCsvImport } from 'vue-csv-import';

export default {
    name:'Secreto',
    components:{
      VueCsvImport
    },
    data(){
      return{
        parseCsv:[]
      }
    },
    methods:{
      uLol(){
        var parseobj = JSON.parse(JSON.stringify(this.parseCsv));
        console.log(parseobj);
      }
    }
}
</script>

<style>

</style>