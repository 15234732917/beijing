<template>
    <div class="home">
        <button @click="loginout">退出登录</button>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loginout(){
            let _this = this;
            let uid = localStorage.getItem('uid')
           
            _this.axios.get("https://test.8boluo.com/index.php/index/wxapp.login/quitweb?uid="+uid).then((res)=>{
                console.log(res)
                if(res.data.code == 0){
                    this.$store.commit('loginout')
                    this.$router.push({name:"/login"})
                }else{
                    alert(res.data.msg)
                }
            })

        }
    },

}
</script>

<style lang='scss' scoped>

</style>
