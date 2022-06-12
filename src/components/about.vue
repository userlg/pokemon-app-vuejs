<template>
  <div class="container">
    <h3 class="title">About Pokemon # {{ id }}</h3>
    <div class="poke-card">
      <div class="poke-text">
        <h2 class="poke-title">Pokemon Name</h2>
        <p class="style">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
          magni iste deserunt, veritatis accusantium earum exercitationem
          explicabo hic officia voluptas, doloremque sed sapiente. Corrupti
          eaque exercitationem consequuntur illo nulla ut.
        </p>
      </div>
      <div class="bg-pokemon">
        <img :src="link" alt="" />
      </div>
    </div>
  </div>
</template>
<script lang="js">
import { useHandlerStore } from "../stores/useHandler";

export default {
    setup(){
    const handler = useHandlerStore();

    return {handler}
  },
  data: () => {
    return {
      id: 0,
      link: '',
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.link = this.handler.getLink(this.id);
    //this.link = handler.link;

  },
};
</script>
<style>
.container {
  width: 100%;
  height: 100%;
}

.bg-pokemon {
  width: 20%;
  height: 20%;
  background-color: white;
  border-radius: 50%;
}

.poke-text {
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 30%;
}


.poke-card {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
}


img {
  width: 40%;
  height: 50%;
}

p {
  text-align: justify;
}


.style {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  display: block;
  margin: auto;
}

.poke-title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 3vw;
}

</style>
