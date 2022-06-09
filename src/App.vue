<template>
  <div class="main">
        <div id="app">
  
       <nav>
      <div id="navbar">
        <router-link to="/" class="style">Home</router-link>
         <router-link to="/search" class="style">Search</router-link>
        <router-link to="/list" class="style">Show All</router-link>
        <!-- <router-link to="/picker/1">Pick</router-link>-->
      <!-- <router-link to="/about">About</router-link>_-->
      </div>
    </nav>
    <h3 class="title animate__animated animate__lightSpeedInRight animate__delay-1s">Pokemon App</h3>
    <div class="article">
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est expedita
      atque ea veritatis consequatur nobis, deserunt quis, maiores temporibus
      iusto aperiam dolores beatae? Necessitatibus inventore aperiam officia
      vitae enim quaerat? lore
    </p>
    </div>
  </div>
  </div>
  <router-view></router-view>
</template>
<script setup>

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 15px;
  opacity: 1;
}
.main {
  opacity: 1;
}

nav {
  width: 60%;
  display: block;
  margin: auto;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
}

#navbar {
  display: flex;
  gap: 10px;
  margin: auto;
  justify-content: center;
  align-items: center;
  font-size: 3.4vh;
}

.title {
  margin-top: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: calc(3.2vw + 2vh);
  color: #FECA1B;
  -webkit-text-stroke: .2rem #3761A8;
}

.text {
  text-align: justify;
  font-size: 2vh;
  line-height: 24px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

.article {
  width: 60%;
  margin: auto;
}


.poke-img {
  width: 15%;
  height: 15%;
  display: block;
  margin: auto;
  background-color: aquamarine;
  border-radius: 50%;
}

.style{
  text-decoration: none;
}

</style>
