<template>
  <div>
    <div
        v-for="circle  in circles" 
        :key="circle.id"
        :ref="circle.id"
        :class="['circle', {'big' : circleStyle[circle].isBig}]"
        :style="circleStyle[circle].circleStyles"
        ></div>
    <div class="container" @mousemove="onMouseMove($event)">
      <button type="button" class="btn btn-primary btn-lg" @click="cleanSlay">Clean Slay</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Home',
    data: function(){
      return {
        colors: ['#5FC8AF', '#FF8A96', '#f1c40f', '#F8F9FA'],
        circles: [],
        circleStyle: {},
        circleCount: 0
      }
    },
    methods: {
      onMouseMove(event) {
        // var circle = document.createElement("div");
        // circle.setAttribute("class", "circle");
        // this.circles.push()
        // document.body.appendChild(circle); // adds function to body

        // this.circles['circle'+ this.circleCount] = circleStyles


        this.circleCount ++
         // adds motion
         // randomize color
        let newCircle = {
          circleStyles :{
            left: event.clientX + "px",
            top: event.clientY + "px",
            borderColor: this.colors[Math.floor(Math.random() * this.colors.length)]
          },
          id: 'circle'+ this.circleCount,
          class: 'circle',
          isBig: false
        }

        // this.circles['circle'+ this.circleCount] = newCircle
        console.log(newCircle.isBig)

        this.circleStyle['circle'+ this.circleCount] = newCircle
        
        this.circles.push('circle'+ this.circleCount)


        // setTimeout(this.makeLarger('circle'+ this.circleCount), 500000)

        // let timeout = 10000000

        // while(timeout !== 0 ){
        //   timeout --
        //   if(timeout == 1){
        //     this.makeLarger('circle'+ this.circleCount)
        //   }
        // }

        // adds animation
        // circle.style.transition = "all 0.5s linear 0s";

        // circle.style.left = circle.offsetLeft - 20 + 'px';
        // circle.style.top = circle.offsetTop - 20 + 'px';

        // circle.style.width = "50px";
        // circle.style.height = "50px";
        // circle.style.borderWidth = "5px";
        // circle.style.opacity = 0;
      },
      makeLarger(id){
          this.circleStyle[id].isBig = true
          console.log(this.circleStyle[id].isBig)
      },
      cleanSlay(){
        this.circles =[]
        this.circleCount = 0
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    height: calc(100vh - 56px);
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .circle {
    width: 20px;
    height: 20px;
    border: 1px solid #000;
    position: absolute;
    border-radius: 15px;
    transition: all 2.5s linear 0s;

    &.big{
      width: 50px;
      height: 50px;
      border-width: 5px;
      // opacity: 0;
    }
  }




</style>