<template>
  <div>
    <h3>List main view</h3>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      {{ pokemon.name }}
    </div>
  </div>
</template>
<script lang="js">
import axios from "axios";

export default {
data() {
    return {
        pokemons: []
    }
},
created(){
   this.getList()
},

methods: {
     async getList() {
      var api = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
       await axios.get(api)
      .then((response) => {  this.pokemons = response.data['results'], console.log(response.data['results']) })
      .catch((error) => console.log(error.response))
    },
  },
}
  
</script>

