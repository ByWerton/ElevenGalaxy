// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA-Z5s1yzFguRY03UjJz4l581DhIqWe90Y",
  authDomain: "elevengalaxy-4ab1f.firebaseapp.com",
  databaseURL: "https://elevengalaxy-4ab1f-default-rtdb.firebaseio.com",
  projectId: "elevengalaxy-4ab1f",
  storageBucket: "elevengalaxy-4ab1f.appspot.com",
  messagingSenderId: "441555249711",
  appId: "1:441555249711:web:409b2320283d5fe46134da",
  measurementId: "G-2MEFN03TH0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, onAuthStateChanged };
