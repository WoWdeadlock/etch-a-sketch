//Grid Creation

let gridContainer = document.querySelector("#grid-container");
let radialMenu =document.querySelector(".img-radial");

let angle = 0;

let screenSize = 512;

let selection = "pencil";

let rainbowState = false;

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

    let brightness = 1;
    
    rowSelector.forEach(row => {
        
        let squareSelector = row.querySelectorAll(".square");
    
        squareSelector.forEach(square => {  
    
            square.addEventListener("mousedown", () => {

                mouseDownVariable = true;

                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                
                if (mouseDownVariable) {

                    switch (selection) {
                        case "eraser":
                            square.style.backgroundColor = "#FBFFF1";
                            square.style.filter = "none";
                            break;
                    
                        case "pencil":

                            if (rainbowState == false) {
                                
                                square.style.backgroundColor = selectedColor.style.backgroundColor;
                                square.style.filter = "none";
                                
                            }
                                
                            else {
                                square.style.backgroundColor = "#" + randomColor;
                                square.style.filter = "brightness(" + brightness + ")";
                                brightness -= 0.1;

                                if (brightness < 0) {

                                    brightness = 1;

                                }

                            }
        
                            break;

                        default:
                            
                            if (rainbowState == false) {

                                square.style.backgroundColor = selection;
                                square.style.filter = "none";

                            }

                            else {
                                square.style.backgroundColor = "#" + randomColor;
                                square.style.filter = "brightness(" + brightness + ")";
                                brightness -= 0.1;

                                if (brightness < 0) {

                                    brightness = 1;

                                }

                            }
                    }
    
                }
        
            })
    
            square.addEventListener("mouseup", () => {
    
                mouseDownVariable = false;
    
            })
            
            square.addEventListener("mouseover", () => {

                let randomColor = Math.floor(Math.random()*16777215).toString(16);
                
                if (mouseDownVariable) {

                    switch (selection) {
                        case "eraser":
                            square.style.backgroundColor = "#FBFFF1";
                            square.style.filter = "none";
                            break;
                    
                        case "pencil":
                            if (rainbowState == false) {

                                square.style.backgroundColor = selectedColor.style.backgroundColor;
                                square.style.filter = "none";
                            
                            }
                                
                            else {
                                square.style.backgroundColor = "#" + randomColor;
                                square.style.filter = "brightness(" + brightness + ")";
                                brightness -= 0.1;

                                if (brightness < 0) {

                                    brightness = 1;

                                }

                            }
        
                            break;

                        default:

                            if (rainbowState == false) {

                                square.style.backgroundColor = selection;
                                square.style.filter = "none";
                                
                            }

                            else {
                                square.style.backgroundColor = "#" + randomColor;
                                square.style.filter = "brightness(" + brightness + ")";
                                brightness -= 0.1;

                                if (brightness < 0) {

                                    brightness = 1;

                                }

                            }

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

let colors = document.querySelectorAll(".color");
let selectedColor = document.querySelector("#selected-color");

selectedColor.style.backgroundColor = "black";

colors.forEach(color => {
    
    color.style.backgroundColor = color.id; 

    color.addEventListener("click", () => {

        selection = color.id;
        selectedColor.style.backgroundColor = color.id;

        if (eraserContainer.classList.contains("selected")) {

            eraserContainer.classList.remove("selected");
            pencilContainer.classList.add("selected");

        }

    })

});

// Rainbow Button

let rainbowButton = document.querySelector(".rainbow-button");
let colorGrid = document.querySelector(".colors-container");

rainbowButton.addEventListener("click", () => {

    rainbowButton.classList.toggle("onclick");
    colorGrid.classList.toggle("inactive");

    if (rainbowState == false) {

        rainbowState = true;

    } else if (rainbowState == true) {

        rainbowState = false;

    }

    startGame();

})
