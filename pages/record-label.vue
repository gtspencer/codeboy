<template>
  <div class="bg-black min-h-screen">
      <RecordNavigationOne />

      <section class="drop flex flex-col justify-center items-center mt-5">
        <div class="image">
          <nuxt-img 
            src="/images/Big-record-label.png" 
            alt="Record Label Image" 
            format="webp"
          />
        </div>

        <p class="latest uppercase text-white  font-inter text-[10px] xl:text-xs 2xl:text-s mt-10" id="drops">
          latest drop:
        </p>

        <div class="meetings-drop relative flex justify-center items-center my-40">
          <h2 class="font-cormorant text-white text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px] text-center z-50">
            Meetings and makeups NFT
          </h2>

          <img class="absolute" src="/images/Meetings-and-Makeups.png" alt="">
        </div>
      </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin( ScrollTrigger, TextPlugin);
const tl = gsap.timeline();

export default {
    layout: 'third',

    methods: {
      increase() {
        const image = document.querySelector('.image')

        image.classList.add('increase')
        console.log('increased');
      }
    },
    mounted() {
      document.onreadystatechange = () => {
        if(document.readyState == "complete") {
          setInterval(this.increase(), 1000)
          console.log('All assets are loaded');
        }
      }
    }
}
</script>

<style>
.image {
  clip-path: inset(50% 0 50% 0);
}

.increase {
  transition: 1.5s ease-in-out;
  clip-path: inset(0 0 0 0);
}
</style>