
  const latestComic = "003";

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

  const menuButton = document.querySelector('.menu-button');
  const menu = document.querySelector('.menu');

  menuButton.addEventListener('click', () => {
      menu.classList.toggle('active');
  });

  const printsAdLink = document.querySelector('.print-ad-link');
  const tipJarLink = document.querySelector('.tip-jar-link');
  const footerCopyright = document.getElementById('footer-copyright');
  const currentYear = new Date().getFullYear();
  const rightArrows = document.querySelectorAll('.right-arrows-navigate-comic');
  const leftArrows = document.querySelectorAll('.left-arrows-navigate-comic');
  const nextArrow = document.getElementById("next-arrow");
  const latestArrow = document.getElementById("latest-arrow");
  const firstArrow = document.getElementById("first-arrow");
  const previousArrow = document.getElementById("previous-arrow");

  if(document.getElementById("current-page-comic")) {
    var currentComic = document.getElementById("current-page-comic").getAttribute("alt").slice(-3);
    var nextComic = (Number(currentComic) + 1).toString().padStart(3, '0');
    var previousComic = (Number(currentComic) - 1).toString().padStart(3, '0');
  }

  document.addEventListener("DOMContentLoaded", function() {
    if (footerCopyright) {
      footerCopyright.innerHTML = "All Content &#169; 2017-" + currentYear + " Amari &#268;ertkus";
    }
    if (printsAdLink) {
      printsAdLink.innerHTML = "BUY PRINTS";
      printsAdLink.href = "#TEST1";
    }
    if (tipJarLink) {
      tipJarLink.innerHTML = "TIP THE ARTIST";
      tipJarLink.href = "#TEST2";
    }

    if(nextArrow) {
      if(nextComic != latestComic) {
        nextArrow.setAttribute("href", "../BR/" + nextComic + ".html");      
      } else {
        nextArrow.setAttribute("href", "../index.html");
      }
    }

    if(previousArrow) {
      if(latestComic == currentComic) {
        previousArrow.setAttribute("href", "./BR/" + previousComic + ".html");      
      } else if(previousComic == "000") {
        previousArrow.setAttribute("href", "./001.html");
      } else {
        previousArrow.setAttribute("href", "./" + previousComic + ".html")
      }
    }

    if(window.location.href.includes("index")) {
      rightArrows.forEach(arrow => {
        arrow.classList.add("hidden");
      });
    } 

    if(window.location.href.includes("001")) {
      leftArrows.forEach(arrow => {
        arrow.classList.add("hidden");
      });
    }
  });
  