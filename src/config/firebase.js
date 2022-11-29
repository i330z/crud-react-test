// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8uB40QYetz7SLUGjdXd3cH-uCiNC2-rQ",
  authDomain: "crudreact-83c05.firebaseapp.com",
  projectId: "crudreact-83c05",
  storageBucket: "crudreact-83c05.appspot.com",
  messagingSenderId: "911506432133",
  appId: "1:911506432133:web:3667e26571f134e2dc49ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const auth = getAuth(app)