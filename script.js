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

    square.addEventListener("mouseover", function () {
      const darkness = parseInt(square.dataset.darkness);

      if (darkness === 0) {
        const red   = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue  = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        square.dataset.darkness = 1;
      } else if (darkness < 10) {
        const newDarkness = darkness + 1;
        square.dataset.darkness = newDarkness;
        const brightness = (10 - newDarkness) * 10;
        square.style.filter = `brightness(${brightness}%)`;
      }
    });

    container.appendChild(square);
  }
}

createGrid(16);
