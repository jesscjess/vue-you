<template>
  <div class="card text-white bg-secondary mb-3" >
    <router-link :to="'/project/'+projectId" class="card-link_overlay">
    </router-link>
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
    image: String,
    projectId: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .card{
    overflow: hidden;
    max-width: 20rem;
    position: relative;
    display: block;

    &:hover{
      .card-body{
        transform:scale(1.25);
      }
    }
  }

  .card-link_overlay{
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
  }

  .card-header{
    z-index: 1;
    position: absolute;
  }
  
  .card-body{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    min-height: 300px;
    transition: all 1s ease;
    z-index: 0;
  }

</style>
