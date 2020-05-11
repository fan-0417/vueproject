<template>
  <div class="PersonalContainer">
    <div class="title">
      <div class="gohome" @click="goHome">
        <i class="iconfont icon-shouye"></i>
      </div>
      <p class="name">网易严选</p>
      <div class="search" @click="goSearch">
        <i class="iconfont icon-search"></i>
      </div>
      <div class="goCart" @click="goCart">
        <i class="iconfont icon-cart"></i>
      </div>
    </div>
    <div v-if="flag">
      <div class="logo">
        <img src="@/static/imgs/logo1.jpg" alt="">
      </div>
      <div class="phoneLoginContainer">
        <div class="phoneLogin">
          <div class="bg bg1"></div>
          <div class="text" @click="changeFlag">手机号快捷登录</div>
        </div>
        <div class="mailbox">
          <div class="bg"></div>
          <div class="text">邮箱账号登录</div>
        </div>
      </div>
      <div class="bottom">
        <div class="weixin">
          <i class="iconfont icon-icon_weixin"></i>
          <span>微信</span>
        </div>
        <div class="qq">
          <i class="iconfont icon-QQ"></i>
          <span>QQ</span>
        </div>
        <div class="weibo">
          <i class="iconfont icon-weibo-mobile"></i>
          <span>微博</span>
        </div>
      </div>
    </div>

    <div v-if="!flag">
      <div class="phoneNumberContainer">
        <div class="phoneNumber">
          <img src="@/static/imgs/logo1.jpg" alt="">
        </div>
        <van-form class="vantLogin" @submit="onSubmit" ref="vantForm" @validate="validat">
          <van-field
            class="user"
            v-model="phone"
            name="手机号"
            clearable 
            placeholder="请输入手机号"
            :rules="[{ validator:phoneValidator, message: '手机号格式不正确', trigger:'onChange'}]"
          />
          <van-field
            v-if="loginMethod"
            class="info"
            v-model="password"
            type="password"
            name="验证码"
            clearable
            placeholder="请输入短信验证码"
            :rules="[{ validator:captchaValidator , message: '短信验证码错误' ,trigger:'onChange'}]"
          >
          
            <template #button v-if="loginMethod">
              <van-button @click="verificationCode" native-type="button" plain  hairline type="default">获取验证码</van-button>
            </template>
          </van-field>
          <van-field
            v-else
            class="info"
            v-model="password1"
            type="password1"
            name="密码"
            clearable
            placeholder="请输入密码"
            :rules="[{ validator: captchaPwd, message: '密码最少为6位' ,trigger:'onChange'}]"
          />
          <div class="Problem">
            <span class="item1">{{loginMethod ? '遇到问题?' : '忘记密码'}} </span>
            <span @click="changeLoginMethod">{{loginMethod ? '使用密码登录' : '使用短信验证码登录'}}</span>
          </div>
          <div style="margin-top: 16px;">
            <van-button style="width:100%;height:40px" size="large" type="danger">
              登录
            </van-button>
            <div class="Terms" v-if="loginMethod">
              <van-checkbox v-model="checked" shape="square" checked-color="#eee" icon-size="20px">我同意<a style="color:#6332F6">服务条款</a>与<a style="color:#6332F6">网络隐私政策</a></van-checkbox>
            </div>
            <p class="other">其他方式登录＞</p>
          </div>
        </van-form>

      </div>
    </div>
  </div>
</template>

<script>
  import PubSub from 'pubsub-js'
  import {Form,Field,Button,Checkbox,Dialog } from 'vant';
  export default {
    name: 'Personal',
    components:{
      [Form.name]:Form,
      [Field.name]:Field,
      [Button.name]:Button,
      [Checkbox.name]:Checkbox,
      [Dialog .name]:Dialog ,
    },
    data(){
      return{
        flag: true,
        phone: '',
        password: '',  // 短信登录输入内容
        password1: '',  //密码登录输入内容
        checked: false, // 服务条款选择框
        loginMethod: true  //默认为短信验证码登录
      }
    },
    methods:{
      validat(){
        console.log('validat');
        
      },
      verificationCode(){
        console.log(123);
        
      },
       // 校验函数返回 true 表示校验通过，false 表示不通过
      //  手机号校验
      phoneValidator(val) {
        return /1\d{10}/.test(val);
      },
      // 验证码校验
      captchaValidator(val) {
        //  如果有数据库   从数据库拿到数据好 判断val与数据库数据是否匹配  匹配返回trur  否则false
        return true
      },
      // 密码校验
      captchaPwd(val) {
        console.log(val);
        
        return  /^.{6,}$/.test(val)
      },
      goHome(){
        this.$router.push('/Home')
        // this.$bus.$emit('idx',0)
      },
      goSearch(){
        this.$router.push('/Search')
      },
      goCart(){
        this.$router.push('/Cart')
          PubSub.publish('cartId',4)
      },

      onSubmit(values) {
        if(!this.checked && this.loginMethod){
          Dialog.alert({
            // title: '---',
            message: '请勾选相应条款',
            width: '80%',
          })
          return
        }
        console.log('submit', values);
      },
      changeFlag(){
        this.flag = false
      },
      changeLoginMethod(){ //修改登录方式
        this.loginMethod = !this.loginMethod
      }
    }
  }
</script>

<style scoped lang="stylus">
  .PersonalContainer
    width 100%
    height 100%
    background #F2F5F4
    .title
      position relative
      width 100%
      height 88px
      box-sizing border-box
      border-bottom 1px solid #eee
      padding 0 24px
      background #FAFAFA
      display flex
      align-items center
      .gohome
        width 48px
        height 44px
      .search
        width 48px
        height 44px
        position absolute
        right 100px
        top 20px
      .goCart
        width 48px
        height 44px
        position absolute
        right 25px
        top 20px
      i  
        font-size 48px
      .name
        position absolute
        top 20px
        left 50%
        transform translateX(-50%)
        font-size 40px
        font-family '楷体'
        font-weight 700
    .logo
      position relative
      width 100%
      height 482px
      img 
        position absolute
        left 0
        top 0
        right 0
        bottom 0
        margin auto
        width 288px
        height 90px
    .phoneLoginContainer
      width 100%
      height 94px
      padding 0 40px
      box-sizing border-box
      .phoneLogin
      .mailbox
        display flex
        align-items center
        width 100%
        height 100%
        background #DD1A21
        .bg
          margin-left 30%
          width 40px
          height 40px
          background url('../../static/imgs/phone.jpg') no-repeat 0 -50px
          background-size cover
        .text
          color #ffffff
          margin-left 30px
      .mailbox
        margin-top 30px
        background #F2F5F4
        border 1px solid  #DD1A21     
        .bg
          background url('../../static/imgs/phone.jpg') no-repeat 0 0
          background-size cover
        .text
          color #DD1A21
    .bottom
      position absolute
      left 0
      bottom 80px
      display flex
      align-items center
      width 100%
      height 40px
      .weixin
        margin-left 150px
      .weixin
      .qq
      .weibo
        display flex
        align-items center
        padding 0 40px
        i 
          font-size 40px
          color #7F7F7F
      .qq
        position relative
        &:before
        &:after
          content ''
          width 2px
          height 80%
          background #000
          position absolute
          left 0
          top 0
        &:after
          right 0
          left auto
    .phoneNumberContainer
      width 100%
      height 1266px
      padding 0 40px
      box-sizing border-box
      background #fff
      .phoneNumber
        width 100%
        height 200px
        display flex
        justify-content center
        align-items center
        img 
          width 268px
          height 90px
          margin 0 auto
      .vantLogin
        width 100%
        height 500px
        .user
          width 100%
          line-height 70px
          border-bottom 1px solid #eee
          margin-bottom 10px
        .info
          width 100%
          line-height 70px
          border-bottom 1px solid #eee
        .Problem
          display flex
          justify-content space-between
          align-items center
          margin-top 40px
          .item1
            color #7f7f7f
        .Terms
          margin-top 20px
        .other
          margin-top 50px
          text-align center
</style>