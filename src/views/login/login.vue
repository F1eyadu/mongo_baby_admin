<template>
  <div class="wrapper">
    <main>
      <div class="title"></div>
      <div class="login">
        <div class="item">
          <input id="name" AUTOCOMPLETE="off" v-model="userName" tabindex="1" type="text" placeholder="用户名">
          <a class="icon icon_name"></a>
        </div>
        <div class="item">
          <input id="pwd" AUTOCOMPLETE="off" v-model="pwd" tabindex="2" type="password" placeholder="密码">
          <a class="icon icon_pwd"></a>
        </div>
        <a class="button" @click="submit">登录</a>
      </div>
    </main>
    <div class="compy">Copyright &copy; 2018-2019 Mango Mommy, All Right Reserved&nbsp;&nbsp;2018-2019 芒果妈咪 版权所有</div>
  </div>
</template>
<script>
import { Message} from 'ant-design-vue'
export default {
    data() {
        return {
            userName: '',
            pwd: ''
        }
    },
    methods: {
        submit() {
            if(!this.userName) {
                Message.warning('用户名必填')
                return
            }
            if(!this.pwd) {
                Message.warning('密码必填')
                return
            }
        }
    },
}
</script>
<style lang="less" scoped>
.wrapper {
  min-height: 100vh;
  width: 100%;
  background: url("../../assets/images/bg.png") center center no-repeat fixed;
  background-size: cover;
  overflow: hidden;
  position: relative;
  main {
    width: 450px;
    height: 500px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.7);
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin-top: 10vh;
    .title {
      background: url("../../assets/images/logo.png") center center
        no-repeat/cover;
      background-size: 70%;
      padding-top: 40px;
      height: 100px;
    }
    .login {
      .item {
        width: 320px;
        margin: 0 auto;
        margin-top: 40px;
        margin-left: 15%;
        height: 50px;
        position: relative;
        input {
          width: 100%;
          height: 100%;
          background-color: #ffffff;
          color: #cccccc;
          z-index: 999;
          border-radius: 2px;
          border: solid 1px rgba(230, 230, 230, 0.9);
          padding-left: 60px;
          outline: none;
        }
        .icon_name {
          background: url("../../assets/images/icon_head.png") center center
            no-repeat / cover;
          height: 20px;
          width: 16px;
          display: block;
          position: absolute;
          left: 25px;
          top: 15px;
        }
        .icon_pwd {
          background: url("../../assets/images/icon_pwd.png") center center
            no-repeat / cover;
          height: 21px;
          width: 16px;
          display: block;
          position: absolute;
          left: 25px;
          top: 15px;
        }
      }
      .button {
        display: block;
        width: 320px;
        margin: 0 auto;
        margin-top: 80px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #ffffff;
        background-color: #159588;
        border-radius: 2px;
        cursor: pointer;
        outline: none;
      }
    }
  }
  .compy{
      font-size: 12px;
      text-align: center;
      color: #666;
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translatex(-50%);
  }
}
</style>
