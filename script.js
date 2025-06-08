import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-analytics.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyB4HPhXFpeaCEPB-JAyBDKFvmIRyc2mjLc",
  authDomain: "college-club-e48c1.firebaseapp.com",
  projectId: "college-club-e48c1",
  storageBucket: "college-club-e48c1.firebasestorage.app",
  messagingSenderId: "929369752396",
  appId: "1:929369752396:web:bb40d99d73c1dd04f545e9",
  measurementId: "G-VDLVN70RDC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

const clubs = ["Coding Club", "Drama Society", "Music Club", "Literary Committee"];

window.onload = () => {
  const list = document.getElementById("clubList");
  const select = document.getElementById("clubSelect");

  if (list) {
    clubs.forEach(club => {
      const li = document.createElement("li");
      li.textContent = club;
      list.appendChild(li);
    });
  }

  if (select) {
    clubs.forEach(club => {
      const option = document.createElement("option");
      option.value = club;
      option.text = club;
      select.appendChild(option);
    });

    document.getElementById("regForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const name = e.target[0].value;
      const email = e.target[1].value;
      const club = e.target[2].value;

      try {
        await addDoc(collection(db, "registrations"), {
          name,
          email,
          club,
          timestamp: new Date()
        });
        alert("Registration Successful!");
        e.target.reset();
      } catch (err) {
        alert("Error: " + err.message);
      }
    });
  }
};
const textArray = [
  "Discover your passion.",
  "Connect with future leaders.",
  "Lead the change." 
];
let index = 0;
let charIndex = 0;
const typeSpeed = 100;
const eraseSpeed = 50;
const delayBetweenTexts = 1500;

const typewriter = document.getElementById("typewriter");

function typeText() {
  if (charIndex < textArray[index].length) {
    typewriter.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typeSpeed);
  } else {
    setTimeout(eraseText, delayBetweenTexts);
  }
}

function eraseText() {
  if (charIndex > 0) {
    typewriter.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseText, eraseSpeed);
  } else {
    index++;
    if (index >= textArray.length) index = 0;
    setTimeout(typeText, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typewriter) typeText();

  const toggleBtn = document.getElementById("themeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
