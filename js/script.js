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
  if (isNaN(minCol) || isNaN(maxCol) || isNaN(minRow) || isNaN(maxRow)) {
    const errorElement = document.createElement("p");
    errorElement.innerText = "Incorrect Values";
    const errorMes = document.getElementById("errMes");
    errorMes.appendChild(errorElement);
    return;
  }
  const table = document.createElement("table");
  const tabledata = document.getElementById("table");
  tabledata.innerHTML = "";
  for (let i = minRow - 1; i <= maxRow; i++) {
    const row = document.createElement("tr");
    for (let j = minCol - 1; j <= maxCol; j++) {
      const col = document.createElement("td");
      if (i === minRow - 1 && j === minCol - 1) col.innerText = "";
      else if (i === minRow - 1) {
        col.innerText = j;
      } else if (j == minCol - 1) {
        col.innerText = i;
      } else {
        col.innerText = i * j;
      }
      row.appendChild(col);
    }
    table.appendChild(row);
  }
  tabledata.appendChild(table);
});
