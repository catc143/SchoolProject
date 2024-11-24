'use strict';

/**
 * add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * navbar toggle
 */
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);

/**
 * header active when scroll down to 100px
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


/**
 * Video Play and Stop Functionality
 */
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("videoElement");
  const playButton = document.getElementById("playButton");
  const stopButton = document.getElementById("stopButton");
  const thumbnail = document.getElementById("thumbnail");

  // Play button functionality
  playButton.addEventListener("click", function () {
      console.log("Play button clicked");

      // Hide the thumbnail and play button
      thumbnail.style.display = "none";
      playButton.style.display = "none";

      // Show the video element
      video.style.display = "block";
      
      // Play the video
      video.play();
      console.log("Video playing...");

      // Show the stop button
      stopButton.style.display = "block";
  });

  // Stop button functionality
  stopButton.addEventListener("click", function () {
      console.log("Stop button clicked");

      // Pause the video and reset it
      video.pause();
      video.currentTime = 0;
      console.log("Video stopped and reset");

      // Hide the video element and show the play button
      video.style.display = "none";
      playButton.style.display = "block";

      // Hide the stop button
      stopButton.style.display = "none";

      // Show the thumbnail again
      thumbnail.style.display = "block";
  });

  // Ensure the video is stopped when it ends automatically
  video.addEventListener("ended", function () {
      console.log("Video ended");

      // Pause the video and reset it
      video.pause();
      video.currentTime = 0;

      // Hide the video element and show the play button
      video.style.display = "none";
      playButton.style.display = "block";

      // Hide the stop button
      stopButton.style.display = "none";

      // Show the thumbnail again
      thumbnail.style.display = "block";
  });
});

document.querySelector('.header-action-btn').addEventListener('click', function() {
  const searchContainer = document.querySelector('.search-container');
  // Toggle visibility of the search container
  if (searchContainer.style.display === 'none' || searchContainer.style.display === '') {
    searchContainer.style.display = 'block';
  } else {
    searchContainer.style.display = 'none';
  }
});

document.querySelector('#search-close-btn').addEventListener('click', function() {
  const searchContainer = document.querySelector('.search-container');
  searchContainer.style.display = 'none';
});
