// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import {getAuth} from 'firebase/auth';
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBNlLy1W5ylvwC1eMuMcn_LCnkxWdm-psw",
  authDomain: "clone-13a3d.firebaseapp.com",
  projectId: "clone-13a3d",
  storageBucket: "clone-13a3d.firebasestorage.app",
  messagingSenderId: "198173170789",
  appId: "1:198173170789:web:093a66a320d65d7513ba8c"
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = app.firestore()



