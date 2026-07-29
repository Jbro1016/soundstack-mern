import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDIU-FS2HNdilW8yyl--W-u-Oq0xbI2Xso",
  authDomain: "soundstack-971ad.firebaseapp.com",
  projectId: "soundstack-971ad",
  storageBucket: "soundstack-971ad.firebasestorage.app",
  messagingSenderId: "910272115081",
  appId: "1:910272115081:web:36d23a4875b715963af158"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);