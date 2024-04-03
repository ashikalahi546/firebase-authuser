// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8jaAq_rYej0T62hR5te-p7yjL1GZjTKE",
  authDomain: "fir-authuser-539a4.firebaseapp.com",
  projectId: "fir-authuser-539a4",
  storageBucket: "fir-authuser-539a4.appspot.com",
  messagingSenderId: "564577883816",
  appId: "1:564577883816:web:afccc12e0548016c93949d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);