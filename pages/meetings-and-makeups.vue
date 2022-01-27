<template>
  <div>
    <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
      <SecondHero />

      <Mixtape />
    </div>

    <CbTraits />

    <CbAccessories />
    <Package />

    <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-20">
      <Benefits />

      <PlanAgenda />

      <Letter />

      <Faqs />
    </div>  
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline();
    // setInterval(refresh(), 3000);


export default {
  layout: "second",

  methods: {
    refresh() {
      // var tl = gsap.timeline({repeat: -1})
      setInterval(ScrollTrigger.refresh(), 3000)
      console.log('refreshed');
    }
  },

  mounted() {
    gsap.delayedCall(3, this.refresh())
    
    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        ScrollTrigger.refresh();
        console.log('All assets are loaded');
      }
    }
  },
};
</script>

<style></style>
