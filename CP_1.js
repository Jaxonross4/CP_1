const MAX = 300;

// elements
const form = document.getElementById("form");
const feed = document.getElementById("feed");
const tip  = document.getElementById("tip");

// background click listener (blocked by form clicks)
document.body.addEventListener("click", () => {});

// stop background from seeing form clicks
form.addEventListener("click", (e) => e.stopPropagation());