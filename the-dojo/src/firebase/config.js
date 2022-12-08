import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBxbIeSkJBGpw5xjbPvO15N4b54sTOvuFw",
    authDomain: "thedojosite-9c5a5.firebaseapp.com",
    projectId: "thedojosite-9c5a5",
    storageBucket: "thedojosite-9c5a5.appspot.com",
    messagingSenderId: "61027733968",
    appId: "1:61027733968:web:fe3e5dd8a2c2edd7bda9d5"
  };

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore


export { projectFirestore, projectAuth, timestamp }