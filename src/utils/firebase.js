// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcKNQ8UuAsXygPDNRYCgGgRkf_h6T5Qbw",
  authDomain: "netflix-gpt-4de88.firebaseapp.com",
  projectId: "netflix-gpt-4de88",
  storageBucket: "netflix-gpt-4de88.firebasestorage.app",
  messagingSenderId: "81289976910",
  appId: "1:81289976910:web:37d9aa0146b15baea8b71f",
  measurementId: "G-M60MNEGL02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth();
