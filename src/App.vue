<template>
  <div id="app">
    <nav>
      <div id="navbar">
        <router-link :to="{ name: 'home' }" class="style">Home</router-link>
        <router-link :to="{ name: 'search' }" class="style">Search</router-link>
        <router-link :to="{ name: 'list' }" class="style">Show All</router-link>
      </div>
    </nav>
    <h3
      class="
        title
        animate__animated animate__lightSpeedInRight animate__delay-1s
      "
    >
      Pokemon App
    </h3>
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>
<script lang="js">

export default {

  data: () => {
    return {
      
    }
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: black;
  margin-top: 15px;
  width: 100%;
  height: 100%;
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
  font-size: 3.6vh;
  border: 2px double #3761a8;
  border-radius: 6px;
  width: 48%;
}

.page {
  position: relative;
}

.title {
  margin-top: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: calc(3.2vw);
  color: #feca1b;
  -webkit-text-stroke: 0.2rem #3761a8;
}

.text {
  text-align: justify;
  font-size: 2vh;
  line-height: 24px;
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
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

.style {
  text-decoration: none;
  font-size: 1.2vw;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
