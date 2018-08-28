var tableData = data;

function addRow(my_dict){
    var row1 = d3.select("#ufo-table").append("tr")
    row1.append("th").text(my_dict.datetime)
    row1.append("th").text(my_dict.city)
    row1.append("th").text(my_dict.state)
    row1.append("th").text(my_dict.country)
    row1.append("th").text(my_dict.shape)
    row1.append("th").text(my_dict.durationMinutes)
    row1.append("th").text(my_dict.comments)
    return
}

tableData.forEach(x => {
    addRow(x);
});

function filterTable(filter_value) {
    let rows = document.getElementById("ufo-table").rows
    
    for (var i = 0; i < rows.length; i++) {
        var firstCol = rows[i].cells[0].textContent;
        var secondCol = rows[i].cells[1].textContent;
		// Extend it here
        if (firstCol.indexOf(filter_value) > -1 || secondCol.indexOf(filter_value) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }      
    }
}

d3.select("#filter-btn").on('click', function() {
    d3.event.preventDefault();
    var input_val = d3.select('#datetime').node().value;
    console.log(input_val);
    filterTable(input_val);

})
