/* ===============================
   FIREBASE IMPORTS
================================ */
import { auth, db } from "../firebase.js";
import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

/* ===============================
   PAGE SETUP
================================ */
const pages = {
  home: "page-home",
  select: "page-select",
  feedback: "page-feedback"
};

/* ===============================
   ✅ FIXED: SLUGS MATCH YOUR SYSTEM
================================ */
const sports = [
  { name: "Cricket Nets", slug: "cricket-nets", icon: "🏏" },
  { name: "Main Ground", slug: "main-ground", icon: "⚽" },
  { name: "Volleyball", slug: "volleyball-court", icon: "🏐" },
  { name: "Basketball", slug: "basketball-court", icon: "🏀" },
  { name: "Indoor Badminton Court", slug: "badminton-indoor", icon: "🏸" },
  { name: "Outdoor Badminton Court", slug: "badminton-outdoor", icon: "🏸" },
  { name: "Table Tennis", slug: "table-tennis", icon: "🏓" },
  { name: "Carroms", slug: "carroms", icon: "🎯" }
];

const venues = [
  { name: "Main Auditorium", slug: "main-auditorium", icon: "🎤" },
  { name: "APJ Hall", slug: "apj-hall", icon: "🏛️" },
  { name: "Seminar Hall 1", slug: "seminar-hall-1", icon: "🏫" },
  { name: "Seminar Hall 2", slug: "seminar-hall-2", icon: "🏫" },
  { name: "Seminar Hall 3", slug: "seminar-hall-3", icon: "🏫" },
  { name: "Seminar Hall 4", slug: "seminar-hall-4", icon: "🏫" },
  { name: "Seminar Hall 5", slug: "seminar-hall-5", icon: "🏫" }
];

let currentType = "";
let selectedFacility = "";

/* ===============================
   NAVIGATION - FIXED
================================ */
function showPage(pageId) {
  console.log("Navigating to:", pageId);
  
  // Remove active class from all pages
  document.querySelectorAll(".page").forEach(p => {
    p.classList.remove("active");
  });
  
  // Show the target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add("active");
    console.log("Page shown:", pageId);
  } else {
    console.error("Page not found:", pageId);
  }
}

window.goHome = function() { 
  console.log("Going home");
  showPage(pages.home); 
};

window.goSelect = function() { 
  console.log("Going to select");
  showPage(pages.select); 
};

/* ===============================
   ✅ FIXED: Query by SLUG only
================================ */
async function getAverageRating(facilitySlug) {
  try {
    const q = query(
      collection(db, "feedback"),
      where("facility", "==", facilitySlug)
    );

    const snap = await getDocs(q);
    if (snap.empty) return null;

    let total = 0;
    let count = 0;

    snap.forEach(doc => {
      const data = doc.data();
      if (data.ratings) {
        const ratings = Object.values(data.ratings);
        const avgPerFeedback = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        total += avgPerFeedback;
        count++;
      }
    });

    if (count === 0) return null;

    return {
      avg: (total / count).toFixed(1),
      count
    };
  } catch (error) {
    console.error("Error getting ratings:", error);
    return null;
  }
}

/* ===============================
   ✅ FIXED: Use SLUGS everywhere
================================ */
window.openCategory = async function(type) {
  console.log("Opening category:", type);
  currentType = type;
  showPage(pages.select);

  const titleElement = document.getElementById("select-title");
  if (titleElement) {
    titleElement.innerText = type === "sports" ? "Select Sports Facility" : "Select Venue";
  }

  const grid = document.getElementById("facility-grid");
  if (!grid) {
    console.error("facility-grid element not found!");
    return;
  }
  
  grid.innerHTML = "<p style='text-align:center; padding:20px; color:white;'>Loading facilities...</p>";

  const list = type === "sports" ? sports : venues;

  // Clear grid
  grid.innerHTML = "";

  for (const item of list) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="icon">${item.icon}</div>
      <h3>${item.name}</h3>
      <div class="rating">Loading rating...</div>
    `;

    card.onclick = () => {
      console.log("Card clicked:", item.slug);
      openFeedback(item.slug);
    };
    
    grid.appendChild(card);

    // Load ratings asynchronously
    getAverageRating(item.slug).then(rating => {
      const ratingDiv = card.querySelector(".rating");
      if (ratingDiv) {
        ratingDiv.innerText = rating
          ? `⭐ ${rating.avg} (${rating.count} reviews)`
          : "No ratings yet";
      }
    }).catch(err => {
      console.error("Error loading rating:", err);
      const ratingDiv = card.querySelector(".rating");
      if (ratingDiv) {
        ratingDiv.innerText = "No ratings yet";
      }
    });
  }
  
  console.log("Facilities loaded:", list.length);
};

/* ===============================
   ✅ FIXED: Store SLUG in Firebase
================================ */
window.openFeedback = function(slug) {
  console.log("Opening feedback for:", slug);
  selectedFacility = slug;
  showPage(pages.feedback);

  // Pretty display name from slug
  const displayName = slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
  
  const titleElement = document.getElementById("feedback-title");
  if (titleElement) {
    titleElement.innerText = `Feedback for ${displayName}`;
  }

  const questions = currentType === "sports"
    ? [
        "Ground / Court Quality",
        "Equipment Availability", 
        "Lighting Quality",
        "Safety Measures",
        "Cleanliness",
        "Staff Support",
        "Ease of Booking",
        "Overall Experience"
      ]
    : [
        "Cleanliness",
        "Seating Comfort",
        "Lighting & Sound",
        "Equipment Condition",
        "Ventilation",
        "Safety Measures",
        "Staff Behaviour",
        "Ease of Booking",
        "Overall Experience"
      ];

  const box = document.getElementById("question-box");
  if (!box) {
    console.error("question-box element not found!");
    return;
  }
  
  box.innerHTML = "";

  // Hide error message
  const errorMsg = document.getElementById("error-msg");
  if (errorMsg) {
    errorMsg.style.display = "none";
  }

  questions.forEach(q => {
    const row = document.createElement("div");
    row.className = "question";
    row.dataset.question = q;
    row.innerHTML = `<span>${q}</span>`;

    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = "star";
      star.innerText = "★";
      star.onclick = () => rate(row, i);
      row.appendChild(star);
    }

    box.appendChild(row);
  });
  
  console.log("Feedback form created with", questions.length, "questions");
};

/* ===============================
   STAR RATING
================================ */
function rate(row, count) {
  row.querySelectorAll(".star").forEach((s, i) =>
    s.classList.toggle("active", i < count)
  );
}

/* ===============================
   ✅ FIXED: Save SLUG to Firebase
================================ */
window.submitFeedback = async function() {
  console.log("Submitting feedback...");
  
  const rows = document.querySelectorAll(".question");
  let ratings = {};
  let valid = true;

  rows.forEach(row => {
    const score = row.querySelectorAll(".star.active").length;
    if (!score) valid = false;
    ratings[row.dataset.question] = score;
  });

  const errorMsg = document.getElementById("error-msg");
  
  if (!valid) {
    if (errorMsg) {
      errorMsg.style.display = "block";
    }
    console.log("Validation failed: Not all questions answered");
    return;
  }

  if (errorMsg) {
    errorMsg.style.display = "none";
  }

  const user = auth.currentUser;
  if (!user) {
    alert("Please login again.");
    window.location.href = "../index.html";
    return;
  }

  try {
    await addDoc(collection(db, "feedback"), {
      category: currentType,
      facility: selectedFacility,
      ratings,
      comment: document.getElementById("comment").value.trim(),
      userId: user.uid,
      userEmail: user.email,
      createdAt: serverTimestamp()
    });

    console.log("Feedback submitted successfully");
    
    const popup = document.getElementById("thankyou-popup");
    if (popup) {
      popup.style.display = "flex";
    } else {
      alert("Thank you for your feedback!");
      closePopup();
    }
  } catch (error) {
    console.error("Error submitting feedback:", error);
    alert("Failed to submit feedback: " + error.message);
  }
};

/* ===============================
   POPUP
================================ */
window.closePopup = function() {
  const popup = document.getElementById("thankyou-popup");
  if (popup) {
    popup.style.display = "none";
  }
  
  const commentBox = document.getElementById("comment");
  if (commentBox) {
    commentBox.value = "";
  }
  
  showPage(pages.home);
};

// Initialize on page load
console.log("Feedback script loaded");
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM Content Loaded");
  showPage(pages.home);
});
