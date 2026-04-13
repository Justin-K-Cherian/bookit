// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "Your-API-KEY",
  authDomain: "AUTHDOMAIN",
  projectId: "PROJECT ID",
  storageBucket: "PROJECT ID.appspot.com",
  messagingSenderId: "MESSAGE SENDER ID",
  appId: "1:MESSAGE SENDER ID:APP ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db };
