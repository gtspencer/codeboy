<template>
    <section class="cb-traits mt-20 sm:mt-24 md:mt-28">
        <div class="cb-traits-container overflow-hidden">
            <div class="header-text text-center">
                <h2 class="font-cormorant text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px]">
                    CB Sai Look Traits
                </h2>
            </div>

            <div class="outfits-container flex space-x-10 mt-10 md:mt-14">
                <div class="outfit-text min-w-[40%] lg:min-w-[30%] xl:min-w-[25%] 2xl:min-w-[15%] md:min-w-2 ml-5 sm:ml-10 lg:ml-20 xl:ml-24">
                    <h2 class="font-cormorant text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px]">
                        Outfits
                    </h2>

                    <p class="uppercase font-inter text-[10px] xl:text-xs 2xl:text-sm mt-3 sm:pr-20 lg:pr-32">
                        5 Outfits influenced by different songs off the Meetings & Makeups Mixtape
                    </p>
                </div>

                <div class="grid-divs flex flex-nowrap space-x-10 items-baseline">
                    <div v-for="outfit in outfits" :key="outfit.id" class="grid-container min-w-[50%] max-w-[50%]">
                        <div class="video">
                            <video
                            class="2xl:max-w-[80%]" 
                            :src="outfit.vid" 
                            :alt="outfit.alt"
                            autoplay
                            loop
                            />
                        </div>

                        <div class="texts font-inter mt-3">
                            <h6 class="header-text font-bold text-sm md:text-base xl:text-lg">
                                Outfit: {{ outfit.name }}
                            </h6>

                            <p class="details text-[10px] md:text-xs xl:text-sm font-inter mt-2">
                                {{ outfit.description }}
                            </p>
                        </div>
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
    data() {
        return {
            outfits: [
                {
                    vid: '/videos/CHARACTER Title -Kid Chocolate.mp4',
                    alt: 'An image of the Salesianum Outfit',
                    name: 'Salesianum',
                    description: 'Short text describing a feature of your product/service.'
                },
                
                {
                    vid: '/videos/CHARACTER Title -Kid Chocolate.mp4',
                    alt: 'An image of the Butch Lewis Outfit',
                    name: 'Butch Lewis',
                    description: 'Short text describing a feature of your product/service.'
                },

                {
                    vid: '/videos/CHARACTER Title -Kid Chocolate.mp4',
                    alt: 'An image of the Carlton Outfit',
                    name: 'Carlton',
                    description: 'Short text describing a feature of your product/service.'
                },

                {
                    vid: '/videos/CHARACTER Title -Kid Chocolate.mp4',
                    alt: 'An image of the Carlton Outfit',
                    name: 'Carlton',
                    description: 'Short text describing a feature of your product/service.'
                },

                {
                    vid: '/videos/CHARACTER Title -Kid Chocolate.mp4',
                    alt: 'An image of the Carlton Outfit',
                    name: 'Carlton',
                    description: 'Short text describing a feature of your product/service.'
                }
            ]
        }
    },
    mounted() {
        ScrollTrigger.matchMedia({
    // "(min-width: 1560px)": function () {

    "(min-width: 320px) and (max-width: 639px)": function () {
        gsap.to('.outfits-container', {
            scrollTrigger: {
                trigger: '.outfits-container',
                start: 'center center',
                end: '+=3000 center',
                pin: true,
                markers: false,
                scrub: 1,
            },
            // duration: 10,
            x: -1450
        });
    },

    "(min-width: 640px) and (max-width: 1023px)": function () {
        gsap.to('.outfits-container', {
            scrollTrigger: {
                trigger: '.outfits-container',
                start: 'center center',
                end: '+=3000 center',
                pin: true,
                markers: false,
                scrub: 1,
            },
            // duration: 10,
            x: -1380
        });
    },

    "(min-width: 1024px) and (max-width: 1250px)": function () {
        gsap.to('.outfits-container', {
            scrollTrigger: {
                trigger: '.outfits-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=3000 center',
                pin: true,
                markers: false,
                scrub: 1,
                // horizontal: true
            },
            // duration: 10,
            x: -1300
        });
    },

    "(min-width: 1251px) and (max-width: 1535px)": function () {
        gsap.to('.outfits-container', {
            scrollTrigger: {
                trigger: '.outfits-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=4000 center',
                pin: true,
                markers: false,
                scrub: 1,
                // horizontal: true
            },
            // duration: 10,
            x: -1700
        });
    },

    "(min-width: 1536px) and (max-width: 2000px)": function () {
        gsap.to('.outfits-container', {
            scrollTrigger: {
                trigger: '.outfits-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=4500 center',
                pin: true,
                markers: false,
                scrub: 1,
                // horizontal: true
            },
            // duration: 10,
            x: -2400
        });
    },

    "(min-width: 2001px) and (max-width: 2560px)": function () {
        gsap.to('.outfits-container', {
            scrollTrigger: {
                trigger: '.outfits-container',
                // endTrigger: ''
                start: 'center center',
                end: '+=4500 center',
                pin: true,
                markers: false,
                scrub: 1,
                // horizontal: true
            },
            // duration: 10,
            x: -3000
        });
    },
})
    }
}
</script>

<style>

</style>