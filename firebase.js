// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4HPhXFpeaCEPB-JAyBDKFvmIRyc2mjLc",
  authDomain: "college-club-e48c1.firebaseapp.com",
  projectId: "college-club-e48c1",
  storageBucket: "college-club-e48c1.appspot.com",
  messagingSenderId: "929369752396",
  appId: "1:929369752396:web:bb40d99d73c1dd04f545e9",
  measurementId: "G-VDLVN70RDC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
