// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqzYfFjs3F4t_EbfXdBdwPkKVBEj7khkM",
  authDomain: "ligamaxi-69864.firebaseapp.com",
  projectId: "ligamaxi-69864",
  storageBucket: "ligamaxi-69864.appspot.com",
  messagingSenderId: "237586530629",
  appId: "1:237586530629:web:b00fd856a780d2908dbe2c",
  measurementId: "G-3F3JNN3JH3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);