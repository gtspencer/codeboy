<template>
  <!-- <transition name="fade"> -->
    <div>
      <Hero />
    </div>
  <!-- </transition> -->
</template>

<script>
// import PreLoader from "../components/PreLoader.vue";
export default {
    name: "IndexPage",

    data() {
      return {
        show: false
      }
    },
    
    mounted() {
      this.showToggle()
    },

    methods: {
      showToggle() {
        setTimeout(() => {
          this.show = true
        }, 2000)
      }
    }
}
</script>

<style>
body {
  background-color: white;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  opacity:  0;
}

.font-monument {
  font-family: 'Monument Extended';
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>