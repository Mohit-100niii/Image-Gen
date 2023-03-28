// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOURKEY",
  authDomain: "YOURKEY",
  projectId: "YOURKEY",
  storageBucket: "YOURKEY",
  messagingSenderId: "YOURKEY",
  appId: "YOURKEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Auth = getAuth(app)
const Provider = new GoogleAuthProvider();

const db = getFirestore(app)
const storage = getStorage(app)

const API_TOKEN = "YOURKEY";


export {Auth, Provider, db, storage, API_TOKEN};
