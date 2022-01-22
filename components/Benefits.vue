<template>
    <section class="benefits mt-20 sm:mt-24 md:mt-28">
            <div class="benefits-container">
                <h2 class="font-caudex text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px] text-center">
                    Benefits
                </h2>

                <div class="list-of-benefits mt-5 md:mt-8 space-y-7 sm:space-y-0 sm:grid grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-7 lg:gap-x-10 xl:gap-x-20 gap-y-5 md:gap-y-5 lg:gap-y-10 xl:gap-y-20 lg:place-self-start">
                    <div class="first-benefit flex items-center lg:items-start space-x-5 lg:place-self-start">
                        <div class="left">
                            <svg class="w-14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <rect width="80" height="80" fill="url(#pattern0)" />
                                <defs>
                                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                        <use xlink:href="#image0_165_623" transform="scale(0.00195312)" />
                                    </pattern>
                                    <image id="image0_165_623" width="512" height="512"
                                        xlink:href="data:image/png;base64,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" />
                                </defs>
                            </svg>
                        </div>

                        <div class="right">
                            <p class="font-inter text-sm xl:text-base">
                                Listen to <span class="font-bold">Meetings & Makeups Tape</span> before public release
                            </p>
                        </div>
                    </div>

                    <div class="second-benefit flex items-cente lg:items-start space-x-5 lg:place-self-start">
                        <div class="left">
                            <img class="w-60 -ml-3" src="/images/Code Label.png" alt="">
                        </div>

                        <div class="right">
                            <p class="font-inter text-sm xl:text-base -ml-6">
                               A Music Label Position
                                within the CODE LIFE Records DAO, a music label fully run by CB Sai Look holders.
                            </p>
                        </div>
                    </div>

                    <div class="third-benefit flex items-center lg:items-start space-x-5 lg:place-self-start">
                        <div class="left">
                            <svg class="w-14" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.5897 26.9078H14.4288L8 31.0119V35.9215L13.947 32.1626H14.0992V53.0922H19.5897V26.9078Z"
                                    fill="#2E2B26" />
                                <path
                                    d="M34.5324 53.4502C40.3145 53.4502 44.2454 49.653 44.2327 44.3598C44.2454 39.3479 40.771 35.7425 36.092 35.7425C33.8096 35.7425 31.8442 36.7014 30.9312 37.9927H30.779L31.4511 31.4338H42.7998V26.9078H26.9243L25.6943 40.716L30.5762 41.5982C31.375 40.5114 32.922 39.8338 34.4563 39.8338C37.0684 39.8466 38.9451 41.7516 38.9451 44.5005C38.9451 47.2237 37.1064 49.1032 34.5324 49.1032C32.3514 49.1032 30.5888 47.7224 30.462 45.6895H25.1364C25.2378 50.2155 29.156 53.4502 34.5324 53.4502Z"
                                    fill="#2E2B26" />
                                <path
                                    d="M61.5624 48.1826C61.5751 51.3279 63.5659 54 67.2812 54C70.9584 54 73.0126 51.3279 72.9999 48.1826V46.8018C73.0126 43.6311 71.0092 40.9845 67.2812 40.9845C63.6166 40.9845 61.5751 43.6566 61.5624 46.8018V48.1826ZM48.2356 33.1982C48.2483 36.3434 50.239 38.99 53.9416 38.99C57.6316 38.99 59.6858 36.3689 59.6731 33.1982V31.8174C59.6858 28.6466 57.6823 26 53.9416 26C50.3151 26 48.2483 28.6466 48.2356 31.8174V33.1982ZM49.4782 53.0922H52.7878L70.6414 26.9078H67.3319L49.4782 53.0922ZM65.2524 46.8018C65.265 45.5489 65.7596 44.2575 67.2812 44.2575C68.8789 44.2575 69.2973 45.5489 69.2846 46.8018V48.1826C69.2973 49.4356 68.8282 50.7014 67.2812 50.7014C65.7342 50.7014 65.265 49.3973 65.2524 48.1826V46.8018ZM51.9509 31.8174C51.9635 30.6027 52.4327 29.2731 53.9416 29.2731C55.5393 29.2731 55.9705 30.5644 55.9578 31.8174V33.1982C55.9705 34.4511 55.4886 35.7169 53.9416 35.7169C52.4454 35.7169 51.9635 34.4511 51.9509 33.1982V31.8174Z"
                                    fill="#2E2B26" />
                                <rect x="0.5" y="0.5" width="79" height="79" stroke="#C3C2C1" />
                            </svg>
                        </div>

                        <div class="right">
                            <p class="font-inter text-sm xl:text-base">
                                M2E Earn Help manage CB Sai’s music career and split
                                revenue from streaming, performances, brand deals + merch sales.
                            </p>
                        </div>
                    </div>

                    <div class="fourth-benefit flex items-cente lg:items-startr space-x-5 lg:place-self-start">
                        <div class="left">
                            <img class="w-28" src="/images/Airdrop.png" alt="">
                        </div>

                        <div class="right">
                            <p class="font-inter text-sm xl:text-base ml-2">
                                Receive New Music Airdrops and Watch Listening Parties featuring the Kanye West
                                stemplayer.
                            </p>
                        </div>
                    </div>

                    <div class="fifth-benefit flex items-center lg:items-start space-x-5 lg:place-self-start">
                        <div class="left">
                            <img class="w-16" src="/images/Licensing.png" alt="">
                        </div>

                        <div class="right">
                            <p class="font-inter text-sm xl:text-base">
                                <span class="font-bold">License to Stream Music on websites like Twitch</span>
                            </p>

                            <p class="font-inter text-sm xl:text-base pt-1">
                                Tell the DMCA to fuck off!
                            </p>
                        </div>
                    </div>

                    <div class="sixth-benefit flex items-center lg:items-start space-x-5 lg:place-self-start">
                        <div class="left">
                            <img class="w-52 xl:w-72" src="/svg/handshake.svg" alt="">
                        </div>

                        <div class="right">
                            <p class="font-inter text-sm xl:text-base">
                                Listening Pass holders have Non-Exclusive Licensee Rights
                                of each NFT. CODEBOY Sai retains ownership of the master
                                records of the music.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>