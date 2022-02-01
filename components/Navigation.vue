<template>
  <div>
    <nav class="md:flex justify-end">
      <div
        class="nav-container md:w-[58%] py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 flex justify-between items-center md:items-start"
      >
        <div class="left-nav-container">
          <nuxt-link
            to="/"
            class="left-nav-container flex flex-col justify-center items-center space-y-3"
          >
            <div class="text-beside-logo">
              <h2
                class="uppercase font-inter text-center text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm font-medium leading-relaxed lg:leading-relaxed xl:leading-loose"
              >
                EVM based music artist
              </h2>
            </div>

            <div class="logo">
              <nuxt-img
                src="/images/Code Boy Logo.png"
                alt="Code Boy Sai's Logo"
                sizes="32px sm:40px lg:48px xl:64px"
                format="webp"
              />
            </div>
          </nuxt-link>
        </div>

        <div class="right-nav-container md:mt-5 xl:mt-10">
          <nuxt-link to="/#" class="">
            <button
              class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            >
              connect wallet
            </button>
          </nuxt-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
* {
  outline: none;
}

.connect-wallet {
  background: -webkit-linear-gradient(0deg, transparent 50%, black 50%);
  background-size: 310px 80px;
  transition: 0.8s;
  -webkit-transition: 0.8s;
  -moz-transition: 0.8s;
  -ms-transition: 0.8s;
  -o-transition: 0.8s;
}

.connect-wallet:hover {
  background-position: 155px 0px;
  color: white;
  border: 1px solid white;
}
</style>
