<template>
    <div>
        <h1>Account</h1>
        <hr/>
        <h3>{{firstName}}'s Workouts</h3>

        <p v-if = "accountError" class="form-text text-danger"> Cannot get your account information, please try again later</p>

        <table v-if = "workoutsByUser" class= 'table'>
            <thead>
                <th>Workout Type</th>
                
                <th>Active Time</th>  
                  
                <th>Active Calories</th>
                
                <th>Average BPM</th>
                
                <th>Active Distance</th>    
            </thead>

            <tbody>
                <tr v-for="thisWorkout in workoutsByUser" :key="thisWorkout.WorkoutID">
                    <th><router-link :to="`workoutType/${thisWorkout.WorkoutTypeID}`">{{thisWorkout.WorkoutTypeID}}</router-link></th>
                    <th>{{thisWorkout.ActiveTime}}</th>
                    <th>{{thisWorkout.ActiveCalories}}</th>
                    <th>{{thisWorkout.AverageBPM}}</th>
                    <th>{{thisWorkout.ActiveDistance}}</th>
                    
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
      return{
        workoutsByUser: null,
        accountError: false
      }
  },  
  computed:{
      firstName(){return this.$store.state.user.FirstName}
  },
  created(){
      axios.get('/workouts/me' , {
          headers: {
              Authorization: `Bearer ${this.$store.state.token}` 
          }
      })
      .then((response)=>{
          console.log("here is the workouts/me response: ", response)
          this.workoutsByUser = response.data
      })
      .catch(()=>{
          this.accountError = true
      })
  }  
}
</script>

<style scoped>
    th {
        padding-right: 30px;
    }
</style>