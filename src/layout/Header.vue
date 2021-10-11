<template>
  <header id="navigation">
    <div class="navbar content">
      <div class="nav-section justify-left">
        <img src="/images/nav-hamburger.png" alt="Menu">
        <span class="ml-10">Meni</span>
      </div>
      <div class="nav-section justify-center">
        <img src="/images/nav-logo.png" alt="Logo Mali junaki">
      </div>
      <div class="nav-section justify-right">
        <div class="right-container">
          <span class="mr-10">Košarica</span>
          <img src="/images/nav-cart.png" alt="Nakupovalni voziček">
        </div>
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
  background-color: #f4fdff;
  
  .navbar {
    display: flex;
    display: -webkit-flex;
    -webkit-flex-direction: row;
    
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

      &.justify-right {
        position: relative;

        .right-container {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
        }
      }
    }
  }
}

</style>
