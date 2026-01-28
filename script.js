// logic for generating the drawing grid
function createGrid(size) {
  // clear the existing grid
  parent.innerHTML = "";
  // change the var in css sheet to whatever the input size is
  parent.style.setProperty("--grid-size", size);

  for (let i = 0; i < size * size; i++) {
    const child = document.createElement("div");
    child.classList.add("gridSquare");
    parent.appendChild(child);

    child.addEventListener("mouseover", () => {
      child.style.backgroundColor = "black";
    })
  }

}

// select parent node as .container from html file
// all new grids will be generated within this div
const parent = document.querySelector(".container");

// set initial gridSize
let gridSize = 16;

createGrid(gridSize);

// option for user to change the grid size
const button = document.querySelector("#reset");

button.addEventListener("click", () => {
  const inputSize = prompt("Enter a range from 16 to 100: ");
  createGrid(inputSize)
})
