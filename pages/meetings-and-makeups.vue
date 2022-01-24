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
const tl = gsap.timeline();

export default {
  layout: "second",

  mounted() {
    ScrollTrigger.refresh();
  },
};
</script>

<style></style>
