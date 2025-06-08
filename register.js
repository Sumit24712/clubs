// register.js
import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.0/firebase-firestore.js";

const form = document.getElementById("registrationForm");
const statusMsg = document.getElementById("statusMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const club = form.club.value;

  if (!name || !email || !club) {
    statusMsg.textContent = "Please fill out all fields.";
    return;
  }

  try {
    await addDoc(collection(db, "registrations"), {
      name,
      email,
      club,
      timestamp: new Date()
    });

    statusMsg.textContent = "🎉 Registered successfully!";
    form.reset();
  } catch (error) {
    console.error("Error adding document: ", error);
    statusMsg.textContent = "❌ Something went wrong.";
  }
});
