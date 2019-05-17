<template>
            <p @tap="handleIndexSon(index)">
            <span class="iconfont icon-rexiao" v-if="index==0"></span>
            <span class="iconfont icon-zhaopai-" v-if="index==1"></span>
          {{item.type}}
          <badge :text="typeBadgeCount" v-if="index > 1 && typeBadgeCount > 0" class="menu_badge"></badge>
          </p>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    },
    index: {
      type: Number
    }
  },
  methods: {
    handleIndexSon (index) {
      this.$emit('hand', index)
    }
  },
  computed: {
    commodities () {
      return this.$store.state.commodity.commodities
    },
    typeBadgeCount () {
      let count = 0;
      for( let i = 0; i < this.commodities.length; i++) {
        for (let j = 0; j < this.item.foodTotal.length; j ++){
          if( this.item.foodTotal[j].name == this.commodities[i].name)
          count += this.commodities[i].count
        }
      }
      return count
    }
  }
}
</script>
<style lang="less" scoped>
            .menu_badge {
            position: absolute;
            width: 14px;
            height: 14px;
            opacity: 1;
            right: 0px;
          }
</style>
