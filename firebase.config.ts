// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyCVPDXbkTVHGaoRMR6d2rolNBLGm_vC7-s",
  authDomain: "personal-blog-415e0.firebaseapp.com",
  projectId: "personal-blog-415e0",
  storageBucket: "personal-blog-415e0.firebasestorage.app",
  messagingSenderId: "152803517161",
  appId: "1:152803517161:web:b8a410e2ce6576c9ba8678",
  measurementId: "G-QWG49KB707"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);