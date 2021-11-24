import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTIdJiMpxuQBAfC1U4URn_cvWp47g1yGs",
  authDomain: "sms1-cfc22.firebaseapp.com",
  projectId: "sms1-cfc22",
  storageBucket: "sms1-cfc22.appspot.com",
  messagingSenderId: "164708739081",
  appId: "1:164708739081:web:46d930a6869dd91632b0d8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);