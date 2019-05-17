<template>
  <div class="aside_mask" @click="aside_hide"></div>
</template>
<script>
export default {
  name:'mas',
  methods: {
    aside_hide () {
      this.$store.commit('SET_ASIDE_SHOW', false);
    }
  }
}
</script>
<style lang="less" scoped>
  .aside_mask {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 105;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgba(51,51,51,.8)
  }
</style>
