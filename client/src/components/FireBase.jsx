import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth"; 


const firebaseConfig = {
  apiKey: "AIzaSyAyzMQ8QBPCSEkEf7MnYMY3dHivz2OmcKg",
  authDomain: "giftboutique-90376.firebaseapp.com",
  projectId: "giftboutique-90376",
  storageBucket: "giftboutique-90376.appspot.com",
  messagingSenderId: "232854506151",
  appId: "1:232854506151:web:99074f8a2cdeaff486a982"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
export const googleProvider = new GoogleAuthProvider(); 
export const githubProvider = new GithubAuthProvider();