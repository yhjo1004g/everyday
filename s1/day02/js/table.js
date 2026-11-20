let tableHtml = "<table>";

for (let i = 1; i <= 3;i++) {
    tableHtml = tableHtml + "<tr>";
    for (let j = 1; j <= 3; j++) {
        tableHtml = tableHtml + "<td>" + i + "-" + j + "</td>";
    }
    tableHtml = tableHtml + "</tr>";
}

tableHtml = tableHtml + "</table>";
document.querySelector("#area").innerHTML = tableHtml;