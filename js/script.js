///////////////////////////////////////////////////////////////////////////////////////////
//Variable to create html string output
var html_quote;

///////////////////////////////////////////////////////////////////////////////////////////
// Function to get a random number and return the quote from quotes.js in that array position
function getRandomQuote(){
    var number= Math.floor(Math.random() * quotes.length);
    return quotes[number];
}

///////////////////////////////////////////////////////////////////////////////////////////
// Function to create the html output and send to index
function printQuote(){
    var output = document.getElementById('quote-box');
    var selected_quote= getRandomQuote();
    html_quote='<p class="quote">' + selected_quote.quote + '</p>';
    html_quote+='<p class="source">'+ selected_quote.source;

//Add citation and year if defined
    if (selected_quote.citation !== undefined){
      html_quote+= '<span class="citation">' + selected_quote.citation + '</span>';

    }
    if (selected_quote.year !== undefined){
      html_quote+= '<span class="year">' + selected_quote.year + '</span>';
    }
    
    html_quote+= '</p>';
    output.innerHTML = html_quote;

    random_color();
}

///////////////////////////////////////////////////////////////////////////////////////////
//Listens to button click to call printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

///////////////////////////////////////////////////////////////////////////////////////////
//Call printQuote function after time to change quote automatically
var time = setInterval(function(){printQuote()},7000);

///////////////////////////////////////////////////////////////////////////////////////////
//Function to create a random color and set it to background and button
function random_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var random_color = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background=random_color;
  document.getElementById('loadQuote').style.background= random_color;
}