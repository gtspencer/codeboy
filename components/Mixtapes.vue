<template>
  <div>
      <div v-for="track in data" :key="track.id">
          {{ track.type }}
      </div>
  </div>
</template>

<script>
export default {
    props: {
        data: Array
    }
}
</script>

<style>

</style>