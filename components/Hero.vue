<template>
    <section class="hero" id="hero">
      <div class="hero-container sm:px-10 py-10 lg:py-0">
        <div
          class="first-drop text-right lg:flex flex-row-reverse justify-between items-center"
        >
          <div class="texts xl:w-1/2">
            <nuxt-link to="/meetings-and-makeups">
              <div
                class="animation-container overflow-hidden lg:mr-10 xl:mr-20 2xl:mr-10"
              >
                <div class="animation-top-container overflow-hidden">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    class="uppercase  font-monument font-bold text-[#2E2B26] text-[10px] xl:text-sm 2xl:text-base tracking-widest"
                  >
                    second drop
                  </p>
                </div>

                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="capitalize font-monument font-light text-[#2E2B26] text-[38px] sm:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-normal lg:leading-normal  lg:whitespace-normal"
                >
                  Meetings & Makeups
                </h2>
              </div>
            </nuxt-link>
          </div>

          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="first-drop-image xl:w-1/2"
          >
            <nuxt-img
              class="select-none"
              src="/images/First-Drop-Image.png"
              alt="The Meetings and Mackups Image"
              format="webp"
            />
          </div>
        </div>
      
        <div class="second-drop lg:flex justify-around xl:justify-start items-center mt-16 xl:mt-0 lg:px-10 xl:px-32 lg:space-x-20 overflow-hidden">
          <div class="texts xl:w-1/2">
            <nuxt-link to="/listening-pass">
              <div class="animation-container space-y-2 overflow-hidden">
                <div class="animation-top-container overflow-hidden ml-2">
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    class="uppercase font-monument text-[#2E2B26] font-bold text-[10px] xl:text-sm 2xl:text-base tracking-widest"
                  >
                    first drop
                  </p>
                </div>

                <h2
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  class="capitalize font-monument font-light text-[#2E2B26] text-[38px] sm:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-normal lg:leading-normal lg:whitespace-nowrap"
                >
                  Listening <br class="hidden lg:block"/>Pass (LP)
                </h2>
              </div>
            </nuxt-link>
          </div>

          <div
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            class="video lg:pt-10 xl:pt-0 md:flex justify-center overflow-hidden"
          >
            <video
              class=""
              src="https://res.cloudinary.com/eazzie/video/upload/q_100,c_crop,w_450,h_550/v1643129201/Codeboy/Listening-Pass_pn1oy4.mp4"
              alt="The Listening Pass Asset"
              autoplay
              loop
              muted
            />
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aosMixin from "~/mixins/aos";
gsap.registerPlugin(ScrollTrigger);

export default {
  mixins: [aosMixin],

  methods: {
    refresh() {
      ScrollTrigger.refresh();
      // console.log("scroll trigger refreshed");
    },
  },

  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        // console.log("All assets are loaded");
      }
    };
  },
};
</script>

<style>

</style>
