<template>
  <main id="main-section">
    <Hero :loading="loading"></Hero>
    <Posters></Posters>
    <Showcase></Showcase>
    <Present></Present>
    <About></About>
  </main>
</template>

<script>

import Hero from '../sections/Hero.vue'
import Posters from '../sections/Posters.vue'
import Showcase from '../sections/Showcase.vue'
import Present from '../sections/Present.vue'
import About from '../sections/About.vue'

export default {
  name: 'main-section',
  components: {
    Hero,
    Posters,
    Showcase,
    Present,
    About
  },
  data() {
    return {
      loading: true
    }
  },
  created() {
    window.addEventListener('load', () => {
      // add extra timeout so that loading animation doesn't cut off too soon
      setTimeout(() => {
        this.loading = false;
      }, 500);
    });
  }
}
</script>

<style lang="scss">

</style>
