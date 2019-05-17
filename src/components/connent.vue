<template>
  <div class="connent">

    <tab :line-width="1" custom-bar-width="60px" class="connent_menu">
      <tab-item @on-item-click="handler(1)" :selected="name == 1" >
        <router-link :to="{name: 'commodity'}" class="title">点餐</router-link>
      </tab-item>
      <tab-item @on-item-click="handler(2)" :selected="name == 2">
        <router-link :to="{name: 'comment'}" class="title">评价</router-link>
      </tab-item>
      <tab-item @on-item-click="handler(3)" :selected="name == 3">
        <router-link :to="{name: 'business'}" class="title">商家</router-link>
      </tab-item>
    </tab>
    <!-- <div class="connent_menu">333</div> -->
    <transition name="view" mode="out-in">
    <router-view class="routerView" />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'connent',
  data () {
    return {

    }
  },
  computed: {
    name () {
      return this.$store.state.name
    }
  },
  methods: {
    handler (name) {
      this.$store.commit('SET_CONNENT_NAME', name)
    }
  }
}
</script>
<style lang="less" scoped>
  .connent {
    position: absolute;
    top: 154px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: white;
    .connent_menu {
      position: fixed;
      width: 100%;
      z-index: 100;
      .title {
        display: block;
        width: 125px;
        height: 44px;
        text-decoration: none;
        color: #2c3e50;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
      }
    }
    .routerView {
      position: relative;
      background-color: white;
      top: 44px;
      left: 0px;
    }

  }
  .view-enter, .view-leave-to {
    opacity: 0;
    transform: translateX(-375px);
  }
  .view-enter-active, .view-leave-active {
    transition: all 0.2s ease;
  }
</style>


