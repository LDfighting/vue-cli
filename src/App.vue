<template>
  <div id="app">

      <transition name="view" mode="out-in">
      <router-view />
      </transition>
  </div>
</template>
<script>

export default {

}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
body,html{
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

  .view-enter, .view-leave-to {
    opacity: 0;
    transform: translateX(-100%);
  }
  .view-enter-active, .view-leave-active {
    transition: all 0.2s ease;
  }
</style>
