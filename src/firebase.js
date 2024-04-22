// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpiM5IQSLGKKwamzDsZE-Q019_fInAOh4",
  authDomain: "netflix-clone-92d5f.firebaseapp.com",
  projectId: "netflix-clone-92d5f",
  storageBucket: "netflix-clone-92d5f.appspot.com",
  messagingSenderId: "677021177300",
  appId: "1:677021177300:web:1c12e001c84a94d1b2b241",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
