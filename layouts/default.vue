<template>
  <div>
    <!-- <PreLoader v-if="show"/> -->

    <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
      <Navigation />

      <Nuxt />

      <Footer />
    </div>

    <AfterFooter />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {

  // data() {
  //   return {
  //     show: this.assetsLoaded,
  //   };
  // },

  // computed: {
  //   ...mapState(["assetsLoaded"]),
  // },

  // methods: {
  //   ...mapMutations(["changeLoaderState"]),

  //   showToggle() {
  //     setTimeout(() => {
  //       this.changeLoaderState()
  //     }, 3000);
  //   },
  // },

  // mounted() {
  //   this.showToggle();
  // },
};
</script>

<style>
* {
  outline: none;
}
</style>
