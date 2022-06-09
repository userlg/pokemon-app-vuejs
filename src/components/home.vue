<template>
  <div>
  <div class="home">
    <h3>Home main View</h3>
    <button @click="getRandom(0,152)" class="btn">Reset</button>
    <div>{{ random }}</div>
  </div>
  </div>
</template>
<script lang="js">


export default {
  data() {
    return {
      random: 0, }
  },
  mounted() {
    this.getRandom(0,152);
  
  },
  methods: {
    getRandom(min, max) {
    this.random = Math.floor(Math.random() * (max - min + 1)) + min;
}
  },
  
}
</script>
<style>
.home {
  opacity: 1;
  
}

.btn {
  opacity: 1;
  width: 200px;
  height: 40px;
  font-size: 1.1vw;
  border-radius: 10px;
  margin: 3px;

  background: red;
}


</style>