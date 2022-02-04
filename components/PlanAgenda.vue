<template>
  <div>
    <section class="mt-20 plan sm:mt-24 md:mt-36 lg:mt-44 xl:mt-52 2xl:mt-64">
      <div
        class="items-start justify-center plan-container sm:flex sm:space-x-16 lg:space-x-28"
      >
        <div class="top-left planTopLeft overflow-hidden" ref="planTopLeft">
          <h2
             data-aos="fade-up" data-aos-duration="1000"
            class="capitalize font-cormorant text-4xl sm:text-[40px] lg:text-5xl xl:text-[52px] text-center sm:text-left md:leading-normal xl:leading-normal"
          >
            plan <br class="hidden md:hidden"/> during <br class="hidden md:block lg:block"/> mint
          </h2>
        </div>

        <div
          class="flex items-start mt-10 space-x-2 bottom-right justify-evenly sm:mt-0"
        >
          <div
            class="relative flex items-center w-5 h-full vertical-line-and-circlre"
          >
            <div
              class="vertical-line bg-[#E5E5E5] w-px h-[550px] sm:h-[650px] lg:h-[550px] xl:h-[650px] sm:-mt-10"
            ></div>

            <div class="circle-cont absolute h-full -ml-2.5 z-50">
              <svg
                class="w-5 mt-5 opacity-50 plan-1"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>

              <svg
                class="w-5 plan-2 opacity-50 mt-48 sm:mt-[180px] lg:mt-[145px] xl:mt-[170px]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>

              <svg
                class="w-5 plan-3 opacity-50 mt-[155px] sm:mt-[180px] lg:mt-[160px] xl:mt-[180px]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>
            </div>
          </div>

          <div class="space-y-10 plans -ml-14">
            <div data-aos="fade-up" data-aos-duration="1000" class="plan-1 w-60 lg:w-[19rem] xl:w-[21rem] 2xl:w-[25rem]">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Family & Friends <br class="hidden 2xl:block"> Random Wallet Airdrop
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light xl:pr-20"
              >
                CODEBOY Sai will randomly airdrop <br class="hidden lg:block xl:hidden"/> Family & Friend Looks to early <br class="hidden lg:block xl:hidden" />adopters.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="plan-2 w-60 lg:w-[19rem] xl:w-[21rem] 2xl:w-[25rem]">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Listening Pass <br class="hidden 2xl:block"> Random Wallet Airdrop
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light xl:pr-20"
              >
                CODEBOY Sai will randomly airdrop <br class="hidden lg:block xl:hidden" /> Listening Passes to CB Sai Look early <br class="hidden lg:block xl:hidden" />adopters.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="plan-2 planStop w-60 lg:w-64 xl:w-80" ref="planStop">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Twitter Spaces Interview with CODEBOY Sai
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light"
              >
                A Twitter spaces will be hosted by CODEBOY Sai to answer any
                questions from CB Sai Look holders and give updates on what to
                expect from the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-20 agenda sm:mt-24 md:mt-36 lg:mt-44 xl:mt-52 2xl:mt-64">
      <div
        class="agenda-container sm:flex justify-center items-start md:space-x-[50px] lg:space-x-[140px] xl:space-x-[40px]"
      >
        <div class="top-left agendaTopLeft" ref="agendaTopLeft">
          <h2 data-aos="fade-in" data-aos-duration="1000"
            class="capitalize font-monument-light text-2xl lg:text-3xl xl:text-5xl text-center sm:text-left md:leading-normal xl:leading-tight"
          >
            CODE <br class="hidden md:hidden" />
            LIFE <br class="hidden md:block" />
            Records <br class="hidden lg:block md:hidden" />
            Dao <br class="hidden md:block" />
            AGENDA
          </h2>

          <p data-aos="fade-in" data-aos-duration="1000"
            class="mt-2 text-[10px] font-light leading-5 xl:leading-7 2xl:leading-7 text-center font-monument-light sm:text-left xl:text-xs 2xl:text-sm"
          >
            CODE LIFE Record Label <br class=""> Agenda will begin after 100% <br class=""> mint. 
          </p>
        </div>

        <div
          class="flex items-start mt-10 space-x-2 bottom-right justify-evenly sm:mt-0"
        >
          <div
            class="relative flex items-center w-5 h-full vertical-line-and-circlre"
          >
            <div
              class="vertical-line bg-[#E5E5E5] w-px h-[1200px] sm:h-[1250px] md:h-[1200px] lg:h-[1050px] xl:h-[1350px] 2xl:h-[1350px] sm:-mt-10"
            ></div>

            <div class="circle-cont absolute h-full -ml-2.5 z-50">
              <svg
                class="w-5 mt-5 opacity-50 plan-1"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>

              <svg
                class="w-5 plan-2 opacity-50 mt-[19rem] lg:mt-[250px] xl:mt-[21rem]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>

              <svg
                class="w-5 opacity-50 plan-3 mt-[250px] lg:mt-[190px] xl:mt-[230px] 2xl:mt-[270px]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>

              <svg
                class="w-5 plan-2 opacity-50 mt-48 sm:mt-[190px] md:mt-[160px] xl:mt-48 2xl:mt-[232px]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>

              <svg
                class="w-5 opacity-50 plan-3 mt-[198px] xl:mt-[250px]"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle class="fill-current" cx="11" cy="11" r="6" fill="" />
                <circle
                  class="stroke-current"
                  cx="11"
                  cy="11"
                  r="10.5"
                  stroke=""
                />
              </svg>
            </div>
          </div>

          <div class="space-y-10 agendas -ml-14">
            <div data-aos="fade-up" data-aos-duration="1000" class="agenda-1 w-60 lg:w-[19rem] xl:w-[21rem] 2xl:w-[25rem]">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                CODE LIFE Records DAO Executive Positions Auction
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light"
              >
                A total of 7 Executive Positions will exist. Only Executive
                Positions #1-#4 will go on auction after CB Sai M&M Looks are
                100% Minted. #5 & #6 Executive positions will be reserved for
                elected officials from the DAO. #7 Executive position will be
                reserved for CODEBOY Sai
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="agenda-2 w-60 lg:w-[19rem] xl:w-[21rem] 2xl:w-[25rem]">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Fund Treasury for CODE LIFE Records
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light"
              >
                15% of sales will be locked in the Treasury. The CODE LIFE
                RECORDS DAO will use the treasury for the ‘Meetings and Makeups’
                mixtape marketing budget as well as other label matters.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="agenda-3 w-60 md:w-64 xl:w-80">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Assume Label Positions & vote on Label Handbook
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light"
              >
                CB Sai Look holders will meet to create the CODELIFE Record
                Label Policies and Handbook.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000" class="agenda-4 w-60 lg:w-[19rem] xl:w-[21rem] 2xl:w-[25rem]">
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Public Release For Meetings and Makeups tape
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light"
              >
                CB Sai Look holders will vote on the first single and music
                video. They will also plan the public release for Meetings and
                Makeups using the budget.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-duration="1000"
              class="agenda-5 agendaStop w-60 lg:w-[19rem] xl:w-[21rem] 2xl:w-[25rem]"
              ref="agendaStop"
            >
              <h2 class="text-lg capitalize font-monument-light xl:text-xl 2xl:text-2xl">
                Metaverse Music Recording Studio
              </h2>

              <p
                class="mt-2 text-[10px] xl:text-xs 2xl:text-sm font-light leading-5 xl:leading-7 2xl:leading-7 font-monument-light"
              >
                We will work on designing and lauching a music studio within the
                Metaverse. CB Sai Look holders will be able to watch CODEBoy Sai
                record. CB Sai will also host listening parting
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import aosMixin from '~/mixins/aos'
const tl = gsap.timeline();

export default {
  mixins: [aosMixin],
  
  // mounted() {
  //   /* Animations for Plans Section */
  //   ScrollTrigger.matchMedia({
  //     /* Animation off for small screens */
  //     "(max-width: 639px)": function () {
  //       gsap.to(".planTopLeft", {
  //         scrollTrigger: {
  //           trigger: ".planTopLeft",
  //           endTrigger: ".planStop",
  //           start: "top 30%",
  //           end: "top 30%",
  //           pin: false,
  //         },
  //       });
  //     },

  //     /* Animation on for big screens */
  //     "(min-width: 640px)": function () {
  //       gsap.to(".planTopLeft", {
  //         scrollTrigger: {
  //           trigger: ".planTopLeft",
  //           endTrigger: ".planStop",
  //           start: "top 30%",
  //           end: "top 30%",
  //           pin: true,
  //           markers: false,
  //         },
  //       });
  //     },
  //   });

  //   /* Animations for Agenda Section */
  //   ScrollTrigger.matchMedia({
  //     /* Animation off for small screens */
  //     "(max-width: 639px)": function () {
  //       gsap.to(".agendaTopLeft", {
  //         scrollTrigger: {
  //           trigger: ".agendaTopLeft",
  //           endTrigger: ".agendaStop",
  //           start: "top 30%",
  //           end: "top 30%",
  //           pin: false,
  //         },
  //       });
  //     },

  //     /* Animation on for big screens */
  //     "(min-width: 640px)": function () {
  //       gsap.to(".agendaTopLeft", {
  //         scrollTrigger: {
  //           trigger: ".agendaTopLeft",
  //           endTrigger: ".agendaStop",
  //           start: "top 30%",
  //           end: "top 30%",
  //           pin: true,
  //           markers: false,
  //         },
  //       });
  //     },
  //   });
  // },
};
</script>

<style>
</style>