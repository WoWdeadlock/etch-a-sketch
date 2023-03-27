let gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < 4; i++) {

    let row = document.createElement("div");
    row.className = "grid-row";

    for (let i = 0; i < 4; i++) {

        let squareDiv = document.createElement("div");
        squareDiv.className = "square";
        row.appendChild(squareDiv);

    }

    gridContainer.appendChild(row);

}