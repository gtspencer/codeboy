<template>
  <div class="m-m-body">
    <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-5">
      <SecondHero />

      <Mixtape />
    </div>

    <CbTraits />

    <CbAccessories />
    <Package />

    <div class="container px-5 mx-auto sm:px-10 lg:px-14 xl:px-20">
      <Benefits />

      <PlanAgenda />

      <Letter />

      <Faqs />
    </div>  
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
// const tl = gsap.timeline();
    // setInterval(refresh(), 3000);


export default {
  layout: "second",

  methods: {
    refresh() {
      // var tl = gsap.timeline({repeat: -1})
      setInterval(ScrollTrigger.refresh(), 3000)
      console.log('refreshed');
    }
  },

  mounted() {
    gsap.delayedCall(3, this.refresh())
    ScrollTrigger.refresh();

    
    // document.onreadystatechange = () => {
    //   if(document.readyState == "complete") {
    //     ScrollTrigger.refresh();
    //     console.log('All assets are loaded');
    //   }
    // }
  },
};
</script>

<style>
.font-monument {
  font-family: 'Monument Extended';
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Thin.ttf');
  font-weight: 100;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Light.ttf');
  font-weight: 300;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Regular.ttf');
  font-weight: 400;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Bold.ttf');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Ultrabold.otf');
  font-weight: 900;
  font-style: normal;
}

@font-face {
  font-family: 'Monument Extended';
  src: url('../static/font/Monument_Extended_Font/MonumentExtended-Black.ttf');
  font-weight: normal;
  font-style: normal;
}

/*width*/
::-webkit-scrollbar {
  width:7px;
}

/*track*/
::-webkit-scrollbar-track {
  background:rgba(255, 255, 255, 0.1);
  border-width:1px;
  border-style:none;
  border-radius:10px;
}

/*thumb*/
::-webkit-scrollbar-thumb {
  background:rgb(85, 85, 85);
  border-color:rgb(153, 153, 153);
  border-radius:10px;
}
</style>
