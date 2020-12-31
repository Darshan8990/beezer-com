import firebase from 'firebase'
var firebaseApp = {
  apiKey: "AIzaSyDf1o-DR9k7SGE0qcgJxbvP-kl4lWDfUZE",
  authDomain: "beezer-com-56936.firebaseapp.com",
  projectId: "beezer-com-56936",
  storageBucket: "beezer-com-56936.appspot.com",
  messagingSenderId: "1095181070636",
  appId: "1:1095181070636:web:a2558a5bc5a7e01f007c89",
  measurementId: "G-0VYHLJDXNF"
};


// Initialize Firebase
firebaseApp = firebase.initializeApp(firebaseApp)

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebase.storage()
const analytics = firebaseApp.analytics();
const google = new firebase.auth.GoogleAuthProvider()

// export default firebaseApp

export { db, auth, analytics, storage, google }



