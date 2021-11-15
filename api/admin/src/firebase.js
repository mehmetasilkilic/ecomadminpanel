// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC83TSONlDGugFxM5WvdSRalQNjr-3Xr0Y",
  authDomain: "ecom-2fa43.firebaseapp.com",
  projectId: "ecom-2fa43",
  storageBucket: "ecom-2fa43.appspot.com",
  messagingSenderId: "714735735291",
  appId: "1:714735735291:web:2e1cdd26d5ef4408b33b5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app