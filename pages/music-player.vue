<template>
  <div>
    <section class="mt-10 mb-20 player">
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
                        <li><button class="uppercase general-button active leading-loose">- all</button></li>
                        <li><button class="uppercase collection-button leading-loose">- mixtapes</button></li>
                        <li><button class="uppercase repair-button leading-loose">- singles</button></li>
                        <li><button class="uppercase delivery-button leading-loose">- music videos</button></li>
                    </ul>
                </div>
            </div>

            <div class="bottom-right w-full lg:w-[70%]">
                <!-- <p class="font-cormorant font-bold text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
                    Now Playing: {{ currentSongTitle }}
                </p> -->

                <!-- <div class="mt-4 engine">
                    <div class="display w-full h-40 lg:h-48 xl:h-52 bg-[#C4C4C4] rounded-xl xl:rounded-2xl"></div>

                    <div class="relative mt-2 input">
                        <input class="progress w-full bg-[#E6EEFD] rounded-full h-1 relative" type="range" name="range" id="range" min="0" max="100" value="0" @change="seek">
                    </div>

                    <div class="flex items-center justify-between mt-5 controls">
                        <button class="speaker" ref="speaker">
                            <svg class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 18C4 16.8954 4.89543 16 6 16H13.2984C13.7526 16 14.1932 15.8454 14.5478 15.5617L22.3753 9.29976C23.0301 8.77595 24 9.24212 24 10.0806V37.9194C24 38.7579 23.0301 39.2241 22.3753 38.7002L14.5478 32.4383C14.1932 32.1546 13.7526 32 13.2984 32H6C4.89543 32 4 31.1046 4 30V18Z" fill="#212129"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7274 14.7272C29.4303 14.0242 30.57 14.0242 31.273 14.7272L30.0002 16C31.273 14.7272 31.2724 14.7266 31.273 14.7272L31.2752 14.7294L31.2777 14.7319L31.2835 14.7377L31.2984 14.7529L31.3406 14.7969C31.3741 14.8323 31.4182 14.8798 31.4713 14.9392C31.5774 15.0579 31.7199 15.2247 31.8865 15.4375C32.2189 15.8623 32.6511 16.4759 33.0804 17.263C33.9388 18.8367 34.8002 21.1319 34.8002 24C34.8002 26.868 33.9388 29.1632 33.0804 30.7369C32.6511 31.524 32.2189 32.1376 31.8865 32.5624C31.7199 32.7752 31.5774 32.942 31.4713 33.0607C31.4182 33.1201 31.3741 33.1676 31.3406 33.203L31.2984 33.247L31.2835 33.2622L31.2777 33.268L31.2752 33.2705C31.2747 33.2711 31.273 33.2727 30.0002 32L31.273 33.2727C30.57 33.9757 29.4303 33.9757 28.7274 33.2727C28.027 32.5723 28.0245 31.4383 28.7198 30.7348L28.7272 30.7271C28.7376 30.7161 28.758 30.6943 28.7869 30.6619C28.8449 30.597 28.9367 30.4903 29.0514 30.3437C29.2815 30.0498 29.5993 29.6009 29.92 29.013C30.5616 27.8367 31.2002 26.1319 31.2002 24C31.2002 21.868 30.5616 20.1632 29.92 18.9869C29.5993 18.399 29.2815 17.9501 29.0514 17.6562C28.9367 17.5096 28.8449 17.4029 28.7869 17.338C28.758 17.3056 28.7376 17.2838 28.7272 17.2728L28.7198 17.2651C28.0245 16.5616 28.027 15.4276 28.7274 14.7272Z" fill="#212129"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M34.687 6.76886C35.3669 6.04362 36.5061 6.00688 37.2313 6.68679L36.0002 7.99996C37.2313 6.68679 37.2319 6.68731 37.2324 6.68786L37.2337 6.68907L37.2367 6.69191L37.2445 6.69928L37.2669 6.72073C37.2849 6.738 37.3088 6.76123 37.3382 6.79034C37.397 6.84856 37.4781 6.9304 37.5781 7.03537C37.7781 7.24522 38.0547 7.5481 38.382 7.94019C39.0359 8.72344 39.8971 9.8685 40.756 11.3447C42.4731 14.296 44.2002 18.6064 44.2002 24C44.2002 29.3935 42.4731 33.704 40.756 36.6552C39.8971 38.1314 39.0359 39.2765 38.382 40.0597C38.0547 40.4518 37.7781 40.7547 37.5781 40.9645C37.4781 41.0695 37.397 41.1514 37.3382 41.2096C37.3088 41.2387 37.2849 41.2619 37.2669 41.2792L37.2445 41.3006L37.2367 41.308L37.2337 41.3108L37.2324 41.3121C37.2319 41.3126 37.2313 41.3131 36.0002 40L37.2313 41.3131C36.5061 41.993 35.3669 41.9563 34.687 41.2311C34.0083 40.507 34.0437 39.3705 34.7655 38.6902C34.7664 38.6894 34.7672 38.6885 34.7681 38.6877L34.7673 38.6885L34.7702 38.6857L34.806 38.6507C34.8409 38.6161 34.8973 38.5593 34.9723 38.4807C35.1223 38.3233 35.3457 38.0793 35.6184 37.7527C36.1645 37.0984 36.9033 36.1185 37.6444 34.8447C39.1273 32.296 40.6002 28.6064 40.6002 24C40.6002 19.3935 39.1273 15.704 37.6444 13.1552C36.9033 11.8814 36.1645 10.9015 35.6184 10.2472C35.3457 9.92056 35.1223 9.67657 34.9723 9.51923C34.8973 9.44061 34.8409 9.38377 34.806 9.34922L34.7702 9.31422L34.7652 9.30941C34.7652 9.30948 34.7655 9.30975 34.766 9.3102L34.7673 9.31139L34.7681 9.31219C34.0438 8.63217 34.0074 7.49377 34.687 6.76886ZM34.7652 9.30941L34.7652 9.30941L34.7652 9.30941Z" fill="#212129"/>
                            </svg>
                        </button>

                        <button class="previous" ref="previous" @click="prevSong">
                            <svg  class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M40 22.5971V25.4028C40 30.1012 40 32.4503 38.4781 33.312C36.9562 34.1737 34.9418 32.9651 30.913 30.5478L28.5749 29.1449C24.7456 26.8473 22.831 25.6985 22.831 24C22.831 22.3014 24.7456 21.1526 28.5749 18.855L30.913 17.4522C34.9418 15.0349 36.9562 13.8263 38.4781 14.6879C40 15.5496 40 17.8988 40 22.5971Z" fill="#212129"/>
                                <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 22.4781 33.312C20.9562 34.1737 18.9418 32.9651 14.913 30.5478L12.5749 29.1449C8.74561 26.8473 6.83095 25.6985 6.83095 24C6.83095 22.3014 8.74561 21.1526 12.5749 18.855L14.913 17.4522C18.9418 15.0349 20.9562 13.8263 22.4781 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                            </svg>
                        </button>

                        <button class="rewind" @click="rewind">
                            <svg class="w-7" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.25 18C4.25 20.5217 4.99777 22.9868 6.39876 25.0835C7.79975 27.1802 9.79102 28.8144 12.1208 29.7795C14.4505 30.7445 17.0141 30.997 19.4874 30.505C21.9607 30.0131 24.2325 28.7987 26.0156 27.0156C27.7987 25.2325 29.013 22.9607 29.505 20.4874C29.997 18.0141 29.7445 15.4505 28.7795 13.1208C27.8144 10.791 26.1802 8.79975 24.0835 7.39876C21.9868 5.99777 19.5217 5.25 17 5.25H12.75M12.75 5.25L17 1M12.75 5.25L17 9.5" stroke="#212129" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.1014 14.5H13.1014L11.1326 15.7031V17.5469L12.8826 16.5H12.9295V22.5H15.1014V14.5ZM19.7271 22.6094C21.6763 22.6094 22.9497 21.4258 22.9458 19.75C22.9497 18.2305 21.8872 17.1562 20.4615 17.1562C19.649 17.1562 18.9927 17.5156 18.7427 18H18.6958L18.8521 16.2344H22.4458V14.5H17.0708L16.7583 18.9062L18.6646 19.2812C18.8482 18.8906 19.2661 18.6562 19.7271 18.6562C20.3911 18.6562 20.856 19.1133 20.8521 19.8125C20.856 20.5117 20.3911 20.9687 19.7271 20.9687C19.1529 20.9687 18.6802 20.6172 18.6646 20.0625H16.5552C16.5669 21.5547 17.8833 22.6094 19.7271 22.6094Z" fill="#212129"/>
                            </svg>
                        </button>

                        <button class="play w-14 h-14 rounded-full bg-[#6837FA]" ref="play" @click="initSong(songIndex)">
                            <font-awesome-icon class="play-icon text-white" :icon="['fas', 'play']"/>
                            <font-awesome-icon class="pause-icon text-white hide" :icon="['fas', 'pause']"/>
                        </button>

                        <audio class="audio" src="https://res.cloudinary.com/eazzie/video/upload/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3" ref="audio" @timeupdate="updateProgress" @ended="nextSong"></audio>

                        <button class="forward" @click="forward">
                            <svg class="w-7" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.75 18C29.75 20.5217 29.0022 22.9868 27.6012 25.0835C26.2003 27.1802 24.209 28.8144 21.8792 29.7795C19.5495 30.7445 16.9859 30.997 14.5126 30.505C12.0393 30.0131 9.76751 28.7987 7.98439 27.0156C6.20127 25.2325 4.98695 22.9607 4.49499 20.4874C4.00303 18.0141 4.25552 15.4505 5.22054 13.1208C6.18556 10.791 7.81976 8.79975 9.91649 7.39876C12.0132 5.99777 14.4783 5.25 17 5.25H21.25M21.25 5.25L17 1M21.25 5.25L17 9.5" stroke="#212129" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M15.1014 14.5H13.1014L11.1326 15.7031V17.5469L12.8826 16.5H12.9295V22.5H15.1014V14.5ZM19.7271 22.6094C21.6763 22.6094 22.9497 21.4258 22.9458 19.75C22.9497 18.2305 21.8872 17.1562 20.4615 17.1562C19.649 17.1562 18.9927 17.5156 18.7427 18H18.6958L18.8521 16.2344H22.4458V14.5H17.0708L16.7583 18.9062L18.6646 19.2812C18.8482 18.8906 19.2661 18.6562 19.7271 18.6562C20.3911 18.6562 20.856 19.1133 20.8521 19.8125C20.856 20.5117 20.3911 20.9687 19.7271 20.9687C19.1529 20.9687 18.6802 20.6172 18.6646 20.0625H16.5552C16.5669 21.5547 17.8833 22.6094 19.7271 22.6094Z" fill="#212129"/>
                            </svg>
                        </button>

                        <button class="next" ref="next" @click="nextSong">
                            <svg class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 22.5971V25.4028C8 30.1012 8 32.4503 9.5219 33.312C11.0438 34.1737 13.0582 32.9651 17.087 30.5478L19.4251 29.1449C23.2544 26.8473 25.169 25.6985 25.169 24C25.169 22.3014 23.2544 21.1526 19.4251 18.855L17.087 17.4522C13.0582 15.0349 11.0438 13.8263 9.5219 14.6879C8 15.5496 8 17.8988 8 22.5971Z" fill="#212129"/>
                                <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 25.5219 33.312C27.0438 34.1737 29.0582 32.9651 33.087 30.5478L35.4251 29.1449C39.2544 26.8473 41.169 25.6985 41.169 24C41.169 22.3014 39.2544 21.1526 35.4251 18.855L33.087 17.4522C29.0582 15.0349 27.0438 13.8263 25.5219 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                            </svg>
                        </button>

                        <button class="share">
                            <svg class="w-7" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15L18.3333 3.33337V10C6.66667 11.6667 1.66667 20 0 28.3334C4.16667 22.5 10 19.8334 18.3333 19.8334V26.6667L30 15Z" fill="#1E1F20"/>
                                <mask id="mask0_196_945" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="3" width="30" height="26">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15L18.3333 3.33337V10C6.66667 11.6667 1.66667 20 0 28.3334C4.16667 22.5 10 19.8334 18.3333 19.8334V26.6667L30 15Z" fill="white"/>
                                </mask>
                                <g mask="url(#mask0_196_945)">
                                </g>
                            </svg>
                        </button>
                    </div>
                </div> -->

                <div class="mt-10 lg:mt-20 xl:mt-32 tracklist">
                    <p class="font-monument-regular text-lg lg:text-2xl font-bold text-center mb-5 lg:mb-10 xl:text-2xl 2xl:text-3xl">
                        All Tracks
                    </p>

                    <div v-for="track in tracks" :key="track.id" class="track-container currentTile relative py-3 flex justify-between after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#E5E5E5] cursor-pointer" ref="currentTile">
                        <div class="left-container flex justify-between items-center w-[57%] md:w-[49%]">
                            <div class=".left-container flex items-center space-x-2">
                                <div class="cover w-14 h-14 rounded-lg bg-center bg-contain" :style="{ backgroundImage: `url( ${track.cover} )`}">
                                    <!-- <p>
                                        {{ track.cover }}
                                    </p> -->
                                </div>

                                <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                                    {{ track.name }}
                                </p>
                            </div>

                            <div class="right-container">
                                <button class="play w-7 h-7 rounded-full bg-[#6837FA] flex justify-center items-center" ref="play" @click="playSong(track.id, track.name)">
                                    <font-awesome-icon class="play-icon text-white text-sm xl:text-xs" :icon="['fas', 'play']"/>
                                    <font-awesome-icon class="pause-icon text-white hide text-sm xl:text-xs" :icon="['fas', 'pause']"/>
                                </button>
                            </div>
                        </div>

                        <div class="right-container flex justify-between items-center w-[40%] md:w-[49%]">
                            <p class="text-xs font-medium duration font-inter lg:text-sm xl:text-base 2xl:text-lg">
                                {{ track.duration }}
                            </p>

                            <nuxt-link to="/lyrics/Bangee (Single)">
                                <button class="lyrics text-[10px] xl:text-xs 2xl:text-sm py-2 px-3 rounded-full border border-black">
                                    Lyrics
                                </button>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- <footer class="mini-player w-full bg-[#FAFAFA] py-3 fixed bottom-0">
        <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
            <div class="flex items-center justify-between mini-player-container lg:justify-start md:space-x-10 lg:space-x-20 xl:space-x-28 2xl:space-x-36">
                <div class="flex items-center space-x-2 left-container">
                    <div class="cover w-14 h-14 rounded-lg" style="background-image: url('');">
                    </div>

                    <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap">
                        {{ currentSongTitle }}
                    </p>
                </div>

                <div class="flex items-center justify-between space-x-4 mid-container">
                    <button class="previous" ref="previous" @click="prevSong()">
                        <svg  class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 22.5971V25.4028C40 30.1012 40 32.4503 38.4781 33.312C36.9562 34.1737 34.9418 32.9651 30.913 30.5478L28.5749 29.1449C24.7456 26.8473 22.831 25.6985 22.831 24C22.831 22.3014 24.7456 21.1526 28.5749 18.855L30.913 17.4522C34.9418 15.0349 36.9562 13.8263 38.4781 14.6879C40 15.5496 40 17.8988 40 22.5971Z" fill="#212129"/>
                            <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 22.4781 33.312C20.9562 34.1737 18.9418 32.9651 14.913 30.5478L12.5749 29.1449C8.74561 26.8473 6.83095 25.6985 6.83095 24C6.83095 22.3014 8.74561 21.1526 12.5749 18.855L14.913 17.4522C18.9418 15.0349 20.9562 13.8263 22.4781 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                        </svg>
                    </button>

                    <button class="play w-10 h-10 rounded-full bg-[#6837FA]" ref="play" @click="initSong(id, name)">
                        <font-awesome-icon class="big-play-icon text-white" :icon="['fas', 'play']"/>
                        <font-awesome-icon class="big-pause-icon text-white hide" :icon="['fas', 'pause']"/>
                    </button>

                    <button class="next" ref="next" @click="nextSong">
                        <svg class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 22.5971V25.4028C8 30.1012 8 32.4503 9.5219 33.312C11.0438 34.1737 13.0582 32.9651 17.087 30.5478L19.4251 29.1449C23.2544 26.8473 25.169 25.6985 25.169 24C25.169 22.3014 23.2544 21.1526 19.4251 18.855L17.087 17.4522C13.0582 15.0349 11.0438 13.8263 9.5219 14.6879C8 15.5496 8 17.8988 8 22.5971Z" fill="#212129"/>
                            <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 25.5219 33.312C27.0438 34.1737 29.0582 32.9651 33.087 30.5478L35.4251 29.1449C39.2544 26.8473 41.169 25.6985 41.169 24C41.169 22.3014 39.2544 21.1526 35.4251 18.855L33.087 17.4522C29.0582 15.0349 27.0438 13.8263 25.5219 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                        </svg>
                    </button>
                </div>

                <div class="relative items-center hidden w-full space-x-5 right-container md:flex lg:space-x-10">
                    <input class="progress progress-2 w-full bg-[#E6EEFD] rounded-full h-1 relative" type="range" name="range" id="range" min="0" max="100" value="0" @change="seek" @input="seek">

                    <button class="speaker md:hidden lg:block" ref="speaker">
                        <svg class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18C4 16.8954 4.89543 16 6 16H13.2984C13.7526 16 14.1932 15.8454 14.5478 15.5617L22.3753 9.29976C23.0301 8.77595 24 9.24212 24 10.0806V37.9194C24 38.7579 23.0301 39.2241 22.3753 38.7002L14.5478 32.4383C14.1932 32.1546 13.7526 32 13.2984 32H6C4.89543 32 4 31.1046 4 30V18Z" fill="#212129"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7274 14.7272C29.4303 14.0242 30.57 14.0242 31.273 14.7272L30.0002 16C31.273 14.7272 31.2724 14.7266 31.273 14.7272L31.2752 14.7294L31.2777 14.7319L31.2835 14.7377L31.2984 14.7529L31.3406 14.7969C31.3741 14.8323 31.4182 14.8798 31.4713 14.9392C31.5774 15.0579 31.7199 15.2247 31.8865 15.4375C32.2189 15.8623 32.6511 16.4759 33.0804 17.263C33.9388 18.8367 34.8002 21.1319 34.8002 24C34.8002 26.868 33.9388 29.1632 33.0804 30.7369C32.6511 31.524 32.2189 32.1376 31.8865 32.5624C31.7199 32.7752 31.5774 32.942 31.4713 33.0607C31.4182 33.1201 31.3741 33.1676 31.3406 33.203L31.2984 33.247L31.2835 33.2622L31.2777 33.268L31.2752 33.2705C31.2747 33.2711 31.273 33.2727 30.0002 32L31.273 33.2727C30.57 33.9757 29.4303 33.9757 28.7274 33.2727C28.027 32.5723 28.0245 31.4383 28.7198 30.7348L28.7272 30.7271C28.7376 30.7161 28.758 30.6943 28.7869 30.6619C28.8449 30.597 28.9367 30.4903 29.0514 30.3437C29.2815 30.0498 29.5993 29.6009 29.92 29.013C30.5616 27.8367 31.2002 26.1319 31.2002 24C31.2002 21.868 30.5616 20.1632 29.92 18.9869C29.5993 18.399 29.2815 17.9501 29.0514 17.6562C28.9367 17.5096 28.8449 17.4029 28.7869 17.338C28.758 17.3056 28.7376 17.2838 28.7272 17.2728L28.7198 17.2651C28.0245 16.5616 28.027 15.4276 28.7274 14.7272Z" fill="#212129"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M34.687 6.76886C35.3669 6.04362 36.5061 6.00688 37.2313 6.68679L36.0002 7.99996C37.2313 6.68679 37.2319 6.68731 37.2324 6.68786L37.2337 6.68907L37.2367 6.69191L37.2445 6.69928L37.2669 6.72073C37.2849 6.738 37.3088 6.76123 37.3382 6.79034C37.397 6.84856 37.4781 6.9304 37.5781 7.03537C37.7781 7.24522 38.0547 7.5481 38.382 7.94019C39.0359 8.72344 39.8971 9.8685 40.756 11.3447C42.4731 14.296 44.2002 18.6064 44.2002 24C44.2002 29.3935 42.4731 33.704 40.756 36.6552C39.8971 38.1314 39.0359 39.2765 38.382 40.0597C38.0547 40.4518 37.7781 40.7547 37.5781 40.9645C37.4781 41.0695 37.397 41.1514 37.3382 41.2096C37.3088 41.2387 37.2849 41.2619 37.2669 41.2792L37.2445 41.3006L37.2367 41.308L37.2337 41.3108L37.2324 41.3121C37.2319 41.3126 37.2313 41.3131 36.0002 40L37.2313 41.3131C36.5061 41.993 35.3669 41.9563 34.687 41.2311C34.0083 40.507 34.0437 39.3705 34.7655 38.6902C34.7664 38.6894 34.7672 38.6885 34.7681 38.6877L34.7673 38.6885L34.7702 38.6857L34.806 38.6507C34.8409 38.6161 34.8973 38.5593 34.9723 38.4807C35.1223 38.3233 35.3457 38.0793 35.6184 37.7527C36.1645 37.0984 36.9033 36.1185 37.6444 34.8447C39.1273 32.296 40.6002 28.6064 40.6002 24C40.6002 19.3935 39.1273 15.704 37.6444 13.1552C36.9033 11.8814 36.1645 10.9015 35.6184 10.2472C35.3457 9.92056 35.1223 9.67657 34.9723 9.51923C34.8973 9.44061 34.8409 9.38377 34.806 9.34922L34.7702 9.31422L34.7652 9.30941C34.7652 9.30948 34.7655 9.30975 34.766 9.3102L34.7673 9.31139L34.7681 9.31219C34.0438 8.63217 34.0074 7.49377 34.687 6.76886ZM34.7652 9.30941L34.7652 9.30941L34.7652 9.30941Z" fill="#212129"/>
                        </svg>
                    </button>

                    <button class="share md:hidden lg:block">
                        <svg class="w-6" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15L18.3333 3.33337V10C6.66667 11.6667 1.66667 20 0 28.3334C4.16667 22.5 10 19.8334 18.3333 19.8334V26.6667L30 15Z" fill="#1E1F20"/>
                            <mask id="mask0_196_945" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="3" width="30" height="26">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30 15L18.3333 3.33337V10C6.66667 11.6667 1.66667 20 0 28.3334C4.16667 22.5 10 19.8334 18.3333 19.8334V26.6667L30 15Z" fill="white"/>
                            </mask>
                            <g mask="url(#mask0_196_945)">
                            </g>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </footer> -->
    
    <audio class="audio" src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3" ref="audio" @timeupdate="updateProgress" @ended="nextSong"></audio>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
    layout: 'music',

    transitions: {

    },
    
    data() {
        return {
            tracks: [
                {
                    name: 'Bangee (Single)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773122/Codeboy/BANJEE_COVER_ART_vqpnxx.webp',
                    duration: '3:44',
                    id: 0,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3',
                    type: 'singles',
                    link: '/lyrics/Bangee (Single)'
                },

                {
                    name: 'Capable (Single)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/CAPABLE_COVER_ART_l62y4f.webp',
                    duration: '2:36',
                    id: 1,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773117/Codeboy/Capable_SINGLE_s8sumh.wav',
                    type: 'singles'
                },

                {
                    name: 'MPR (Single)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773121/Codeboy/MPR_COVER_ART_wrm1el.webp',
                    duration: '3:13',
                    id: 2,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773069/Codeboy/MPR_SINGLE_ge5ssh.mp3',
                    type: 'singles'
                },

                {
                    name: 'Never Change Up',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773130/Codeboy/Never_Change_Up_COVER_ART_dwof1i.webp',
                    duration: '3:30',
                    id: 3,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773083/Codeboy/Never_Change_Up_SINGLE_up5mrz.mp3',
                    type: 'singles'
                },

                {
                    name: 'Nothing 2 Prove',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773126/Codeboy/Nothing_2_Prove_COVER_ART_nluixb.webp',
                    duration: '3:14',
                    id: 4,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3',
                    type: 'singles'
                },

                {
                    name: 'Tony Parker (Single)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773120/Codeboy/TONY_PARKER_COVER_ART_eddorz.webp',
                    duration: '2:39',
                    id: 5,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/v1642772986/Codeboy/Tony_Parker_SINGLE_feuend.mp3',
                    type: 'singles'
                },
                
                {
                    name: 'Rough Patches',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1642773123/Codeboy/Rough_Patches_COVER_ART_bqlmqr.webp',
                    duration: '3:04',
                    id: 6,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773087/Codeboy/Rough_Patches_SINGLE_vyvyl7.mp3',
                    type: 'singles'
                },

                {
                    name: 'All Up (Mix 2)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:03',
                    id: 7,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321054/Codeboy/All_Up_Mix_2_mluspe.mp3'
                },

                {
                    name: 'Diddy Skit',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:20',
                    id: 8,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320986/Codeboy/Diddy_Skit_ygzo3g.mp3'
                },

                {
                    name: 'Dimes',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '2:35',
                    id: 9,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321031/Codeboy/Dimes_uolkhw.mp3'
                },

                 {
                    name: 'Feel This',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:17',
                    id: 10,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321067/Codeboy/Feel_This_qhfdee.mp3'
                },
                
                {
                    name: 'Moment',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:15',
                    id: 11,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321084/Codeboy/Moment_wqtr77.mp3'
                },

                {
                    name: 'Soarin Mix 1',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '2:31',
                    id: 12,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/v1643321029/Codeboy/Soarin_Mix_1_rbpgkg.mp3'
                },

                {
                    name: 'Throwing Shade (Quick Mix)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:12',
                    id: 13,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320985/Codeboy/Throwin_Shade_Quick_Mix_ih6wgs.mp3'
                },

                {
                    name: 'Toast Up Mix 1',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:06',
                    id: 14,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1643321058/Codeboy/Toast_Up_Mix_1_dtbjc1.mp3'
                },

                {
                    name: 'Bangee (Single)',
                    cover: 'https://res.cloudinary.com/eazzie/image/upload/q_100/v1643853024/Codeboy/CODE_LIFE_ALBUM_COVER_ART_isbmud.webp',
                    duration: '3:44',
                    id: 15,
                    src: 'https://res.cloudinary.com/eazzie/video/upload/q_100/v1642773073/Codeboy/Banjee_SINGLE_a8uvtn.mp3'
                },
            ],
            // currentCover: '',
            // currentTitle: '',
            // currentSong: this.currenSongTitle
        }
    },

    computed: {
        ...mapState(["songIndex", "currentSongTitle", "currentSrc"])
    },

    methods: {
        ...mapMutations(["next", "prev", "changeSongIndex", "changeCurrentSongTitle", "changeCurrentSrc"]),

        initSong(id, name) {
            let audio = document.querySelector('.audio')
            const isPlaying = audio.classList.contains('playing')

                // this.changeCurrentSongTitle(name)
        	
            if(isPlaying) {
                this.pauseSong()
            } else {
                // this.changeSongIndex(songIndex)
                this.playSong(id, name)
                console.log(this.currentSongTitle)
            }
                // this.changeCurrentSongTitle(name)
        },

        playSong(id, name) {
            let audio = document.querySelector('.audio')
            const currentTile = document.querySelectorAll('.currentTile')
            const isPlaying = audio.classList.contains('playing')
            let bigPlayIcon = document.querySelector('.big-play-icon')
            let bigPauseIcon = document.querySelector('.big-pause-icon')

            this.changeSongIndex(id)
            this.changeCurrentSongTitle(name)
        
            this.tracks.map((item) => {
                if(item.id === id) {
                    audio.src = item.src
                    this.changeCurrentSrc(item.src)
                    console.log(item.src)
                    currentTile.forEach((itemTwo, index) => {
                        itemTwo.classList.remove('current')
                        
                        if(index === id) {
                            itemTwo.classList.add('current')
                        }
                })
                }
            })

            console.log(this.currentSrc)
            bigPlayIcon.classList.add('hide')
            bigPauseIcon.classList.remove('hide')

            audio.classList.add('playing')

            // this.changeCurrentSongTitle(name)
            // console.log(this.changeCurrentSongTitle(name)
            console.log(this.currentSongTitle)
            audio.play()
        },

        pauseSong(id, name) {
            let audio = document.querySelector('.audio')
            let bigPlayIcon = document.querySelector('.big-play-icon')
            let bigPauseIcon = document.querySelector('.big-pause-icon')
            
            audio.classList.remove('playing')
            bigPlayIcon.classList.remove('hide')
            bigPauseIcon.classList.add('hide')
            audio.currentTime = audio.currentTime
            audio.pause()
            // this.changeCurrentSongTitle(name)
            // this.changeCurrentSongTitle(name)
            console.log(this.currentSongTitle)
            console.log('paused')
        },

        nextSong(name) {
            let audio = document.querySelector('.audio')
            
            this.next(name)

            audio.classList.remove('playing')
            this.playSong(this.songIndex)
        },

        prevSong(name) {
            let audio = document.querySelector('.audio')

            this.prev(name)

            this.changeCurrentSongTitle(name)
            audio.classList.remove('playing')
            this.playSong(this.songIndex)
        },
        
        updateProgress(e) {
            const { currentTime, duration } = e.srcElement
            const progressPercent = (currentTime / duration) * 100
            const progress = document.querySelector('.progress')

            // const nodeList = document.querySelectorAll(".example");
            // for (let i = 0; i < progress.length; i++) {
            //     progress[i].value = progressPercent;
            // }
            // progress.value = progressPercent

            // console.log(progressPercent)

            // if(progressPercent === 100) {
            //     this.nextSong()
            // }
            progress.value = progressPercent
        },

        seek(e) {
            const progress = document.querySelector('.progress')
            const audio = document.querySelector('.audio')
            const duration = audio.duration
            let totalValue 

            // for (let i = 0; i < progress.length; i++) {
            //     audio.currentTime = ( progress[i].value / 100 ) * duration
            //     console.log(audio.currentTime)
            // }
            audio.currentTime = ( progress.value / 100 ) * duration
        },

        rewind() {
            const audio = document.querySelector('.audio')
            audio.currentTime = audio.currentTime - 15
        },

        forward() {
            const audio = document.querySelector('.audio')
            audio.currentTime = audio.currentTime + 15
        }
    },

    mounted() {    
        ScrollTrigger.matchMedia({
            "(min-width: 768px)": function() {
                gsap.to('.top-left-container', {
                    scrollTrigger: {
                        trigger: '.top-left-container',
                        endTrigger: '.mini-player',
                        start: 'top 20%',
                        end: '+=1200',
                        pin: true,
                    }
                })
            }
        })
    }
}
</script>

<style scoped>
.active {
    font-family: 'Monument Extended Regular';
    font-weight: 400;
    transition: 800ms;
}

.hide {
    display: none;
}

#range {
    /* -webkit-appearance: none; */
}

#range:focus {
    outline: none;
}
/* 
#range::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #6837FA;
} */

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
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Light';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended Regular';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf');
  font-weight: normal;
  font-style: normal;
}
</style>