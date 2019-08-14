import Vue from 'vue'
import vuex from 'vuex'
// import VuePersist from 'vuex-persist'
// const vuexLocal=new VuePersist({
//     storage:window.localStorage
// })
Vue.use(vuex);
const state = {
    uid:""
}
const mutations = {
    login(state,res){
        state.uid = res.data.data.uid
        localStorage.setItem('uid',res.data.data.uid)
    },
    loginout(state){
        localStorage.clear()
        state.uid = ""
    }
}
const actions = {
   
}



export default new vuex.Store({
    state,
    mutations,
    actions,
    getters:{},
    modules:{},
    // plugins:[vuexLocal.plugin]
})