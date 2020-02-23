<template>
    <div class="bigbox">
        <nav-header></nav-header>
    <div class="box">
        <div class="username">
            <img src="../assets/user.png" height="30px" class="pic">
            <el-input v-model="username" placeholder="请输入账号"></el-input>
        </div>
        <div class="password">
            <img src="../assets/pass.png" height="30px" class="pic">
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </div>
        <viv class="bottom">
            <a href="/#/"><el-button type="primary" round size="medium" @click="login">登录</el-button></a>
        </viv>
    </div>
    </div>
</template>

<script>
import NavHeader from './../components/NavHeader'

export default {
    name:'login',
    components:{
            NavHeader,
        },
    data() {
    return {
        username:'',
        password:'',
        userId:'',
    }
  },
  methods:{
      login(){
          let{ username,password } = this;
          this.axios.port('/user/login',{
              username,
              password
          }).then((res)=>{
              this.$cookie.set('userId',res.id,{expires:'1M'});
              this.$router.push('/#/');
          })
      }
  }
}
</script>

<style lang="scss">
    .bigbox{
        text-align: center;
    }
    .box{
        //swidth: 1226px;
        text-align: center;
        padding:200px 700px;
    }
    .username{
        width: 400px;
        margin-bottom:30px;
        img{
            margin-bottom: 10px;
        }
    }
    .password{
        width: 400px;
        margin-bottom:50px; 
        img{
            margin-bottom: 10px;
        }
    }
    .bottom{
        //width: 400px;s
        height: 16px;
        margin-top: 125px; 
        padding-right: 110px;
    }
</style>