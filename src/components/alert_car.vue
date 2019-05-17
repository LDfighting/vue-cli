<template>
  <div class="alert_car">
    <div class=content>
      <span class="car">清空购物车?</span>
      <div class="btn">
        <span @click="cancel">取消</span>
        <span @click="clear">确定</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'alert_car',
  methods: {
    cancel () {
      this.$emit('car', 1)
    },
    clear () {
      this.$emit('car', 1)
      this.$store.commit('CLEAR_COMMODITY')

      this.$store.commit('SET_FOOT_MASK',false)

    }
  }
}
</script>
<style lang="less" scoped>
  .alert_car {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(51, 51, 51, 0.329);
    display: flex;
    justify-content: center;
    align-items: center;
    .content {
      width: 300px;
      height: 120px;
      background-color: white;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 5px;
      box-shadow: 1px 2px 2px rgb(17, 17, 17);
      display: flex;
      flex-flow: column nowrap;
      .car {
        width: 100%;
        height: 60px;
        color: rgba(121, 119, 119, 0.959);
      }
      .btn {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        span {
          width: 60px;
          color: rgb(58, 115, 240);
        }
      }
    }
  }
</style>


