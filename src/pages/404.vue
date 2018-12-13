
<template>
  <!-- <div class="container">
    <img src="https://66.media.tumblr.com/tumblr_m00htzBSG11rpb9hlo1_500.jpg"/>
    <p>Page not found</p>
  </div> -->
  <div class="container">
    <div class="jumbotron page-header">
      <h1 class="display-3">Page not found :( </h1>
      <br>
      <p class="lead">
        <router-link to="/" class="btn btn-secondary btn-lg" role="button">Home</router-link>
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NotFound",
    components: {
    }
  }
</script>

<style lang="scss" scoped>
  .jumbotron{
    text-align: center;
  }
</style>