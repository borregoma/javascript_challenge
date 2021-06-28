// from data.js
var tableData = data;

// YOUR CODE HERE!

// Select the filter button
var filterButton = d3.select("filter-btn");

//Select form 
var form = d3.select(".form-group");

//CReate event handlers
filterButton.on("click", runEnter);
form.on("submit", runEnter);

//Complete the event handler fuction for the form
function runEnter() {

    //Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select("#date");

    //Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    var filteredTable = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredTable);
    




}