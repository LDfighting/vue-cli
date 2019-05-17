<template>

    <transition name="aside">
    <div class="aside" @click="aside_show" >
      <div class="top">
        <img src="/img/touxiang.png" alt="" class="tou">
        <span >
          <!-- <router-link :to="{ name: 'login'}" class="login">登录</router-link> -->
          <!-- <input type="button" value="登录" @click="login=!login"> -->
          <a href="javaScript;" @click.prevent="login=!login" class="login">登录</a>
          <alert title="还没有实现啦" v-model="login"></alert>
        </span>
      </div>
      <div class="content">
        <ul>
          <li>
            <span class="iconfont icon-order font"></span>
            <span>
              <a href="javaScript;" @click.prevent="login1=!login1" class="text">我的订单</a>
              <alert title="还没有实现啦" v-model="login1"></alert>
            </span>
          </li>
          <li>
            <span class="iconfont icon-maiguodechanpin font"></span>
            <span>
              <a href="javaScript;" @click.prevent="login2=!login2" class="text">买过的</a>
              <alert title="这个也是哦" v-model="login2"></alert>
            </span>
          </li>
          <li>
            <span class="iconfont icon-daifukuan font"></span>
            <span>
              <a href="javaScript;" @click.prevent="login3=!login3" class="text">待付款</a>
              <alert title="不用再点啦" v-model="login3"></alert>
            </span>
          </li>
        </ul>
      </div>

    </div>
    </transition>

</template>
<script>
export default {
  name: 'asid',
  data () {
    return {
      login: false,
      login1: false,
      login2: false,
      login3: false,

    }
  },
  methods: {
    aside_show () {
      this.$store.commit('SET_ASIDE_SHOW', true);
    }
  }
}
</script>
<style lang="less" scoped>
  html,body {
    width: 100%;
    height: 100%;
    .aside {
      position: fixed;
      top: 0;
      left: 0;
      width: 68%;
      height: 100%;
      z-index: 106;
      background-color: white;
      .top {
        width: 100%;
        height: 160px;
        padding-top: 60px;
        padding-left: 30px;
        box-sizing: border-box;
        box-shadow: 0px 1px 1px rgba(66, 65, 65, 0.685);
        .tou {
          display: inline-block;
        }
        .login {
          text-decoration: none;
          position: relative;
          top: -20px;
          left: 10px;
          color: black;
        }
      }
      .content {
        width: 100%;
        height: 300px;
        padding-top: 30px;
        ul {
          display: flex;
          flex-flow: column nowrap;
          li {
            width: 100%;
            height: 50px;
            padding-left: 30px;
            box-sizing: border-box;
            .font {
              display: inline-block;
              padding-right: 20px;
            }
            .text {
              color: black;
              text-decoration: none;
            }
          }
        }
      }
    }
  }
.aside-enter, .aside-leave-to {
  opacity: 0;
  transform: translateX(-68%);
}
.aside-enter-active, .aside-leave-active {
  transition: all .5s ease;
}
</style>

