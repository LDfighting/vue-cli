<template>
  <div class="commodity" >
    <div class="menu" ref="menu">
      <ul>
        <li v-for="(item, index) in foodList" :key="index" :class="{ 'current': currentIndex === index  }" >


          <menue :item="item" :index="index" @hand="handleIndex"></menue>
        </li>
      </ul>

    </div>
    <div class="food" ref="food">
      <ul>
        <li v-for="(item, index) in foodList" :key="index" class="food_list">
          <div class="type" >
            <span v-if="!index == 0">{{item.type}}</span>
          </div>

          <ul class="food_in_ul">
            <li v-for="(i, index) in item.foodTotal" :key="index" class="food_in">
              <div class="food_left" @tap="handletap">
                <img :src="i.src" alt="加载中" width="90" height="100">
              </div>
              <div class="food_right">
                <h5>{{i.name}}</h5>
                <div class="smallSize"><span>{{i.description}}</span></div>
                <div class="smallSize">
                  <span>月售{{i.sellMount}}</span> <span>好评率{{i.rating}}%</span>
                </div>
                <div class="price">
                  <span class="price_font"><code>￥</code><b>{{i.price}}</b></span>
                  <plus-minus :listItem="i" ></plus-minus>
                </div>
              </div>
            </li>
          </ul>
        </li>

      </ul>
    </div>
    <div class="food_type">
      <ul>
        <li v-for="(item, index) in foodList" :key="index" >

          <div class="food_type_list" v-if="currentIndex == index">
            <p >{{item.type}}</p>
          </div>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>

import axios from 'axios'
import BScroll from 'better-scroll'
import plusMinus from '_c/plus-minus.vue'
import menue from '_c/menu.vue'
export default {
  data () {
    return {
      foodList: [],
      listHeight:[],
      scrollY: 0,
      key: 0,
      count: 0
    }
  },
  components: {
    plusMinus,
    menue
  },
  props: {

  },
  created () {
    axios.get('/api/foodList.json').then((res) => {
      this.foodList = res.data
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.food, {
          tap: true,
          probeType: 3,
          click: true
        })
        new BScroll(this.$refs.menu, {
          tap: true
        })
        this.scroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
        this.calcFoodHeight();

      })
    })
  },
  mounted() {

  },

  methods: {
    handletap () {

    },
    handleIndex (index) {
      let foodlist = this.$refs.food.getElementsByClassName('food_list')
      this.scroll.scrollToElement(foodlist[index], 250)
    },
    calcFoodHeight () {
      let foodlist = this.$refs.food.getElementsByClassName('food_list');
      let height = 0;
      this.listHeight.push(height);
      for(let i = 0; i < foodlist.length; i++) {
          height += foodlist[i].clientHeight;
          this.listHeight.push(height)
      }
    }
  },
  computed: {
    currentIndex () {
      for (let i = 0; i < this.listHeight.length; i++) {
        let height1 = this.listHeight[i];
        let height2 = this.listHeight[i+1]
        if((this.scrollY >= height1 && this.scrollY < height2)){
          return i
        }
      }
    }


  }
}
</script>
<style lang="less" scoped>
  .commodity {

    width: 100%;
    display: flex;
    background-color: white;
    .menu {
      float: left;
      width: 78px;
      height: 416px;
      background-color: rgba(247, 244, 244, 0.973);
      opacity: 0.65;
      position: relative;
      ul {
        li {
          list-style: none;
          display: block;
          width: 78px;
          height: 44px;
          text-align: center;
          line-height: 44px;
          font-size: 12px;
          border-bottom: 1px white solid;
          border-radius: 0 2px 2px 0;
          box-sizing: border-box;

        }
      }
    }
    .food {
      float: left;
      width: 292px;
      height: calc(100vh - 252px);
        li {
          list-style: none;

        }
      .type {
        width: 297px;
        height: 20px;
        padding-left: 5px;
        font-size: 12px;
        // background-color: yellow;
      }
      .food_in {
        display: block;
        width: 297px;
        height: 110px;
        .food_left {
          width: 100px;
          height: 110px;
          float: left;
          padding: 5px;
          box-sizing: border-box;
          img {
            border-radius: 5px;
          }
        }
        .food_right {
          width: 197px;
          height: 110px;
          float: left;
          padding: 5px;
          box-sizing: border-box;

          .smallSize {
            font-size:14px;
            font-family: 'Avenir', Helvetica, Arial, sans-serif;
            -webkit-transform-origin-x: 0;
           transform: scale(0.70);
           color: rgba(121, 119, 119, 0.959);
          }
          .price {
            width: 100%;
            height: 20px;
            color: rgb(255, 0, 0);
            position: relative;
            top: 10px;
            .price_font {
              display: inline-block;
              width: 67px;
              height: 100%;

            }

          }
        }
      }
    }
    .food_type {
      position: fixed;
      left: 78px;
      width: 297px;
      padding-left: 5px;
      font-size: 12px;
      li {
        list-style: none;
        .food_type_list {
          width: 297px;
          height: 20px;
          background-color: white;
        }
      }
    }
  }
  .current {
    width: 68px;
    height: 44px;
    background-color: white;
    font-weight: 800;
    opacity: 1;
  }

</style>
