import firebase from 'firebase'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAbMNAFThiWzHk8uqua22xbzN38uC76jY8",
    authDomain: "movie-diary-4858b.firebaseapp.com",
    databaseURL: "https://movie-diary-4858b.firebaseio.com",
    projectId: "movie-diary-4858b",
    storageBucket: "movie-diary-4858b.appspot.com",
    messagingSenderId: "191005978686",
    appId: "1:191005978686:web:5e697dc6c5e93f8eea216f",
    measurementId: "G-1BER8YJY5E"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  const db = firebase.firestore();
  

  //firebase coollection

  const moviesCollection = db.collection('movies')


  export {
      db,
      moviesCollection
  }