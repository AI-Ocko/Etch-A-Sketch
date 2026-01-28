// select parent node as .container from html file
// all new grids will be generated within this div
const parent = document.querySelector(".container");

// set initial gridSize
const gridSize = 16;

for (let i = 0; i < gridSize * gridSize; i++) {
  // fill in the number of gridsquares
  const child = document.createElement("div");
  child.classList.add("gridSquare");
  parent.appendChild(child);

  child.addEventListener("mouseover", () => {
    child.style.backgroundColor = "black";
  })
}
