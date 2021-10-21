let numRows = 0;
let numCols = 0;
let colorSelected;

//Add a row
function addR() {
    alert("Clicked Add Row")
//Does columns == 0
    if(numCols == 0)
      numCols++
//Insert Row
    var row = grid.insertRow()
    grid.appendChild(row);
//Loop the columns
    for(var i = 0; i < numCols; i++){
      var newCell = rpw.insertCell(i);
      var newText = document.createTextNode('CELL');
      newCell.appendChild(newText);
      newCell.onclick = function(){
        return changeColor(this.parentElement.rowIndex, this.cellIndex+1)
      }
    }
    numRows++;
}
//Add a column
function addC() {
    alert("Clicked Add Col")

//Does the rows == 0

    if(numRows == 0){
      return addR()
    }
    for(var i = numCols++; i < numCols; i++){
      for (var j=0; j < numRows; j++) {
            // Add Cell
            var newCell = grid.rows[j].insertCell(i);
            var newText = document.createTextNode('CELL');
            newCell.appendChild(newText);
            newCell.onclick = function() {
                return changeColor(this.parentElement.rowIndex, this.cellIndex+1)
            }
        }
    }
}

//Remove a row
function removeR() {
    alert("Clicked Remove Row")
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")
}

function clearAll(){
    alert("Clicked Clear All")
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
