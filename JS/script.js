let gridContainer = document.querySelector("#grid-container");

let screenSize = 512;
let rows = 16;                       

for (let i = 0; i < rows; i++) {

    let row = document.createElement("div");
    row.className = "grid-row";

    for (let i = 0; i < rows; i++) {

        let squareDimension = screenSize / rows;
        let squareDimensionsInPixelsWidth = squareDimension + "px";
        let squareDimensionsInPixelsHeight = squareDimension + "px";

        let squareDiv = document.createElement("div");
        squareDiv.className = "square";
        squareDiv.style.height = squareDimensionsInPixelsHeight;
        squareDiv.style.width = squareDimensionsInPixelsWidth;
        row.appendChild(squareDiv);

    }

    gridContainer.appendChild(row);

}

let rowSelector = gridContainer.querySelectorAll(".grid-row");

let mouseDownVariable = 0;

rowSelector.forEach(row => {
    
    let squareSelector = row.querySelectorAll(".square");

    squareSelector.forEach(square => {

        square.addEventListener("mousedown", () => {

            mouseDownVariable = 1;

        })

        square.addEventListener("mouseup", () => {

            mouseDownVariable = 0;

        })

        square.addEventListener("mousemove", () => {

            if (mouseDownVariable == 1) {

                square.classList.add("hovered");

            }

        })
        

    });
    
});