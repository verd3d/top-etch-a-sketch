const container = document.querySelector("#container")
let gridSize = 16;
const canvas = 960;
let cellDimension = canvas / gridSize;

for(let i = 1; i <= gridSize * gridSize; i++){
    var gridCell = document.createElement('div');
    gridCell.className = "gridCell";

    gridCell.style.width = `${cellDimension}px`;
    gridCell.style.height = `${cellDimension}px`;

    document.getElementById('container').appendChild(gridCell);

}



console.log("check");