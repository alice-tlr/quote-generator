<script>

$(document).ready(doReady());//when DOM is fully loaded jQuery will call function doReady

function doReady() {

  getQuote();//calling getQuote
  document.getElementById('clickMe').onclick = getQuote;
}

function getQuote() {

  $.ajax({
    url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&_jsonp=processQuote",
    dataType: "jsonp"
  });
}


function processQuote(response){

  var quote = response[0].content;
  var author = response[0].title;

  document.getElementById("quote").innerHTML = quote;

  if (author !== undefined && author !== null && author !== '3w') {

    $('#author').html(' - ' + author);
   }
   else {
      document.getElementById("author").innerHTML = "— Unknown";
   }
}

</script>
