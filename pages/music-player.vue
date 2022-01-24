<template>
  <div>
    <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
        <Navigation />

        <section class="mt-10 mb-20 player">
            <div class="items-start justify-between space-y-10 player-container md:flex md:space-y-0 md:space-x-10">
                <div class="top-left">
                    <h2 class="text-2xl text-center capitalize md:text-left font-cormorant sm:text-3xl md:text-2xl lg:text-4xl">
                        listening <br class="hidden lg:block"> player
                    </h2>

                    <p class="font-inter text-[10px] uppercase text-center md:text-left xl:text-xs 2xl:text-sm md:px-0 px-10 py-2">
                        A short paragraph describing your team. <br class="hidden md:block"> You may want to describe what they are <br class="hidden md:block"> responsible for
                    </p>

                    <ul class="tray w-full font-inter text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm flex md:flex-col justify-around items-center md:items-start mt-4 sm:mt-6 md:space-y-1">
                        <li><button class="uppercase general-button active">- all</button></li>
                        <li><button class="uppercase collection-button">- mixtapes</button></li>
                        <li><button class="uppercase repair-button">- singles</button></li>
                        <li><button class="uppercase delivery-button">- music videos</button></li>
                    </ul>
                </div>

                <div class="bottom-right w-full lg:w-[70%]">
                    <p class="font-cormorant font-bold text-[10px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg">
                        Now Playing:
                    </p>

                    <div class="mt-4 engine">
                        <div class="display w-full h-40 lg:h-48 xl:h-52 bg-[#C4C4C4] rounded-xl xl:rounded-2xl"></div>

                        <div class="relative mt-2 input">
                            <input class="w-full bg-[#E6EEFD] rounded-full h-1 relative" type="range" name="range" id="range" max="100" value="0">
                        </div>

                        <div class="flex items-center justify-between mt-5 controls">
                            <button class="speaker" ref="speaker">
                                <svg class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 18C4 16.8954 4.89543 16 6 16H13.2984C13.7526 16 14.1932 15.8454 14.5478 15.5617L22.3753 9.29976C23.0301 8.77595 24 9.24212 24 10.0806V37.9194C24 38.7579 23.0301 39.2241 22.3753 38.7002L14.5478 32.4383C14.1932 32.1546 13.7526 32 13.2984 32H6C4.89543 32 4 31.1046 4 30V18Z" fill="#212129"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7274 14.7272C29.4303 14.0242 30.57 14.0242 31.273 14.7272L30.0002 16C31.273 14.7272 31.2724 14.7266 31.273 14.7272L31.2752 14.7294L31.2777 14.7319L31.2835 14.7377L31.2984 14.7529L31.3406 14.7969C31.3741 14.8323 31.4182 14.8798 31.4713 14.9392C31.5774 15.0579 31.7199 15.2247 31.8865 15.4375C32.2189 15.8623 32.6511 16.4759 33.0804 17.263C33.9388 18.8367 34.8002 21.1319 34.8002 24C34.8002 26.868 33.9388 29.1632 33.0804 30.7369C32.6511 31.524 32.2189 32.1376 31.8865 32.5624C31.7199 32.7752 31.5774 32.942 31.4713 33.0607C31.4182 33.1201 31.3741 33.1676 31.3406 33.203L31.2984 33.247L31.2835 33.2622L31.2777 33.268L31.2752 33.2705C31.2747 33.2711 31.273 33.2727 30.0002 32L31.273 33.2727C30.57 33.9757 29.4303 33.9757 28.7274 33.2727C28.027 32.5723 28.0245 31.4383 28.7198 30.7348L28.7272 30.7271C28.7376 30.7161 28.758 30.6943 28.7869 30.6619C28.8449 30.597 28.9367 30.4903 29.0514 30.3437C29.2815 30.0498 29.5993 29.6009 29.92 29.013C30.5616 27.8367 31.2002 26.1319 31.2002 24C31.2002 21.868 30.5616 20.1632 29.92 18.9869C29.5993 18.399 29.2815 17.9501 29.0514 17.6562C28.9367 17.5096 28.8449 17.4029 28.7869 17.338C28.758 17.3056 28.7376 17.2838 28.7272 17.2728L28.7198 17.2651C28.0245 16.5616 28.027 15.4276 28.7274 14.7272Z" fill="#212129"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.687 6.76886C35.3669 6.04362 36.5061 6.00688 37.2313 6.68679L36.0002 7.99996C37.2313 6.68679 37.2319 6.68731 37.2324 6.68786L37.2337 6.68907L37.2367 6.69191L37.2445 6.69928L37.2669 6.72073C37.2849 6.738 37.3088 6.76123 37.3382 6.79034C37.397 6.84856 37.4781 6.9304 37.5781 7.03537C37.7781 7.24522 38.0547 7.5481 38.382 7.94019C39.0359 8.72344 39.8971 9.8685 40.756 11.3447C42.4731 14.296 44.2002 18.6064 44.2002 24C44.2002 29.3935 42.4731 33.704 40.756 36.6552C39.8971 38.1314 39.0359 39.2765 38.382 40.0597C38.0547 40.4518 37.7781 40.7547 37.5781 40.9645C37.4781 41.0695 37.397 41.1514 37.3382 41.2096C37.3088 41.2387 37.2849 41.2619 37.2669 41.2792L37.2445 41.3006L37.2367 41.308L37.2337 41.3108L37.2324 41.3121C37.2319 41.3126 37.2313 41.3131 36.0002 40L37.2313 41.3131C36.5061 41.993 35.3669 41.9563 34.687 41.2311C34.0083 40.507 34.0437 39.3705 34.7655 38.6902C34.7664 38.6894 34.7672 38.6885 34.7681 38.6877L34.7673 38.6885L34.7702 38.6857L34.806 38.6507C34.8409 38.6161 34.8973 38.5593 34.9723 38.4807C35.1223 38.3233 35.3457 38.0793 35.6184 37.7527C36.1645 37.0984 36.9033 36.1185 37.6444 34.8447C39.1273 32.296 40.6002 28.6064 40.6002 24C40.6002 19.3935 39.1273 15.704 37.6444 13.1552C36.9033 11.8814 36.1645 10.9015 35.6184 10.2472C35.3457 9.92056 35.1223 9.67657 34.9723 9.51923C34.8973 9.44061 34.8409 9.38377 34.806 9.34922L34.7702 9.31422L34.7652 9.30941C34.7652 9.30948 34.7655 9.30975 34.766 9.3102L34.7673 9.31139L34.7681 9.31219C34.0438 8.63217 34.0074 7.49377 34.687 6.76886ZM34.7652 9.30941L34.7652 9.30941L34.7652 9.30941Z" fill="#212129"/>
                                </svg>
                            </button>

                            <button class="previous" ref="previous">
                                <svg  class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M40 22.5971V25.4028C40 30.1012 40 32.4503 38.4781 33.312C36.9562 34.1737 34.9418 32.9651 30.913 30.5478L28.5749 29.1449C24.7456 26.8473 22.831 25.6985 22.831 24C22.831 22.3014 24.7456 21.1526 28.5749 18.855L30.913 17.4522C34.9418 15.0349 36.9562 13.8263 38.4781 14.6879C40 15.5496 40 17.8988 40 22.5971Z" fill="#212129"/>
                                    <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 22.4781 33.312C20.9562 34.1737 18.9418 32.9651 14.913 30.5478L12.5749 29.1449C8.74561 26.8473 6.83095 25.6985 6.83095 24C6.83095 22.3014 8.74561 21.1526 12.5749 18.855L14.913 17.4522C18.9418 15.0349 20.9562 13.8263 22.4781 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                                </svg>
                            </button>

                            <button class="rewind">
                                <svg class="w-7" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 18C4.25 20.5217 4.99777 22.9868 6.39876 25.0835C7.79975 27.1802 9.79102 28.8144 12.1208 29.7795C14.4505 30.7445 17.0141 30.997 19.4874 30.505C21.9607 30.0131 24.2325 28.7987 26.0156 27.0156C27.7987 25.2325 29.013 22.9607 29.505 20.4874C29.997 18.0141 29.7445 15.4505 28.7795 13.1208C27.8144 10.791 26.1802 8.79975 24.0835 7.39876C21.9868 5.99777 19.5217 5.25 17 5.25H12.75M12.75 5.25L17 1M12.75 5.25L17 9.5" stroke="#212129" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.1014 14.5H13.1014L11.1326 15.7031V17.5469L12.8826 16.5H12.9295V22.5H15.1014V14.5ZM19.7271 22.6094C21.6763 22.6094 22.9497 21.4258 22.9458 19.75C22.9497 18.2305 21.8872 17.1562 20.4615 17.1562C19.649 17.1562 18.9927 17.5156 18.7427 18H18.6958L18.8521 16.2344H22.4458V14.5H17.0708L16.7583 18.9062L18.6646 19.2812C18.8482 18.8906 19.2661 18.6562 19.7271 18.6562C20.3911 18.6562 20.856 19.1133 20.8521 19.8125C20.856 20.5117 20.3911 20.9687 19.7271 20.9687C19.1529 20.9687 18.6802 20.6172 18.6646 20.0625H16.5552C16.5669 21.5547 17.8833 22.6094 19.7271 22.6094Z" fill="#212129"/>
                                </svg>
                            </button>

                            <button class="play" ref="play" @click="play(1)">
                                <svg class="w-16" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_196_940)">
                                    <circle cx="61" cy="51" r="46" fill="#6837FA"/>
                                    <path d="M47.667 47.4445V54.5556C47.667 62.4946 47.667 66.4642 50.2563 68.0178C52.8457 69.5714 56.3482 67.7034 63.3533 63.9674L70.0199 60.4118C77.7846 56.2706 81.667 54.2 81.667 51C81.667 47.8 77.7846 45.7294 70.0199 41.5883L63.3533 38.0327C56.3482 34.2967 52.8457 32.4287 50.2563 33.9823C47.667 35.5359 47.667 39.5054 47.667 47.4445Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <filter id="filter0_d_196_940" x="0" y="0" width="122" height="122" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                    <feOffset dy="10"/>
                                    <feGaussianBlur stdDeviation="7.5"/>
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_196_940"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_196_940" result="shape"/>
                                    </filter>
                                    </defs>
                                </svg>
                            </button>

                            <audio class="audio" src="https://res.cloudinary.com/eazzie/video/upload/v1642773081/Codeboy/Nothing_2_Prove_SINGLE_ys2oof.mp3" ref="audio"></audio>

                            <button class="forward">
                                <svg class="w-7" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M29.75 18C29.75 20.5217 29.0022 22.9868 27.6012 25.0835C26.2003 27.1802 24.209 28.8144 21.8792 29.7795C19.5495 30.7445 16.9859 30.997 14.5126 30.505C12.0393 30.0131 9.76751 28.7987 7.98439 27.0156C6.20127 25.2325 4.98695 22.9607 4.49499 20.4874C4.00303 18.0141 4.25552 15.4505 5.22054 13.1208C6.18556 10.791 7.81976 8.79975 9.91649 7.39876C12.0132 5.99777 14.4783 5.25 17 5.25H21.25M21.25 5.25L17 1M21.25 5.25L17 9.5" stroke="#212129" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M15.1014 14.5H13.1014L11.1326 15.7031V17.5469L12.8826 16.5H12.9295V22.5H15.1014V14.5ZM19.7271 22.6094C21.6763 22.6094 22.9497 21.4258 22.9458 19.75C22.9497 18.2305 21.8872 17.1562 20.4615 17.1562C19.649 17.1562 18.9927 17.5156 18.7427 18H18.6958L18.8521 16.2344H22.4458V14.5H17.0708L16.7583 18.9062L18.6646 19.2812C18.8482 18.8906 19.2661 18.6562 19.7271 18.6562C20.3911 18.6562 20.856 19.1133 20.8521 19.8125C20.856 20.5117 20.3911 20.9687 19.7271 20.9687C19.1529 20.9687 18.6802 20.6172 18.6646 20.0625H16.5552C16.5669 21.5547 17.8833 22.6094 19.7271 22.6094Z" fill="#212129"/>
                                </svg>
                            </button>

                            <button class="next" ref="next">
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
                    </div>

                    <div class="mt-10 tracklist">
                        <p class="font-inter text-[10px] font-bold xl:text-xs 2xl:text-sm">
                            Tracklist
                        </p>

                        <div v-for="track in tracks" :key="track.id" class="track-container currentTile relative py-3 flex justify-between after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#E5E5E5] cursor-pointer" @click="pick" ref="currentTile">
                            <div class="left-container flex justify-between items-center w-[57%] md:w-[49%]">
                                <div class=".left-container flex items-center space-x-2">
                                    <div class="cover w-14 h-14 bg-[#E5E5E5] rounded-lg">
                                        <nuxt-img class="w-full" :src="track.cover" alt="" format="webp" />
                                    </div>

                                    <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base">
                                        Days <br class="md:hidden"> Amazing
                                    </p>
                                </div>

                                <div class="right-container">
                                    <button class="mt-1.5" ref="button" @click="play(track.id)">
                                        <svg class="w-7" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="18" fill="#6837FA"/>
                                            <path d="M11.8525 16.6088V19.7827C11.8525 23.3261 11.8525 25.0979 13.0083 25.7913C14.164 26.4847 15.7272 25.651 18.8538 23.9835L21.8294 22.3965C25.295 20.5482 27.0278 19.624 27.0278 18.1957C27.0278 16.7675 25.295 15.8433 21.8294 13.995L18.8538 12.408C15.7272 10.7405 14.164 9.90675 13.0083 10.6002C11.8525 11.2936 11.8525 13.0653 11.8525 16.6088Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>

                                
                            </div>

                            <div class="right-container flex justify-between items-center w-[40%] md:w-[49%]">
                                <p class="text-xs font-medium duration font-inter lg:text-sm xl:text-base 2xl:text-lg">
                                    {{ track.duration }}
                                </p>

                                <button class="lyrics text-[10px] xl:text-xs 2xl:text-sm py-2 px-3 rounded-full border border-black">
                                    Lyrics
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <footer class="mini-player w-full bg-[#FAFAFA] py-3 fixed bottom-0">
        <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
            <div class="flex items-center justify-between mini-player-container lg:justify-start md:space-x-10 lg:space-x-20 xl:space-x-28 2xl:space-x-36">
                <div class="flex items-center space-x-2 left-container">
                    <div class="cover w-14 h-14 bg-[#E5E5E5] rounded-lg">
                        <!-- <cover class="w-full" :src="track.cover" alt=""> -->
                    </div>

                    <p class="title font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base whitespace-nowrap">
                        Days <br class="lg:hidden"> Amazing
                    </p>
                </div>

                <div class="flex items-center justify-between space-x-4 mid-container">
                    <button class="previous" ref="previous">
                        <svg  class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M40 22.5971V25.4028C40 30.1012 40 32.4503 38.4781 33.312C36.9562 34.1737 34.9418 32.9651 30.913 30.5478L28.5749 29.1449C24.7456 26.8473 22.831 25.6985 22.831 24C22.831 22.3014 24.7456 21.1526 28.5749 18.855L30.913 17.4522C34.9418 15.0349 36.9562 13.8263 38.4781 14.6879C40 15.5496 40 17.8988 40 22.5971Z" fill="#212129"/>
                            <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 22.4781 33.312C20.9562 34.1737 18.9418 32.9651 14.913 30.5478L12.5749 29.1449C8.74561 26.8473 6.83095 25.6985 6.83095 24C6.83095 22.3014 8.74561 21.1526 12.5749 18.855L14.913 17.4522C18.9418 15.0349 20.9562 13.8263 22.4781 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                        </svg>
                    </button>

                    <button class="play" ref="play" @click="play">
                        <svg class="w-10" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="46" cy="46" r="46" fill="#6837FA"/>
                            <path d="M32.667 42.4445V49.5556C32.667 57.4946 32.667 61.4642 35.2563 63.0178C37.8457 64.5714 41.3482 62.7034 48.3533 58.9674L55.0199 55.4118C62.7846 51.2706 66.667 49.2 66.667 46C66.667 42.8 62.7846 40.7294 55.0199 36.5883L48.3533 33.0327C41.3482 29.2967 37.8457 27.4287 35.2563 28.9823C32.667 30.5359 32.667 34.5054 32.667 42.4445Z" fill="white"/>
                        </svg>
                    </button>

                    <button class="next" ref="next">
                        <svg class="w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 22.5971V25.4028C8 30.1012 8 32.4503 9.5219 33.312C11.0438 34.1737 13.0582 32.9651 17.087 30.5478L19.4251 29.1449C23.2544 26.8473 25.169 25.6985 25.169 24C25.169 22.3014 23.2544 21.1526 19.4251 18.855L17.087 17.4522C13.0582 15.0349 11.0438 13.8263 9.5219 14.6879C8 15.5496 8 17.8988 8 22.5971Z" fill="#212129"/>
                            <path d="M24 22.5971V25.4028C24 30.1012 24 32.4503 25.5219 33.312C27.0438 34.1737 29.0582 32.9651 33.087 30.5478L35.4251 29.1449C39.2544 26.8473 41.169 25.6985 41.169 24C41.169 22.3014 39.2544 21.1526 35.4251 18.855L33.087 17.4522C29.0582 15.0349 27.0438 13.8263 25.5219 14.6879C24 15.5496 24 17.8988 24 22.5971Z" fill="#212129"/>
                        </svg>
                    </button>
                </div>

                <div class="relative items-center hidden w-full space-x-5 right-container md:flex lg:space-x-10">
                    <input class="w-full bg-[#E6EEFD] rounded-full h-1 relative" type="range" name="range" id="range" max="100" value="50">

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
    </footer>
  </div>
</template>

<script>

export default {
    layout: 'music',
    
    data() {
        return {
            tracks: [
                {
                    cover: '/images/iPod.png',
                    duration: '10:20',
                    id: 0,
                    src: '/music/Banjee (SINGLE).mp3'
                },

                {
                    cover: '/images/iPod.png',
                    duration: '10:20',
                    id: 1,
                    src: '/music/Capable (SINGLE).wav'
                },

                {
                    cover: '/images/iPod.png',
                    duration: '10:20',
                    id: 2,
                    src: '/music/Nothing 2 Prove (SINGLE).mp3'
                },

                {
                    cover: '/images/iPod.png',
                    duration: '10:20',
                    id: 3
                },

                {
                    cover: '/images/tracklist.png',
                    duration: '10:20',
                    id: 4
                },
            ],
            currentCover: '',
            currentTitle: '',
            currentSong: ''
        }
    },

    methods: {
        play(id) {
            const audio = document.querySelector('.audio')
            const currentTile = document.querySelectorAll('.currentTile')

            
            
            this.tracks.map((item) => {
                if(item.id === id) {
                    audio.src = item.src
                    currentTile.forEach((itemTwo, index) => {
                        itemTwo.classList.remove('current')
                        
                        if(index === id) {
                            itemTwo.classList.add('current')
                            console.log(id)
                            console.log(index)
                        }
                })
                }
            })
            audio.play()
        },

        next() {
            
        },
    }
}
</script>

<style>
.active {
    font-weight: 700;
    transition: 800ms;
}

.current {
    background-color: #6837fa;
}

#range {
    -webkit-appearance: none;
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


</style>