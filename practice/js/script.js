window.addEventListener("DOMContentLoaded", () => {
  let loader = document.querySelector(".loader"),
    tabParent = document.querySelector(".tabheader__items"),
    tabItems = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent");

  setTimeout(() => {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, 1500);

  function hideTab() {
    tabContent.forEach((content) => {
      // content.style.display = "none";
      content.classList.add("hide");
      content.classList.remove("show", "fade");
    });
    tabItems.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTab(i = 0) {
    tabContent[i].classList.add("show", "fade");
    tabContent[i].classList.remove("hide");
    tabItems[i].classList.add("tabheader__item_active");
  }

  hideTab();
  showTab();
  tabParent.addEventListener("click", (e) => {
    let target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabItems.forEach((item, idx) => {
        if (target === item) {
          hideTab();
          showTab(idx);
        }
      });
    }
  });

  const deadline = "2022-09-15";

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function getRemainingTime(endtime) {
    const timer = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.floor(timer / (1000 * 60 * 60 * 24)),
      hours = Math.floor((timer / (1000 * 60 * 60)) % 24),
      minutes = Math.floor((timer / 1000 / 60) % 60),
      seconds = Math.floor((timer / 1000) % 60);

    return { timer, days, hours, minutes, seconds };
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector);
    days = timer.querySelector("#days");
    hours = timer.querySelector("#hours");
    minutes = timer.querySelector("#minutes");
    seconds = timer.querySelector("#seconds");
    interval = setInterval(update, 1000);

    update();

    function update() {
      const t = getRemainingTime(endtime);

      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);
      if (t.timer < 0) {
        clearInterval(interval);
      }
    }
  }

  setClock(".timer", deadline);
});
