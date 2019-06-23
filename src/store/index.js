import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        number: 0
        
    },
    mutations: {
        add: (state) => {
            state.number++
        }
    },
    getters: {
        getNumber:(state) => state.number,
    },
    actions: {
        addFun(context){
            context.commit('add')
        }
    }
})