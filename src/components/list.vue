<template>
  <div class="page">
    <h3 class="title">List of Kanto League</h3>
    <div class="grid">
  
      <div v-for="(pokemon, index) in pokemons" :key="index">
      <router-link :to="{ name:'about', params: { id: index + 1}}" key="index" class="style">
      
        <div class="card">
          <p class="name">{{ pokemon.name }}</p>
          <img :src="getPng(index + 1)" alt="" />
        </div>
        </router-link>
      </div>
           
    </div>
 
  </div>
</template>
<script lang="js">
import axios from "axios";

export default {
data: () => {
    return {
        page: 1,
        pokemons: [],
        //id: this.$route.params.id,
    }
},
created(){
   this.getList()
},

methods: {
     async getList() {
      var api = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
       await axios.get(api)
      .then((response) => {  this.pokemons = response.data['results'] /*console.log(response.data['results'])*/ })
      .catch((error) => console.log(error.response))
    },
    
     getPng(index){
      var link = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ index + ".png";
      return link;
    },
  },
}
</script>

<style lang="css">
.card {
  border: 2px double red;
  width: 110%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
  background-color: black;
  color: white;
}

.name {
  font-family: "Times New Roman", Times, serif;
  font-size: 1vw;
  text-decoration: none;
}

.grid {
  display: grid;
  margin: auto;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  gap: 5px;
  grid-template-rows: 4fr;
  padding: 2vh;
}

body {
  overflow-x: hidden;
}


.style{
  text-decoration: none;
}



</style>

