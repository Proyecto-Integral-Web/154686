import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: 'AIzaSyAMTR1dBJTgQXDNi318iYHbggv6UjX0E5Q',
  authDomain: 'project-751964810627686629.firebaseapp.com',
  databaseURL: 'https://project-751964810627686629.firebaseio.com',
  projectId: 'project-751964810627686629',
  storageBucket: 'project-751964810627686629.appspot.com',
  messagingSenderId: '150876863325',
  appId: '1:150876863325:web:3ae33bf86c1180b04146b4',
  measurementId: 'G-NB4FVSE78C'
}

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
