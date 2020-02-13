//HTML
<template>
    <section>
        <header>
            <div class="logo"></div>
        </header>
        <section class="col">
        <h1 class="text">Welcome</h1>
        <br />
        <div class="container">
            <p align="left">Email</p>
            <input
                type="email"
                class="form-control"
                v-model="user.email"
            />
            <br/>
        </div>

        <div class="container">
            <p align="left">Password</p>
            <input
                type="password"
                class="form-control"
                @keypress.enter="login"
            />
            {{user.password}}
        </div>
        <br />
        <a href="#"><p align="left">Forgot your password?</p></a>
        <div class="container">
            <input
                type="button"
                value="Login"
                class="form-control btn-blue"
            />
        </div>
        <br />
        <p>Don't have account?<a href="#"> Sign up</a></p>
        <!--<input
                type="button"
                placeholder=""
                class="btn btn-green btn-block"
        />
        <br/>-->

        <!--<input type="checkbox" />
        <div class="SocialMedia">
            <h5>Social Media</h5>
            <div class="logoBlue Face"></div>
            <div class="logoBlue Twitter"></div>
        </div>-->
        </section>
    </section>
</template>

//SCRIPT
<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      userEmail: {
        userPassword: ''
      }
    }
  },
  created () {
    console.log('Created...')
  },
  mounted () {
    Auth.signUp(this.user)
    console.log('Mounted...')
  },
  methods: {
    login () {
      console.log('Login...')
      console.log(this.user.email)
      setTimeout(() => {
        this.$router.push({ name: 'about' })
      }, 1000)
    }
  }
}
</script>

//CSS
<style lang="scss">
.btn-blue {
    background: blue !important;
    color: whitesmoke !important;
    &:hover {
        background: rgb(71,3,73)
    }
}

.backgroundStyle {
    background: black
}

.text{
    color: blue;
}
</style>
