<template>
  <section class="lyrics">
      <div class="bottom-right w-full flex flex-col justify-center items-center">
        <div class="mt-10 lg:mt-20 xl:mt-32 tracklist lg:w-[65%] xl:w-[60%] 2xl:w-[57%]">
            <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
                Lyrics
            </p>

            <div class="track-info space-y-3">
                <div class="top">
                    <img class="rounded-xl lg:rounded-2xl" :src="currentCover"/>
                </div>

                <div class="bottom space-y-3 md:space-y-0 sm:flex justify-between items-center">
                    <ul class="font-monument font-light text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base leading-loose lg:leading-normal xl:leading-normal text-black">
                        <li
                        class=""
                        >
                            SONG: <span class="text-[#2E2B26]">{{ currentSongTitle }}</span>
                        </li>

                        <li
                        class=""
                        >
                            MIXTAPE: <span class="text-[#2E2B26]">{{ currentMixtape }}</span>
                        </li>

                        <li
                        class=""
                        >
                            ARTIST(S): <span class="text-[#2E2B26]">CODEBOY Sai</span>
                        </li>
                    </ul>

                    <a href="#current-lyrics">
                        <button class="lyrics font-inter text-[10px] xl:text-xs 2xl:text-sm py-2 pl-8 pr-3 rounded-full border border-black flex items-center">
                            Lyrics

                            <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3848 12.7854L12 18.771L5.61533 12.7854L6.38476 11.9646L11.4375 16.7016L11.4375 6H12.5625L12.5625 16.7016L17.6153 11.9646L18.3848 12.7854Z" fill="black"/>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>

            <div class="lyrics mt-10">
                <div class="font-inter text-xs lg:text-sm xl:text-base whitespace-pre-line" id="current-lyrics">
                    {{ currentLyrics }}
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// import { lyrics } from '../data/lyrics'


export default {
    props: {
        tracks: Array
    },

    computed: {
        ...mapState(["songIndex", "currentSongTitle", "currentSrc", "currentCover", "category", "currentLyrics"]),
    },

    methods: {
        ...mapMutations(["next", "prev", "changeSongIndex", "changeCurrentSongTitle", "changeCurrentSrc", "changeCategory", "changeLyrics"]),
    }
}
</script>

<style>

</style>