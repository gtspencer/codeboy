<template>
  <div>
    <section class="mt-10 mb-20 lyrics-section">
        <div class="space-y-10 player-container md:flex md:space-y-0 md:space-x-5">
            <div class="top-left lg:w-[30%]">
                <div class="top-left-container">
                    <h2 class="text-2xl text-center capitalize md:text-left font-monument-regular sm:text-3xl md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl lg:leading-normal xl:leading-normal 2xl:leading-normal">
                        listening <br class="hidden lg:block"> player
                    </h2>

                    <p class="font-monument-light font-light text-[10px] uppercase text-center lg:mt-2 xl:mt-3 md:text-left xl:text-xs 2xl:text-sm md:px-0 px-10 py-2 lg:leading-normal xl:leading-normal">
                        A short paragraph describing <br class="hidden md:block"> your team. You may want to <br class="hidden md:block"> describe what they are <br class="hidden md:block"> responsible for
                    </p>

                    <ul class="tray w-full font-monument-light font-light text-[#2E2B26] text-[8px] lg:text-[10px] xl:text-xs 2xl:text-sm flex md:flex-col justify-around items-center md:items-start mt-4 sm:mt-6 md:space-y-1">
                        <li><button class="uppercase general-button leading-loose">- all</button></li>
                        <li><button class="uppercase collection-button leading-loose">- mixtapes</button></li>
                        <li><button class="uppercase repair-button leading-loose">- singles</button></li>
                        <li><button class="uppercase delivery-button leading-loose">- music videos</button></li>
                    </ul>
                </div>
            </div>

            <div class="bottom-right w-full flex flex-col justify-center items-center">
                <div class="mt-10 lg:mt-20 xl:mt-32 tracklist lg:w-[65%] xl:w-[60%] 2xl:w-[57%]">
                    <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
                        Lyrics
                    </p>

                    <div class="track-info space-y-3">
                      <div class="top">
                        <img class="rounded-xl lg:rounded-2xl" src="../../static/images/Mixtape small.png"/>
                      </div>

                      <div class="bottom space-y-3 md:space-y-0 sm:flex justify-between items-center">
                        <ul class="font-monument font-light text-xs sm:text-sm md:text-xs lg:text-sm xl:text-base leading-loose lg:leading-normal xl:leading-normal text-black">
                          <li
                            class=""
                          >
                            SONG: <span class="text-[#2E2B26]">Never Change Up</span>
                          </li>

                          <li
                            class=""
                          >
                            MIXTAPE: <span class="text-[#2E2B26]">Meetings & Makeups</span>
                          </li>

                          <li
                            class=""
                          >
                            ARTIST(S): <span class="text-[#2E2B26]">CODEBOY Sai</span>
                          </li>
                        </ul>

                        <button class="lyrics font-inter text-[10px] xl:text-xs 2xl:text-sm py-2 pl-8 pr-3 rounded-full border border-black flex items-center">
                          Lyrics

                          <svg class="w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3848 12.7854L12 18.771L5.61533 12.7854L6.38476 11.9646L11.4375 16.7016L11.4375 6H12.5625L12.5625 16.7016L17.6153 11.9646L18.3848 12.7854Z" fill="black"/>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="lyrics mt-10">
                      <div v-for="lyric in lyrics" :key="lyric.id" class="font-inter text-xs lg:text-sm xl:text-base whitespace-pre-line">
                        {{ lyric.lyrics }}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import {lyrics} from '../../data/lyrics'


export default {
  layout: 'music',

    computed: {
        lyrics () {
            return lyrics
        },
    },
}

</script>

<style>
.font-monument {
  font-family: 'Monument Extended';
}

.font-monument-light {
  font-family: 'Monument Extended light';
  font-weight: 300;
}
.font-monument-regular {
  font-family: 'Monument Extended Regular';
  font-weight: 400;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Light';
  src: url('../../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Regular';
  src: url('../../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>