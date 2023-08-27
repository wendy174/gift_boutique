// firebase setup 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyzMQ8QBPCSEkEf7MnYMY3dHivz2OmcKg",
  authDomain: "giftboutique-90376.firebaseapp.com",
  projectId: "giftboutique-90376",
  storageBucket: "giftboutique-90376.appspot.com",
  messagingSenderId: "232854506151",
  appId: "1:232854506151:web:99074f8a2cdeaff486a982"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)