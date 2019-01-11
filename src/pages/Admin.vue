
<template>
  <div class="container">
    <h1 class="page-header">Admin Page</h1>
    <div class="row">
      <div class="col-12">
        <div class="top-bar">
          <h3 class="page-header">Projects</h3>
          <router-link to="/admin/new-project"><button type="button" class="btn btn-primary">Primary</button></router-link>
        </div>
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">url</th>
              <th scope="col">Cotent</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="project in projects" :key="project.id">
              <th scope="row">{{project._id}}</th>
              <td>{{project.title}}</td>
              <td>{{project.url}}</td>
              <td>{{project.content}}</td>
            </tr>
          </tbody>
        </table>
        <h5 v-if="!projects.length">{{projectStatus}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "Admin",
    components: {
    },
    data: () => {
      return {
        projects: [],
        projectStatus: "No Projects"
      }
    },
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        axios.get('http://localhost:3000/projects/')
          .then((resp) => {
            this.projects = resp.data
            console.log(resp)
          })
          .catch(() => {
            this.projectStatus = "Cannot grab projects right now try again later"
            // console.log(err)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  h5{
    text-align: center;
    width: 100%;
  }

  .top-bar{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .btn-primary{
    float: right;
    height: 40px;
  }
</style>