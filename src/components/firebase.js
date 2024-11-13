// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_KEY,
    authDomain: "hacker-s-portal.firebaseapp.com",
    projectId: "hacker-s-portal",
    storageBucket: "hacker-s-portal.appspot.com",
    messagingSenderId: "848457459024",
    appId: "1:848457459024:web:7ed2c2dcd7624d39a03855",
    measurementId: "G-3D11Q02VRT"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
