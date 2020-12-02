<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <router-link class="navbar-brand" to='/'>Navbar</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      
      <li class="nav-item">
        <router-link class="nav-link" to='/workouttype'>Workout Types</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/account'>My Account</router-link>
      </li>

      <li class="nav-item">
        <router-link class="nav-link" to='/login'><button class = 'btn btn-danger'> Sign in </button></router-link>
        
      </li>

       <li class="nav-item">
        <router-link class="nav-link" to='/signup'>
        <button class = 'btn btn-outline-danger '> Sign up </button>
        </router-link>
      </li>

      <li class="nav-item">
        <button class = 'btn btn-outline-danger'> Log out</button>
      </li>
      
    </ul>
    
  </div>
</nav>
</div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>