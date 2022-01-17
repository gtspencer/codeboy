<template>
  <div>
      <section class="listening-pass py-10 md:py-0 lg:py-10">
        <div class="second-drop lg:flex justify-between xl:justify-around items-center md:grid grid-cols-2">
            <div class="texts">
                <h5 class="uppercase font-sf text-[10px] xl:text-sm 2xl:text-base tracking-widest">
                    second drop
                </h5>

                <h1 class="capitalize font-caudex text-6xl sm:text-[4rem] lg:text-7xl xl:text-[6rem] 2xl:text-9xl leading-tight lg:leading-none">
                    Listening <br class="hidden lg:block">Pass
                </h1>
            </div>
                    
            <div class="image flex justify-center">
                <img class="md:w-4/5 xl:w-[90%] 2xl:w-full" src="/images/Second-Drop-Image.png" alt="The Listening Pass Image">
            </div>

            <div
              class="mint-collectibles lg:mt-0 col-span-2 lg:col-auto self-center xl:ml-10"
            >
              <div class="mint-collectibles-container">
                <ul
                  class="font-inter text-sm xl:text-base leading-loose text-[#6B6761] text-center lg:text-left space-y-1 pb-5"
                >
                  <li class="leading-loose">
                    Total Collectibles: <span class="text-black">Inifinity ∞</span>
                  </li>
                  <li class="leading-loose">
                    Chain: <span class="text-black">Ethereum (ERC-721)</span>
                  </li>
                  <li class="leading-loose">
                    Mint Price: <span class="text-black">0.01 ETH</span>
                  </li>
                  <li class="leading-loose">
                    Max Token per wallet: <span class="text-black">1</span>
                  </li>
                </ul>

                <div class="button flex lg:block justify-center mt-5">
                  <button
                    class="uppercase relative font-sf text-white text-xs px-28 xl:px-32 py-1.5 xl:py-2 bg-black before:absolute before:left-0 before:-top-5 before:h-px before:w-full before:bg-[#E5E5E5]"
                  >
                    mint
                  </button>
                </div>
              </div>
            </div>
        </div>
      </section>

      <section class="benefits">
        <div class="benefits-container">
          <div class="top-left-container">
            <h2 class="font-caudex capitalize text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px]">
              Benefits of each listening pass token
            </h2>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
export default {
    layout: 'default'
}
</script>

<style>

</style>