

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "task-7ccb7.firebaseapp.com",
  projectId: "task-7ccb7",
  storageBucket: "task-7ccb7.appspot.com",
  messagingSenderId: "197936453477",
  appId: "1:197936453477:web:789c64f5576ad6175c338c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);