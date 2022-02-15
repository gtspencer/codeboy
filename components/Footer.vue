<template>
  <footer class="" ref="footer">
    <div
      class="grid-cols-3 mt-16 space-y-8 code-music-socials md:hidden lg:grid lg:justify-between lg:space-y-0"
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
            class="music-button uppercase text-[#2E2B26] font-sf font-medium text-[10px] xl:text-xs 2xl:text-sm py-1.5 px-4 xl:pl-7 w-56 xl:w-[17rem] 2xl:w-[19rem] xl:h-14 2xl:h-16 border rounded-full border-black flex justify-between items-center tracking-widest"
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
          <div class="flex items-center hover:scale-[1.05] transition duration-500 twitter-social">
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

          <div class="flex items-center hover:scale-[1.05] transition duration-500 insta-social">
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

          <div class="flex items-center hover:scale-[1.05] transition duration-500 youtube-social">
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

          <div class="flex items-center hover:scale-[1.05] transition duration-500 tidal-social">
            <a href="http://tidal.com/browse/artist/9574300" target="_blank" rel="noopener noreferrer">
              <svg class="w-8 stroke-current xl:w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.0861 26.5L42.6947 21.7522L47.3032 26.5L42.6947 31.2478L38.0861 26.5ZM32.016 21.7179L36.6579 26.5L32.016 31.2821L27.3741 26.5L32.016 21.7179ZM27.3741 37.5L32.016 32.7179L36.6579 37.5L32.016 42.2821L27.3741 37.5ZM25.9805 26.5L21.3387 31.2821L16.6968 26.5L21.3387 21.7179L25.9805 26.5Z" stroke="black"/>
                <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="black"/>
              </svg>
            </a>
          </div>

          <div class="flex items-center hover:scale-[1.05] transition duration-500 spotify-social">
            <a href="https://open.spotify.com/artist/21nlk9QNU6Hxo3yQOuB2G3" target="blank">
              <svg class="w-8 stroke-current xl:w-12" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.75 14C27.75 21.5939 21.5939 27.75 14 27.75C6.40608 27.75 0.25 21.5939 0.25 14C0.25 6.40608 6.40608 0.25 14 0.25C21.5939 0.25 27.75 6.40608 27.75 14Z" fill="white" stroke="black" stroke-width="0.5"/>
                <path d="M20.1528 19.4897L20.1528 19.4897C19.9921 19.7448 19.6349 19.8317 19.341 19.6643C16.1313 17.8032 12.1254 17.3963 7.42905 18.4067C7.09811 18.4736 6.79728 18.2789 6.7355 18.0044L6.7355 18.0044C6.67108 17.7183 6.85194 17.4266 7.16346 17.3631L7.16346 17.3631L7.1667 17.3624C12.2104 16.2636 16.5115 16.7362 19.9512 18.7458L19.9533 18.747C20.2334 18.907 20.3131 19.2354 20.1528 19.4897ZM6.73261 13.3668L6.73262 13.3669L6.73621 13.3658C11.5223 11.9868 17.4782 12.6495 21.5451 15.0261C21.8881 15.2291 22.0049 15.678 21.7806 16.0264C21.5551 16.3766 21.0676 16.4913 20.6794 16.2784C17.0287 14.1328 11.4907 13.521 7.18949 14.7673C6.74629 14.8868 6.31973 14.6533 6.20455 14.2824C6.08725 13.8897 6.30689 13.4826 6.73261 13.3668ZM22.2616 12.3335L22.2616 12.3335L22.2571 12.331C20.0613 11.0921 17.1711 10.4223 14.3238 10.2082C11.4753 9.99399 8.642 10.2337 6.55002 10.8359L6.55002 10.8358L6.54691 10.8368C6.01627 10.997 5.45723 10.7107 5.29424 10.2094L5.29425 10.2094L5.29368 10.2077C5.13609 9.73454 5.42263 9.20068 5.95663 9.03873C8.28172 8.36595 11.3914 8.09372 14.5367 8.33856C17.6835 8.5835 20.8415 9.34407 23.2709 10.7169C23.7411 10.983 23.8855 11.5541 23.6126 11.9912L23.6124 11.9911L23.6084 11.9981C23.3449 12.452 22.735 12.6136 22.2616 12.3335Z" fill="white" stroke="black" stroke-width="0.5"/>
              </svg>
            </a>
          </div>

          <div class="flex items-center hover:scale-[1.05] transition duration-500 apple-social">
            <a href="https://music.apple.com/us/artist/codeboy-sai/1351439855" target="_blank" rel="noopener noreferrer">
              <svg class="w-8 stroke-current xl:w-12" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.75 14C27.75 21.5939 21.5939 27.75 14 27.75C6.40609 27.75 0.25 21.5939 0.25 14C0.25 6.40609 6.40609 0.25 14 0.25C21.5939 0.25 27.75 6.40609 27.75 14Z" fill="white" stroke="black" stroke-width="0.5"/>
                <path d="M19.9996 5L10.1619 7.67355H10.1505V11.6952H10.1619V18.8861C9.73153 18.6258 9.20389 18.4712 8.637 18.4712C7.1767 18.4712 6 19.4905 6 20.7413C6 21.9925 7.17703 23 8.637 23C10.097 23 11.3378 21.9915 11.2858 20.7414L11.259 20.0997L11.194 11.4069L18.9679 9.29791V17.2377C18.514 16.9232 17.9346 16.7307 17.3054 16.7307C15.8451 16.7307 14.668 17.75 14.668 19.0008C14.668 20.252 15.8451 21.2594 17.3054 21.2594C18.7657 21.2594 19.993 20.252 19.993 19.0008C19.993 18.989 19.9934 18.9779 19.993 18.9661L20 9.02101V5H19.9996Z" fill="white" stroke="black" stroke-width="0.5"/>
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

    <!-- FOR SCREEN 768 ONLY!!!! -->
    <div class="hidden mt-16 space-y-10 code-music-socials md:block lg:hidden">
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
              <svg class="w-8 stroke-current xl:w-12" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M38.0861 26.5L42.6947 21.7522L47.3032 26.5L42.6947 31.2478L38.0861 26.5ZM32.016 21.7179L36.6579 26.5L32.016 31.2821L27.3741 26.5L32.016 21.7179ZM27.3741 37.5L32.016 32.7179L36.6579 37.5L32.016 42.2821L27.3741 37.5ZM25.9805 26.5L21.3387 31.2821L16.6968 26.5L21.3387 21.7179L25.9805 26.5Z" stroke="black"/>
                <rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="black"/>
              </svg>
            </a>
          </div>

          <div class="flex items-center spotify-social">
            <a href="https://open.spotify.com/artist/21nlk9QNU6Hxo3yQOuB2G3" target="blank">
              <svg class="w-8 stroke-current xl:w-12" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.75 14C27.75 21.5939 21.5939 27.75 14 27.75C6.40608 27.75 0.25 21.5939 0.25 14C0.25 6.40608 6.40608 0.25 14 0.25C21.5939 0.25 27.75 6.40608 27.75 14Z" fill="white" stroke="black" stroke-width="0.5"/>
                <path d="M20.1528 19.4897L20.1528 19.4897C19.9921 19.7448 19.6349 19.8317 19.341 19.6643C16.1313 17.8032 12.1254 17.3963 7.42905 18.4067C7.09811 18.4736 6.79728 18.2789 6.7355 18.0044L6.7355 18.0044C6.67108 17.7183 6.85194 17.4266 7.16346 17.3631L7.16346 17.3631L7.1667 17.3624C12.2104 16.2636 16.5115 16.7362 19.9512 18.7458L19.9533 18.747C20.2334 18.907 20.3131 19.2354 20.1528 19.4897ZM6.73261 13.3668L6.73262 13.3669L6.73621 13.3658C11.5223 11.9868 17.4782 12.6495 21.5451 15.0261C21.8881 15.2291 22.0049 15.678 21.7806 16.0264C21.5551 16.3766 21.0676 16.4913 20.6794 16.2784C17.0287 14.1328 11.4907 13.521 7.18949 14.7673C6.74629 14.8868 6.31973 14.6533 6.20455 14.2824C6.08725 13.8897 6.30689 13.4826 6.73261 13.3668ZM22.2616 12.3335L22.2616 12.3335L22.2571 12.331C20.0613 11.0921 17.1711 10.4223 14.3238 10.2082C11.4753 9.99399 8.642 10.2337 6.55002 10.8359L6.55002 10.8358L6.54691 10.8368C6.01627 10.997 5.45723 10.7107 5.29424 10.2094L5.29425 10.2094L5.29368 10.2077C5.13609 9.73454 5.42263 9.20068 5.95663 9.03873C8.28172 8.36595 11.3914 8.09372 14.5367 8.33856C17.6835 8.5835 20.8415 9.34407 23.2709 10.7169C23.7411 10.983 23.8855 11.5541 23.6126 11.9912L23.6124 11.9911L23.6084 11.9981C23.3449 12.452 22.735 12.6136 22.2616 12.3335Z" fill="white" stroke="black" stroke-width="0.5"/>
              </svg>
            </a>
          </div>

          <div class="flex items-center apple-social">
            <a href="https://music.apple.com/us/artist/codeboy-sai/1351439855" target="_blank" rel="noopener noreferrer">
              <svg class="w-8 stroke-current xl:w-12" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M27.75 14C27.75 21.5939 21.5939 27.75 14 27.75C6.40609 27.75 0.25 21.5939 0.25 14C0.25 6.40609 6.40609 0.25 14 0.25C21.5939 0.25 27.75 6.40609 27.75 14Z" fill="white" stroke="black" stroke-width="0.5"/>
                <path d="M19.9996 5L10.1619 7.67355H10.1505V11.6952H10.1619V18.8861C9.73153 18.6258 9.20389 18.4712 8.637 18.4712C7.1767 18.4712 6 19.4905 6 20.7413C6 21.9925 7.17703 23 8.637 23C10.097 23 11.3378 21.9915 11.2858 20.7414L11.259 20.0997L11.194 11.4069L18.9679 9.29791V17.2377C18.514 16.9232 17.9346 16.7307 17.3054 16.7307C15.8451 16.7307 14.668 17.75 14.668 19.0008C14.668 20.252 15.8451 21.2594 17.3054 21.2594C18.7657 21.2594 19.993 20.252 19.993 19.0008C19.993 18.989 19.9934 18.9779 19.993 18.9661L20 9.02101V5H19.9996Z" fill="white" stroke="black" stroke-width="0.5"/>
              </svg>
            </a>
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

/* .spotify a svg {
  stroke-width: 2px;
} */
</style>
