// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDCvyjwGm6KkDkkQxXsaMEUiqeK1SgeGjE",
  authDomain: "shopping-a5d7a.firebaseapp.com",
  databaseURL: "https://shopping-a5d7a-default-rtdb.firebaseio.com",
  projectId: "shopping-a5d7a",
  storageBucket: "shopping-a5d7a.appspot.com",
  messagingSenderId: "555839575222",
  appId: "1:555839575222:web:ae65bef666cc2bcc0e8217",
  measurementId: "G-DVT8KTEZ7Q"
};

// Initialize Firebase
 const firebaseapp = initializeApp(firebaseConfig);
 const database = getDatabase(firebaseapp);
 export {firebaseapp,database}
