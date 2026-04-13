// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 🔥 Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYD768C9UY7PHq8BrQLN8paau3LmXAnFs",
  authDomain: "bookit-56e35.firebaseapp.com",
  projectId: "bookit-56e35",
  storageBucket: "bookit-56e35.appspot.com",
  messagingSenderId: "813441391899",
  appId: "1:813441391899:web:d5bf9d33c6b81c983a87be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const auth = getAuth(app);
const db = getFirestore(app);

// Export
export { auth, db };
