// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEyepFPUN39Hj6e6qYiDJ31LFy-6_Qcw0",
  authDomain: "mecmarketplace-45683.firebaseapp.com",
  projectId: "mecmarketplace-45683",
  storageBucket: "mecmarketplace-45683.appspot.com",
  messagingSenderId: "506378211703",
  appId: "1:506378211703:web:fe894b70bed5825bde9172",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
