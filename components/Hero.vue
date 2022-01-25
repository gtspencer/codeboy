<template>
    <section class="hero" id="hero">
        <div class="hero-container sm:px-10 py-10 lg:py-0">
            <div class="second-drop lg:flex justify-around xl:justify-start items-center lg:px-24 xl:px-32 lg:space-x-20 overflow-hidden">
                <div class="texts xl:w-1/2">
                    <nuxt-link to="/listening-pass">
                        <div class="animation-container overflow-hidden">
                            <div class="animation-top-container overflow-hidden">
                                <p data-aos="fade-up" data-aos-duration="1000" class="uppercase font-sf text-[10px] xl:text-sm 2xl:text-base tracking-widest">
                                    second drop
                                </p>
                            </div>

                            <h1 data-aos="fade-up" data-aos-duration="1000" class="capitalize font-caudex text-6xl sm:text-[4rem] lg:text-7xl xl:text-[6rem] 2xl:text-9xl leading-tight lg:leading-none">
                                Listening <br class="hidden lg:block">Pass
                            </h1>
                        </div>
                    </nuxt-link>
                </div>
                
                <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" class="video lg:pt-10 xl:pt-0 md:flex justify-center overflow-hidden">
                    <video
                        class=""
                        src="https://res.cloudinary.com/eazzie/video/upload/q_100,c_crop,w_450,h_550/v1643129201/Codeboy/Listening-Pass_pn1oy4.webm"
                        alt="The Listening Pass Asset"
                        autoplay 
                        loop
                    />
                </div>
            </div>

            <div class="first-drop text-right mt-16 xl:mt-0 lg:flex flex-row-reverse justify-between items-center">
                <div class="texts xl:w-1/2">
                    <nuxt-link to="/meetings-and-makeups">
                        <div class="animation-container overflow-hidden lg:mr-10 xl:mr-20 2xl:mr-10">
                            <div class="animation-top-container overflow-hidden">
                                <p data-aos="fade-up" data-aos-duration="1000" class="uppercase font-sf text-[10px] xl:text-sm 2xl:text-base tracking-widest">
                                    first drop
                                </p>
                            </div>

                            <h2 data-aos="fade-up" data-aos-duration="1000" class="capitalize font-caudex text-6xl sm:text-[4rem] lg:text-7xl xl:text-[6rem] 2xl:text-9xl leading-tight lg:leading-none">
                                Meetings & Makeups
                            </h2>
                        </div>
                    </nuxt-link>
                </div>
                
                <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="200" class="image xl:w-1/2">
                    <nuxt-img src="/images/First-Drop-Image.png" alt="The Meetings and Mackups Image" format="webp"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
    mixins: [aosMixin],

    mounted() {
    document.onreadystatechange = () => {
      if(document.readyState == "complete") {
        console.log('All assets are loaded');
      }
    }
  },
}
</script>

<style>
</style>