import fireApp from './_firebase'
//import router from '@/router'

// import fireApp from './_firebase'

export default {
  login (data) {
    fireApp.auth().signInWithEmailAndPassword(data.email, data.password).then(
      (result) => {
      }).catch((err) => {
      console.log(err)
    })
  },
  signUp (data) {
    if (data.email === '' || data.password === '') {
      return alert('Todos los datos son obligatorios.')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        let newUser = {
          displayName: data.nombre,
          email: data.email,
          uid: result.user.id
        }
        fireApp.auth().updateCurrentUser(newUser).catch(err => console.log(err))
      }).catch((err) => {
        console.table(err)
      })
    console.log(data)
  }
}
