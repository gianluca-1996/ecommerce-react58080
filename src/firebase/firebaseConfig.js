/* eslint-disable no-unused-vars */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnc8ZbUg4Qbid4tNQNcd_TS9-p-LvVkMA",
  authDomain: "e-commerce-58080.firebaseapp.com",
  projectId: "e-commerce-58080",
  storageBucket: "e-commerce-58080.appspot.com",
  messagingSenderId: "1026331271467",
  appId: "1:1026331271467:web:06ec91532cafb8ce78a56e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export default db