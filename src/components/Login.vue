<template>
    <div>
        <h1>Login</h1>
        <div class="alert alert-success" v-if="this.$route.query.signupsuccess">
            Thank you for signing up, please sign in now.</div>

        <form @submit.prevent="onSubmit">
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" id="exampleInputEmail1" required="required" 
                placeholder="Enter email" class="form-control" v-model="email">
            </div> 
            <div class="form-group">
                <label for="exampleInputPassword1">Password</label> 
                <input type="password" id="exampleInputPassword1" placeholder="Password"
                 required="required"  class="form-control" v-model='password'>
            </div> 
            
            <button type="submit" class="btn btn-primary">Submit</button>
            <p v-if ="credentailsError" class='form-text text-danger'>
                Invalid User Credentials</p>

            <p v-if ="loginError" class='form-text text-danger'>
                Could not log you in. Please try again later.</p>    
        </form>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            email: '',
            password:'',
            loginError: false,
            credentialsError: false
        }
    },

    methods:{
        onSubmit(){
            const myFormData = {
                email : this.email,
                password : this.password
            };

            //console.log("form data: ", myFormData)

            axios.post('/contacts/login', myFormData)
            .then((myResponse)=>{
                console.log("here is my response", myResponse);

                this.$store.commit("storeTokenInApp", myResponse.data.token)
                this.$store.commit('storeUserInApp', myResponse.data.user)
                this.$router.replace('/account')
            })
            .catch((myError)=>{
                console.log("my error ", myError.response.data)

                if(myError.response.data == 'Invalid user credentials'){
                    this.credentialsError = true
                }
                else{
                    this.loginError = true
                }
            })        
        }
    }
}
</script>

<style scoped>

</style>