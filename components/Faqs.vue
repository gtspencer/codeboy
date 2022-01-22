<template>
    <section class="faq my-28 sm:my-32 md:my-36 lg:px-20">
            <div class="faq-container md:flex justify-center items-start md:space-x-10 xl:space-x-32">
                <div class="top-left md:w-1/3">
                    <h2 class="capitalize text-center md:text-left font-cormorant text-2xl sm:text-3xl md:text-2xl lg:text-4xl">
                        Frequently asked <br class="hidden lg:block"> questions
                    </h2>

                    <ul
                        class="w-full font-inter text-primarlight text-xs xl:text-base flex md:flex-col justify-around items-center md:items-start mt-4 sm:mt-6 md:space-y-1">
                        <li><button class="general-button transition active duration-[800ms]" @click="handleGeneral" ref="general">- General</button></li>
                        <li><button class="collection-button transition duration-[800ms]" @click="handleCollection" ref="collection">- Collection</button></li>
                        <li><button class="repair-button transition duration-[800ms]" @click="handleRepair" ref="repair">- Repair</button></li>
                        <li><button class="delivery-button transition duration-[800ms]" @click="handleDelivery" ref="delivery">- Delivery</button></li>
                    </ul>
                </div>

                <div class="bottom-right flex flex-col items-center mt-7 sm:mt-10 md:mt-0">
                    <transition name="fade" appear mode="out-in">
                        <component
                            :is="screens[position]"
                            @goto="handleGoTo"
                        />
                    </transition>
                </div>
            </div>
    </section>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin( ScrollTrigger )
const tl = gsap.timeline()

export default {

    data() {
        return {
            screens: [
                "GeneralFaq",
                "CollectionFaq",
                "RepairFaq",
                "DeliveryFaq"
            ],

            position: 0,
        }
    },

    methods: {
        handleGoTo(position) {
            this.position = position;
        },

        handleGeneral() {
            this.position = 0

            this.$refs.general.classList.add('active')
            this.$refs.collection.classList.remove('active')
            this.$refs.repair.classList.remove('active')
            this.$refs.delivery.classList.remove('active')
        },

        handleCollection() {
            this.position = 1

            this.$refs.collection.classList.add('active')
            this.$refs.general.classList.remove('active')
            this.$refs.repair.classList.remove('active')
            this.$refs.delivery.classList.remove('active')
        },

        handleRepair() {
            this.position = 2

            this.$refs.repair.classList.add('active')
            this.$refs.general.classList.remove('active')
            this.$refs.collection.classList.remove('active')
            this.$refs.delivery.classList.remove('active')
        },

        handleDelivery() {
            this.position = 3

            this.$refs.delivery.classList.add('active')
            this.$refs.general.classList.remove('active')
            this.$refs.collection.classList.remove('active')
            this.$refs.repair.classList.remove('active')
        },
    },

    mounted() {
        
    }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: 0.8s;
}

.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  opacity: 1;
}

.fade-leave-active {
  transition: 0.8s;
}

.fade-leave-to {
  opacity: 0;
}
</style>