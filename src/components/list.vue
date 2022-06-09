<template>
  <div>
    <h3 class="title">List of Kanto League</h3>
    <div class="grid">
      <paginate  ref="paginator" name="pokemons" :list="pokemons" :per="2">
    <div  v-for="(pokemon, index) in paginated('pokemons')" :key="index">
  
        <div class="card">
          <p class="name">{{ pokemon.name }}</p>
          <img :src="getPng(index + 1)" alt="" />
       </div>
      </div>
      </paginate>
    </div>
  </div>
</template>
<script lang="js">
import axios from "axios";

export default {
data: () => {
    return {
        paginate:['pokemons'],
        pokemons: [],
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
      return link;
    },
  },
}
</script>

<style>
.card {
  border: 2px double red;
  width: 110%;
  height: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 7px;
}

.name {
  font-family: "Times New Roman", Times, serif;

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
</style>

