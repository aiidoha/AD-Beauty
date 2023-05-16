// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_ZmLRLvsLOmxpU3Hh7HxpZpZ9ZnFlQO4",
  authDomain: "adbeauty-e045a.firebaseapp.com",
  projectId: "adbeauty-e045a",
  storageBucket: "adbeauty-e045a.appspot.com",
  messagingSenderId: "501611025712",
  appId: "1:501611025712:web:24e64d0d8718dbda5424f5",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
