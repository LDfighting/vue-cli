<template>
  <div class="f_commodity">
    <div class="choose" >
      <span class="title">已选商品</span>
      <div class="font"><span class="iconfont icon-lajixiang font_la" @click="clear">清空</span></div>
    </div>
    <ul>
      <li v-for="(item, index) in commodities" :key="index" class="item">
        <span class="item_name"><b>{{item.name}}</b></span>
        <div class="item_jia">
           <plus-minus :listItem="item" class="jia"></plus-minus>
        </div>
      </li>
    </ul>
    <alert-car v-if="clearCar" @car="clear"></alert-car>
  </div>
</template>
<script>
import plusMinus from '_c/plus-minus.vue'
import alertCar from '_c/alert_car.vue'
export default {
  name: 'food_commodity',
  data() {
    return {
      clearCar: false
    }
  },
  components: {
    plusMinus,
    alertCar
  },
  computed: {
    commodities () {
      return this.$store.state.commodity.commodities
    }
  },
  methods:{
    clear (data) {
      if(!this.clearCar)
      this.clearCar = true
      else if (data == 1) this.clearCar = false
    }
  }
}
</script>
<style lang="less" scoped>
  .f_commodity {
    z-index: -1;
    width: 100%;
    position: absolute;
    bottom: 54px;
    left: 0px;
    padding-bottom: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    .choose {
      width: 100%;
      height: 32px;
      padding: 10px 15px 10px 15px;
      display: flex;
      box-sizing: border-box;
      font-size: 13px;
      color: rgba(121, 119, 119, 0.959);
      .title {
        width: 90px;
      }
      .font {
        display: inline-block;
        width: 255px;
        display: flex;
        justify-content: flex-end;
        .font_la {
          font-size: 12px;
        }
      }
    }
    ul {
    width: 100%;
    li {
      width: 100%;
      height: 32px;
      padding: 10px 15px 10px 15px;
      box-sizing: border-box;
    }
      .item {
        display: flex;
        flex-direction: row;
        .item_name {
          width: 90px;
          font-size: 14px;
        }
        .item_jia {
          display: inline-block;
          width: 255px;
          display: flex;
          justify-content: flex-end;
        }
        .jia {
          display: inline-block;
          position: relative;
          top: -2px;
        }
      }

    }
  }
</style>


