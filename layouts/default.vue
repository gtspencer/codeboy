<template>
  <div>
    <!-- <PreLoader /> -->
    <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
      <Navigation />

      <Nuxt />

      <Footer />
    </div>

    <AfterFooter />
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  outline: none;
}
</style>
