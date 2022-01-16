<template>
  <div>
    <nav class="md:flex justify-end">
      <div
        class="nav-container md:w-[60%] py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 flex justify-between items-center md:items-start"
      >
        <div class="left-nav-container">
          <nuxt-link to="/" class="left-nav-container flex flex-col justify-center items-center space-y-3">
            <div class="text-beside-logo">
              <h2
                class="uppercase font-inter text-black text-center text-[10px] lg:text-xs xl:text-base font-medium leading-relaxed lg:leading-relaxed xl:leading-loose"
              >
                ethereum based <br class="md:hidden">
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

        <div class="right-nav-container">
          <nuxt-link to="/meetings-and-makeups" class="">
            <button
              class="uppercase text-black font-inter font-medium text-[10px] lg:text-xs xl:text-sm 2xl:text-base p-3 sm:py-2 lg:py-3 sm:px-3 lg:px-3 border border-black"
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
