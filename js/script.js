"use strict";

let genre = document.querySelector(".promo__genre"),
  ad = document.querySelectorAll("img"),
  seriesList = document.querySelector(".promo__interactive-list"),
  banner = document.querySelector(".promo__bg");

genre.textContent = "Comedy";
ad.forEach((item) => {
  item.remove();
});

const seriesDB = {
  series: [
    "Omar",
    "The Final Legacy",
    "Ertugrul",
    "Magnificent Century",
    "The Great Seljuks: Guardians...",
  ],
};

banner.style.backgroundImage = "url('../img/1.jpg')";

seriesDB.series.forEach((serie, idx) => {
  seriesList.innerHTML += `
  <li class="promo__interactive-item">${idx + 1} ${serie}</li>
    <div class="delete"></div>
  `;
});
