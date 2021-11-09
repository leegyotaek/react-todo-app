import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1UizT2LPxXHohfHz_6-Tjqk1sj6y3hHk",
    authDomain: "todo-app-76760.firebaseapp.com",
    projectId: "todo-app-76760",
    storageBucket: "todo-app-76760.appspot.com",
    messagingSenderId: "100261103671",
    appId: "1:100261103671:web:599159acc8098d598117b2",
    measurementId: "G-GVXSFQJ9VH"
  });

  const db = firebaseApp.firestore();

  export default db;