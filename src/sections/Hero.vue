<template>
  <section id="hero">
    <!-- <img src="/images/star.png" class="star"> -->
    <div class="character-maker">
      <span class="intro">Ustvarite najbolj personalizirano knjigo za svojega malčka</span>
      <steps :count="3" :active="1"></steps>
      <div class="character-wrapper">
          <form>
            <span>Ime mi je</span>
            <input type="text" name="name" placeholder="ime">
          </form>
          <img src="/images/character.png" class="character">
          <img src="/images/bubble-talk.png" class="bubble">
          <div class="gender-select">
            <span class="material-icons">female</span>
            <span class="material-icons">male</span>
          </div>
      </div>
      <div class="message">
        <span>Prosimo, vnesite ime otroka</span>
      </div>
      <div class="btn salmon">
        <span>Nadaljuj</span>
      </div>
    </div>
  </section>
</template>

<script>

import Steps from '../components/Steps.vue'

export default {
  name: 'hero',
  components: {
    'steps': Steps
  }
}
</script>

<style lang="scss">

#hero {
  background-image: linear-gradient(0deg, rgba(255,255,255,0.2847339619441527) 2%, rgba(246,253,255,1) 88%), url('/images/stars-transparent.svg');
  height: 830px;
  background-size: cover;
  background-position: center;
  background-size: inherit;
  display: flex;

  @include breakpoint(xs-only) {
    height: 1000px;
  }

  /* TODO
  .star {
    position: absolute;
    left: 200px;
    top: 800px;
    animation: star 10s infinite ease-in;
  }
  */

  .character-maker {
    margin: 65px auto auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 450px;

    @include breakpoint(xs-only) {
      padding: 0 25px;
    }

    span.intro {
      font-size: 1.3rem;
      line-height: 2rem;
      text-transform: uppercase;
      text-align: center;
      margin-bottom: 30px;
    }

    .character-wrapper {
      display: flex;
      margin-top: 40px;
      margin-bottom: 10px;
      position: relative;

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

          &:nth-child(1) {
            background: $salmon;
            color: #fff;
          }

          &:nth-child(2) {
            color: $salmon;
            border: 3px solid $salmon;
            margin-left: 15px;
          }
        }
      }
    }

    .message {
      text-align: center;
    }
  }
}

</style>
