//Grid Creation

let gridContainer = document.querySelector("#grid-container");
let radialMenu =document.querySelector(".img-radial");

let angle = 0;

let screenSize = 512;

let selection = "pencil";

let dimensionDeterminer = document.querySelectorAll(".square-dimensions");

gridCreator(8);
startGame();
dimensionDetermination(8);

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

function dimensionDetermination(dimSize) {

    dimensionDeterminer.forEach(dim => {
        
        dim.innerText = dimSize;

    });

}

// Behaviour

function startGame() {

    let rowSelector = gridContainer.querySelectorAll(".grid-row");
    let mouseDownVariable = false;  
        
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
            dimensionDetermination(8);
            break;
        
        case 90:
            gridCreator(16);
            startGame();
            dimensionDetermination(16);
            break;

        case 180:
            gridCreator(32);
            startGame();
            dimensionDetermination(32);
            break;

        case 270:
            gridCreator(64);
            startGame();
            dimensionDetermination(64);
            break;

        default:
            gridCreator(8);
            startGame();
            dimensionDetermination(8);
            break;
    }

})

//UI

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

// Colors Section

let blackColor = document.querySelector("#black");
let grayColor = document.querySelector("#gray");
let maroonColor = document.querySelector("#maroon");
let redColor = document.querySelector("#red");
let orangeColor = document.querySelector("#orange");
let yellowColor = document.querySelector("#yellow");
let greenColor = document.querySelector("#green");
let blueColor = document.querySelector("#blue");
let darkblueColor = document.querySelector("#darkblue");
let purpleColor = document.querySelector("#purple");
let brownColor = document.querySelector("#brown");
let pinkColor = document.querySelector("#pink");

blackColor.style.backgroundColor = "black";
grayColor.style.backgroundColor = "gray";
maroonColor.style.backgroundColor = "maroon";
redColor.style.backgroundColor = "red";
orangeColor.style.backgroundColor = "orange";
yellowColor.style.backgroundColor = "yellow";
greenColor.style.backgroundColor = "green";
blueColor.style.backgroundColor = "blue";
darkblueColor.style.backgroundColor = "darkblue";
purpleColor.style.backgroundColor = "purple";
brownColor.style.backgroundColor = "brown";
pinkColor.style.backgroundColor = "pink";