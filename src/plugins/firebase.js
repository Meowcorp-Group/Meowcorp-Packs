// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtGQ5yyG_yFdm3qsLT_vtf-rzenJm89Jg",
  authDomain: "meowcorp-packs.firebaseapp.com",
  projectId: "meowcorp-packs",
  storageBucket: "meowcorp-packs.appspot.com",
  messagingSenderId: "329967052803",
  appId: "1:329967052803:web:4835d1a8025a35522e0636",
  measurementId: "G-J23SVSH7S4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore();
connectFirestoreEmulator(db, 'localhost', 8080);

export {
	db
}