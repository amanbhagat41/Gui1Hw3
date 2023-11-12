/*
File: script.js
GUI Assignment: HW3 Creating an Interactive Dynamic Table
This program creates a Interacrive dynamic table using inputs set into a form
and outputs a table that is scrollable if too big and the headers are sticky so
they will follow the scroll
Aman Bhagat, Umass Lowell Computer Science, aman_bhagat@student.uml.edu
Copyright (c) 2021 by Aman.  All rights reserved.  May be freely copied or 
excerpted for educational purposes with credit to the author. 
updated by AB on Oct 24 5:51 pm
*/
document.querySelector("form").addEventListener("submit", function (e) { //looks for a form and submit button to press
  e.preventDefault();
  var minCol = Number(document.getElementById("minCol").value); //the values of minCol is equal to the id minCol
  var maxCol = Number(document.getElementById("maxCol").value); //the values of maxCol is equal to the id maxCol
  var minRow = Number(document.getElementById("minRow").value); //the values of minRow is equal to the id minRow
  var maxRow = Number(document.getElementById("maxRow").value); //the values of maxRow is equal to the id maxRow
  console.log(minCol); // used to check if the values work
  console.log(maxCol);
  console.log(minRow);
  console.log(maxRow);
  const errorElement = document.createElement("p"); //used to display error message
  const errorMes = document.getElementById("errMes"); //prints it out into the id errMes
  const table = document.createElement("table"); //makes a table
  const tabledata = document.getElementById("table"); 
  if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) { //error case for if the inputs are not numbers
    errorMes.innerHTML = "";
    errorElement.innerText = "Incorrect Values";
    errorMes.appendChild(errorElement);
    return;
  } else if (minRow > maxRow && minCol > maxCol) { //error case for if minCol and minRow are greater than MaxCol and MaxRow
    errorMes.innerHTML = "";
    errorElement.innerText =
      "Minimum Col and Minimum Row can not be bigger than Maximum Col and Maximum Row";
    errorMes.appendChild(errorElement);
    return;
  } else if (minCol > maxCol) {//error case for if minCol is greater than maxCol
    errorMes.innerHTML = "";
    errorElement.innerText = "Minimum Col can not be bigger than Maximum Col";
    errorMes.appendChild(errorElement);
    return;
  } else if (minRow > maxRow) {//error case for if minRow is greater than maxRow
    errorMes.innerHTML = "";
    errorElement.innerText = "Minimum Row can not be bigger than Maximum Row";
    errorMes.appendChild(errorElement);
    return;
  } else if (maxCol > 50 || minCol < -50 || maxRow > 50 || minRow < -50) {//error case for if input are less than -50 or greater than 50
    errorMes.innerHTML = "";
    errorElement.innerText = "The Range of the table is -50 - 50";
    errorMes.appendChild(errorElement);
    return;
  }else if(maxCol % 1 || minCol %1 || maxRow%1 || minRow%1){ //error case for if the inputs are decimals
    errorMes.innerHTML = "";
    errorElement.innerText = "No decimals can be used";
    errorMes.appendChild(errorElement);
    return;
  }else { //if no error print out creating table
    errorMes.innerHTML = "";
    errorElement.innerText =
      "Creating Table, All empty boxes are replaced with 0";
    errorMes.appendChild(errorElement);
  }

  tabledata.innerHTML = ""; //resets table every time you submit
  for (let i = minRow - 1; i <= maxRow; i++) { //for loop for row
    const row = document.createElement("tr");
    for (let j = minCol - 1; j <= maxCol; j++) { //for loop for col
      if (i === minRow - 1 && j === minCol - 1) {
        const colH = document.createElement("th"); //makes the colH headers
        colH.innerText = "";
        row.appendChild(colH); //first value is empty
      } else if (i === minRow - 1) {
        const colH = document.createElement("th");
        colH.innerText = j;
        row.appendChild(colH); //append the row to the table
      } else if (j === minCol - 1) {
        const colH = document.createElement("th");
        colH.innerText = i;
        row.appendChild(colH);//append the row to the table
      } else {
        const col = document.createElement("td");
        col.innerText = i * j;
        row.appendChild(col);//append the row to the table
      }
    }
    table.appendChild(row); //append the row to the table
  }
  tabledata.appendChild(table); //append the table to the html id table
});
