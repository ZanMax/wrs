<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-3"></div>
      <div class="col-lg-6">
        <div class="p-5">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Private Area</h1>
          </div>
          <form class="user">
            <div class="form-group">
              <input v-model="username" type="text" class="form-control form-control-user"
                     id="username" aria-describedby="emailHelp"
                     placeholder="Username">
            </div>
            <div class="form-group">
              <input v-model="password" type="password" class="form-control form-control-user"
                     id="password" placeholder="Password">
            </div>
            <b-button class="btn btn-login btn-primary btn-user btn-block" @click="login">
              Login
            </b-button>
          </form>
          <hr>
          <div class="text-center">
            <a class="small" href="#">Forgot Password?</a>
          </div>
          <div class="text-center">
            <a class="small" href="#">Create an Account!</a>
          </div>
        </div>
      </div>
      <div class="col-lg-3"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login: function () {
     // let email = this.username
     // let password = this.password

      let bodyFormData = new FormData();
      bodyFormData.append('username', this.username);
      bodyFormData.append('password', this.password);

      this.$store.dispatch('login', bodyFormData)
          .then(() => this.$router.push('/'))
          .catch(err => console.log(err))
    }

    /*login() {
      console.log(this.username, this.password);

      let bodyFormData = new FormData();
      bodyFormData.append('username', this.username);
      bodyFormData.append('password', this.password);

      axios.post('/login/access-token', bodyFormData)
          .then(response => {
            console.log(response.data);
          })
          .catch(error => {
            console.log(error);
          })
          .then(() => {
            // always executed
          });
    } */
  }
}
</script>

<style scoped>
.btn-login {
  background-color: #0d6efd;
  border-color: #0d6efd;
}

.btn-login:hover {
  background-color: #3987fd;
  border-color: #3987fd;
}
</style>