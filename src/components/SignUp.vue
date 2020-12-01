<template>
    <div>
        <h1>Sign Up</h1>
        <form @submit.prevent="onSubmit">

              <div class="form-group">
                <label for="first-name-input" style="color: black">First Name</label>
                <input type="textarea" class="form-control" id="first-name-input" required="" name="first name" value="Mike" v-model="firstName">
              </div>

              <div class="form-group">
                <label for="last-name-input" style="color: black">Last Name</label>
                <input type="textarea" class="form-control" id="last-name-input" required="" value="Smith" v-model="lastName">
              </div>

              <div class="form-group">
                <label for="email-input" style="color: black">Email</label>
                <input type="email" class="form-control" id="email-input" required="" name="email" value="mikesmith@mail.com" v-model="email">
                <small v-if='dupEmail' class="form-text text-danger">Please choose a different email</small>
              </div>
             


              <div class="form-group">
                <label for="password-input" style="color: black">Password</label>
                <input type="password" class="form-control" id="password-input" required="" value="asdfasdf" v-model="password">
              </div>
    
              <button type="submit" class="btn btn-primary">Register</button>

              <p class="text-danger" id="error-login">{{errorMessage}}</p>
            </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data(){
        return{
            firstName : '',
            lastName:' ',
            email : '',
            password : '',
            errorMessage : '',
            dupEmail: false
        }
    },
    methods: {
        onSubmit(){
            console.log('hello');
            const myFormData = {
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                password: this.password
            }
            //console.log(myFormData)

            axios.post('/contacts', myFormData)
            .then((myResponse)=>{
               // console.log(myResponse)
               this.$router.replace('/login?signupsuccess=true')
                })
            .catch((myError)=>{
                if(myError.response.status === 409){
                    this.dupEmail = true
                }
                else{
                    this.errorMessage = "Cannot sign you up. Please try again later."
                }
            })
        }
    }
}
</script>

<style scoped>

</style>