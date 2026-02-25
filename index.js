/* * Copyright (c) 2026 Golu
 * Project: Front-End Practice Dashboard
 * License: MIT
 */

// Create a date object for today

const today = new Date();

// Format it to: Day Month Year

const fullDate = today.toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Let's get the document Id direct from index.html of the footer

document.getElementById("display-date").textContent = fullDate;

// Simple greeting for our fellow learners!!!
// This is attaiched for heading after navbar using Id again
const welcomeHeading = document.getElementById("welcome");

const hour = new Date().getHours();

let greeting;

if (hour < 12) {
  greeting = "Good Morning! ☀️";
} else if (hour < 18) {
  greeting = "Good Afternoon! ☕";
} else {
  greeting = "Good Evening! 🌙";
}

welcomeHeading.textContent = `${greeting} Welcome to Learning Journey`;
