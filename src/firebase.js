import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPc8W_V60SD8G7QsFPy2eNQXqHg3jzCAs",
  authDomain: "chatappv1-ce9ea.firebaseapp.com",
  projectId: "chatappv1-ce9ea",
  storageBucket: "chatappv1-ce9ea.appspot.com",
  messagingSenderId: "884602307090",
  appId: "1:884602307090:web:eebcfc92c96bec196d4ecb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
