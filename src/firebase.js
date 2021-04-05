import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDcdM7jWgZS-kCG_bx129Bel1CiSca4ZJo",
    authDomain: "discord-clone-c6ac3.firebaseapp.com",
    projectId: "discord-clone-c6ac3",
    storageBucket: "discord-clone-c6ac3.appspot.com",
    messagingSenderId: "630271433715",
    appId: "1:630271433715:web:1be7b936b3b8dfd7481086",
    measurementId: "G-FQW7083LNM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db