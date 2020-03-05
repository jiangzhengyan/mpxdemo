import {createStore} from "@mpxjs/core";

const  store=createStore({

  state: {
    count: 0,
    index:0
  },
  getters:{

    // isCountBigThanTen (state){
    //
    //   return state.count>10
    // }
    isCountBigThanTen :state => {
      return state.count>10
    }
  },
  // 调用使用commit
  mutations: {
    increment(state) {
      state.count++
      state.index++
    }
    ,
    add(state, payload){
      state.count+=payload
    }
  },
  // 异步的  调用使用dispatch
  actions :{
    addAsync ({commit},payload){
      setTimeout(()=>{
        commit('add',payload)
      },2000)
    }
  }

});

export  default  store
