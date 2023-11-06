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
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  var minCol = Number(document.getElementById("minCol").value);
  var maxCol = Number(document.getElementById("maxCol").value);
  var minRow = Number(document.getElementById("minRow").value);
  var maxRow = Number(document.getElementById("maxRow").value);
  console.log(minCol);
  console.log(maxCol);
  console.log(minRow);
  console.log(maxRow);
  const errorElement = document.createElement("p");
  const errorMes = document.getElementById("errMes");
  const table = document.createElement("table");
  const tabledata = document.getElementById("table");
  if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
    errorMes.innerHTML = "";
    errorElement.innerText = "Incorrect Values";
    errorMes.appendChild(errorElement);
    return;
  } else if (minRow > maxRow && minCol > maxCol) {
    errorMes.innerHTML = "";
    errorElement.innerText =
      "Minimum Col and Minimum Row can not be bigger than Maximum Col and Maximum Row";
    errorMes.appendChild(errorElement);
    return;
  } else if (minCol > maxCol) {
    errorMes.innerHTML = "";
    errorElement.innerText = "Minimum Col can not be bigger than Maximum Col";
    errorMes.appendChild(errorElement);
    return;
  } else if (minRow > maxRow) {
    errorMes.innerHTML = "";
    errorElement.innerText = "Minimum Row can not be bigger than Maximum Row";
    errorMes.appendChild(errorElement);
    return;
  } else if (maxCol > 50 || minCol < -50 || maxRow > 50 || minRow < -50) {
    errorMes.innerHTML = "";
    errorElement.innerText = "The Range of the table is -50 - 50";
    errorMes.appendChild(errorElement);
    return;
  }else if(maxCol % 1 || minCol %1 || maxRow%1 || minRow%1){
    errorMes.innerHTML = "";
    errorElement.innerText = "No decimals can be used";
    errorMes.appendChild(errorElement);
    return;
  }else {
    errorMes.innerHTML = "";
    errorElement.innerText =
      "Creating Table, All empty boxes are replaced with 0";
    errorMes.appendChild(errorElement);
  }

  tabledata.innerHTML = "";
  for (let i = minRow - 1; i <= maxRow; i++) {
    const row = document.createElement("tr");
    for (let j = minCol - 1; j <= maxCol; j++) {
      if (i === minRow - 1 && j === minCol - 1) {
        const colH = document.createElement("th");
        colH.innerText = "";
        row.appendChild(colH);
      } else if (i === minRow - 1) {
        const colH = document.createElement("th");
        colH.innerText = j;
        row.appendChild(colH);
      } else if (j == minCol - 1) {
        const colH = document.createElement("th");
        colH.innerText = i;
        row.appendChild(colH);
      } else {
        const col = document.createElement("td");
        col.innerText = i * j;
        row.appendChild(col);
      }
    }
    table.appendChild(row);
  }
  tabledata.appendChild(table);
});
