document.addEventListener("DOMContentLoaded", () => {
  const genre = document.querySelector(".promo__genre"),
    ad = document.querySelectorAll("img"),
    seriesList = document.querySelector(".promo__interactive-list"),
    banner = document.querySelector(".promo__bg"),
    form = document.querySelector("form.add"),
    inputVal = form.querySelector(".adding__input"),
    checkbox = form.querySelector("[type='checkbox']"),
    deleteItem = document.querySelector(".delete");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let newSerie = inputVal.value;
    const favourite = checkbox.checked;

    if (newSerie) {
      if (newSerie.length > 18) {
        newSerie = `${newSerie.substring(0, 18)}...`;
      }
      if (favourite) {
        console.log("Added to favourites");
      }
    }

    seriesDB.series.push(newSerie);
    createSerie(seriesDB.series, seriesList);

    e.target.reset();
  });

  const sortDB = (arr) => {
    arr.sort();
  };

  const createSerie = (series, parent) => {
    parent.innerHTML = "";

    series.forEach((serie, idx) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">${idx + 1} ${serie}</li>
      <div class="delete"></div>
    `;
    });

    deleteItem.forEach((trash, indx) => {
      trash.addEventListener("click", () => {
        trash.parentElement.remove();
        seriesDB.series.splice(indx, 1);
      });
    });
  };

  genre.textContent = "Comedy";
  ad.forEach((item) => {
    item.remove();
  });

  const seriesDB = {
    series: ["Omar", "The Final Legacy", "Ertugrul", "Magnificent Century"],
  };

  banner.style.backgroundImage = 'url("../img/1.jpg")';

  sortDB(seriesDB.series);
  createSerie(seriesDB.series, seriesList);
});
