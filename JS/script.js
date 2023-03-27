//Grid Creation

let gridContainer = document.querySelector("#grid-container");
let radialMenu =document.querySelector(".img-radial");

let angle = 0;

let screenSize = 512;

gridCreator(8);

function gridCreator(rows) {

    gridContainer.replaceChildren();

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

}

console.log("before radial event mlistener");

radialMenu.addEventListener("click", () => {

    angle += 90;
    radialMenu.style.transform = "rotate(" + angle + "deg)";

    if (angle == 360) {

        angle = 0;

    }

    switch (angle) {
        case 0:
            gridCreator(8);
            startGame();
            break;
        
        case 90:
            gridCreator(16);
            startGame();
            break;

        case 180:
            gridCreator(32);
            break;

        case 270:
            gridCreator(64);
            break;

        default:
            gridCreator(8);
            break;
    }

})

// for (let i = 0; i < rows; i++) {

//     let row = document.createElement("div");
//     row.className = "grid-row";

//     for (let i = 0; i < rows; i++) {

//         let squareDimension = screenSize / rows;
//         let squareDimensionsInPixelsWidth = squareDimension + "px";
//         let squareDimensionsInPixelsHeight = squareDimension + "px";

//         let squareDiv = document.createElement("div");
//         squareDiv.className = "square";
//         squareDiv.style.height = squareDimensionsInPixelsHeight;
//         squareDiv.style.width = squareDimensionsInPixelsWidth;
//         row.appendChild(squareDiv);

//     }

//     gridContainer.appendChild(row);

// }

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

function startGame() {

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

}
