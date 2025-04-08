// Dynamic year and last modified footer
const today = new Date();
const year = document.querySelector("#currentyear");
year.innerHTML = today.getFullYear();
let myLastModElement = document.querySelector("#lastModified");
let myLastMod = new Date(document.lastModified);
myLastModElement.textContent = `Last Modified: ${myLastMod}`;

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show'); // Toggle the "show" class
  hamburger.textContent = navMenu.classList.contains('show') ? 'X' : '☰'; // Update icon
});

