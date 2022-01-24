<template>
  <section class="hero">
    <div
      class="grid-cols-2 py-10 hero-container sm:grid lg:grid-cols-3 xl:px-10 2xl:px-20 lg:py-16 xl:py-20"
    >
      <div class="self-center hero-header md:pr-14 lg:pr-5">
        <h1
          class="font-cormorant text-5xl md:text-6xl xl:text-7xl 2xl:text-[80px] font-light pr-10 sm:pr-0"
        >
          CODEBOY Sai Meetings & Makeups Looks
        </h1>
      </div>

      <div class="video-parent flex justify-center items-center">
        <div
          class="flex w-[335px] xl:w-[385px] h-[335px] xl:h-[385px] justify-center mt-10 hero-image lg:mt-0"
        >
          <video
            class=""
            src="https://res.cloudinary.com/eazzie/video/upload/q_80/v1642703512/Codeboy/CODEBOY_SAI_Meetings_Makeups_Looks_f0uo8l.mp4"
            alt="Meetings and Makups Hero Video"
            loop
            autoplay
            ref="video"
          />
        </div>
      </div>

      <div
        class="self-center col-span-2 mt-16 mint-collectibles sm:mt-20 lg:mt-0 lg:col-auto xl:ml-10"
      >
        <div class="mint-collectibles-container">
          <ul
            class="font-inter text-sm xl:text-base leading-loose text-[#6B6761] text-center lg:text-left space-y-1 pb-5"
          >
            <li class="leading-loose">
              Total Collectibles: <span class="text-black">7302</span>
            </li>
            <li class="leading-loose">
              Chain: <span class="text-black">Ethereum (ERC-721)</span>
            </li>
            <li class="leading-loose">
              Presale Date: <span class="text-black">25 Nov, 11am UTC</span>
            </li>
            <li class="leading-loose">
              Presale Mint Price: <span class="text-black">0.0302 ETH</span>
            </li>
            <li class="pt-5 leading-loose">
              Public Sale Date: <span class="text-black">Nov 26, 11am UTC</span>
            </li>
            <li class="leading-loose">
              Mint Price: <span class="text-black">0.05 ETH</span>
            </li>
            <li class="leading-loose">
              Max mint per wallet: <span class="text-black">3</span>
            </li>
          </ul>

          <div class="flex justify-center mt-5 button lg:block">
            <button
              class="uppercase relative font-sf text-white text-xs px-28 xl:px-32 py-1.5 xl:py-2 bg-black before:absolute before:left-0 before:-top-5 before:h-px before:w-full before:bg-[#E5E5E5]"
            >
              mint
            </button>
          </div>
        </div>
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
    gsap.to(this.$refs.video, {
      scrollTrigger: {
        // start: 'center center',
        onComplete: ScrollTrigger.refresh(),
        markers: false,
      },
    });
  },
};
</script>

<style></style>
