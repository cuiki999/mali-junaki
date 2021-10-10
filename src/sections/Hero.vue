<template>
  <section id="hero">
    <div class="character-maker" v-if="!loading">
      <div class="intro">
        <h1 class="small">Ustvarite najbolj personalizirano knjigo za svojega malčka</h1>
        <steps :count="3" :active="1"></steps>
      </div>
      <div class="character-wrapper">
          <form>
            <span>Ime mi je</span>
            <span>Ime otroka:</span>
            <input type="text" name="name">
          </form>
          <img src="/images/character.png" class="character" alt="Slika otroka">
          <img src="/images/bubble-talk.png" class="bubble" alt="Oblaček">
          <div class="gender-select">
            <span class="material-icons">female</span>
            <span class="material-icons">male</span>
          </div>
      </div>
      <div class="bottom">
        <span class="message">Izberite spol otroka in vnesite njegovo ime</span>
        <div class="btn salmon">
          <span>Nadaljuj</span>
        </div>
      </div>
    </div>
    <div v-else class="spinner">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
  </section>
</template>

<script>

import Steps from '../components/Steps.vue'

export default {
  name: 'hero',
  components: {
    'steps': Steps
  },
  props: ["loading"]
}
</script>

<style lang="scss">

#hero {
  background-image: linear-gradient(0deg, rgba(255,255,255,0.2847339619441527) 2%, rgba(246,253,255,1) 88%), url('/images/stars-transparent.svg');
  height: 714px;
  background-size: bottom;
  background-position: center;
  background-size: inherit;
  background-repeat: no-repeat;
  display: flex;

  @include breakpoint(xs-only) {
    height: 850px;
  }

  .character-maker {
    margin: 65px auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;

    @include breakpoint(xs-only) {
      padding: 0 25px;
    }

    .intro {
      animation: appear 1s;

      h1 {
        margin-bottom: 30px;
      }
    }

    .character-wrapper {
      display: flex;
      margin-top: 40px;
      margin-bottom: 10px;
      position: relative;
      animation: appear 1s;

      @include breakpoint(xs-only) {
        display: block;
        margin: auto;
      }

      img.character {
        margin-left: 9px;
        width: 220px;
      }

      img.bubble {
        position: absolute;
        right: 32px;
        width: 200px;
        transform: rotate(4deg);
        top: -30px;

        @include breakpoint(xs-only) {
          display: none;
        }
      }

      form {
        position: absolute;
        width: 160px;
        right: 55px;
        top: 0;
        z-index: 2;
        text-align: center;

        @include breakpoint(xs-only) {
          position: relative;
          right: 0;
          margin: 10px auto 0;
        }

        span {
          font-size: 1.3rem;

          &:nth-child(1) {
            display: block;

            @include breakpoint(xs-only) {
              display: none;
            }
          }

          &:nth-child(2) {
            display: none;

            @include breakpoint(xs-only) {
              display: block;
            }
          }
        }

        input {
          width: 144px;
          height: 36px;
          border-radius: 10px;
          border: 1px solid #4e5562;
          margin-top: 10px;
          text-align: center;
          font-size: 1.3rem;
          color: $primaryText;

          &:focus::placeholder {
            color: transparent;
          }
        }
      }

      .gender-select {
        position: absolute;
        right: 77px;
        bottom: 39px;

        @include breakpoint(xs-only) {
          position: relative;
          right: 0;
          bottom: 0;
          margin: 10px;
          display: flex;
          justify-content: center;
        }

        span {
          font-size: 50px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          cursor: pointer;
          @include hover;

          &:nth-child(1) {
            background: $salmon;
            color: #fff;
          }

          &:nth-child(2) {
            color: $blueGray;
            border: 3px solid $blueGray;
            margin-left: 15px;
          }
        }
      }
    }

    .bottom {
      text-align: center;
      animation: appear 1s;

      & > span {
        display: block;
      }
    }
  }
}

</style>
