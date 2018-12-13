<template>
  <div class="card text-white bg-secondary mb-3" style="max-width: 20rem;">
    <div class="card-header bg-secondary">{{header}}</div>
    <div class="card-body" :style=" 'background-image:url('+image +')' ">
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
  .card{
    overflow: hidden;
  }

  .card-header{
    z-index: 1;
  }
  
  .card-body{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 300px;
    transition: all 1s ease;

    &:hover{
      transform:scale(1.25);
    }
  }

</style>
