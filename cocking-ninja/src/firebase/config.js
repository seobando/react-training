import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyA8fhxwX5q7JHkS8aDIB-RVuXNVdQ5DSY0",
  authDomain: "cooking-ninja-site-4de84.firebaseapp.com",
  projectId: "cooking-ninja-site-4de84",
  storageBucket: "cooking-ninja-site-4de84.appspot.com",
  messagingSenderId: "33109994358",
  appId: "1:33109994358:web:6a74826125c1c0a166a857"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// Initialize Services
const projectFirestore = firebase.firestore()

export { projectFirestore }