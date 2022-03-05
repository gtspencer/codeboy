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
import { providers } from "ethers";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import lp from "~/abi/CBSaiListeningPass.json";
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Contract from "web3-eth-contract";
import Web3 from "web3"

export default {
  methods: {
    async ConnectWalletMM() {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "" // required
          }
        }
      };
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: false, // optional
        providerOptions // required
      });

      const provider = await web3Modal.connect();

      const web3 = new Web3(provider);
      /*console.log("provider: ")
      console.log(provider.selectedAddress)
      console.log("def acc" + web3.defaultAccount)
      console.log("web3: ")
      console.log(web3)*/
      /*var accounts = await provider.accounts
      console.log(accounts)*/


      window.web3obj = web3;
      var account = provider.selectedAddress
      if (!account)
        account = provider.accounts[0]
      window.account = acount
      var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
      document.getElementById("connectButtonMeta").style.display = 'none'
      document.getElementById("addressField").style.display = 'inline'
      document.getElementById("addressField").innerText = accountStr
      // const CollectionContract = new web3.eth.Contract(lp.abi, "0x83BEB7F96a464805F170b881883b97eB8FD64e8D");
      // CollectionContract.methods.mint().send({from: provider.selectedAddress, value: 0})
    },
    async ConnectWallet() {
      try {
        //  Create WalletConnect Provider
        const provider = new WalletConnectProvider({
          infuraId: "018a1557b0e34090a84c111da5c01426",
        });

//  Enable session (triggers QR Code modal)
        await provider.enable();
        var accounts = provider.accounts
        const web3 = new Web3(provider);
        const CollectionContract = new web3.eth.Contract(lp.abi, "0x83BEB7F96a464805F170b881883b97eB8FD64e8D");
        CollectionContract.methods.mint().send({from: accounts[0], value: 0})
        /*const providerOptions = {
          walletconnect: {
            package: WalletConnectProvider, // required
            options: {
              infuraId: "018a1557b0e34090a84c111da5c01426" // required
            }
          }
        };
        const web3Modal = new Web3Modal({
          network: "rinkeby", // optional
          cacheProvider: false, // optional
          providerOptions // required
        });

        const instance = await web3Modal.connect();*/

        // this works
        /*// Create a connector
        const connector = new WalletConnect({
          bridge: "https://bridge.walletconnect.org", // Required
          qrcodeModal: QRCodeModal,
        });

// Check if connection is already established
        if (!connector.connected) {
          // create new session
          connector.createSession();
        }

        var accounts;
// Subscribe to connection events
        connector.on("connect", (error, payload) => {
          if (error) {
            throw error;
          }

          console.log(payload)
          // Get provided accounts and chainId
          const { accounts, chainId } = payload.params[0];
          console.log(accounts)
          /!*const tx = {
            from: accounts[0], // Required
            to: "0x83BEB7F96a464805F170b881883b97eB8FD64e8D", // Required (for non contract deployments)
            data: "0x", // Required
            method: "mint"
            /!*          gasPrice: "0x02540be400", // Optional
                      gas: "0x9c40", // Optional
                      value: "0x00", // Optional
                      nonce: "0x0114", // Optional*!/
          };*!/
          /!*const customRequest = {
            id: 1337,
            jsonrpc: "2.0",
            method: "mint",
            from: accounts[0], // Required
            to: "0x83BEB7F96a464805F170b881883b97eB8FD64e8D", // Required (for non contract deployments)
            params: [
              {
                from: accounts[0],
                to: "0x83BEB7F96a464805F170b881883b97eB8FD64e8D",
                data: "0x",
                gasPrice: "0x02540be400",
                gas: "0x9c40",
                value: "0x00",
                nonce: "0x0114",
              },
            ],
          };*!/
          const web3 = new Web3(connector.provider)
          const CollectionContract = new web3.eth.Contract(lp.abi, "0x83BEB7F96a464805F170b881883b97eB8FD64e8D");
          CollectionContract.methods.mint().send({from: accounts[0], value: 0})
          /!*const transactionParameters = [
            {
              method: "eth_sendTransaction",
              params: [
                {
                  to: "0x83BEB7F96a464805F170b881883b97eB8FD64e8D", // Required except during contract publications.
                  from: accounts[0], // must match user's active address.
                  data: window.contract.methods.mintNFT(acct, tokenURI).encodeABI(), //make call to NFT smart contract
                },
              ],
            },
          ];*!/

// Send transaction
          connector
            .sendCustomRequest(customRequest)
            .then((result) => {
              // Returns transaction id (hash)
              console.log(result);
            })
            .catch((error) => {
              // Error returned when rejected
              console.error(error);
            });
        });

*/
        /*const provider = new WalletConnectProvider({
          infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
        });

//  Enable session (triggers QR Code modal)
        await provider.enable();

        const web3 = new Web3(provider)



        // const provider = new ethers.providers.Web3Provider(instance);
        window.signer = await web3.getSigner();

        var accounts = await web3.listAccounts();*/
        console.log(accounts)
        var account = accounts




        var accountStr = "Connected\n" + String(account).substring(0, 5) + "..." + String(account).substring(String(account).length - 4, String(account).length)
        document.getElementById("connectButtonMeta").style.display = 'none'
        document.getElementById("addressField").style.display = 'inline'
        document.getElementById("addressField").innerText = accountStr


        /*var Contract = require('web3-eth-contract');
        var contract = new Contract(lp.abi, "0xDDefcB4c570F2C4aE6F2eC762ECA0d6944bE12EC");
        contract.methods.mint().send({from:account}).on('receipt', function() {
          console.log("success")
        })*/
      } catch (err) {
        console.log(err)
      }
    }
  },
  mounted: async function() {
    document.getElementById("addressField").style.display = "none"
 /*   document.getElementById("addressField").style.display = "none"
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
    }*/
  }
};
</script>

<style>

</style>
