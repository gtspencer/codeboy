<template>
  <div>
    <RecordNavigationTwo />

    <section class="music-label my-10 lg:my-16 xl:my-20 overflow-hidden">
      <div class="music-label-container space-y-7 lg:space-y-10 xl:px-20">
        <div class="top sm:grid grid-cols-2 lg:grid-cols-4 space-y-7 sm:space-y-0 sm:gap-y-7 overflow-hidden">
          <div class="header-and-image col-span-2 sm:text-center lg:text-left">
            <h1 data-aos="fade-right" data-aos-duration="1000" class="font-cormorant text-white text-[34px] sm:text-[40px] lg:text-5xl xl:text-[52px] 2xl:text-6xl">
                Music Label Positions:
            </h1>

            <div data-aos="fade-in" data-aos-duration="1000" class="flex justify-center xl:justify-start">
              <video
                class="md:-ml-10"
                src="https://res.cloudinary.com/eazzie/video/upload/q_100/v1643320828/Codeboy/SILVERDESK-215X716_jk4vhv.webm"
                alt="A video of the label positions"
                autoplay
                loop
                muted
                />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="position-ar-rep justify-self-center">
              <p class="post font-cormorant text-white text-2xl xl:text-3xl 2xl:text-4xl">
                A&R Rep
              </p>

              <p class="requirement font-inter font-bold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
                Required CB Sai Looks: 2 
              </p>

              <p class="details font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-24 2xl:pr-28">
                An A&R Rep plays an important role in the development of CODEBOY Sai and other artists
                on CODE LIFE Records once we begin taking artist submissions through A&R Scouts.
                  <span class="ar-span hidden">
                  An A&R Rep plays an important role in the development of CODEBOY Sai and other artists
                  on CODE LIFE Records once we begin taking artist submissions through A&R Scouts.
                  </span>
              </p>

              <button class="ar-read-more font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2" @click="handleAr">
                {{ arButtonState }}

                <svg class="w-2 xl:w-3 ml-2 xl:ml-3" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z" fill="white"/>
                </svg>
              </button>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" class="position-merchandiser justify-self-center">
              <p class="post font-cormorant text-white text-2xl xl:text-3xl 2xl:text-4xl">
                Merchandiser
              </p>

              <p class="requirement font-inter font-bold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
                Required CB Sai Looks: 2 
              </p>

              <p class="details font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-24 2xl:pr-28">
                The merchandiser role is responsible for shipping VINYL records, merch, and other products from CODEBOY SAI for the purpose of sales. 
                  <span class="merchandiser-span hidden">
                  The merchandiser role is responsible for shipping VINYL records, merch, and other products from CODEBOY SAI for the purpose of sales. 
                  </span>
              </p>

              <button class="ar-read-more font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2" @click="handleMerchandiser">
                {{ merchandiserButtonState }}

                <svg class="w-2 xl:w-3 ml-2 xl:ml-3" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z" fill="white"/>
                </svg>
              </button>
          </div>
        </div>

        <div class="bottom sm:grid grid-cols-2 lg:grid-cols-4 space-y-7 sm:space-y-0 sm:gap-y-7 overflow-hidden">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" class="position-marketing">
              <p class="post font-cormorant text-white text-2xl xl:text-3xl 2xl:text-4xl">
                Marketing
              </p>

              <p class="requirement font-inter font-bold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
                Required CB Sai Looks: 3
              </p>

              <p class="details font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-24 2xl:pr-28">
                The marketing manager role develops the communication between CODEBoy Sai and the general public.
                  <span class="marketing-span hidden">
                  The marketing manager role develops the communication between CODEBoy Sai and the general public.
                  </span>
              </p>

              <button class="ar-read-more font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2" @click="handleMarketing">
                {{ marketingButtonState }}

                <svg class="w-2 xl:w-3 ml-2 xl:ml-3" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z" fill="white"/>
                </svg>
              </button>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" class="position-publicist">
              <p class="post font-cormorant text-white text-2xl xl:text-3xl 2xl:text-4xl">
                Publicist
              </p>

              <p class="requirement font-inter font-bold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
                Required CB Sai Looks: 4
              </p>

              <p class="details font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-24 2xl:pr-28">
                The Publicist role is responsible for sharing information and news about CODEBOY Sai with the press.
                  <span class="publicist-span hidden">
                  The Publicist role is responsible for sharing information and news about CODEBOY Sai with the press.
                  </span>
              </p>

              <button class="ar-read-more font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2" @click="handlePublicist">
                {{ publicistButtonState }}

                <svg class="w-2 xl:w-3 ml-2 xl:ml-3" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z" fill="white"/>
                </svg>
              </button>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" class="position-agent">
              <p class="post font-cormorant text-white text-2xl xl:text-3xl 2xl:text-4xl">
                Agent
              </p>

              <p class="requirement font-inter font-bold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
                Required CB Sai Looks: 6
              </p>

              <p class="details font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-24 2xl:pr-28">
                The music agent role works closely with CODEBOY Sai to coordinate promotions, schedule tours and appearances, and secure deals.
                  <span class="agent-span hidden">
                  The music agent role works closely with CODEBOY Sai to coordinate promotions, schedule tours and appearances, and secure deals.
                  </span>
              </p>

              <button class="ar-read-more font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2" @click="handleAgent">
                {{ agentButtonState }}

                <svg class="w-2 xl:w-3 ml-2 xl:ml-3" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z" fill="white"/>
                </svg>
              </button>
          </div>

          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800" class="position-resource-admin">
              <p class="post font-cormorant text-white text-2xl xl:text-3xl 2xl:text-4xl">
                Resource Admin
              </p>

              <p class="requirement font-inter font-bold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
                Required CB Sai Looks: 7
              </p>

              <p class="details font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm pr-10 xl:pr-24 2xl:pr-28">
                The Resource Admin role is responsible for performing HR tasks like onboarding new CBSAI Look Owners.....
                  <span class="resource-admin-span hidden">
                  The Resource Admin role is responsible for performing HR tasks like onboarding new CBSAI Look Owners.....
                  </span>
              </p>

              <button class="ar-read-more font-inter font-light text-white text-[10px] xl:text-xs 2xl:text-sm flex justify-between items-center mt-1 xl:mt-2" @click="handleResourceAdmin">
                {{ resourceAdminButtonState }}

                <svg class="w-2 xl:w-3 ml-2 xl:ml-3" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3848 6.78536L7.00005 12.771L0.615329 6.78536L1.38476 5.96464L6.43755 10.7016L6.43755 0L7.56255 0L7.56255 10.7016L12.6153 5.96464L13.3848 6.78536Z" fill="white"/>
                </svg>
              </button>
          </div>
        </div>
      </div>
    </section>

    <section class="executive my-32 xl:px-20 overflow-hidden">
      <div class="executive space-y-10 sm:space-y-0 sm:grid grid-cols-2">
        <div data-aos="fade-in" data-aos-duration="1000" class="top-left flex justify-center">
          <video 
            src="https://res.cloudinary.com/eazzie/video/upload/c_crop,h_320,q_100,w_250/c_scale,w_350/v1643320795/Codeboy/Character_Name_-_Executive_swmicc.webm"
            alt="An Asset of the Executive"
            autoplay
            loop
            muted
          />
        </div>

        <div class="bottom-right-herex justify-start overflow-hidden">
          <h2 data-aos="fade-right" data-aos-duration="1000" data-aos-delay="" class="font-cormorant text-white text-[34px] sm:text-[40px] lg:text-5xl xl:text-[52px] 2xl:text-6xl">
            Executive
          </h2>

          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="200" class="requirement font-inter font-normal text-white text-sm lg:text-base xl:text-lg 2xl:text-xl mt-2 xl:mt-3 mb-1 xl:mb-2">
            Positions will go on auction after CB Sai Looks are 100% Minted.
          </p>

          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="400" class="details font-inter font-light text-white text-[10px] lg:text-xs xl:text-sm 2xl:text-base leading-loose">
            The Executive role will make executive decisions and oversee the publishing, manufacturing, marketing, promotion,
              production, distribution, and touring decisions for CODEBoy Sai and CODE LIFE Rec(Dis)cord Label. 
          </p>

          <p data-aos="fade-right" data-aos-duration="1000" data-aos-delay="600" class="requirement font-inter font-extrabold text-white text-sm xl:text-base 2xl:text-lg mt-2 xl:mt-3 mb-1 xl:mb-2">
            5 Total Executives
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import aosMixin from '~/mixins/aos'

export default {
  mixins: [aosMixin],
    layout: 'third',

    data() {
      return {
        arButtonState: 'Read more',
        merchandiserButtonState: 'Read more',
        marketingButtonState: 'Read more',
        publicistButtonState: 'Read more',
        agentButtonState: 'Read more',
        resourceAdminButtonState: 'Read more',
      }
    }, 

    methods: {
      handleAr() {
        const span = document.querySelector('.ar-span')
            
            if (this.arButtonState == "Read more") {
                this.arButtonState = "show less";
                span.classList.add('show')
            } else {
                this.arButtonState = "Read more";
                span.classList.remove('show')
            }
      },

      handleMerchandiser() {
        const span = document.querySelector('.merchandiser-span')
            
            if (this.merchandiserButtonState == "Read more") {
                this.merchandiserButtonState = "show less";
                span.classList.add('show')
            } else {
                this.merchandiserButtonState = "Read more";
                span.classList.remove('show')
            }
      },

      handleMarketing() {
        const span = document.querySelector('.marketing-span')
            
            if (this.marketingButtonState == "Read more") {
                this.marketingButtonState = "show less";
                span.classList.add('show')
            } else {
                this.marketingButtonState = "Read more";
                span.classList.remove('show')
            }
      },

      handlePublicist() {
        const span = document.querySelector('.publicist-span')
            
            if (this.publicistButtonState == "Read more") {
                this.publicistButtonState = "show less";
                span.classList.add('show')
            } else {
                this.publicistButtonState = "Read more";
                span.classList.remove('show')
            }
      },

      handleAgent() {
        const span = document.querySelector('.agent-span')
            
            if (this.agentButtonState == "Read more") {
                this.agentButtonState = "show less";
                span.classList.add('show')
            } else {
                this.agentButtonState = "Read more";
                span.classList.remove('show')
            }
      },

      handleResourceAdmin() {
        const span = document.querySelector('.resource-admin-span')
            
            if (this.resourceAdminButtonState == "Read more") {
                this.resourceAdminButtonState = "show less";
                span.classList.add('show')
            } else {
                this.resourceAdminButtonState = "Read more";
                span.classList.remove('show')
            }
      },
    },

    mounted() {

    }
}
</script>

<style>
body {
  
}

.show {
    display: block;
}

/* button svg {
  transform: rotate(180deg);
} */
</style>