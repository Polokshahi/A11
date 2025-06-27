// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQb6QjUunchweMutbiKMiISJ9h2c4nj10",
  authDomain: "assignment11-e8cae.firebaseapp.com",
  projectId: "assignment11-e8cae",
  storageBucket: "assignment11-e8cae.firebasestorage.app",
  messagingSenderId: "918593103356",
  appId: "1:918593103356:web:6391cc097770ee73f37e79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);