// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnallVF0rhPg6059k4T4didkf4VBnW43w",
    authDomain: "infovita-db.firebaseapp.com",
    projectId: "infovita-db",
    storageBucket: "infovita-db.appspot.com",
    messagingSenderId: "580044415441",
    appId: "1:580044415441:web:e978d6d1a7d9d3f4c600f0",
    measurementId: "G-2LPF0NCGY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };