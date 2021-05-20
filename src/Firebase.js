import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh27i7INs1BxaHXV3pCpKKwyb0IVIHiH8",
  authDomain: "twt-clone-d79c7.firebaseapp.com",
  projectId: "twt-clone-d79c7",
  storageBucket: "twt-clone-d79c7.appspot.com",
  messagingSenderId: "635039348880",
  appId: "1:635039348880:web:22aa4cd8af5aed85ff0015",
  measurementId: "G-PK2WHHFQH4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
