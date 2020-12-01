import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from "./components/Home.vue";
import Account from "./components/Account.vue";
import Login from "./components/Login.vue";
import WorkoutType from "./components/WorkoutType.vue";
import WorkoutTypeDetails from "./components/WorkoutTypeDetails.vue";
import NotFound from "./components/NotFound.vue";
import CreateWorkout from "./components/CreateWorkout.vue";
import SignUp from "./components/SignUp.vue";

Vue.use(VueRouter);


const routes = [
    {path: '/', component: Home},
    {path: '/account', component: Account},
    {path: '/login', component: Login},
    {path: '/workouttype', component: WorkoutType},
    {path: '/workouttype/:pk', component: WorkoutTypeDetails,
        children: [
            {path: '/create', component: CreateWorkout}
        ],
    },
    {path: '/signup', component: SignUp},
    {path: '/:invalidroute(.*)', component: NotFound}
]

export default new VueRouter ({mode: 'history', routes:routes})