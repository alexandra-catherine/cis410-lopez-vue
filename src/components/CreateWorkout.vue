<template>
    <div class="row justify-content-center">
        <div class="col-lg-10">
            <div class="card">
                <div class="card-body">
                    <h4>Create a New Workout</h4> 
                    <form id="new-workout-form" @submit.prevent="submitWorkout">
                        <div class="form-group">
                            <label for="timeInput">Active Time</label> 
                            <textarea row="1" id="timeInput" name="time" required="required" class="form-control" v-model="activeTime"></textarea>
                        </div> 

                        <div class="form-group">
                            <label for="caloriesInput">Active Calories</label> 
                            <textarea row="1" id="caloriesInput" name="calories" required="required" class="form-control" v-model="activeCalories"></textarea>
                        </div> 

                        <div class="form-group">
                            <label for="distanceInput">Active Distance</label> 
                            <textarea row="1" id="distanceInput" name="distance" required="required" class="form-control" v-model="activeDistance"></textarea>
                        </div> 

                        <div class="form-group">
                            <label for="bpmInput">Average Bpm</label> 
                            <textarea row="1" id="bpmInput" name="bpm" required="required" class="form-control" v-model="averageBPM"></textarea>
                        </div> 
                                
                            <button type="submit" class="btn btn-primary">Submit new Workout</button> 
                            <button type="clear" class="btn btn-outline-danger" v-on:click="cancelNew">Cancel</button> 

                        <p v-if="errorMessage" class="form-text text-danger">{{errorMessage}}</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {    
    data(){
        return{
            activeTime: "",
            activeCalories: "",
            activeDistance: '',
            averageBPM: '',
            errorMessage: null,

        }
    },
    methods:{
        submitWorkout(){
            const myNewWorkout={
                activeTime: this.activeTime,
                activeCalories: this.activeCalories,
                activeDistance: this.activeDistance,
                averageBPM: this.averageBPM,
                workoutTypeID: this.$route.params.pk
            };
            console.log("here is the new workout", myNewWorkout)

            const token =  this.$store.state.token;
            axios.post("/workouts", myNewWorkout, {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            .then(()=>{this.$router.replace('/account')})
            .catch(()=>{this.errorMessage = "Unable to create a new workout, please try again later."})
        },

        cancelNew(){
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>

</style>