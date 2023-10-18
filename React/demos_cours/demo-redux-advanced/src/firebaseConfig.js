// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCItSO3EDKIAkWxISEblzr7bLLh5-r3eQA",
  authDomain: "cda-m2i-2f908.firebaseapp.com",
  databaseURL: "https://cda-m2i-2f908-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cda-m2i-2f908",
  storageBucket: "cda-m2i-2f908.appspot.com",
  messagingSenderId: "401041106324",
  appId: "1:401041106324:web:9ade158e8aa4103bfb5b81",
  measurementId: "G-BWR83H5SZG"
};

export const BASE_DB_URL = firebaseConfig.databaseURL

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);