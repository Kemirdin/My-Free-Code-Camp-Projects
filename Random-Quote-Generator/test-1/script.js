$(document).ready(function(){
getQuote();
  
function getQuote(){
  var quotes = ["Quote 1", "Quote 2", "Quote 3"];
  var authors = ["-Author 1", "-Author 2", "-Author 3"];
  randomNumber = Math.floor((Math.random() * quotes.length));
  quoteN = quotes[randomNumber];
  authorN = authors[randomNumber];
  $(".quote").text(quoteN);
  $(".author").text(authorN);
  }

$("#newQuote").on("click", function(){
  getQuote();
});
$("#tweet").on("click", function(){
  window.open("https://www.twitter.com/intent/tweet?text="+quoteN + " " + authorN);
});
});
