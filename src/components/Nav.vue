<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link to="/">
          <a class="navbar-brand" href="#">mujerdev</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/projects" class="nav-link">
                Projects 
                <!-- <span class="sr-only">(current)</span> -->
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/reviews" class="nav-link">
                Reviews
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/resume" class="nav-link">
                Resume
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">
                Contact Me
              </router-link>
            </li>
          </ul>
        </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
