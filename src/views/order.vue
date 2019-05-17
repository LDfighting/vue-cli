<template>
  <div class="order">
    <x-header style="background-color:#0089DC" class="he"></x-header>
    <div class="msg-f" ref="msg">
      <div class="msg">
        <div class="pay">
          <h4>支付方式</h4>
          <checklist  :options="list" v-model="listItem" :max="1" ></checklist>
        </div>
        <div class="commodity">
          <h4>商品信息</h4>
          <ul>
            <li v-for="(item, index) in this.commodities" :key="index">
              <img :src="item.src" alt="" width="30" height="30" class="img">
              <span class="name">{{item.name}}</span>
              <span class="count">x{{item.count}}</span>
              <span class="total">￥{{(item.price*item.count).toFixed(1)}}</span>
            </li>
          </ul>
          <div class="sun">
            <h3>小计￥{{this.totalMoney}}</h3>
          </div>
          <div class="beizhu">
            <span >备注</span>
            <textarea name="" id="" cols="30" rows="8" class="area"></textarea>
          </div>
        </div>
      </div>
    </div>

    <xfoot ></xfoot>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import { Checklist } from 'vux'
import Xfoot from '_c/xfoot.vue'
import BScroll from 'better-scroll'
export default {
  name: 'order',
  data () {
    return {
      list: ['支付宝', '微信'],
      listItem: ['支付宝']
    }
  },
  components: {
    XHeader,
    Xfoot,
    Checklist
  },
  computed: {
    commodities () {
      return this.$store.state.commodity.commodities
    },
    totalMoney () {
      let sun = 0;
      for( let i = 0; i < this.commodities.length; i++) {
       sun += this.commodities[i].count * this.commodities[i].price
      }
      return (sun).toFixed(1)
    }
  },
  beforeRouteEnter (to, from, next) {
     if ( from.name == 'commodity' || 'business' || 'comment') next()
      else next({name: 'commodity'})
  },
  mounted () {


      new BScroll(this.$refs.msg,{
      click: true,
      bounce: false,
      momentum: false
    })
    }


}
</script>
<style lang="less" scoped>
  .order{
    width: 100%;
    height: 100%;
    background-color: #0089DC;
    .he {
      z-index: 99;
      box-shadow: 0px 1px 1px rgb(3, 102, 163);
      font-weight: 600;
    }
    .msg-f {
      z-index: -2;
      width: 100%;
      height: 440px;
      .msg {
      width: 100%;
      background-color:white;
      border: 10px solid #0089DC;
      box-sizing: border-box;
      .pay {
        width: 100%;
        height: 150px;
        border-bottom: 10px solid #0089DC;
        box-sizing: border-box;
        padding: 8px;
        h4 {
          height: 30px;
          border-bottom: 1px solid rgb(168, 166, 166);
        }
      }
      .commodity {
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        h4 {
          height: 30px;
          border-bottom: 1px solid rgb(168, 166, 166);
        }
        ul {
          li {
            display: flex;
            padding-top:10px;
            list-style: none;
            width: 100%;
            height: 50px;
            align-items: center;
            font-size: 13px;
            color: rgb(39, 38, 38);
            .img {
              border-radius: 3px;
              margin-right: 10px;
            }
            .name {
              width: 190px;
            }
            .count {
              width: 40px;
            }
            .total {
              width: 60px;
              text-align: right;
            }
          }
        }
        .sun {
          width: 100%;
          height: 30px;
          text-align: right;
          border-top: 1px solid rgb(196, 193, 193);
          padding: 5px 0 10px 0;
        }
        .beizhu {
          display: flex;
          flex-flow: column nowrap;
          .area {
            border: 1px solid rgb(196, 193, 193);
          }
        }
      }
    }
  }

  }
</style>

