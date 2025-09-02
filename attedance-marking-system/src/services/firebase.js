import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDudE2hUQ_zr3hKGtbXmWKYgV9nEXYQ0o8",
  authDomain: "cbit-attendance-81171.firebaseapp.com",
  projectId: "cbit-attendance-81171",
  storageBucket: "cbit-attendance-81171.firebasestorage.app",
  messagingSenderId: "907200889604",
  appId: "1:907200889604:web:d7219c8eb866c2dc7c4651",
  measurementId: "G-SFVSBZWNED"
};
const app= initializeApp(firebaseConfig);
const db=getFirestore(app)
export {db}