// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8evDuJDbnKLAqKiZgFoJId2Jl8IvB4ak",
  authDomain: "short-course-system.firebaseapp.com",
  projectId: "short-course-system",
  storageBucket: "short-course-system.appspot.com",
  messagingSenderId: "89715134261",
  appId: "1:89715134261:web:024de9fc6375a82333467c",
  measurementId: "G-53HC19C529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;