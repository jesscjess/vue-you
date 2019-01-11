
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Create new project</h1>
            <form >
              <fieldset>
                <div class="form-group">
                  <label for="title">Title</label>
                  <input type="text" v-model="title" class="form-control" id="title" placeholder="Enter title">
                </div>
                <div class="form-group">
                  <label for="url">URL</label>
                  <input type="text" v-model="url" class="form-control" id="url" placeholder="Enter URL">
                </div>
                <div class="form-group">
                  <label for="content">Content</label>
                  <textarea class="form-control" v-model="content" id="content" rows="3"></textarea>
                </div>
                <button type="submit" :click="submitNewProject($data)" class="btn btn-primary">Submit</button>
              </fieldset>
            </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: "NewProject",
    components: {
    },
    data: () => {
      return {
        title: "",
        url: "",
        content : ""
      }
    },
    methods: {
      submitNewProject(data) {
        // TODO: add form validation
        axios.post('http://localhost:3000/projects/', data)
        .then((resp) => {
          // this.projects = resp.data
          // console.log(resp)
        })
        .catch(() => {
          // this.projectStatus = "Cannot grab projects right now try again later"
          // console.log(err)
        })

      }
    }
  }
</script>

<style lang="scss" scoped>
  .jumbotron{
    text-align: center;
  }
</style>