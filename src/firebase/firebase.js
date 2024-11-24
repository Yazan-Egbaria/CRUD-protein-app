import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_DB_API_KEY,
  authDomain: "protein-crud-app.firebaseapp.com",
  projectId: "protein-crud-app",
  storageBucket: "protein-crud-app.firebasestorage.app",
  messagingSenderId: "261571021802",
  appId: "1:261571021802:web:28aff1997ad80f28e54093",
  measurementId: "G-VRQT5JQDQ8",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
