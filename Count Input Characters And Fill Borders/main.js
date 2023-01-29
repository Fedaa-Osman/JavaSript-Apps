let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
// let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.oninput = function () {
  count.innerHTML = maxLength - this.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
  count.innerHTML == 1
    ? count.classList.add("one")
    : count.classList.remove("one");
  count.innerHTML == 2
    ? count.classList.add("two")
    : count.classList.remove("two");
  count.innerHTML == 3
    ? count.classList.add("three")
    : count.classList.remove("three");
  progress.style.width = `${(this.value.length * 100) / maxLength}%`;
};
