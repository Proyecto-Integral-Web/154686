<template>
  <section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <h3>Registrarse</h3>
      <div class="contenEntrada">
        <p>Nombre de usuario</p>
        <input
          type="email"
          placeholder="Correo"
          class="form-control"
          v-model="usuario.email"
        />
      </div>
      <div class="contenEntrada">
        <p>Correo electronico</p>
        <input
          type="text"
          placeholder="Nombre"
          class="form-control"
          v-model="usuario.nombre"
        />
      </div>
      <div class="mb-2">
        <p>Contraseña</p>
        <input
          type="password"
          placeholder="Contraseña"
          class="form-control"
          v-model="usuario.password"
          @keypress.enter="signUp"
        />
      </div>
      <input
        type="button"
        value="Registrarse"
        class="btn btn-block btn-rosa"
        @click="signUp"
      />
      <br />
      <input type="checkbox" /> Receurdame
      <div class="contRedesAlternativas">
        <h5>Entra con tus redes sociales</h5>
        <div class="logoRed Face"></div>
        <div class="logoRed Twitter"></div>
      </div>
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'SignUpForm',
  data () {
    return {
      usuario: {
        email: '',
        password: '',
        nombre: ''
      }
    }
  },
  methods: {
    signUp () {
      Auth.signUp(this.usuario)

      this.$router.push({ name: 'about' })
    },
    login () {
      console.log(this.usuario)
    }
  }
}
</script>

<style lang="scss">
.btn-rosa {
  background-color: purple !important;
  color: whitesmoke !important;
  &:hover {
    background: rgb(71, 3, 73) !important;
  }
}

.contBloque {
  border-radius: 15px;
  background-color: #222 !important;
  color: whitesmoke !important;
  margin: 5%;
}

body {
  background-color: #090909 !important;

  background-image: url("../assets/wall4.jpg");

  background-size: 100%;
}
</style>
