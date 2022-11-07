import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDr7YNqhUFO_hj2W9w2ht5lSPQ226llBBI",
  authDomain: "shopping-71a64.firebaseapp.com",
  projectId: "shopping-71a64",
  storageBucket: "shopping-71a64.appspot.com",
  messagingSenderId: "928429202391",
  appId: "1:928429202391:web:d1ca63e81bc590d1054992",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth };
