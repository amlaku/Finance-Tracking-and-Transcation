import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCCnugWHyyuJrsEZOebbCACnUdMPtliOXg",
  authDomain: "mymoney-7c3af.firebaseapp.com",
  projectId: "mymoney-7c3af",
  storageBucket: "mymoney-7c3af.appspot.com",
  messagingSenderId: "482390189148",
  appId: "1:482390189148:web:1e828d3a431951b9b53299"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }