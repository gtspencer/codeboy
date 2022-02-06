<template>
  <div>
      <section class="singles-container mt-10 lg:mt-20 xl:mt-32 xl:w-[90%]">
        <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
            Singles
        </p>

        <div class="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-7 lg:gap-y-10">
            <div v-for="single in singles" :key="single.id" class="singles currentTile cursor-pointer justify-self-center" @click="playSong(single.id, single.name)">
                <div class="top-container">
                    <img class="rounded-xl" :src="single.cover" alt="">
                </div>

                <div class="bottom-container mt-3">
                    <p class="font-monument-regular text-xs lg:text-sm xl:text-sm 2xl:text-base text-center">
                        {{ single.name }}
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
        singles: Array,
        playSong: Function
    }
}
</script>

<style>

</style>