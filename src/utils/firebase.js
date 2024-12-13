// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbrKyt3xjSlxTh-NNmrm5_Zgoj7HX7dOE",
  authDomain: "my-netflix-awesome.firebaseapp.com",
  projectId: "my-netflix-awesome",
  storageBucket: "my-netflix-awesome.firebasestorage.app",
  messagingSenderId: "55551237164",
  appId: "1:55551237164:web:e097904e0753d8ba588589",
  measurementId: "G-1PBJK0JC51",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
