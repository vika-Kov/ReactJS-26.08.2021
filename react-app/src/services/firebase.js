// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firbaseSignOut, getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK_SI_91hosv8vczPzcDUN-dVpxjd33P0",
  authDomain: "mp-react-app.firebaseapp.com",
  projectId: "mp-react-app",
  storageBucket: "mp-react-app.appspot.com",
  messagingSenderId: "185366722263",
  appId: "1:185366722263:web:d22d5efc0560085e0de292",
  measurementId: "G-EYG6PJD466"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase();

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
}

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signOut = async () => {
  await firbaseSignOut(auth);
};