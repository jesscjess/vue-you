
<template>
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