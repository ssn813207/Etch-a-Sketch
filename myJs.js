const body = document.querySelector("body");
const container= document.querySelector(".container");
const btn = document.createElement("button");
btn.textContent="clear";

function draw(n) {
  container.style.setProperty("--n", n);
  container.replaceChildren();

  for (let i = 0; i < n * n; i++){
      const grid = document.createElement("div");
      grid.classList.add("square");
      grid.addEventListener("mouseenter", () => {
        grid.style.backgroundColor = "blue";
    });
      grid.addEventListener("mouseleave", () => {
        grid.style.backgroundColor = "blue";
    });
      container.appendChild(grid);
  }

}



btn.addEventListener("click", () => {
  let n = Number(prompt("plese input grids number(0-100)", 16));
  if (!Number.isInteger(n) || n < 1 || n > 100) return;
  draw(n);
});

draw(16);
body.appendChild(btn);
body.appendChild(container);
