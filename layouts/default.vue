<template>
  <div>
    <PreLoader v-if="show"/>

    <main v-if="!show">
      <Nuxt />
    </main>

    <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
      <Footer />
    </div>

    <AfterFooter />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {

  data() {
    return {
      show: true,
      // isVisible: false,
    };
  },

  // computed: {
  //   ...mapState(["assetsLoaded"]),
  // },

  methods: {
    // ...mapMutations(["changeLoaderState"]),

    showToggle() {
      setTimeout(() => {
        this.show = false
        // this.isVisible = true
      }, 3000);
    },
  },

  mounted() {
    // document.onreadystatechange = () => {
      // if(document.readyState == "complete") {
        // ScrollTrigger.refresh();
        this.showToggle();
        // console.log('All assets are loaded');
      // }
    // }
  },
};
</script>

<style>
* {
  outline: none;
}
</style>
