<template>
  <section id="present" class="content has-title">
    <h1 class="default">Darilo, ki bo razveselilo</h1>
    <div class="image-wrapper" id="present-bg">
      <img src="/images/coloring-books.jpg" alt="Ozadje za pobarvanke">
    </div>
    <p>
      Kdo smo Mali junaki? Prav vsak je unikat. In dokaz za to so naše pobarvanke, ki jih lahko prenesete povsem zastonj v le nekaj minutah. Kolikor izbire, toliko zabave!
    </p>
    <div class="btn blue-gray">
      <span>Barvajte zdaj!</span>
    </div>
  </section>
</template>

<script>

export default {
  name: 'present',
}

</script>

<style lang="scss">

#present {

  .image-wrapper {
    margin-top: 40px;
    visibility: hidden;

    &.animate {
      visibility: visible;
      animation: scroll-left 0.5s;
    }

    img {
      max-width: 1128px;
      width: 100%;
    }
  }

  p {
    margin-top: 30px;
  }
}

</style>
