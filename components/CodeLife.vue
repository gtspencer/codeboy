<template>
  <div>
    <section class="meetings mt-10 lg:mt-20 xl:mt-32">
      <div class="top-container flex justify-center items-center space-x-3">
        <img
          class="w-[130px] sm:w-[170px] lg:w-[200px] xl:w-[300px] rounded-lg"
          src="https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840756/Codeboy/CODE_LIFE_ALBUM_COVER_ART_cjbn9d.webp"
          alt="Code Life Cover Image"
        />
        <img
          class="w-[130px] sm:w-[170px] lg:w-[200px] xl:w-[300px] rounded-lg"
          src="https://res.cloudinary.com/eazzie/image/upload/q_100/v1644840753/Codeboy/CODE_LIFE_ALBUM_TRACKLIST_ART_iahuho.webp"
          alt="Code Life Cover Image"
        />
      </div>

      <div class="mt-10 lg:mt-20 xl:mt-32 tracklist">
        <p
          class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl"
        >
          CODE LIFE
        </p>

        <div
          v-for="codeLife in codeLife"
          :key="codeLife.id"
          class="track-container currentTile relative py-3 flex justify-between after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#E5E5E5] cursor-pointer"
          ref="currentTile"
        >
          <div
            class="left-container flex justify-between items-center w-[57%] md:w-[49%]"
          >
            <div class=".left-container flex items-center space-x-2">
              <div
                class="cover w-14 h-14 rounded-lg bg-center bg-contain"
                :style="{ backgroundImage: `url( ${codeLife.cover} )` }"
              >
                <!-- <p>
                            {{ track.cover }}
                        </p> -->
              </div>

              <p
                class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base"
              >
                {{ codeLife.name }}
              </p>
            </div>

            <div class="right-container">
              <button
                class="play w-7 h-7 rounded-full bg-[#6837FA] flex justify-center items-center"
                ref="play"
                @click="playSong(codeLife.id, codeLife.name)"
              >
                <font-awesome-icon class="play-icon text-white text-[10px] xl:text-xs" :icon="['fas', 'play']"/>
                <font-awesome-icon class="pause-icon text-white hide text-[10px] xl:text-xs" :icon="['fas', 'pause']"/>
              </button>
            </div>
          </div>

          <div
            class="right-container flex justify-between items-center w-[40%] md:w-[49%]"
          >
            <p
              class="text-xs font-medium duration font-inter lg:text-sm xl:text-base 2xl:text-lg"
            >
              {{ codeLife.duration }}
            </p>

            <button
              class="lyrics text-[10px] xl:text-xs 2xl:text-sm py-2 px-3 rounded-full border border-black hover:bg-[#6837fa] hover:text-white transition duration-500"
              @click="handleLyrics"
            >
              Lyrics
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    lyrics: String,
    codeLife: Array,
    playSong: Function,
  },

  methods: {
    handleLyrics() {
      this.$emit("goto", 6);
    },
  },
};
</script>

<style></style>
