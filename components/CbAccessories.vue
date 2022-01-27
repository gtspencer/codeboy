<template>
    <div class="">
        <section class="cb-accessories my-32 md:my-38 lg:my-48 xl:my-52 xl:px-10 2xl:px-20 overflow-hidden">
            <div class="cb-accessories-container min-w-[40%] lg:min-w-[30%] xl:min-w-[25%] 2xl:min-w-[15%] flex justify-between space-x-10 ml-5 sm:ml-10 lg:ml-20 xl:ml-24">
                <div class="texts text-left">
                    <h2 class="font-cormorant text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px] leading-9 md:leading-10">
                        CB Sai LOOK Accessories
                    </h2>

                    <p class="font-inter uppercase text-[10px] xl:text-xs 2xl:text-sm mt-3">
                        12 items influenced by each song off the Meetings & Makeups Mixtape
                    </p>
                </div>

                <div class="assets min-w-[180vw] flex space-x-1 md:space-x-1.5 xl:px-10">
                    <div class="container-1 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643200239/Codeboy/Never_Change_Up_Item_-_Mirror_ekjdkb.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />

                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643202510/Codeboy/Meetings_NMakeups_Item_-_Work_Desk_Laptop_Trim_wdukpb.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>

                    <div class="container-2 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643203212/Codeboy/Caress_Me_Item_-_Restaurant_Bill_Trim_dociqj.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />

                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643200249/Codeboy/Nun_To_Prove_Item_-_Championship_Belt_lieunz.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>

                    <div class="container-3 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643200243/Codeboy/Meetings_N_Makeups_Item_-_Work_Desk_Laptop_pgivmj.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />

                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643203613/Codeboy/Kid_Chocolate_Item_-_Boxing_Gloves_Trim_jvgks9.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>

                    <div class="container-4 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643200254/Codeboy/Days_Amazing_Item_-_Sunglasses_with_Pill_Bottle_imgewo.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />

                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/c_scale,q_100,w_266/v1642772726/Codeboy/Song_Name_-_Capable_Item_-_Dumbell_skztqi.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>

                    <div class="container-5 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/c_scale,q_100,w_266/v1642772735/Codeboy/Song_Name_-_Feelings_Can_t_Fade_Away_Item_-_Old_School_Radio_xq9tmj.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />

                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/c_scale,h_474,q_100,w_266/v1642772742/Codeboy/Song_Name_-_Made_For_This_-_Item_1_Award_Medal_jpg8ge.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>

                    <div class="container-6 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/c_scale,h_474,q_100,w_266/v1642772732/Codeboy/Song_Name_-_Hopeless_Romantic_Item_-_Dead_Roses_Bouquet_lunnd6.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />

                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/c_scale,q_100,w_266/v1642772751/Codeboy/Song_Name_-_Trolley_Item_-_Four_Loko_n9ykzj.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>

                    <div class="container-7 w-auto lg:w-[200px] xl:w-[200px] space-y-1 md:space-y-2">
                        <video 
                            src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643200261/Codeboy/SHOTGUN_RING_-_ITEM_-_VINTAGE_TELEPHONE_pvxeub.webm" 
                            alt=""
                            autoplay
                            loop
                            muted
                        />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default {
    mounted() {
        ScrollTrigger.matchMedia({
            "(min-width: 320px) and (max-width: 639px)": function () {
                gsap.to('.cb-accessories-container', {
                    scrollTrigger: {
                        trigger: '.cb-accessories-container',
                        start: 'center center',
                        end: '+=3000 center',
                        pin: true,
                        markers: false,
                        scrub: 1,
                    },
                    x: -550
                });
            },

            "(min-width: 640px) and (max-width: 1023px)": function () {
                gsap.to('.cb-accessories-container', {
                    scrollTrigger: {
                        trigger: '.cb-accessories-container',
                        start: 'center center',
                        end: '+=3000 center',
                        pin: true,
                        markers: false,
                        scrub: 1,
                    },
                    // duration: 10,
                    x: -900
                });
            },

            "(min-width: 1024px) and (max-width: 1250px)": function () {
                gsap.to('.cb-accessories-container', {
                    scrollTrigger: {
                        trigger: '.cb-accessories-container',
                        // endTrigger: ''
                        start: 'center center',
                        end: '+=3000 center',
                        pin: true,
                        markers: false,
                        scrub: 1,
                        // horizontal: true
                    },
                    // duration: 10,
                    x: -750
                });
            },

            "(min-width: 1251px) and (max-width: 1535px)": function () {
                gsap.to('.cb-accessories-container', {
                    scrollTrigger: {
                        trigger: '.cb-accessories-container',
                        // endTrigger: ''
                        start: 'center center',
                        end: '+=4000 center',
                        pin: true,
                        markers: false,
                        scrub: 1,
                        // horizontal: true
                    },
                    // duration: 10,
                    x: -700
                });
            },

            "(min-width: 1536px) and (max-width: 2000px)": function () {
                gsap.to('.cb-accessories-container', {
                    scrollTrigger: {
                        trigger: '.cb-accessories-container',
                        // endTrigger: ''
                        start: 'center center',
                        end: '+=4500 center',
                        pin: true,
                        markers: false,
                        scrub: 1,
                        // horizontal: true
                    },
                    // duration: 10,
                    x: -400,
                    ease: 'none'
                });
            },
        })
    }
}
</script>

<style>

</style>