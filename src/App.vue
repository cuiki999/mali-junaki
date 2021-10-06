<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
import Header from './layout/Header.vue'
import Main from './layout/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main
  },
}
</script>

<style lang="scss">

#app {

}
</style>
