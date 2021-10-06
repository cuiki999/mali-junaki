<template>
  <header id="navigation">
    <!--<div class="promo-code">
      Zgodnji božični nakupi! Uporabite BOZICVOKTOBRU30 za 30% popust na VSE knjige! Preteče čez: 9 h 8 min 9 sek
    </div>-->
    <div class="navbar content">
      <div class="nav-section justify-left">
        <img src="/images/nav-hamburger.png">
        <span class="ml-10">Meni</span>
      </div>
      <div class="nav-section justify-center">
        <img src="/images/nav-logo.png">
      </div>
      <div class="nav-section justify-right">
        <span class="mr-10">Košarica</span>
        <img src="/images/nav-cart.png">
      </div>
    </div>
  </header>
</template>

<script>

export default {
  name: 'navigation',
}
</script>

<style lang="scss">

#navigation {
  height: 90px;
  // height: 130px;
  background-color: #f4fdff;
  
  /*
  .promo-code {
    height: 40px;
    line-height: 40px;
    background: hotpink;
    text-align: center;
    font-size: 1.3rem;
    color: #fff;
  }
  */

  .navbar {
    display: flex;

    .nav-section {
      display: flex;
      flex-basis: 0;
      flex: 1 1 0px;
      align-items: center;
      flex-grow: 1;
      height: 90px;
      
      span {
        text-transform: uppercase;
        font-size: 1.1rem;

        @include breakpoint(xs-only) {
          display: none;
        }
      }
    }
  }
}

</style>
