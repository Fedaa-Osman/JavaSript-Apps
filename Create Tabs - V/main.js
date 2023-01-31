let taps = document.querySelectorAll(".taps li");
let tapsArray = Array.from(taps);
let divs = document.querySelectorAll(".content div");
let divsArray = Array.from(divs);

tapsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tapsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((ele) => {
      ele.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
