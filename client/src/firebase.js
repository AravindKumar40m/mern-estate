// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-80dda.firebaseapp.com",
  projectId: "mern-estate-80dda",
  storageBucket: "mern-estate-80dda.appspot.com",
  messagingSenderId: "997674869209",
  appId: "1:997674869209:web:e441de16bdbddc9ef839c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
