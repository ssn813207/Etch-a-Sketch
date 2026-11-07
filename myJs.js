const body = document.querySelector("body");
const container= document.querySelector(".container");
const btn = document.createElement("button");
btn.textContent="clear";

function draw(n) {
  container.style.setProperty("--n", n);
  container.replaceChildren();

  let drawing = false;

  document.addEventListener("mouseup", () => {
      drawing = false;
  });

  for (let i = 0; i < n * n; i++){
      const grid = document.createElement("div");
      grid.classList.add("square");
      

      grid.addEventListener("mousedown", (e) => {
          e.preventDefault();
          drawing = true;
          grid.style.backgroundColor = "rgba(0,0,0,0.1";
      });

      grid.addEventListener("mouseenter", () => {
          if (!drawing) return;
          const steps = Math.min(10, Number(grid.dataset.steps ?? 0) + 1);
          grid.dataset.steps = String(steps);
          grid.style.backgroundColor =`rgba(0, 0, 0, ${steps / 10})`;


          
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
