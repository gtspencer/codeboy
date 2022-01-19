<template>
  <div class="">
      <RecordNavigationOne />

      <section class="drop flex flex-col justify-center items-center mt-5">
        <div class="image">
          <img src="/images/Big-record-label.png" alt="">
        </div>

        <p class="latest uppercase text-white  font-inter text-[10px] xl:text-xs 2xl:text-s mt-10" id="drops">
          latest drop:
        </p>

        <div class="meetings-drop relative flex justify-center items-center my-40">
          <h2 class="font-cormorant text-white text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px] text-center z-50">
            Meetings and makeups NFT
          </h2>

          <img class="absolute" src="/images/Meetings-and-Makeups.png" alt="">
        </div>
      </section>
  </div>
</template>

<script>
export default {
    layout: 'third'
}
</script>

<style>
  /* body {
    background-color: black;
  } */
</style>