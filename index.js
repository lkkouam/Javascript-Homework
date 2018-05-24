// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $datetimeInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set filteredDataset to dataSet initially
var filteredDataset = dataSet;


// renderTable renders the filteredDataset to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredDataset.length; i++) {
    // Get get the current dataSet object and its fields
    var dtaset = filteredDataset[i];
    var fields = Object.keys(dtaset);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = dtaset[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDatetime = $datetimeInput.value.trim();
  var filterCity = $cityInput.value.trim();
  var filterState = $stateInput.value.trim();
  var filterCountry = $countryInput.value.trim();
  var filterShape = $shapeInput.value.trim();
  
  // Set filteredDataset to an array of all data set whose "datetime" matches the filter
   filteredDataset = dataSet.filter(function(dtaset) {
     var dataDatetime = dtaset.datetime;
     var dataCity = dtaset.city;
     var dataState = dtaset.state;
     var dataCountry = dtaset.country;
     var dataShape = dtaset.shape;

  // If true, add the dataset to the filtereddatetime, otherwise don't add it to filteredDataset
  //   return (dataDatetime === filterDatetime && dataCity === filterCity );
  if (dataDatetime !=' '  && dataCity != ' ' && dataState != ' ' && dataCountry != ' ' && dataShape != ' '){
    return (dataDatetime === filterDatetime && dataCity === filterCity && dataState === filterState && dataCountry === filterCountry && dataShape === filterShape);
    }
    //else if (dataDatetime !=' '  && dataCity != ' ' && dataState != ' ' && dataCountry != ' ' && !dataShape) {
     // return (dataDatetime === filterDatetime && dataCity === filterCity && dataState === filterState && dataCountry === filterCountry);
    //}
   });
 
  
  renderTable();
}

// Render the table for the first time on page load
renderTable();
