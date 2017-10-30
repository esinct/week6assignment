//Call ```$.val()``` on inputs to get the string value of your user's input
//Store user input in ```var city```
//Use $.on(submit) or ```$.click``` to figure out when the user clicks the "submit" button
//Create ```if / else if / else``` conditionals to control the flow of your application
//Write at least six different lines of pseudocode and display them inline as JavaScript comments
//Prevent a form submission using the ```event.preventDefault()``` function
//Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
//Get the first element from an attribute name using ```$.attr()```
//Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
//If a user submits:
	//  - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
	//  - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
	//  - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
	//  - "Austin" or "ATX" make the background of the page austin.jpg
	//  - "Sydney" or "SYD" make the background of the page sydney.jpg
//- Remove extra spaces or new lines that users or the browser might add before or after their input 
//- Reset the user input field after it is submitted

$(document).ready(function() {
  //prevent the submit button from refreshing the page
  $("#submit-btn").click(function(){
    event.preventDefault();
    var city = $("#city-type").val();
    $("#city-type").val("");
    city = string.replace(/\s+/g,"").trim();
	
    if(city == "New York City" || city == "NYC" || city == "New York") {
      $("body").attr("class","nyc");
    }

    else if (city == "SF" || city == "Bay Area") {
      $("body").attr("class","sf");
    }
	
	else if (city == "Los Angeles" || city == "LA" || city == "LAX") {
      $("body").attr("class","la");
    }
	
	else if (city == "Austin" || city == "ATX") {
      $("body").attr("class","austin");
    }
	
	else if (city == "Sydney" || city == "SYD") {
      $("body").attr("class","sydney");
    }
  });
});