let taps = document.querySelectorAll(".taps li");
let tapsArr = Array.from(taps);
let divs = document.querySelectorAll(".content div");
let divsArr = Array.from(divs);

tapsArr.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tapsArr.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArr.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "block";
  });
});
