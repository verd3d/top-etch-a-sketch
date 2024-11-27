const container = document.querySelector("#container")
let gridSize = 16;
const canvas = 960;


function initializeGrid(numCells){
    for(let i = 1; i <= numCells * numCells; i++){
        let cellDimension = canvas / numCells;
        var gridCell = document.createElement('div');
        gridCell.className = "gridCell";

        gridCell.style.width = `${cellDimension}px`;
        gridCell.style.height = `${cellDimension}px`;

        gridCell.style.backgroundColor = "white";


        gridCell.addEventListener("mouseenter", paintCell);
        document.getElementById('container').appendChild(gridCell);

    }
}

function paintCell(){
    this.style.backgroundColor = "black";
}

function flushCanvas(){
    let oldCanvas = document.getElementsByClassName("gridCell");
    Array.from(oldCanvas).forEach(cell => cell.remove());

}

function resizeGrid(){
    gridSize = prompt("Please enter the grid size:", "max 128");
    if(gridSize > 128){
        alert("please don't enter values above 128");
        return;
    }
    flushCanvas();
    initializeGrid(gridSize);
    console.log(gridSize);
}


initializeGrid(gridSize);
const resizeBtn = document.querySelector("#resizer");
resizeBtn.addEventListener("click", resizeGrid);

console.log("check");