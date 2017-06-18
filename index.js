var express = require('express');
var app = express();
var url = require('url');
var postal = require('./public/js/postal.js');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/*app.get('/', function(request, response) {
  response.render('pages/index');
});*/
app.get('/', function(request, response) {
  response.render('pages/form');
});

//adding getRate route
app.get('/calc', function(request, response) {
  calcPostage(request,response);
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

function calcPostage(request, response){
  var requestURL = url.parse(request.url, true);

  var postType = String(requestURL.query.mailtype);
  var postWeight = Number(requestURL.query.weight);

  computeOperation(response, postType, postWeight);
}

function computeOperation(response, postType, postWeight) {
  var amt;

  switch(postType) {
    case "Letters (Stamped)":
      amt = postal.calcPostageLettersStamped(postWeight);
      break;
    case 2:
      amt = postal.calcPostageLettersMetered(postWeight);
      break;
    case 3:
      amt = postal.calcPostageLargeEnvelopes(postWeight);
      break;
    case 4:
      amt = postal.calPostageParcel(postWeight);
      break;
  }

  // Set up a JSON object of the values we want to pass along to the EJS result page
	var params = {MailType: postType, Weight: postWeight, Result: amt};

	// Render the response, using the EJS page "result.ejs" in the pages directory
	// Makes sure to pass it the parameters we need.

	response.render('pages/getRate', params);
  
}


