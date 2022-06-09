<template>
  <div>
    <h3 class="title">List of Kanto League</h3>
    <div v-for="(pokemon, index) in pokemons" :key="index">
      <p>{{ pokemon.name }}</p>
      <p>{{ index + 1}}</p>
       <div> {{ getPng(index + 1) }} </div>
      <img src="link" alt="">
    </div>
  </div>
</template>
<script lang="js">
import axios from "axios";

export default {
data: () => {
    return {
        pokemons: {},
        link: '',
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
     getPng(index){
      var link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ index + ".png";
      console.log(index);
      this.link = link;
      //return link;
    },
  },
}
  
</script>

