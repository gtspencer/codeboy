<template>
  <div>
      <section class="singles-container">
        <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
            Singles
        </p>

        <div class="grid grid-cols-2 gap-x-5 gap-y-7">
            <div v-for="track in data" :key="track.id" class="singles currentTile cursor-pointer justify-self-center">
                <div class="top-container">
                    <img class="rounded-xl"  alt="">
                </div>

                <div class="bottom-container">
                    <p class="font-monument-regular text-xs text-center">
                        {{ track.altName }}
                    </p>
                </div>
            </div>
        </div>
      </section>
      
  </div>
</template>

<script>
export default {
    props: {
        data: Array,
    }
}
</script>

<style>

</style>