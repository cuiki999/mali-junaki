<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Main from './layout/Main.vue'
import scrollIntoView from './mixins/scrollIntoView.js'
import _ from 'lodash'

export default {
  name: 'App',
  mixins: [scrollIntoView],
  components: {
    Header,
    Main
  },
  mounted() {
    this.setupScroll();
  },
  beforeDestroy() {
    window.removeEventListener("scroll");
  },
  methods: {
    setupScroll() {
      setTimeout(() => {
        // if the element is already in view, you don't need the scroll event listener because it should only get displayed once. If not into view, this animation gets triggered only after we add the scroll event listener
        this.animate();

        window.addEventListener("scroll", _.debounce(() => {
          this.animate();
        }, 50));
      }, 1000);
    }
  }
}
</script>

<style lang="scss">

#app {

}
</style>
