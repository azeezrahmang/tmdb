// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxLgsDQ7LCEiRaA49RAQB5ICMc5LJEZZo",
  authDomain: "cinegallery-9501c.firebaseapp.com",
  projectId: "cinegallery-9501c",
  storageBucket: "cinegallery-9501c.appspot.com",
  messagingSenderId: "869387706737",
  appId: "1:869387706737:web:f168454efb7065f6ca16d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);