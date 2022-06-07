<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <div 
    id="app"
  >
    <h3 class="title">Pokemon App</h3>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita
      atque ea veritatis consequatur nobis, deserunt quis, maiores temporibus
      iusto aperiam dolores beatae? Necessitatibus inventore aperiam officia
      vitae enim quaerat?
    </p>
    <nav>
      <div id="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/list">Show All</router-link>
    <!-- <router-link to="/picker/1">Pick</router-link>-->
     <router-link to="/about">About</router-link>
     </div>
     </nav>
  </div>
 
 <router-view></router-view>
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


nav {
  width: 60%;
  display: block;
  margin: auto;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


#navbar {
  display: flex;
  gap: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 5vh; 
}

h3 {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 6vh;
  color: aquamarine;

}


</style>
