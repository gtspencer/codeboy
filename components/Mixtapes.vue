<template>
  <div>
    <section class="mixtapes-container my-10 lg:mt-20 xl:mt-32 xl:w-[90%]">
        <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
            All Mixtapes
        </p>

        <div class="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-7 lg:gap-y-10">
            <div class="m-m cursor-pointer justify-self-center" @click="gotoMeetings">
                <div class="top-container">
                    <img class="rounded-xl" src="/images/mixtape small.png" alt="">
                </div>

                <div class="bottom-container mt-3">
                    <p class="font-monument-regular text-xs lg:text-sm xl:text-sm 2xl:text-base text-center">
                        Meetings & Makeups
                    </p>
                </div>
            </div>

            <div class="c-l cursor-pointer justify-self-center" @click="gotoCodeLife">
                <div class="top-container">
                    <img class="rounded-xl" src="https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp" alt="">
                </div>

                <div class="bottom-container mt-3">
                    <p class="font-monument-regular text-xs lg:text-sm xl:text-sm 2xl:text-base text-center">
                        CODE LIFE
                    </p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'


export default {
    props: [ 'meetings', 'code' ],

    methods: {
        ...mapMutations(["next", "prev", "changeSongIndex", "changeCurrentSongTitle", "changeCurrentSrc", "changeCategory", "changeLyrics"]),
        
        gotoMeetings() {
            this.$emit('goto', 4)

            this.changeCategory('meetings')
        },

        gotoCodeLife() {
            this.$emit('goto', 5)

            this.changeCategory('codeLife')
        }
    }
}
</script>

<style>

</style>