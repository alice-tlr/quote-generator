<script>

$(document).ready(doReady());//when DOM is fully loaded jQuery will call function doReady

function doReady() {
  //debugger;
  getQuote();//calling getQuote
  document.getElementById('clickMe').onclick = getQuote;
  //$('#clickMe').click(getQuote);//use jquery to find the element with the id=clickMe - add a click event handler = getQuote
}

function getQuote() {
  //debugger;
  //Call the rest service at the url provided...
  // we've specified a callback parameter (&_jsonp=processQuote). This tells the method that, when it recieves the response from the service, call the method processQuote passing in the response as a parameter
  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=processQuote",
    dataType: "jsonp"
  });
}

//processQuote method. This method is called when the ajax request above finishes and a response is received. the response parameter is the data that the service provided (this service returns an array).
//The url we used when calling the service has a filter parameter which states how many elements we should receive (in this instance, 1). Therefore, the array should always have 1 element
function processQuote(response){
  //debugger;
  var quote = response[0].content; //declare a variable quote, set the value of quote to response[0] (first  / only item in array) .content (content property)
  var author = response[0].title;

  document.getElementById("quote").innerHTML = quote;
  //$('#quote').html(quote);//look at jquery help... setting the innerHTML of an element.
  if (author !== undefined && author !== null && author !== '3w') {
    //document.getElementById("author").innerHTML = "— " + author;
    $('#author').html(' - ' + author);//use jquery to find element with id = author. set the innerHtml of that element to the value of the author variable
   }
   else {
      document.getElementById("author").innerHTML = "— Unknown";
      //$('#author').html(' - ' + "Unknown Author");
   }
}

</script>
