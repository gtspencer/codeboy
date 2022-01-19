<template>
    <section class="hero" id="hero">
            <div class="hero-container sm:px-10 py-10 lg:py-0">
                <div class="second-drop lg:flex justify-around xl:justify-start items-center md:px-16 lg:px-24 xl:px-32 lg:space-x-20">
                    <div class="texts xl:w-1/2">
                        <nuxt-link to="/listening-pass">
                            <h5 class="uppercase font-sf text-[10px] xl:text-sm 2xl:text-base tracking-widest">
                                second drop
                            </h5>

                            <h1 class="capitalize font-caudex text-6xl sm:text-[4rem] lg:text-7xl xl:text-[6rem] 2xl:text-9xl leading-tight lg:leading-none">
                                Listening <br class="hidden lg:block">Pass
                            </h1>
                        </nuxt-link>
                    </div>
                    
                    <div class="image">
                        <img src="/images/Second-Drop-Image.png" alt="The Listening Pass Image">
                    </div>
                </div>

                <div class="first-drop text-right mt-16 xl:mt-0 lg:flex flex-row-reverse justify-between items-center">
                    <div class="texts xl:w-1/2">
                        <nuxt-link to="/meetings-and-makeups">
                        <div class="lg:mr-10 xl:mr-20 2xl:mr-10">
                            <h5 class="uppercase font-sf text-[10px] xl:text-sm 2xl:text-base tracking-widest">
                                first drop
                            </h5>

                            <h1 class="capitalize font-caudex text-6xl sm:text-[4rem] lg:text-7xl xl:text-[6rem] 2xl:text-9xl leading-tight lg:leading-none">
                                Meetings & Makeups
                            </h1>
                        </div>
                        </nuxt-link>
                    </div>
                    
                    <div class="image xl:w-1/2">
                        <img src="/images/First-Drop-Image.png" alt="The Meetings and Mackups Image">
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>