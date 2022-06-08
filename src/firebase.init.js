// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCq5wpcJXGlSPjGl3sQb89pVadPE9uRjWg",
  authDomain: "genius-car-machanics-c05f6.firebaseapp.com",
  projectId: "genius-car-machanics-c05f6",
  storageBucket: "genius-car-machanics-c05f6.appspot.com",
  messagingSenderId: "32028628436",
  appId: "1:32028628436:web:4718d7afefcf99698cf241"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;