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

// Enabling the search by clicking on the button Enter rather than the Search Button
// document.getElementById("id_of_textbox")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         document.getElementById("id_of_button").click();
//     }
// });

document.addEventListener('keypress', function (e) {
  var key = e.which || e.keyCode;
  if (key === 13) { // 13 is enter
    handleSearchButtonClick(); // This is where we are calling the handleSearchButtonClick() function...
  }
});
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


// function pagination(){
//   document.ready(function() { 
//     $("table") 
//     .tablesorter({widthFixed: true, widgets: ['zebra']}) 
//     .tablesorterPager({container: $("#pager")}); 
// }); 
// }

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  
  var filterDatetime = $datetimeInput.value.trim().toLowerCase();
  var filterCity = $cityInput.value.trim().toLowerCase();
  var filterState = $stateInput.value.trim().toLowerCase();
  var filterCountry = $countryInput.value.trim().toLowerCase();
  var filterShape = $shapeInput.value.trim().toLowerCase();
  
  // Set filteredDataset to an array of all data set that matches the filter
  filteredDataset = dataSet.filter(function(dtaset) {
    var dataDatetime = dtaset.datetime.toLowerCase();
    var dataCity = dtaset.city.toLowerCase();
    var dataState = dtaset.state.toLowerCase();
    var dataCountry = dtaset.country.toLowerCase(); 
    var dataShape = dtaset.shape.toLowerCase();
        
    // If true, add the dataset to the filtereddatetime, otherwise don't add it to filteredDataset
    //   return (dataDatetime === filterDatetime && dataCity === filterCity );
    // if (dataDatetime !=''  && dataCity != '' && dataState != '' && dataCountry != '' && dataShape != '') {
    if (filterDatetime !=''  && filterCity != '' && filterState != '' && filterCountry != '' && filterShape != '') {
      
      return (dataDatetime === filterDatetime && dataCity === filterCity && dataState === filterState && dataCountry === filterCountry && dataShape === filterShape);
      
    } else if (filterDatetime != '' && filterCity != '' && filterState != '' && filterCountry != '') {
     // console.log('*******************************')
      //console.log('in else if statmen')
      //console.log('data row: ', dtaset)
      //console.log('date: ', filterDatetime)
      //console.log('city: ', filterCity)
      //console.log('state: ', filterState)
      //console.log('country: ', filterCountry)
      //console.log('********************************')
      
      return (dataDatetime === filterDatetime && dataCity === filterCity && dataState === filterState && dataCountry === filterCountry);
    } else if (filterDatetime != '' && filterCity != '' && filterState != '') {
        return (dataDatetime === filterDatetime && dataCity === filterCity && dataState === filterState && dataCountry);
    } else if (filterDatetime != '' && filterCity != '' ) {
        return (dataDatetime === filterDatetime && dataCity === filterCity);
    } else if (filterDatetime != '') {
        return (dataDatetime === filterDatetime);
    } else if (filterCity != '') {
      return (dataCity === filterCity);
    } else if (filterState != '') {
      return (dataState === filterState);
    } else if (filterCountry != '') {
      return (dataCountry === filterCountry);
    } else if (filterShape != '') {
      return (dataShape === filterShape);
    } else {
      return(filteredDataset)
    }

   });

   // Render all the data if the fields are empty
   renderTable();
   //pagination();

} 

// Render the table for the first time on page load
renderTable();
console.log('Pagination ')
$(document).ready(function() { 
  $("table") 
  .tablesorter({widthFixed: true, widgets: ['zebra']}) 
  .tablesorterPager({container: $("#pager")}); 
}); 