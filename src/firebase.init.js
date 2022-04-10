// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqvwC-7RdGm2QxT-H0FNpNlWBuElyOq4Q",
  authDomain: "ema-john-simple-f6f33.firebaseapp.com",
  projectId: "ema-john-simple-f6f33",
  storageBucket: "ema-john-simple-f6f33.appspot.com",
  messagingSenderId: "288941523782",
  appId: "1:288941523782:web:176cbe09fd9a8ee01d9b47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
