<template>
  <div class="container">
    <div class="row">
      <div class="col-12 page-header">
        <h1>My Projects</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4" v-for="project in projects" :key="project.key">
        
        <ProjectCard :header="project.header" :image="project.image" />

      </div>
    </div>
  </div>
</template>

<script>
import ProjectCard  from '../components/ProjectCard.vue'

  export default {
    name: 'projects',
    components: {
      ProjectCard
    },
    data: function(){
      return {
        projects: [
          {
            key: 'proj1',
            header: 'Project 1',
            image: 'https://i.pinimg.com/564x/82/9d/41/829d41004616974e0075c3d073ff030c.jpg'
          },
          {
            key: 'proj2',
            header: 'Project 2',
            image: 'https://i.pinimg.com/564x/6c/55/27/6c552790b4cecb5dc99a13a6e255f4bb.jpg'
          },
          {
            key: 'proj3',
            header: 'Project 3',
            image: 'https://i.pinimg.com/564x/15/31/5a/15315aed5971f5ccd7cf6f3da39fcf77.jpg'
          },
          {
            key: 'proj4',
            header: 'Project 4',
            image: 'https://i.pinimg.com/564x/e7/85/11/e7851137e26a00247318c1d20fb4be19.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>