<template>
  <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
    <div class="card-header">{{header}}</div>
    <div class="card-body" :style=" 'background-image:url('+image +')' ">
      <!-- <h4 class="card-title">Primary card title</h4>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    header: String,
    image: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card-body{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 300px;
  }

</style>
