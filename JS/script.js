//Grid Creation

let gridContainer = document.querySelector("#grid-container");

let screenSize = 512;
let rows = 64;                       

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

// UI

let eraserContainer = document.querySelector("#eraser");
let pencilContainer = document.querySelector("#pencil");

eraserContainer.addEventListener("click", () => {

    if (selection = "pencil") {

        pencilContainer.classList.remove("selected");

    }

    eraserContainer.classList.add("selected");
    selection = "eraser";

})

pencilContainer.addEventListener("click", () => {

    if (selection = "eraser") {

        eraserContainer.classList.remove("selected");

    }

    pencilContainer.classList.add("selected");
    selection = "pencil";

})

// Behaviour

let rowSelector = gridContainer.querySelectorAll(".grid-row");
let mouseDownVariable = false;  

let selection = "pencil";

rowSelector.forEach(row => {
    
    let squareSelector = row.querySelectorAll(".square");

    squareSelector.forEach(square => {

        square.addEventListener("mousedown", () => {

            mouseDownVariable = true;

        })

        square.addEventListener("mouseup", () => {

            mouseDownVariable = false;

        })

        square.addEventListener("mousemove", () => {

            if (mouseDownVariable) {

                switch (selection) {
                    case "eraser":
                        square.style.backgroundColor = "#FBFFF1";
                        break;
                
                    case "pencil":
                        square.style.backgroundColor = "black";
                        break;
                }

            }

        })
        

    });
    
});

