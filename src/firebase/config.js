// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQj_f1wdBrsEV0wWSxSCrIGQWqAifJnkY",
  authDomain: "react-cursos-e1e0c.firebaseapp.com",
  projectId: "react-cursos-e1e0c",
  storageBucket: "react-cursos-e1e0c.appspot.com",
  messagingSenderId: "937379477387",
  appId: "1:937379477387:web:7299c513f44644b0ef618e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
