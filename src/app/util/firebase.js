import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUwA9aKCuyjw1s7tU0T__yQebvdz0MDns",
  authDomain: "nextcounter-7dc60.firebaseapp.com",
  projectId: "nextcounter-7dc60",
  storageBucket: "nextcounter-7dc60.appspot.com",
  messagingSenderId: "67942003931",
  appId: "1:67942003931:web:e011a646f3503add9d48fe",
  measurementId: "G-BZ951VS2RC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };;
