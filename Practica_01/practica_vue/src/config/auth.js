import fireApp from './_firebase'

// import fireApp from './_firebase'

export default {
  signUp (data) {
    if (data.email === '' || data.password === '') {
      return alert('Todos los datos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
    console.log(data)
  }
}
