<template>
  <section id="posters" class="content">
    <div
        v-for="poster in posters"
        :key="poster.id"
        class="poster"
      >
      <div class="image-wrapper">
        <img
          :src="'/images/' + poster.filename"
          class="card"
          :alt="poster.alt"
        >
        <div class="shadow"></div>  
      </div>
      <img src="/images/line.png" class="line">
      <div>
        <span class="material-icons">arrow_circle_right</span>
        <span class="txt">Ustvarite svojo</span>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'posters',
  data() {
    return {
      posters: [
        {
          filename: "theme-xmas-small.jpg",
          alt: "Poster Komaj čakamo božič",
          link: undefined
        },
        {
          filename: "theme-couples-small.jpg",
          alt: "Poster Nova knjiga za vse pare",
          link: undefined
        }
      ]
    }
  }
}

</script>

<style lang="scss">

#posters {
  margin: 50px auto 30px;
  display: flex;
  justify-content: space-around;

  @include breakpoint(lg-down) {
    flex-direction: column;
    margin-top: 10px;
  }

  @include breakpoint(xs-only) {
    margin-top: 0;
  }

  .poster {
    position: relative;

    @include breakpoint(lg-down) {
      display: block;
      margin: 0px auto 40px;
    }

    .image-wrapper {
      position: relative;

      img.card {
        display: block;
        width: 560px;
        cursor: pointer;
        -webkit-transform: scale(0.99);
        transform: scale(0.99);
        transition: transform 0.5s;

        &:hover {
          -webkit-transform: scale(0.97);
          trasform: scale(0.97);
          transition: transform 0.5s;
        }

        @include breakpoint(xl-down) {
          width: 530px;
        }

        @include breakpoint(xs-only) {
          width: 95%;
          margin: auto;
        } 
      }

      .shadow {
        width: 572px;
        height: 438px;
        background: $blueGray;
        position: absolute;
        top: -49px;
        z-index: -1;
        transform: rotate(-0.5deg);
        left: -6px;

        @include breakpoint(xl-down) {
          width: 542px;
          height: 416px;
        }

        @include breakpoint(xs-only) {
          width: 98%;
          height: 104%;
          top: -24px;
          left: 5px;
          top: -25px;
        }
      }
    }

    img.line {
      position: absolute;
      margin-top: 20px;
      margin-left: 60px;
      margin-right: 5px;

      @media (min-width: 2000px) {
        margin-left: 50px;
      }

      @include breakpoint(xl-down) {
        margin-left: 40px;
      }

      @include breakpoint(xs-only) {
        display: none;
      }
    }

    div {
      display: flex;
      justify-content: center;
      margin-top: 44px;
      cursor: pointer;

      @include breakpoint(xs-only) {
        margin-top: 20px;
      }

      span.txt {
        font-family: "Patrick Hand", cursive;
        font-size: 1.8rem;
        color: $blueGray;
        text-transform: uppercase;
      }

      span.material-icons {
        font-size: 2.5rem;
        color: $blueGray;
        margin-right: 10px;

        @include breakpoint(xxl-only) {
          margin-right: 2px;
        }
      }
    }
  }
}


</style>
