// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAauJXigXrtXBasc6d28kOX_wnmoHLbwEY",
  authDomain: "current-connect.firebaseapp.com",
  projectId: "current-connect",
  storageBucket: "current-connect.appspot.com",
  messagingSenderId: "452156829323",
  appId: "1:452156829323:web:f3d86cce6efa0a286d6e8e",
  measurementId: "G-GQQZKBZBTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();