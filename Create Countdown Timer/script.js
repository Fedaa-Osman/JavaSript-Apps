let countDown = new Date("DEC 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let Diff = countDown - dateNow;

  let days = Math.floor(Diff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((Diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((Diff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((Diff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (Diff < 0) {
    clearInterval(counter);
  }
}, 1000);
