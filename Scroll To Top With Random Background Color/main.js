let span = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
  // if (this.scrollY >= 1000) {
  //   span.classList.add("show");
  // } else {
  //   span.classList.remove("show");
  // }
  this.scrollY >= 1000
    ? span.classList.add("show")
    : span.classList.remove("show");
};

span.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  let hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
  let colorParts1 = [];
  let colorParts2 = [];

  for (let i = 0; i < 6; i++) {
    colorParts1.push(hexArr[Math.floor(Math.random() * hexArr.length)]);
  }
  for (let i = 0; i < 6; i++) {
    colorParts2.push(hexArr[Math.floor(Math.random() * hexArr.length)]);
  }

  let finalColor1 = `#${colorParts1.join("")}`;
  let finalColor2 = `#${colorParts2.join("")}`;
  document.body.style.backgroundColor = finalColor1;
  span.style.backgroundColor = finalColor2;

  // document.body.append(finalColor1);
  // document.body.append(finalColor2);
};
