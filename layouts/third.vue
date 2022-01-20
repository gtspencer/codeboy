<template class="">
  <div>
    <section class="bg-black">
      <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
        <Nuxt />

        <DarkAfterFooter />
      </div>
    </section>
  </div>
</template>

<script>
import AfterFooter from "../components/AfterFooter.vue";

/* var store = {
    debug: true,
    state: {
        backgroundColor: 'black',
    }, 
    setState (newState) {
        this.state.backgroundColor = newState
    }
}

console.log(store.state.backgroundColor); */

export default {
    components: { AfterFooter }
}
</script>

<style>
</style>