const grid = document.querySelector(".grid");

for (let i=1; i < 257; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
    div.addEventListener('mouseover', function(event) {
        event.target.style.backgroundColor = 'gray';
    });
}