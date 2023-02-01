let serialEl = document.querySelector(".serial");
let btnEl = document.querySelector(".generate");
let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabccefghijklmnopqrstuvwxyz1234567890";

btnEl.onclick = function () {
  let randomSerial = "";
  for (let i = 0; i < 10; i++) {
    randomSerial += chars[Math.floor(Math.random() * chars.length)];
  }
  console.log(randomSerial);
  serialEl.textContent = randomSerial;
};
