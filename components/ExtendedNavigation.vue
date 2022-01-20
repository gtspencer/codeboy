<template>
  <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
    <nav class="">
      <div
        class="nav-container py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 grid grid-cols-2 md:grid-cols-3 justify-between items-center"
      >
        <div class="left-nav-container hidden md:flex space-x-5">
          <p
            class="cover-tracklist uppercase font-inter text-[10px] xl:text-xs 2xl:text-sm"
          >
            Cover Art + Tracklist
          </p>

          <p
            class="cover-tracklist uppercase font-inter text-[10px] xl:text-xs 2xl:text-sm"
          >
            nft traits + benefits
          </p>

          <p
            class="cover-tracklist font-inter text-[10px] xl:text-xs 2xl:text-sm"
          >
            FAQs
          </p>
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
                class="uppercase font-inter text-black text-center text-[10px] xl:text-xs 2xl:text-sm font-medium leading-relaxed lg:leading-relaxed xl:leading-loose"
              >
                ethereum based <br class="md:hidden" />
                music artist
              </h2>
            </div>

            <div class="logo">
              <img
                class="logo-image w-8 sm:w-10 lg:w-12 xl:w-16"
                src="/images/Code Boy Logo.png"
                alt="Code Boy Sai's Logo"
              />
            </div>
          </nuxt-link>
        </div>

        <div class="right-nav-container justify-self-end">
          <nuxt-link to="" class="">
            <button
              class="uppercase text-black font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-black"
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
