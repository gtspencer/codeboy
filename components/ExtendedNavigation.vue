<template>
  <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
    <nav class="">
      <div
        class="nav-container py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 grid grid-cols-2 md:grid-cols-3 justify-between items-center"
      >
        <div class="left-nav-container hidden md:flex space-x-5">
          <a href="#mixtape">
            <p
              class="cover-tracklist uppercase font-inter text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm"
            >
              Cover Art + Tracklist
            </p>
          </a>

          <a href="#benefits">
            <p
              class="cover-tracklist uppercase font-inter text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm"
            >
              nft traits + benefits
            </p>
          </a>

          <a href="#faq">
            <p
              class="cover-tracklist font-inter text-[#2E2B26] text-[10px] xl:text-xs 2xl:text-sm"
            >
              FAQs
            </p>
          </a>
        </div>

        <div
          class="mid-nav-container justify-self-start md:justify-self-center"
        >
          <nuxt-link
            to="/"
            class="left-nav-container flex flex-col justify-center items-center space-y-3"
          >
            <div class="text-beside-logo">
              <h2
                class="uppercase font-inter text-[#2E2B26] text-center text-[10px] xl:text-xs 2xl:text-sm font-medium leading-relaxed lg:leading-relaxed xl:leading-loose"
              >
                EVM based music artist
              </h2>
            </div>

            <div class="logo">
              <nuxt-img
                src="/images/Code Boy Logo.png"
                alt="Code Boy Sai's Logo"
                sizes="sm:32px md:40px lg:48px xl:64px"
                format="webp"
              />
            </div>
          </nuxt-link>
        </div>

        <div class="right-nav-container justify-self-end">
          <nuxt-link to="" class="">
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

<style></style>
