import fireApp from './_firebase'
import router from '@/router'

export default {
  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return false
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        let newUser = {
          displayName: data.nombre,
          email: result.user.email,
          uid: result.user.id
        }

        fireApp.auth().updateCurrentUser(newUser)
          .catch(err => console.table(err))
        router.push('about')
      })
      .catch((err) => console.table(err))
    console.log(data)
  },

  login (data) {
    fireApp.auth().signInWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        console.log(result)
        router.push('about')
      })
      .catch((err) => {
        console.log(err)
      })
  },
  checkUser () {
    let user = fireApp.auth().currentUser

    if (user) {
      return user
    }

    return null
  },

  logOut () {
    fireApp.auth().signOut()
    router.push({
      name: 'login'
    })
  }
}
