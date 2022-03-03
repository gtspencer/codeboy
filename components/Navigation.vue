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
            <button @click="ConnectWallet" id="connectButtonMeta"
              class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            >
              connect
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
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import lp from "~/abi/CBSaiListeningPass.json";

export default {
  methods: {
    async ConnectWallet() {
      try {
        const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              infuraId: "" // required
            }
          }
        };
        const web3Modal = new Web3Modal({
          network: "rinkeby", // optional
          cacheProvider: false, // optional
          providerOptions // required
        });

        const instance = await web3Modal.connect();

        const provider = new ethers.providers.Web3Provider(instance);
        window.signer = provider.getSigner();

        var accounts = await provider.listAccounts();
        console.log(accounts)
        var account = accounts[0]
        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("connectButtonMeta").style.display = 'none'
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("addressField").innerText = accountStr
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted: async function() {
    document.getElementById("addressField").style.display = "none"
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    // try {
    const accounts = await provider.listAccounts()
    if (accounts.length > 0) {
      window.signer = provider.getSigner()

      var account = accounts[0];
      var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
      document.getElementById("connectButtonMeta").style.display = 'none'
      document.getElementById("addressField").style.display = 'inline'
      document.getElementById("addressField").innerText = accountStr
    }
  }
};
</script>

<style>

</style>
