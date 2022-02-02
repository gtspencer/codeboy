<template>
<div>
    <!-- <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5"> -->
    <ExtendedNavigation />
    
    <Nuxt />

    <div class="container mx-auto px-5 sm:px-10 lg:px-14 xl:px-5">
        <Footer />
    </div>

    <AfterFooter />
</div>
</template>

<script>
export default {

}
</script>

<style>
* {
    outline: none;
}
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
</style>