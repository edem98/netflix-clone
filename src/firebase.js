import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBzhZtjeo37XKQxY38QcTGt7lyKf-IK7pE",
  authDomain: "netflix-clone-ea7a2.firebaseapp.com",
  databaseURL: "https://netflix-clone-ea7a2.firebaseio.com",
  projectId: "netflix-clone-ea7a2",
  storageBucket: "netflix-clone-ea7a2.appspot.com",
  messagingSenderId: "146732287039",
  appId: "1:146732287039:web:bed4eae47ddeb4508be48a",
  measurementId: "G-KFXWHYR07K",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
