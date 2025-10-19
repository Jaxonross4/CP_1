const MAX = 300;

// elements
const form = document.getElementById("form");
const feed = document.getElementById("feed");
const tip  = document.getElementById("tip");

// background click listener (blocked by form clicks)
document.body.addEventListener("click", () => {});

// stop background from seeing form clicks
form.addEventListener("click", (e) => e.stopPropagation());

// delegate typing to update counts and enforce max for comments
form.addEventListener("input", (e) => {
  const t = e.target;
  if (!isField(t)) return;

  if (t.id === "comments" && t.value.length > MAX) {
    t.value = t.value.slice(0, MAX);
  }
  setCount(t);
});

form.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.key === "Enter") form.requestSubmit();
});

form.addEventListener("mouseover", (e) => {
  const t = e.target;
  if (!isField(t)) return;
  const hint = t.dataset.hint;
  if (!hint) return;
  tip.textContent = hint;
  tip.hidden = false;
});

form.addEventListener("mouseout", (e) => {
  if (!isField(e.target)) return;
  tip.hidden = true;
});

form.addEventListener("mousemove", (e) => {
  if (tip.hidden) return;
  tip.style.left = (e.clientX + 10) + "px";
  tip.style.top  = (e.clientY + 10) + "px";
});