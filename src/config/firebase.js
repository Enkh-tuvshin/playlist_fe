// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS954wD69GOXw8_dRyyHZ1ZC-QdTWpMkc",
  authDomain: "signup-daac1.firebaseapp.com",
  projectId: "signup-daac1",
  storageBucket: "signup-daac1.appspot.com",
  messagingSenderId: "858146334951",
  appId: "1:858146334951:web:2c301c8aba3663dcc99a42",
  measurementId: "G-EDFWDLX6E4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
