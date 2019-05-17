<template>
  <div class="foot">
    <transition name="m" >
    <foot-commodity v-show="foot_info" ref="foot_info"></foot-commodity>
    </transition>
    <div class="foot_left">
      <div class="left_font">
        <span class="iconfont icon-hezi font_hezi" @click="add"
         :class="{ 'hezi_height': totalCount > 0 }"></span>
        <badge :text="totalCount" v-show="totalCount" class="font_badge"></badge>
      </div>
      <div class="left_text">
        <span v-show="!totalCount">未选购商品</span>
        <span class="text">￥<b>{{totalMoney}}</b>元</span>
      </div>
    </div>
    <div class="foot_right">
      <span v-show="totalMoney < 20">
      <span v-show="totalMoney > 0">还差</span>
      ￥{{(20 - totalMoney).toFixed(1)}}起送</span>
      <span v-show="totalMoney > 20"><router-link to="/order" class="pay">结算</router-link></span>
    </div>

  </div>
</template>
<script>
import footCommodity from '_c/foot_commodity.vue'
export default {
  name: 'foot',
  data () {
    return {
      height: 0
    }
  },
  components: {
    footCommodity
  },
  methods: {
    add () {
      if (this.foot_info) this.$store.commit('SET_FOOT_MASK',false)
      else if (this.commodities.length)
        this.$store.commit('SET_FOOT_MASK',true)
    }
  },
  computed: {
    foot_info () {
      return this.$store.state.foot_info
    },
    commodities () {
      return this.$store.state.commodity.commodities
    },

    totalCount () {
      let count = 0;
      for( let i = 0; i < this.commodities.length; i++) {
       count += this.commodities[i].count
      }
      return count
    },
    totalMoney () {
      let sun = 0;
      for( let i = 0; i < this.commodities.length; i++) {
       sun += this.commodities[i].count * this.commodities[i].price
      }
      return (sun).toFixed(1)
    }

  }
}
</script>
<style lang="less" scoped>
  .foot {
    z-index: 102;
    position: fixed ;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 54px;
    .foot_left {
      float: left;
      width: 270px;
      height: 100%;
      background-color: rgba(36, 34, 34, 0.952);
      .left_font {
        float: left;
        width: 90px;
        height: 100%;
        // background-color: red;
        .font_hezi {
          position: relative;
          top: -8px;
          left: 15px;
          color: rgb(102, 97, 97);
        }
        .hezi_height {
          color: rgb(6, 107, 170);
        }
        .font_badge {
          position: relative;
          top: -31px;
          left: -3px;
        }
      }
      .left_text {
        float: left;
        position: relative;
        width: 80px;
        height: 100%;
        text-align: center;
        line-height: 45px;
        font-size: 10px;
        color: rgba(121, 119, 119, 0.959);
        // background-color:yellow;
        .text {
          font-size: 16px;
          color: rgb(243, 234, 235);
        }
      }
    }
    .foot_right {
      float: left;
      width: 105px;
      height: 100%;
      text-align: center;
      line-height: 50px;
      font-size: 13px;
      font-weight: 600;
      color: rgb(117, 112, 112);
      background-color: rgba(56, 53, 53, 0.95);
      .pay {
        display: block;
        text-decoration: none;
        width: 100%;
        height: 100%;
        font-size: 18px;
        background-color: rgb(63, 214, 3);
        color: rgb(243, 234, 235);
      }
    }
  .m-enter, .m-leave-to {
    transform: translateY(100%);

  }
  .m-enter-active, .m-leave-active {
    transition: all 0.6s ease;
  }
  }
</style>
