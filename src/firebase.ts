import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA_qT4EEaZo7yZP24Ws8yPm5-h3vX8d0g8",
  authDomain: "olms-b3896.firebaseapp.com",
  projectId: "olms-b3896",
  storageBucket: "olms-b3896.firebasestorage.app",
  messagingSenderId: "638629901518",
  appId: "1:638629901518:web:44c12152e95c37f0b18c9f",
  measurementId: "G-X3NB0E9BMS"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);