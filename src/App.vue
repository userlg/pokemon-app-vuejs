<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

</script>

<template>
 <div class="bg-white border border-2 border-dark rounded d-flex justify-content-center align-items-center col-6 mx-auto p-4 flex-column gap-3">
   <h3 class="my-auto  text-success">Vuejs Pokemo App</h3>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita atque ea veritatis consequatur nobis, deserunt quis, maiores temporibus iusto aperiam dolores beatae? Necessitatibus inventore aperiam officia vitae enim quaerat?</p>
   <router-link to="/">Home</router-link>
   <router-link to="/list">All Pokemons</router-link>
   <router-view></router-view>
 
 </div>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
