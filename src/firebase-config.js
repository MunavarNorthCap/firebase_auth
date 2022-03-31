// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAARNwVi1xKbf4SP6GxzpHm-153zRMgB1c",
  authDomain: "login-9c6b3.firebaseapp.com",
  projectId: "login-9c6b3",
  storageBucket: "login-9c6b3.appspot.com",
  messagingSenderId: "835679497677",
  appId: "1:835679497677:web:0ba9e30eaf173f4b6fe884",
  measurementId: "G-CY28RXGXKH"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default fire;

const auth = firebase.auth();
// const db = firebase.firestore();

export { auth };