<template>
    <div>
        <h1>Workout Type</h1>

        <hr/>

        <table class='table'>
            <thead>
                <tr>
                    <th>Workout Code</th>
                    <th>Workout Type</th>
                    <th></th>
                </tr>
                  
            </thead>
            <tbody>
                <tr v-for = 'thisWorkout in workoutType' :key="thisWorkout.workoutTypeID">
                    <th>
                        {{thisWorkout.WorkoutTypeID}}
                    </th>
                     <th>
                        {{thisWorkout.WorkoutTypeName}}
                    </th>
                    <td>
                        <router-link :to="`/workoutType/${thisWorkout.WorkoutTypeID}`">
                         <button type="button" class="btn btn-danger">Details</button>
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>

    </div>
</template>

<script>
export default {
    computed:{
        workoutType(){
            return this.$store.state.workoutType
        }
    }
}
</script>

<style scoped>

</style>