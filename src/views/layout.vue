<template>
  <div id="layout">
      <heade/>
      <asid v-show="aside_info"/>
      <transition name="fade">
        <mas v-show="aside_info"></mas>
      </transition>
      <connent></connent>
      <foot ></foot>
      <transition name="fade">
      <div class="mas" v-show="foot_info" @click="foot_ma"></div>
      </transition>
  </div>
</template>
<script>
import heade from '_c/header.vue'
import asid from '_c/aside.vue'
import connent from '_c/connent.vue'
import foot from '_c/foot.vue'
import mas from '_c/mask.vue'
export default {
  name: 'layout',
  data () {
    return {
      selected: ''
    }
  },
  components: {
    heade,
    asid,
    connent,
    foot,
    mas
  },
  beforeRouteLeave (to, from, next) {
    if(this.commodities.length == 0) next(false)
    else next()
  },
  computed: {
    commodities () {
      return this.$store.state.commodity.commodities
    },
    foot_info () {
      return this.$store.state.foot_info
    },
    aside_info () {
      return this.$store.state.aside_info
    }
  },
  methods: {
    foot_ma () {
      this.$store.commit('SET_FOOT_MASK',false)
    }
  }
}
</script>
<style lang="less" scoped>
  #layout {
      .router_menu {
    width: 100%;
    height: 43px;
    background-color: antiquewhite;
    text-align: center;
  }
  .mas {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    height: calc(100vh - 50px);
    background: rgba(51, 51, 51, 0.329)
  }

}
.fade-enter,.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,.fade-leave {
  opacity: 1;
}
</style>

