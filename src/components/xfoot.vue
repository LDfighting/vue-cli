<template>
  <div class="xfoot">
    <div class="xfoot_left">
      <div class="left_text">
        <span class="text">￥<b>{{totalMoney}}</b>元</span>
      </div>
    </div>
    <div class="xfoot_right">
      <span v-show="totalMoney > 20">
        <!-- <router-link to="/order" class="pay">确定支付</router-link> -->
        <a href="javaScript;" @click.prevent="login=!login" class="pay">确定支付</a>
        <alert title="因为没有收你的钱,所以你没得吃" v-model="login" @on-hide="go"></alert>
      </span>
    </div>

  </div>
</template>
<script>

export default {
  name: 'xfoot',
  data () {
    return {
      height: 0,
      login: false
    }
  },
  methods: {
    go () {
      this.$store.commit('CLEAR_COMMODITY')
      this.$router.push({path:'/'})
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
  .xfoot {
    box-shadow: 0px -1px 1px rgb(3, 102, 163);
    z-index: 102;
    position: fixed ;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 54px;
    .xfoot_left {
      float: left;
      width: 270px;
      height: 100%;
      background-color: rgba(36, 34, 34, 0.952);
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
    .xfoot_right {
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


  }
</style>
