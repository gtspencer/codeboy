<template>
  <div>
      <div v-for="track in tracks" :key="track.id" class="track-container relative py-3 flex justify-between after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#E5E5E5]"  @click="pick">
          <div class="left-container flex justify-between items-center w-[57%] md:w-[49%]">
              <div class=".left-container flex items-center space-x-2">
                <div class="cover w-14 h-14 bg-[#E5E5E5] rounded-lg">
                    <img class="w-full" :src="track.img" alt="">
                </div>

                <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                    Days <br class="md:hidden"> Amazing
                </p>
              </div>

              <div class="right-container">
                  <button class="mt-1.5" ref="button" >
                    <svg class="w-7" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="18" fill="#6837FA"/>
                        <path d="M11.8525 16.6088V19.7827C11.8525 23.3261 11.8525 25.0979 13.0083 25.7913C14.164 26.4847 15.7272 25.651 18.8538 23.9835L21.8294 22.3965C25.295 20.5482 27.0278 19.624 27.0278 18.1957C27.0278 16.7675 25.295 15.8433 21.8294 13.995L18.8538 12.408C15.7272 10.7405 14.164 9.90675 13.0083 10.6002C11.8525 11.2936 11.8525 13.0653 11.8525 16.6088Z" fill="white"/>
                    </svg>
                  </button>
              </div>

              
          </div>

          <div class="right-container flex justify-between items-center w-[40%] md:w-[49%]">
              <p class="duration font-inter font-medium text-xs lg:text-sm xl:text-base 2xl:text-lg">
                {{ track.duration }}
              </p>

              <button class="lyrics text-[10px] xl:text-xs 2xl:text-sm py-2 px-3 rounded-full border border-black">
                  Lyrics
              </button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            tracks: [
                {
                    img: '/images/pattern.png',
                    duration: '10:20'
                },

                {
                    img: '/images/tracklist.png',
                    duration: '10:20'
                },

                {
                    img: '/images/tracklist.png',
                    duration: '10:20'
                },

                {
                    img: '/images/tracklist.png',
                    duration: '10:20'
                },

                {
                    img: '/images/tracklist.png',
                    duration: '10:20'
                },
            ]
        }
    },

    methods: {
        pick() {
            
        }
    }
}
</script>

<style>
    .scale {
        transform: rotate(75deg);
    }
</style>