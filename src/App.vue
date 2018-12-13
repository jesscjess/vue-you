<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav          from './components/Nav.vue'


export default {
  name: 'app',
  components: {
    Nav
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

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
// @import '../node_modules/bootstrap/scss/bootsrap.scss';
@import './assets/scss/variables.scss';
@import './assets/scss/minty.scss';

.page-header{
  margin-top: 50px;
}

.uppercase {
    text-transform: uppercase;
}

</style>
