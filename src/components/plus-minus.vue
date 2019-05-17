<template>
  <div class="font">
    <transition name="jian">
    <span class="iconfont icon-jianhao font_jian" v-if="show" @click="handlejian"></span>
    </transition>
    <transition name="key">
    <span class="font_key" v-if="show">{{show? show : 1}}</span>
    </transition>
    <span class="iconfont icon-jiahao font_jia"  @tap="handlejia"></span>
  </div>
</template>
<script>
export default {
  name: 'plus-minus',
  data () {
    return {
      as: false
    }
  },
  props: {
    listItem: {
      type: Object
    }
  },
  computed: {
    foot_info () {
      return this.$store.state.foot_info
    },
    commodities () {
      return this.$store.state.commodity.commodities
    },
    show () {
      if (this.commodities.length > 0) {
        for ( let i = 0; i < this.commodities.length; i++) {
          if (this.listItem.name == this.commodities[i].name) {
            this.listItem.count = this.commodities[i].count
            return this.listItem.count
          }
        }
       }
      else if (this.commodities.length == 0) {
        this.$store.commit('SET_FOOT_MASK',false)
        return this.listItem.count = 0
      }


    }
  },
  methods: {
    handlejian () {
      if (this.listItem.count == 1){
        this.listItem.count--
        this.$store.commit({
          type: 'REPLACE_LISTITEM_COUNT',
          name: this.listItem.name,
          count: this.listItem.count
         })

        this.$store.commit({
          type: 'RED_LISTITEM_SPLICE',
          name: this.listItem.name
        })

      }else {
        this.listItem.count--
        this.$store.commit({
          type: 'REPLACE_LISTITEM_COUNT',
          name: this.listItem.name,
          count: this.listItem.count
         })
      }
      // console.log(this.$store.state.commodity.commodities)
    },
    handlejia () {
      if (this.listItem.count == 0){
        this.listItem.count++
        this.$store.commit('PUSH_commodities', this.listItem)

      }else{
        this.listItem.count++
        this.$store.commit({
          type: 'REPLACE_LISTITEM_COUNT',
          name: this.listItem.name,
          count: this.listItem.count
         })
      }

      // console.log(this.$store.state.commodity.commodities)
    }
  }
}
</script>
<style lang="less" scoped>
  .font {
    width: 110px;
    height: 100%;
    display: inline-block;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    top: 5px;
    position: relative;
    // background-color: red;
    .font_jian {
      display: inline-block;
      position: absolute;
      top: -2px;
      left: 30px;
    }
    .font_key {
      display: inline-block;
      position: absolute;
      top: 2px;
      left: 65px;
      color: black;
    }
    .font_jia {
      display: inline-block;
      position: absolute;
      top: -2px;
      left: 85px;
    }
  }
  .jian-enter, .jian-leave-to {
    transform: translateX(55px) rotate(180deg)
  }
  .jian-enter-active, .jian-leave-active {
    transition: all .2s linear;
  }
  .key-enter, .key-leave-to {
    transform: translateX(20px) rotate(180deg)
  }
  .key-enter-active, .key-leave-active {
    transition: all .2s linear;
  }
</style>


