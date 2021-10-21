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

    if(numRows == 0){
      return alert("There are NO rows to remove!!!")
    }

//Delete the row and the cell

    grid.deleteRow(numRows-1)
    numRows--
}
//Remove a column
function removeC() {
    alert("Clicked Remove Col")

    if(numCols == 0) {
        return alert("There are NO comlumns to remove!!!")
    }

//You can remove columns and delete cells
    for(var i=0; i < numRows; i++) {
        grid.rows[i].deleteCell(numCols-1)
    }
    numCols--
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    alert("Clicked Fill All")

//Color being selected

    if (colorSelected == null){
      return alert("You have NOT selected a color!!!")
    }

//Fill all the uncolored cells
    var cells = document.getElementsByTagName('td')
    for(var = i=0; i < cells.length; i++){
      cells[i].style.background = colorSelected
    }
}

function clearAll(){
    alert("Clicked Clear All")
    
}

function fillU(){
    alert("Clicked Fill All Uncolored")
}
