// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoTCknHYiPVUC6SGhAJQ1ATfNmIcYdvKY",
  authDomain: "protein-crud-app.firebaseapp.com",
  projectId: "protein-crud-app",
  storageBucket: "protein-crud-app.firebasestorage.app",
  messagingSenderId: "261571021802",
  appId: "1:261571021802:web:28aff1997ad80f28e54093",
  measurementId: "G-VRQT5JQDQ8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
