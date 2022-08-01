import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDjtztpZXDrPs6acddT3T93yP4QZ2GMYTw",
    authDomain: "journal-app-bbd2b.firebaseapp.com",
    projectId: "journal-app-bbd2b",
    storageBucket: "journal-app-bbd2b.appspot.com",
    messagingSenderId: "917837916824",
    appId: "1:917837916824:web:7a0ea66caa93d3d0edfeed"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db, 
    googleAuthProvider,
    firebase
}