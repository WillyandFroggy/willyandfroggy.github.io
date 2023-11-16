// Sticky header
var prevScrollpos = window.scrollY;
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").style.top = "0";
      } else {
        document.getElementById("header").style.top = "-70px";
      }
      prevScrollpos = currentScrollPos;
}

// Menu button
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Load ad text and hrefs
const printsAdLink = document.querySelector('.print-ad-link');
const tipJarLink = document.querySelector('.tip-jar-link');

document.addEventListener("DOMContentLoaded", function() {
  if (printsAdLink) {
    printsAdLink.innerHTML = "BUY PRINTS";
    printsAdLink.href = "#TEST1";
  }
  if (tipJarLink) {
    tipJarLink.innerHTML = "TIP JAR: SUPPORT THE ARTIST";
    tipJarLink.href = "#TEST2";
  }
});