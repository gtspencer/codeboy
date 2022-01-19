<template class="bg-black">
  <div>
    <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
      <Nuxt />

      <DarkAfterFooter />
    </div>
  </div>
</template>

<script>
import AfterFooter from "../components/AfterFooter.vue";
export default {
    components: { AfterFooter }
}
</script>

<style>
body {
  background-color: white;
}
</style>