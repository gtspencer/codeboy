<template>
  <transition name="fade">
    <div v-if="show">
      <Hero />
    </div>
  </transition>
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
        // setTimeout(() => {
          this.show = true
        // }, 1000)
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

/*width*/
::-webkit-scrollbar {
  width:7px;
}

/*track*/
::-webkit-scrollbar-track {
  background:rgba(255, 255, 255, 0.1);
  border-width:1px;
  border-style:none;
  border-radius:10px;
}

/*thumb*/
::-webkit-scrollbar-thumb {
  background:rgb(85, 85, 85);
  border-color:rgb(153, 153, 153);
  border-radius:10px;
}
</style>