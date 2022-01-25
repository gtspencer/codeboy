<template>
  <div>
      <div class="flex justify-center items-center">
          <video 
          class="w-[15%]"
          src="https://res.cloudinary.com/eazzie/video/upload/q_51/v1642772726/Codeboy/Song_Name_-_Kid_Chocolate_Item_-_Boxing_Gloves_ia9pxw.mp4"

          >
          </video>
      </div>

      <h1>
        {{ counter }}
      </h1>

      <button @click="increement">
        increase
      </button>

      <div class="flex">
      <video class="video border" src="https://res.cloudinary.com/eazzie/video/upload/q_100,c_crop,w_450,h_500/v1643129201/Codeboy/Listening-Pass_pn1oy4.webm" autoplay></video>
      <video class="video border" src="/videos/listening-pass.mp4" autoplay></video>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState(["counter"])
  },
  methods: {
    ...mapMutations(["increement"])
  },

  mounted() {
    const video = document.querySelector('.video')

    video.play()
  }
}
</script>

<style>

</style>