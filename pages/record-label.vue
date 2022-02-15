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

        <p class="latest uppercase text-white font-monument-regular text-[10px] xl:text-xs 2xl:text-s mt-10" id="drops">
          latest drops:
        </p>

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
                        class="uppercase  font-monument font-bold text-white text-[10px] xl:text-sm 2xl:text-base tracking-widest"
                      >
                        second drop
                      </p>
                    </div>

                    <h2
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="capitalize font-monument font-light text-white text-[42px] sm:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-normal lg:leading-normal md:whitespace-nowrap lg:whitespace-normal"
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
          
            <div class="second-drop lg:flex justify-around xl:justify-start items-center mt-16 xl:mt-0 lg:px-24 xl:px-32 lg:space-x-20 overflow-hidden">
              <div class="texts xl:w-1/2">
                <nuxt-link to="/listening-pass">
                  <div class="animation-container space-y-2 overflow-hidden">
                    <div class="animation-top-container overflow-hidden ml-2">
                      <p
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        class="uppercase font-monument text-white font-bold text-[10px] xl:text-sm 2xl:text-base tracking-widest"
                      >
                        first drop
                      </p>
                    </div>

                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      class="capitalize font-monument font-light text-white text-[42px] sm:text-[2.75rem] xl:text-[3.5rem] 2xl:text-[4rem] leading-normal lg:leading-normal lg:whitespace-nowrap"
                    >
                      Listening <br class="hidden lg:block"/>Pass (LP)
                    </h1>
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
                  src="https://res.cloudinary.com/eazzie/video/upload/c_crop,w_1100,q_100/v1642648085/Codeboy/LISTENINGPASS-LANYARD_upwzog.webm"
                  alt="The Listening Pass Asset"
                  autoplay
                  loop
                  muted
                />
              </div>
            </div>
          </div>
        </section>
        <!-- <div class="listening-pass relative md:flex justify-center items-center mt-28">
          <h2 class="l-p font-monument-light text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left z-50">
            Listening <br class="hidden md:block"> Pass
          </h2>

          <div class="video md:w-1/2">
            <video
              class="transform"
              src="https://res.cloudinary.com/eazzie/video/upload/c_scale,h_644,q_100,w_638/v1642648085/Codeboy/LISTENINGPASS-LANYARD_upwzog.webm"
              alt="The Listening Pass Asset"
              autoplay
              loop
              muted
            />
          </div>
        </div>

        <div class="listening-pass relative md:flex justify-center items-center md:space-x-20">
            <h2 class="m-m font-monument-light text-white text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center md:text-left z-50">
              Meetings <br class="hidden md:block"> & <br class="hidden md:block"> Makeups
            </h2>

            <img class="md:w-[40%]" src="../static/images/First-Drop-Image.png" alt="Meetings & Makeups">
        </div> -->
      </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import aosMixin from "~/mixins/aos";
gsap.registerPlugin( ScrollTrigger, TextPlugin);
const tl = gsap.timeline();

export default {
    layout: 'third',
    mixins: [aosMixin],

    methods: {
      increase() {
        const image = document.querySelector('.image')

        image.classList.add('increase')
        // console.log('increased');
      }
    },
    mounted() {
      // document.onreadystatechange = () => {
      //   if(document.readyState == "complete") {
      //     setInterval(this.increase(), 1000)
      //     console.log('All assets in the record label are loaded');
      //   }
      // }
      this.increase()

      // gsap.to('.m-m', {
      //   scrollTrigger: {
      //     trigger: '.m-m',
      //     start: 'center 80%',
      //     // markers: true
      //   },
      //   duration: 2,
      //   text: 'Meetings and makeups NFT'
      // })

      // gsap.to('.absolute-image', {
      //   scrollTrigger: {
      //     trigger: '.m-m',
      //     start: 'center 80%',
      //   },
      //   duration: 2,
      //   opacity: 1,
      //   delay: 2
      // })
    }
}
</script>

<style>f
.image {
  clip-path: inset(50% 0 50% 0);
}

.increase {
  transition: 1.5s ease-in-out;
  clip-path: inset(0 0 0 0);
}

/* .font-monument {
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
} */
</style>