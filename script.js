// Make function to create grid into 16 by 16 divs

console.log("I'm alive!");

function makeGrid() {
  for (let i = 1; i <= 256; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.addEventListener("click", function (event) {
      event.target.style.backgroundColor = "black";
      console.log(event);
    });
    grid.appendChild(div);
  }
}

// Select the container

const grid = document.querySelector("#grid");

// Trigger different class by clicking grid cell

makeGrid();
