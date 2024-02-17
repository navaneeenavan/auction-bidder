import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmUJR2VwW-aJZN_Z15vS2X8-yO-Zs_qek",
  authDomain: "art-auction-site.firebaseapp.com",
  projectId: "art-auction-site",
  storageBucket: "art-auction-site.appspot.com",
  messagingSenderId: "46320554201",
  appId: "1:46320554201:web:eb0f951bd6b0ffb1752ec8",
  measurementId: "G-93E89NWL1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
