<template>
  <div class="header">
    <div class="menu">
      <div class="menu_area">
        <span class="iconfont icon-sandaogang" @click="aside_show"></span>
      </div>
    </div>
    <div class="logo">
      <img src="/img/00.jpg" alt="" width="375" height="102">
    </div>

  </div>
</template>
<script>
export default {
  name: 'heade',
  methods: {
    aside_show () {
      this.$store.commit('SET_ASIDE_SHOW', true);
    }
  }
}
</script>
<style lang="less" scoped>
html,body{
  width: 100%;
  height: 100%;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 154px;
    background-color:white;
    .menu {
      width: 100%;
      height: 52px;
      background-color: white;
      .menu_area {
        width: 52px;
        height: 52px;
        .icon-sandaogang {
          display: block;
          line-height: 52px;
          text-align: center;
          font-size: 20px;
        }
      }
    }
    .logo {
      width: 100%;
      height: 102px;
      // background-color: palegreen;
    }
  }
}

</style>

