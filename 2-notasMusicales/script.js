/**
 * select the labels
 * create a counter to know which one is active
 */
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

/**
 * create a click listener event for the next btn, increments the Active counter up to the max number of circles
 * */
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) currentActive = circles.length;
  update();
});
/**
 * create event of listening event click to btn prev, decrementing the Active counter until it reaches 1
 */
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive < 1) currentActive = 1;
  update();
});

/**
 * updates each circle by assigning and deleting active
 * store the selector .active
 * modify the active circle
 * the buttons are cancelled when they reach the borders
 */
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) circle.classList.add("active");
    else circle.classList.remove("active");
  });

  const actives = document.querySelectorAll(".active");

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";

  if (currentActive === 1) prev.disabled = true;
  else if (currentActive === circles.length) next.disabled = true;
  else {
    prev.disabled = false;
    next.disabled = false;
  }
}
