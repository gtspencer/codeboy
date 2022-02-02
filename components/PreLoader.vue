<!-- <template>
  <transition name="fade">
    <div v-if="show">
      <section
        class="w-full h-screen flex justify-center items-center bg-white z-50 fixed"
      >
        <div
          class="section-container flex flex-col justify-center items-center space-y-3"
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
        </div>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
  layout: "blank",

  data() {
    return {
      show: true,
    };
  },

  mounted() {
    this.showToggle();
  },

  methods: {
    showToggle() {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style> -->
