<template>
  <section class="mt-24 letter sm:mt-28 md:mt-32">
    <div class="text-center letter-container">
      <h2
        class="letter-heading capitalize font-cormorant text-3xl sm:text-4xl lg:text-[40px] xl:text-5xl"
        ref="placeHolder"
      >
        Letter from Codeboy Sai
      </h2>

      <div
        class="mt-6 space-y-3 text-details md:space-y-5 sm:px-10 md:px-20 lg:px-56 xl:px-72"
      >
        <p class="text-sm font-light letter-details text-inter xl:text-base">
          Meetings and Makeups is a mixtape about balancing work with toxic fun
          relationships. I wanted to take different sounds and feelings and put
          it all into one project. When I finished recording this mixtape, I
          asked myself how I could market it. I was inspired by the Nipsey
          Hussle $1,000 mixtape and wanted to create that same type of impact. I
          always took note of artists speaking out against their record deals
          which made me want to be independent from Major Labels but I started
          to think about the idea of dependence. I don’t want to be indedent, I
          want to be dependent on my fans. Artists can now depend on their
          community to manage and propel their careers. This is my experiment
          with CODE LIFE Records.
        </p>

        <p class="text-sm font-light letter-details text-inter xl:text-base">
          Im signing myself to a life-360 deal to CODE LIFE Records. I’m putting
          my musi career in the hands of people I have never met. Now my true
          fans can make money when I make money. The only way a major label will
          make revenue from me is if they own a CB SAI Look. I will split all of
          my earnings 80/20 with CODE LIFE Records. From inperson/metaverse
          performances to streaming rev, NFT royalties and more.
        </p>

        <p class="text-sm font-light letter-details text-inter xl:text-base">
          Thank you to everyone who helped work and will work on this project.
          Can’t wait to meet you all at the CODE LIFE Records HQ
        </p>
      </div>

      <h2
        class="letter-footer font-inter mt-5 md:mt-8 text-3xl md:px-36 lg:px-[260px] xl:px-[22rem]"
      >
        “I can be indepedent while being dependent on my fans”
      </h2>
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
        start: "center center",
        onEnter: ScrollTrigger.refresh(),
        markers: false,
      },
    });
  },
};
</script>

<style></style>
