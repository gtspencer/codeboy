<template>
  <footer class="" ref="footer">
    <div
      class="grid-cols-3 mt-16 space-y-8 code-music-socials sm:hidden md:grid md:justify-between md:space-y-0"
    >
      <div class="self-center code justify-self-start">
        <a href="/record-label" class="flex items-center justify-center">
          <div class="label">
            <nuxt-img
              src="/v1643519045/Codeboy/Record-Label-Logo_kei0t4.webp"
              sizes="xs:60px xl:112px"
              alt="Record Label's Logo"
              format="webp"
              quality="100"
              provider="cloudinary"
            />
          </div>

          <div class="text-beside-label">
            <h2
              class="uppercase font-inter text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm font-medium xl:leading-loose"
            >
              codelife record dao <br />
              label
            </h2>
          </div>
        </a>
      </div>

      <div class="flex items-center justify-center music">
        <nuxt-link to="/music-player">
          <button
            class="music-button uppercase text-[#2E2B26] font-sf font-medium text-[10px] xl:text-xs 2xl:text-sm py-1.5 px-4 xl:pl-7 w-56 xl:w-[16.5rem] 2xl:w-[18.5rem] xl:h-14 2xl:h-16 border rounded-full border-black flex justify-between items-center tracking-widest"
          >
            exclusive music player
            <svg
              class="-mr-2 w-9 xl:w-10 2xl:w-12"
              viewBox="0 0 44 45"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="22" cy="22.965" r="22" fill="black" />
              <path
                d="M17 21.6317V24.2984C17 27.2755 17 28.7641 17.971 29.3467C18.942 29.9293 20.2555 29.2288 22.8824 27.8278L25.3824 26.4944C28.2941 24.9415 29.75 24.165 29.75 22.965C29.75 21.765 28.2941 20.9886 25.3824 19.4356L22.8824 18.1023C20.2555 16.7013 18.942 16.0008 17.971 16.5834C17 17.166 17 18.6545 17 21.6317Z"
                fill="white"
              />
            </svg>
          </button>
        </nuxt-link>
      </div>

      <div class="grid space-y-3 socials justify-self-end place-items-center">
        <div
          class="flex justify-center grid-cols-3 space-x-3 socials-container md:grid md:space-x-0 md:gap-x-3 gap-y-2"
        >
          <div class="flex items-center twitter-social">
            <a href="https://twitter.com/codeboysai" target="_blank" rel="noopener noreferrer">
              <svg
                class="w-8 stroke-current xl:w-12"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill-current"
                  d="M42 26.765C41.2483 27.0911 40.4534 27.3067 39.64 27.405C40.4982 26.8923 41.1413 26.0858 41.45 25.135C40.6436 25.6151 39.7608 25.9533 38.84 26.135C38.2245 25.4676 37.405 25.0233 36.5098 24.8719C35.6147 24.7204 34.6945 24.8704 33.8938 25.2982C33.093 25.726 32.4569 26.4076 32.0852 27.2359C31.7135 28.0642 31.6273 28.9924 31.84 29.875C30.2094 29.7925 28.6144 29.368 27.1587 28.6289C25.7029 27.8898 24.4188 26.8527 23.39 25.585C23.0291 26.2152 22.8395 26.9288 22.84 27.655C22.8387 28.3294 23.0042 28.9936 23.3218 29.5886C23.6393 30.1835 24.099 30.6907 24.66 31.065C24.008 31.0473 23.3699 30.8723 22.8 30.855V30.605C22.8049 31.5499 23.136 32.4641 23.7373 33.193C24.3386 33.9219 25.1733 34.4207 26.1 34.605C25.7433 34.7136 25.3729 34.7708 25 34.775C24.7419 34.772 24.4844 34.7486 24.23 34.705C24.4939 35.5178 25.0046 36.2282 25.6911 36.7372C26.3775 37.2462 27.2056 37.5286 28.06 37.545C26.6172 38.6803 24.8359 39.2999 23 39.305C22.6657 39.3061 22.3317 39.2861 22 39.245C23.8744 40.4553 26.0588 41.0977 28.29 41.095C29.8297 41.111 31.3571 40.82 32.7831 40.2391C34.2091 39.6582 35.505 38.7989 36.5952 37.7115C37.6854 36.6241 38.548 35.3304 39.1326 33.9059C39.7172 32.4814 40.012 30.9548 40 29.415C40 29.245 40 29.065 40 28.885C40.7847 28.2998 41.4615 27.5824 42 26.765Z"
                />
                <rect
                  x="0.8"
                  y="1.46504"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="black"
                />
              </svg>
            </a>
          </div>

          <div class="flex items-center insta-social">
            <a href="http://instagram.com/codeboysai" target="_blank" rel="noopener noreferrer">
              <svg
                class="w-8 stroke-current xl:w-12"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke-current"
                  d="M29 42.965H35C40 42.965 42 40.965 42 35.965V29.965C42 24.965 40 22.965 35 22.965H29C24 22.965 22 24.965 22 29.965V35.965C22 40.965 24 42.965 29 42.965Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke-current"
                  d="M32 36.465C33.933 36.465 35.5 34.898 35.5 32.965C35.5 31.032 33.933 29.465 32 29.465C30.067 29.465 28.5 31.032 28.5 32.965C28.5 34.898 30.067 36.465 32 36.465Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37.6361 27.965H37.6477"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect x="0.8" y="1.46504" width="63" height="63" rx="31.5" />
              </svg>
            </a>
          </div>

          <div class="flex items-center youtube-social">
            <a href="https://www.youtube.com/channel/UCukDz4tY0NY4uRmSfHM3CPw" target="_blank" rel="noopener noreferrer">
              <svg
                class="w-8 stroke-current xl:w-12"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37 40.965H27C24 40.965 22 38.965 22 35.965V29.965C22 26.965 24 24.965 27 24.965H37C40 24.965 42 26.965 42 29.965V35.965C42 38.965 40 40.965 37 40.965Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.4001 30.465L33.9001 31.965C34.8001 32.565 34.8001 33.465 33.9001 34.065L31.4001 35.565C30.4001 36.165 29.6001 35.665 29.6001 34.565V31.565C29.6001 30.265 30.4001 29.865 31.4001 30.465Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="0.8"
                  y="1.46504"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="black"
                />
              </svg>
            </a>
          </div>

          <div class="flex items-center tidal-social">
            <a href="http://tidal.com/browse/artist/9574300" target="_blank" rel="noopener noreferrer">
              <svg
                class="w-8 stroke-current xl:w-12"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="fill-current"
                  d="M42 26.765C41.2483 27.0911 40.4534 27.3067 39.64 27.405C40.4982 26.8923 41.1413 26.0858 41.45 25.135C40.6436 25.6151 39.7608 25.9533 38.84 26.135C38.2245 25.4676 37.405 25.0233 36.5098 24.8719C35.6147 24.7204 34.6945 24.8704 33.8938 25.2982C33.093 25.726 32.4569 26.4076 32.0852 27.2359C31.7135 28.0642 31.6273 28.9924 31.84 29.875C30.2094 29.7925 28.6144 29.368 27.1587 28.6289C25.7029 27.8898 24.4188 26.8527 23.39 25.585C23.0291 26.2152 22.8395 26.9288 22.84 27.655C22.8387 28.3294 23.0042 28.9936 23.3218 29.5886C23.6393 30.1835 24.099 30.6907 24.66 31.065C24.008 31.0473 23.3699 30.8723 22.8 30.855V30.605C22.8049 31.5499 23.136 32.4641 23.7373 33.193C24.3386 33.9219 25.1733 34.4207 26.1 34.605C25.7433 34.7136 25.3729 34.7708 25 34.775C24.7419 34.772 24.4844 34.7486 24.23 34.705C24.4939 35.5178 25.0046 36.2282 25.6911 36.7372C26.3775 37.2462 27.2056 37.5286 28.06 37.545C26.6172 38.6803 24.8359 39.2999 23 39.305C22.6657 39.3061 22.3317 39.2861 22 39.245C23.8744 40.4553 26.0588 41.0977 28.29 41.095C29.8297 41.111 31.3571 40.82 32.7831 40.2391C34.2091 39.6582 35.505 38.7989 36.5952 37.7115C37.6854 36.6241 38.548 35.3304 39.1326 33.9059C39.7172 32.4814 40.012 30.9548 40 29.415C40 29.245 40 29.065 40 28.885C40.7847 28.2998 41.4615 27.5824 42 26.765Z"
                />
                <rect
                  x="0.8"
                  y="1.46504"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="black"
                />
              </svg>
            </a>
          </div>

          <div class="flex items-center spotify-social">
            <a href="https://open.spotify.com/artist/21nlk9QNU6Hxo3yQOuB2G3" target="blank">
              <svg
                class="w-8 stroke-current xl:w-12"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  class="stroke-current"
                  d="M29 42.965H35C40 42.965 42 40.965 42 35.965V29.965C42 24.965 40 22.965 35 22.965H29C24 22.965 22 24.965 22 29.965V35.965C22 40.965 24 42.965 29 42.965Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  class="stroke-current"
                  d="M32 36.465C33.933 36.465 35.5 34.898 35.5 32.965C35.5 31.032 33.933 29.465 32 29.465C30.067 29.465 28.5 31.032 28.5 32.965C28.5 34.898 30.067 36.465 32 36.465Z"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M37.6361 27.965H37.6477"
                  stroke="#292D32"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect x="0.8" y="1.46504" width="63" height="63" rx="31.5" />
              </svg>
            </a>
          </div>

          <div class="flex items-center apple-social">
            <a href="https://music.apple.com/us/artist/codeboy-sai/1351439855" target="_blank" rel="noopener noreferrer">
              <svg
                class="w-8 stroke-current xl:w-12"
                viewBox="0 0 64 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37 40.965H27C24 40.965 22 38.965 22 35.965V29.965C22 26.965 24 24.965 27 24.965H37C40 24.965 42 26.965 42 29.965V35.965C42 38.965 40 40.965 37 40.965Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M31.4001 30.465L33.9001 31.965C34.8001 32.565 34.8001 33.465 33.9001 34.065L31.4001 35.565C30.4001 36.165 29.6001 35.665 29.6001 34.565V31.565C29.6001 30.265 30.4001 29.865 31.4001 30.465Z"
                  stroke="#17191C"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="0.8"
                  y="1.46504"
                  width="63"
                  height="63"
                  rx="31.5"
                  stroke="black"
                />
              </svg>
            </a>
          </div>
        </div>

        <div class="text">
          <p
            class="uppercase font-inter text-[10px] 2xl:xs text-center tracking-widest"
          >
            Socials + streaming
          </p>
        </div>
      </div>
    </div>

    <!-- FOR SCREEN 640 ONLY!!!! -->
    <div class="hidden mt-16 space-y-10 code-music-socials sm:block md:hidden">
      <div
        class="code-music-container sm:space-y-0 sm:flex sm:justify-between sm:items-center"
      >
        <div class="code">
          <a href="/record-label" class="flex items-center justify-start">
            <div class="label">
              <nuxt-img
                src="/v1643519045/Codeboy/Record-Label-Logo_kei0t4.webp"
                sizes="xs:60px xl:112px"
                alt="Record Label's Logo"
                format="webp"
                quality="100"
                provider="cloudinary"
              />
            </div>

            <div class="text-beside-label">
              <h2
                class="uppercase font-inter text-[#2E2B26] text-[10px] font-medium"
              >
                codelife record dao <br />
                label
              </h2>
            </div>
          </a>
        </div>

        <div class="flex justify-end music">
          <nuxt-link to="#music-player">
            <button
              class="uppercase text-[#2E2B26] font-sf font-medium text-[10px] py-1.5 px-4 w-56 border rounded-full border-black flex justify-between items-center tracking-widest"
            >
              exclusive music player
              <svg
                class="-mr-2 w-9"
                viewBox="0 0 44 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="22" cy="22.965" r="22" fill="black" />
                <path
                  d="M17 21.6317V24.2984C17 27.2755 17 28.7641 17.971 29.3467C18.942 29.9293 20.2555 29.2288 22.8824 27.8278L25.3824 26.4944C28.2941 24.9415 29.75 24.165 29.75 22.965C29.75 21.765 28.2941 20.9886 25.3824 19.4356L22.8824 18.1023C20.2555 16.7013 18.942 16.0008 17.971 16.5834C17 17.166 17 18.6545 17 21.6317Z"
                  fill="white"
                />
              </svg>
            </button>
          </nuxt-link>
        </div>
      </div>

      <div class="space-y-3 socials">
        <div class="justify-center hidden space-x-3 socials-container sm:flex">
          <div class="flex items-center twitter-social">
            <svg
              class="w-8 stroke-current xl:w-12"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-current"
                d="M42 26.765C41.2483 27.0911 40.4534 27.3067 39.64 27.405C40.4982 26.8923 41.1413 26.0858 41.45 25.135C40.6436 25.6151 39.7608 25.9533 38.84 26.135C38.2245 25.4676 37.405 25.0233 36.5098 24.8719C35.6147 24.7204 34.6945 24.8704 33.8938 25.2982C33.093 25.726 32.4569 26.4076 32.0852 27.2359C31.7135 28.0642 31.6273 28.9924 31.84 29.875C30.2094 29.7925 28.6144 29.368 27.1587 28.6289C25.7029 27.8898 24.4188 26.8527 23.39 25.585C23.0291 26.2152 22.8395 26.9288 22.84 27.655C22.8387 28.3294 23.0042 28.9936 23.3218 29.5886C23.6393 30.1835 24.099 30.6907 24.66 31.065C24.008 31.0473 23.3699 30.8723 22.8 30.855V30.605C22.8049 31.5499 23.136 32.4641 23.7373 33.193C24.3386 33.9219 25.1733 34.4207 26.1 34.605C25.7433 34.7136 25.3729 34.7708 25 34.775C24.7419 34.772 24.4844 34.7486 24.23 34.705C24.4939 35.5178 25.0046 36.2282 25.6911 36.7372C26.3775 37.2462 27.2056 37.5286 28.06 37.545C26.6172 38.6803 24.8359 39.2999 23 39.305C22.6657 39.3061 22.3317 39.2861 22 39.245C23.8744 40.4553 26.0588 41.0977 28.29 41.095C29.8297 41.111 31.3571 40.82 32.7831 40.2391C34.2091 39.6582 35.505 38.7989 36.5952 37.7115C37.6854 36.6241 38.548 35.3304 39.1326 33.9059C39.7172 32.4814 40.012 30.9548 40 29.415C40 29.245 40 29.065 40 28.885C40.7847 28.2998 41.4615 27.5824 42 26.765Z"
              />
              <rect
                x="0.8"
                y="1.46504"
                width="63"
                height="63"
                rx="31.5"
                stroke="black"
              />
            </svg>
          </div>

          <div class="flex items-center insta-social">
            <svg
              class="w-8 stroke-current xl:w-12"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="stroke-current"
                d="M29 42.965H35C40 42.965 42 40.965 42 35.965V29.965C42 24.965 40 22.965 35 22.965H29C24 22.965 22 24.965 22 29.965V35.965C22 40.965 24 42.965 29 42.965Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                class="stroke-current"
                d="M32 36.465C33.933 36.465 35.5 34.898 35.5 32.965C35.5 31.032 33.933 29.465 32 29.465C30.067 29.465 28.5 31.032 28.5 32.965C28.5 34.898 30.067 36.465 32 36.465Z"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M37.6361 27.965H37.6477"
                stroke="#292D32"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect x="0.8" y="1.46504" width="63" height="63" rx="31.5" />
            </svg>
          </div>

          <div class="flex items-center youtube-social">
            <svg
              class="w-8 stroke-current xl:w-12"
              viewBox="0 0 64 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37 40.965H27C24 40.965 22 38.965 22 35.965V29.965C22 26.965 24 24.965 27 24.965H37C40 24.965 42 26.965 42 29.965V35.965C42 38.965 40 40.965 37 40.965Z"
                stroke="#17191C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.4001 30.465L33.9001 31.965C34.8001 32.565 34.8001 33.465 33.9001 34.065L31.4001 35.565C30.4001 36.165 29.6001 35.665 29.6001 34.565V31.565C29.6001 30.265 30.4001 29.865 31.4001 30.465Z"
                stroke="#17191C"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <rect
                x="0.8"
                y="1.46504"
                width="63"
                height="63"
                rx="31.5"
                stroke="black"
              />
            </svg>
          </div>

          <div class="flex items-center dunno-social">
            <img class="w-9" src="/images/Dunno-Icon.png" alt="Spotify Icon" />
          </div>

          <div class="flex items-center spotify-social">
            <img
              class="w-[34px] xl:w-[50px]"
              src="/images/Spotify-Icon.png"
              alt="Spotify Icon"
            />
          </div>

          <div class="flex items-center itunes-social">
            <img class="w-9" src="/images/iTunes-Icon.png" alt="Spotify Icon" />
          </div>
        </div>

        <div class="text">
          <p
            class="uppercase font-inter text-[10px] text-center tracking-widest"
          >
            Socials + streaming
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

export default {
  props: {},

  mounted() {},
};
</script>

<style>
.music-button {
  background: -webkit-linear-gradient(0deg, transparent 50%, black 50%);
  background-size: 600px 80px;
  transition: 0.8s;
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;
  -ms-transition: 0.8s;
  -o-transition: 0.8s;
}

.music-button svg {
  transition: 0.8s;
}

.music-button:hover {
  background-position: 300px 0px;
  color: white;
  border: 1px solid white;
}

.music-button:hover svg {
  transition: 0.8s;
  filter: invert(1);
}
</style>
