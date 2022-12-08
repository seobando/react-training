import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAltdsSS8ckns4H-2fAaGfsJv-cLdBL_Ac",
  authDomain: "mymoney-27e69.firebaseapp.com",
  projectId: "mymoney-27e69",
  storageBucket: "mymoney-27e69.appspot.com",
  messagingSenderId: "768798545551",
  appId: "1:768798545551:web:ae5d8248305211888742fa",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
