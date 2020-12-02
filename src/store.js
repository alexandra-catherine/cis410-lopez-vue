import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        workoutType: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeWorkoutType(state, myWorkoutType){
            state.workoutType = myWorkoutType
        }
    },
    actions:{
        getWorkoutType({commit}){
            axios.get('/workoutType')
            .then((myResponse)=>{
                console.log("response from getWorkoutType action", myResponse);
                commit('storeWorkoutType', myResponse.data)
            })
            .catch(()=>{
                console.log('error in getWorkoutType action')
            })
        }
    }
})