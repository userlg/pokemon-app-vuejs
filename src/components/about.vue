<template>
  <div>
    <h3>About Pokemon # {{ id }}</h3>
    <p>
      This is pokemon app. Here you can consult one specific pokemon or all kind
      of pokemon, depends of you
    </p>
  {{ link }}
  </div>
</template>
<script lang="js">
export default {
  data: () => {
    return {
      id: 0,
      link: '',
    };
  },
  created() {
    this.id = this.$route.params.id;
    //this.link = handler.link;

  },
};
</script>
