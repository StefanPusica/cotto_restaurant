import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYxIxw2AXMfYwvBIYOG5Ap4cT4JtKML9k",
  authDomain: "cotto-1a325.firebaseapp.com",
  projectId: "cotto-1a325",
  storageBucket: "cotto-1a325.appspot.com",
  messagingSenderId: "698604261115",
  appId: "1:698604261115:web:c57a83f258317cbe33aa5e"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()