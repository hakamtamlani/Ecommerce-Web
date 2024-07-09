// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAON46F-RcMlRHPoSJIC28GfPFEfqs72jA",
  authDomain: "website-ecomerce.firebaseapp.com",
  projectId: "website-ecomerce",
  storageBucket: "website-ecomerce.appspot.com",
  messagingSenderId: "1035980859377",
  appId: "1:1035980859377:web:0a647e00d864a0e85f8650",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
