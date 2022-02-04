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

        <div class="listening-pass relative md:flex justify-center items-center mt-28">
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

<style>
.image {
  clip-path: inset(50% 0 50% 0);
}

.increase {
  transition: 1.5s ease-in-out;
  clip-path: inset(0 0 0 0);
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