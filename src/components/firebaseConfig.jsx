// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMfk9pxmzj7TmtIiE8a5AuMlczXCBtMaM",
  authDomain: "it-sysarch32-store-mendoza.firebaseapp.com",
  projectId: "it-sysarch32-store-mendoza",
  storageBucket: "it-sysarch32-store-mendoza.appspot.com",
  messagingSenderId: "239853650594",
  appId: "1:239853650594:web:00b440b42723fd9ae60dfb",
  measurementId: "G-GFLPQ0683J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };