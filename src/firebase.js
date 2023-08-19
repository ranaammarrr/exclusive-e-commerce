import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyA6ebXXVYBa51Fp0usar_VoGwdSzPYT0us",
    authDomain: "auth-production-fc16a.firebaseapp.com",
    projectId: "auth-production-fc16a",
    storageBucket: "auth-production-fc16a.appspot.com",
    messagingSenderId: "514302885752",
    appId: "1:514302885752:web:0834a41b905ace355e528d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);