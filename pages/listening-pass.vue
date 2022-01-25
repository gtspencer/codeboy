<template>
  <div>
    <section class="listening-pass py-10 md:py-0 lg:py-10">
      <div
        class="second-drop lg:flex justify-between xl:justify-center items-center md:grid grid-cols-2"
      >
        <div class="texts">
          <div class="animation-container overflow-hidden">
              <div class="animation-top-container overflow-hidden">
                  <p data-aos="fade-right" data-aos-duration="1000" class="uppercase font-sf text-[10px] xl:text-sm 2xl:text-base tracking-widest">
                      second drop
                  </p>
              </div>

              <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="500" class="capitalize font-caudex text-6xl sm:text-[4rem] lg:text-7xl xl:text-[6rem] 2xl:text-9xl leading-tight lg:leading-none">
                  Listening <br class="hidden lg:block">Pass
              </h1>
          </div>
        </div>

        <div data-aos="fade-in" data-aos-duration="1000" class="image flex justify-center overflow-hidden">
          <video
            class="transform"
            src="https://res.cloudinary.com/eazzie/video/upload/q_100,c_crop,w_450,h_550/v1643129201/Codeboy/Listening-Pass_pn1oy4.webm"
            alt="The Listening Pass Asset"
            autoplay
            loop
          />
        </div>

        <div
          class="mint-collectibles lg:mt-0 col-span-2 lg:col-auto self-center xl:ml-10 overflow-hidden"
        >
          <div class="mint-collectibles-container">
            <ul
              class="font-inter text-sm xl:text-base leading-loose text-[#6B6761] text-center lg:text-left space-y-1 pb-5"
            >
              <li data-aos="fade-right" data-aos-duration="" data-aos-delay="" class="leading-loose">
                Total Collectibles: <span class="text-black font-bold">Inifinity ∞</span>
              </li>
              <li data-aos="fade-right" data-aos-duration="" data-aos-delay="100" class="leading-loose">
                Chain: <span class="text-black">Ethereum (ERC-721)</span>
              </li>
              <li data-aos="fade-right" data-aos-duration="" data-aos-delay="200" class="leading-loose">
                Mint Price: <span class="text-black">0.01 ETH</span>
              </li>
              <li data-aos="fade-right" data-aos-duration="" data-aos-delay="300" class="leading-loose">
                Max Token per wallet: <span class="text-black">1</span>
              </li>
            </ul>

            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="400" class="button flex lg:block justify-center mt-5">
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

    <section class="benefits my-20">
      <div class="benefits-container lg:flex justify-between lg:space-x-10 2xl:space-x-20">
        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="" class="top-left-container">
          <h2 class="font-caudex capitalize text-center lg:text-left text-4xl sm:text-[40px] xl:text-5xl md:px-20 lg:px-0 2xl:pr-10 lg:leading-normal">
            Benefits of each listening pass token
          </h2>
        </div>

        <div class="bottom-right-container mt-10 sm:grid grid-cols-2 space-y-7 sm:space-y-0 sm:gap-y-10 sm:gap-x-10 md:gap-x-5">
          <div
            class="first-benefit flex items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <img class="min-w-[50px]" src="/images/iPod.png" alt="">
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p class="font-inter text-sm xl:text-base">
                Gain Unlimited Access to <span class="font-bold">Music Player</span> <br> One Mint = Access to CODEBOY Sai music forever
              </p>
            </div>
          </div>

          <div
            class="second-benefit flex items-center lg:items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <img class="w-28" src="/images/Airdrop.png" alt="" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p class="font-inter text-sm xl:text-base ml-2">
                Music Airdrops, Listening Sessions featuring the Kanye West stemplayer + More giveaways
              </p>
            </div>
          </div>

          <div
            class="third-benefit flex items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <img class="w-[70px]" src="/images/Licensing.png" alt="" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p class="font-inter text-sm xl:text-base">
                <span class="font-bold"
                  >License to Stream Music on websites like Twitch</span
                >
              </p>

              <p class="font-inter text-sm xl:text-base pt-1">
                Tell the DMCA to fuck off!
              </p>
            </div>
          </div>

          <div
            class="fourth-benefit flex items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <img class="w-32" src="/svg/handshake.svg" alt="" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p class="font-inter text-sm xl:text-base">
                Listening Pass holders have <br> <span class="font-bold">Non-Exclusive Licensee Rights</span> <br> of
                each NFT. CODEBOY Sai retains ownership of the master records of
                the music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'


export default {
  layout: "default",
  mixins: [aosMixin],
}
</script>

<style></style>
