<template>
  <div>
    <nav class="sm:flex justify-end">
      <div
        class="nav-container sm:w-[56.5%] py-5 lg:py-0 xl:py-7 lg:pt-7 lg:pb-2 flex justify-between items-center md:items-start"
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
                sizes="sm:32px md:40px lg:48px xl:64px"
                format="webp"
              />
            </div>
          </nuxt-link>
        </div>

        <div class="right-nav-container md:mt-5 xl:mt-10">
          <nuxt-link to="" class="">
            <button @click="ConnectWallet" id="connectButton"
              class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            >
              connect wallet
            </button>
          </nuxt-link>
          <button
            class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            id="addressField">

          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ethers } from "ethers";

export default {
  methods: {
    async ConnectWallet() {
      try {
        var account = await window.ethereum.request({method: 'eth_requestAccounts' })
        this.$store.commit("changeAccount", account)

        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("connectButton").style.display = 'none'
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("addressField").innerText = accountStr

        console.log("Connected with " + this.$store.getters["getAccount"])
      } catch (err) {

      }

    }
  },
  mounted: async function() {
    // gotta do a big ol try catch or it fails if the user doesn't connect....
    // def better way to do this but i'm no web dev so fuck it
    try {
      document.getElementById("addressField").style.display = 'none'
      var account = await window.ethereum.request({method: 'eth_requestAccounts' })
      if (account != '') {

        this.$store.commit("changeAccount", account)

        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("connectButton").style.display = 'none'
        document.getElementById("addressField").innerText = accountStr

        console.log("Connected with " + this.$store.getters["getAccount"])
      }
    } catch (err) {
        console.log("gimme dat account plz")
    }

  }
};
</script>

<style>

</style>
