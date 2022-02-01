<template>
  <div>
    <section class="listening-pass py-10 md:py-0 lg:py-10">
      <div
        class="second-drop lg:flex justify-between xl:justify-center items-center md:grid grid-cols-2"
      >
        <div class="texts">
          <div class="animation-container overflow-hidden">
            <h1
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="500"
              class="capitalize font-monument-regular text-[#2E2B26] text-[42px] sm:text-[2.75rem] xl:text-[3.5rem] 2xl:text-9xl leading-normal lg:leading-normal lg:whitespace-nowrap"
            >
              Listening <br class="hidden lg:block" />Pass (LP)
            </h1>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-duration="1000"
          class="image flex justify-center overflow-hidden"
        >
          <video
            class="transform"
            src="https://res.cloudinary.com/eazzie/video/upload/q_100,c_crop,w_450,h_550/v1643129201/Codeboy/Listening-Pass_pn1oy4.webm"
            alt="The Listening Pass Asset"
            autoplay
            loop
            muted
          />
        </div>

        <div
          class="mint-collectibles lg:mt-0 col-span-2 lg:col-auto self-center xl:ml-10 overflow-hidden"
        >
          <div class="mint-collectibles-container">
            <ul
              class="font-monument-regular text-sm xl:text-base leading-loose text-[#6B6761] text-center lg:text-left space-y-1 pb-5"
            >
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay=""
                class="leading-loose"
              >
                Total LPs Available:
                <span class="text-[#6B6761] font-bold">1,302</span> (more LPs would be released as more music is released)
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay="100"
                class="leading-loose"
              >
                Chain: <span class="text-[#6B6761]">Ethereum (ERC-721)</span>
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay="200"
                class="leading-loose"
              >
                Lifetime LP Mint Fee: <span class="text-[#6B6761]">0.0302 ETH</span>
              </li>
              <li
                data-aos="fade-right"
                data-aos-duration=""
                data-aos-delay="300"
                class="leading-loose"
              >
                Max Token per wallet: <span class="text-[#2E2B26]">1</span>
              </li>
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              class="button flex lg:block justify-center mt-5"
            >
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
      <div
        class="benefits-container lg:flex justify-between lg:space-x-10 2xl:space-x-20"
      >
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay=""
          class="top-left-container"
        >
          <h2
            class="font-caudex capitalize text-center lg:text-left text-4xl sm:text-[40px] xl:text-5xl md:px-20 lg:px-0 2xl:pr-10 lg:leading-normal"
          >
            Benefits of each listening pass token
          </h2>
        </div>

        <div
          class="bottom-right-container mt-10 sm:grid grid-cols-2 space-y-7 sm:space-y-0 sm:gap-y-10 sm:gap-x-10 md:gap-x-5"
        >
          <div
            class="first-benefit flex items-start space-x-5 lg:place-self-start overflow-hidden"
          >
            <div data-aos="fade-up" data-aos-duration="1000" class="left">
              <img class="min-w-[50px]" src="/images/iPod.png" alt="" />
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="right">
              <p class="font-inter text-sm xl:text-base">
                Gain Unlimited Access to
                <span class="font-bold">Music Player</span> <br />
                One Mint = Access to CODEBOY Sai music forever
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
                Music Airdrops, Listening Sessions featuring the Kanye West
                stemplayer + More giveaways
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
                Listening Pass holders have <br />
                <span class="font-bold">Non-Exclusive Licensee Rights</span>
                <br />
                of each NFT. CODEBOY Sai retains ownership of the master records
                of the music.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from "~/mixins/aos";

export default {
  layout: "default",
  mixins: [aosMixin],
};
</script>

<style>
.font-monument {
  font-family: "Monument Extended";
}

.font-monument-regular {
  font-family: "Monument Extended Regular";
  font-weight: 400;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf");
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf");
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended Regular";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf");
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf");
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: "Monument Extended";
  src: url("../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf");
  font-weight: normal;
  font-style: normal;
}
</style>
