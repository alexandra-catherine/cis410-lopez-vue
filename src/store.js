import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js';
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
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
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
        },

        logout({commit, state}){
            axios.post('/contacts/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");
        }
    }
})