<template>
  <section class="contBloque">
    <header>
      <div class="logo"></div>
    </header>
    <section class="col ">
      <h3>Nombre: {{usuario.displayName}}</h3>

      <div class="fotoPerfil"><img
          src="../assets/logo.png"
          class="fotoPerfil"
        /></div>
    </section>
  </section>
</template>

<script lang="js">
import Auth from '@/config/auth.js'
export default {
  name: 'LoginForm',
  data () {
    return {
      usuario: Auth.checkUser()
    }
  },
  mounted () {
    this.usuario = Auth.checkUser()
  },
  methods: {
    login () {
      Auth.login(this.usuario)
    },
    updateData () {

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

.contenEntrada {
  margin-bottom: 15px;
}

.fotoPerfil {
  width: 90%;
  border-radius: 100%;
  margin: auto;
  margin-bottom: 30px;
  margin-top: 10px;
}
body {
  background-image: #090909 !important;

  background-image: url("../assets/wall1.jpg") !important;

  background-size: 100%;
}
</style>
