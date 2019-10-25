<style lang="less">
@gradient-color: #3788ee;
@bg-color: #f7f8fa;
@title-color:#3a3a3a;
@text-color: #7e7e7e;
@placeholder-color: #7e7e7e;
.login-vue {
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  //background: @bg-color;
  background-color: #e3fffe;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23c6cacc' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%2396a7aa' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23bdb8c6' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23929ea4' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23b3a5bf' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%238f959d' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23a88fb8' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%238b8b97' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%239d75b1' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%2387808f' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%239153aa' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23837488' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  .login-container {
    width: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .login-content {
      letter-spacing: 2px;
      background: #FFF;
      padding: 70px 30px 20px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.06);
      border-radius: 3px;
      box-sizing: border-box;
      >div {
        margin: 30px 0;
        &.login-input {
          position: relative;
          .placeholder {
            position: absolute;
            color: @placeholder-color;
            top: 6px;
            font-size: 16px;
            transition: all .2s;
            left: 0;
            pointer-events: none;
          }
          input {
            font-size: 16px;
            padding: 8px 0;
            height: 40px;
            width: 100%;
            border: none;
            border-radius: 0;
            border-bottom: 1px solid #d3d3d3;
            box-shadow: inset 0 0 0 1000px #fff;
            outline: none;
            box-sizing: border-box;
            transition: .3s;
            font-weight: 200;
            &:focus {
              border-bottom-color: @gradient-color;
              box-shadow: inset 0 0 0 1000px #fff;
            }
          }
          input:focus + .placeholder, .placeholder.fixed{
            font-size: 13px;
            top: -16px;
          }
          input:-webkit-autofill + .placeholder {
            font-size: 13px;
            top: -16px;
          }
        }
        &.login-title {
          font-size: 30px;
          color: @title-color;
          line-height: 1;
          margin: -16px 0px 40px;
          font-weight: 200;
        }

      }
      > .buttonDiv {
        margin-top: 45px;
        .h-btn {
          padding: 12px 0;
          font-size: 18px;
          opacity: .8;
          border-radius: 3px;
          background: @gradient-color;
          border-color: @gradient-color;
          &:hover {
            opacity: 1;
            background: @gradient-color;
            border-color: @gradient-color;
          }
        }
      }
    }
    .copyright {
      letter-spacing: 1px;
      margin-top: 30px;
      color: @text-color;
      a {
        color: @text-color;
      }
    }
  }
}
</style>

<template>
  <div class="login-vue">
    <div class="login-container">
      <div class="login-content">
        <div class="login-title">管理系统</div>
        <div class="login-name login-input">
          <input type="text" name="username" v-model="login.username" autocomplete="off"/>
          <span class="placeholder" :class="{fixed: login.username != '' && login.username != null}">用户名</span>
        </div>
        <div class="login-password login-input">
          <input type="password" name="password" v-model="login.password" @keyup.enter="submit" autocomplete="off"/>
          <span class="placeholder" :class="{fixed: login.password != '' && login.password != null}">密码</span>
        </div>
        <div class="buttonDiv">
          <Button :loading="loading" block color="primary" size="l" @click="submit">登录</Button>
        </div>
      </div>
      <p class="copyright"> Copyright © 2019 vvpvvp - <a href="https://www.heyui.top/">heyui.top</a></p>
    </div>
  </div>
</template>
<script>

import Login from 'model/login/Login';

export default {
  data() {
    return {
      login: Login.parse({}),
      loading: false
    };
  },
  mounted() {
  },
  methods: {
    submit() {
      this.loading = true;
      R.Login.login(Login.dispose(this.login)).then(resp => {
        if (resp.ok) {
          let msg = resp.body;
          Utils.saveLocal('token', msg.value);
          window.location = '/';
        }
        this.loading = false;
      });
    }
  }
};
</script>
