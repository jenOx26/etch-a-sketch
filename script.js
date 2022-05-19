let sizeBtn = document.querySelector('.sizeBtn');
sizeBtn.addEventListener('click', changeSize);

function changeSize() {
    let size = parseInt(prompt("What size grid would you like?"));
    if (size <=100 && size >= 2) {
        createGrid(size);
    } else {
        alert('Pick a size between 2 and 100!');
    }
}

function createGrid(size) {
    let grid = document.querySelector(".grid");
    let cells = grid.querySelectorAll("div");
    cells.forEach((div) => div.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let amount = size * size;
    for (let i=0; i < amount; i++) {
        let cell = document.createElement("div");
        cell.style.backgroundColor = 'black';
        grid.insertAdjacentElement('beforeEnd', cell)
        cell.addEventListener('mouseover', function(event) {
            event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, 
                ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        });
    }
}
