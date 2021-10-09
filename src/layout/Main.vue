<template>
  <main id="main-section">
    <Hero></Hero>
    <Posters></Posters>
    <Showcase></Showcase>
  </main>
</template>

<script>

import Hero from '../sections/Hero.vue'
import Posters from '../sections/Posters.vue'
import Showcase from '../sections/Showcase.vue'

export default {
  name: 'main-section',
  components: {
    Hero,
    Posters,
    Showcase
  }
}
</script>

<style lang="scss">

</style>
