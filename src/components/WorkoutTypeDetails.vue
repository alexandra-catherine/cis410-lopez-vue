<template>
    <div>
        <div class = "card ">
            <div class = 'card-body'>
                <h2 class = "text-danger">{{workoutType.WorkoutTypeName}}</h2>
                <br/>
                <p>Description: <br/> 
                    <strong>{{workoutType.Description}}</strong>
                </p>
                <p>Difficuly Rate: <br/> 
                    <strong>{{workoutType.Difficulty}}</strong>
                </p>
                 <p>Famous Athletes: <br/> 
                    <strong>{{workoutType.Famous}}</strong>
                </p>
            </div>
        </div>

        <router-link v-if="auth" :to="`/workouttype/${this.$route.params.pk}/create`">
            <button type="button" class="btn btn-danger">New Workout</button>
        </router-link>

        <router-link v-else :to="`/login`">
            <button type="button" class="btn btn-outline-danger">Sign in to add this Workout</button>
        </router-link>
        
        <br/>
        <router-view></router-view>

    </div>
</template>

<script>
//import axios from 'axios';
export default {
    computed:{
        workoutType(){
            var workoutType = this.$store.state.workoutType;
            var thisWorkoutType = workoutType.find((aType)=>aType.WorkoutTypeID == this.$route.params.pk)

           // console.log("this is the type that you want", thisWorkoutType);
            return thisWorkoutType
        },

        auth(){return this.$store.state.token}
    }
}
</script>

<style scoped>

</style>