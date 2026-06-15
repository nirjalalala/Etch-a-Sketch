const container = document.getElementById("container");

function createGrid(size) {
  container.innerHTML = "";

  const squareSize = 750 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = squareSize + "px";
    square.style.height = squareSize + "px";
    square.dataset.darkness = 0;
    container.appendChild(square);
  }
}

createGrid(16);
