<template>
  <section class="mt-20 mixtape sm:mt-24 md:mt-28 lg:px-20 xl:px-40">
    <div class="justify-between mixtape-container md:flex md:space-x-5">
      <div
        class="flex justify-between mixtape-left-container md:flex-col sm:space-x-5 md:space-x-0"
      >
        <div class="w-2/4 mixtape-texts md:w-full">
          <h3
            class="font-cormorant text-4xl sm:text-[2.5rem] md:text-5xl xl:text-6xl 2xl:text-[65px] leading-9 sm:leading-tight"
            ref="placeHolder"
          >
            Mixtape Cover & Tracklist
          </h3>

          <p
            class="details uppercase font-inter text-[10px] xl:text-xs 2xl:text-sm mt-3 md:mt-5 pr-4 xl:pr-16"
          >
            A few words about what is depicted on the images or photos. Be
            concise and creative
          </p>
        </div>

        <div class="w-2/4 md:w-full">
          <nuxt-img 
          src="/images/Mixtape small.png" 
          alt="" 
          format="webp"
          />
        </div>
      </div>

      <div class="mt-5 mixtape-right-container md:mt-0">
        <nuxt-img src="/images/Tracklist 1.png" alt="" format="webp" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default {
  mounted() {
    gsap.to(this.$refs.placeHolder, {
      scrollTrigger: {
        trigger: this.$refs.placeHolder,
        start: "bottom 80%",
        onEnter: ScrollTrigger.refresh(),
        markers: false,
      },
    });

    ScrollTrigger.refresh();
  },
};
</script>

<style></style>
