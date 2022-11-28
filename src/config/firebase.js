// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9rsQWrOIrfFKj50fUW-5sJyw6uDdLUnM",
  authDomain: "react-crud-2334e.firebaseapp.com",
  projectId: "react-crud-2334e",
  storageBucket: "react-crud-2334e.appspot.com",
  messagingSenderId: "77429438405",
  appId: "1:77429438405:web:9ff58f4077db8ee0ba7dac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)