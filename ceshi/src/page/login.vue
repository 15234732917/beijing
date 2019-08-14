<template>
    <div class="login">
        <div class="form">
            <p class="p p1">
                <span>用户名</span>
                <input type="text" placeholder="请输入用户名" v-model="loginForm.username">
            </p>
             <p class="p">
                <span>密码</span>
                <input type='password' placeholder="请输入密码" v-model='loginForm.password'>
            </p>
            <p class="p2">
                <button @click="login">登录</button>
            </p>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return{
           loginForm: {
               uesrname: '',
               password: ''
           }
       }
   },
   mounted(){

   },
   methods:{
        login(){
            
            let _this=this;
            let data={username: _this.loginForm.username,password: _this.loginForm.password}
            _this.axios.post('https://test.8boluo.com/index.php/index/wxapp.login/simple',data).then((res)=>{
                
                if(res.data.code == 0){
                 
                    _this.$store.commit('login',res)
                    _this.$router.push({name:'/home'})
                }else{
                    alert(res.data.msg)
                    _this.loginForm.username = ""
                    _this.loginForm.password = ""
                }
            })
        }
   }
}
</script>

<style lang='scss' scoped>
.login{
    width: 100%;
    height: 100%;
    background: blueviolet;
    .form{
        position:absolute;
        left:0;
        top: 0;
        bottom: 0;
        right: 0;
        margin: auto;
        width: 400px;
        height: 250px;
        background: #fff;
        border-radius: 5px;
        text-align: center;
        .p{
           display: flex;
           width: 100%;
            margin-bottom: 30px;
           span{
               display: block;
               width: 100px;
               text-align: right;
               font-size: 15px;
           }
           input{
               width: 200px;
               margin-left: 20px;
               border: none;
               border-radius: 10px;
               background: #eee;
               padding-left: 20px;
               outline: none;
           }
        }
        .p1{
            margin-top: 50px;
        }
        .p2{
           margin-top: 10px;
           button{
               width: 100px;
               height: 30px;
               background: green;
               border: none;
               border-radius: 10px;
               color: #fff;
               font-size: 14px;
           }
           
        }
    }
}
</style>
