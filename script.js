// Make function to create grid into 16 by 16 divs

console.log("I'm alive!");

// Allow for a grid choice. Default to 16 by 16.

function makeGrid(gridChoice = 32) {
  grid.innerHTML = "";
  for (let i = 1; i <= gridChoice * gridChoice; i++) {
    let div = document.createElement("div");
    div.style.cssText = `width: ${500 / gridChoice - 2}px; height: ${
      500 / gridChoice - 2
    }px;`;
    div.classList.add("cell");
    div.addEventListener("mouseover", function (event) {
      event.target.style.backgroundColor = "black";
      console.log(event);
    });
    grid.appendChild(div);
  }
}
const button = document.querySelector(".button");

button.addEventListener("click", () => {
  console.log("clicked");
  let userChoice = prompt("How big do you want the grid?");
  makeGrid(userChoice);
});

// Select the container

const grid = document.querySelector("#grid");

// Trigger different class by clicking grid cell

makeGrid();

function clearBox(elementID) {
  document.getElementById(elementId).innerHTML = "";
}
