<template>
  <section id="about" class="has-title">
    <h1 class="default">Zakaj Mali junaki?</h1>
    <div class="image-wrapper" ref="videoBg"></div>
  </section>
</template>

<script>

import _ from 'lodash'

export default {
  name: 'about',
  mounted() {
    setTimeout(() => {
      this.setDimensions();
    }, 200);

    window.addEventListener("resize", _.debounce(this.setDimensions, 100));
  },
  methods: {
    setDimensions() {
      const width = window.innerWidth;
      const img = this.$refs.videoBg;

      img.style.height = width * 0.6 + 'px';
    }
  }
}

</script>

<style lang="scss">

#about {
  height: 1000px;

   @include breakpoint(lg-down) {
    height: auto;
  }

  .image-wrapper {
    margin: 40px 0 0 0;
    background: url('/images/video.jpg');
    background-size: 1500px 844px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center;
    cursor: pointer;

    @media (max-width: 1500px) {
      background-size: contain;
    }

    @include breakpoint(lg-down) {
      background-attachment: inherit;
    }
  }
}

</style>
