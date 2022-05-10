// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw5OAkugEmq-19anRTYEzRQmZ4QYUsYjI",
  authDomain: "mecmarketplace-2.firebaseapp.com",
  projectId: "mecmarketplace-2",
  storageBucket: "mecmarketplace-2.appspot.com",
  messagingSenderId: "437567280041",
  appId: "1:437567280041:web:b571c7b0901d6d7396eab8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
