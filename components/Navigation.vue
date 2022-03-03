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
            <button @click="ConnectWalletMM" id="connectButtonMeta"
              class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            >
              metamask
            </button>
            <button @click="ConnectWalletWC" id="connectButtonWC"
                    class="connect-wallet uppercase text-[#2E2B26] font-inter font-medium text-[10px] xl:text-xs 2xl:text-xs p-3 sm:py-2 lg:py-3 sm:px-4 lg:px-5 border border-[#2E2B26]"
            >
              walletconnect
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
import { ethers, providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
const Moralis = require('moralis');
// const Moralis = require('moralis');
import lp from "~/abi/CBSaiListeningPass.json";

export default {
  methods: {
    async ConnectWalletMM() {
      try {
        console.log("start try connect!")
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        var account = await provider.send('eth_requestAccounts', [])

        console.log("got account! " + account)
        this.$store.commit("changeAccount", account)
        // this.$store.commit("changeProvider", provider)

        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("connectButtonMeta").style.display = 'none'
        document.getElementById("connectButtonWC").style.display = 'none'
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("addressField").innerText = accountStr
        /*console.log(provider)
        const signer = await provider.getSigner()
        console.log(signer)*/

/*        var account = await window.ethereum.request({method: 'eth_requestAccounts' })
        this.$store.commit("changeAccount", account)

        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("connectButton").style.display = 'none'
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("addressField").innerText = accountStr

        console.log("Connected with " + this.$store.getters["getAccount"])*/
      } catch (err) {
        console.log(err)
      }

    },
    async ConnectWalletWC() {
      try {
        /*let user = Moralis.User.current();
                if (!user) {

                }*/

        let user = Moralis.authenticate({ provider: "walletconnect", signingMessage: "Log in using Moralis" })
          .then(function (user) {
            var account = user.get("ethAddress");
            var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
            document.getElementById("connectButtonMeta").style.display = 'none'
            document.getElementById("connectButtonWC").style.display = 'none'
            document.getElementById("addressField").style.display = 'inline'
            document.getElementById("addressField").innerText = accountStr
            console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });



        // wallet connect
       /* const provider = new WalletConnectProvider({
          infuraId: "7c297bd58a0244b491d076df8d2ac0a7",
        });
        await provider.enable();

        const web3Provider = new providers.Web3Provider(provider)
        console.log(web3Provider)
        provider.on("accountsChanged", (accounts) => {
          console.log(accounts);
        });*/
        // var account = await window.ethereum.request({method: 'eth_requestAccounts' })

        /*var account = await window.ethereum.request({method: 'eth_requestAccounts' })
        this.$store.commit("changeAccount", account)

        // const provider = new ethers.providers.Web3Provider(window.ethereum)
        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("connectButton").style.display = 'none'
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("addressField").innerText = accountStr

        console.log("Connected with " + this.$store.getters["getAccount"])*/
      } catch (err) {

      }

    }
  },
  mounted: async function() {
    document.getElementById("addressField").style.display = "none"
    const serverUrl = "https://ecqbouijy87n.usemoralis.com:2053/server";
    const appId = "QdVokHMtEpB62sT3TDZsJ5ZrsIGJrrBqF0ZXQUYG";
    Moralis.start({ serverUrl, appId });

    if (this.$store.getters["getAccount"]) {
      var account = this.$store.getters["getAccount"]
      var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
      document.getElementById("connectButtonMeta").style.display = 'none'
      document.getElementById("connectButtonWC").style.display = 'none'
      document.getElementById("addressField").style.display = 'inline'
      document.getElementById("addressField").innerText = accountStr
    }
    // this.ConnectWalletMM()
    // await this.ConnectWalletMM()
    // gotta do a big ol try catch or it fails if the user doesn't connect....
    // def better way to do this but i'm no web dev so fuck it
    /*try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      /!*document.getElementById("addressField").style.display = 'none'
      const provider = await ethers.getDefaultProvider();
      console.log(provider)
      var account = await window.ethereum.request({method: 'eth_requestAccounts' })
      if (account != '') {

        this.$store.commit("changeAccount", account)

        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("connectButton").style.display = 'none'
        document.getElementById("addressField").innerText = accountStr

        console.log("Connected with " + this.$store.getters["getAccount"])
      }*!/
    } catch (err) {
      console.log(err)
        console.log("gimme dat account plz")
    }*/

  }
};
</script>

<style>

</style>
