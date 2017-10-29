var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "index.html" );
})

function fmtMessage(rq, rs) {
   // Prepare output in JSON format

   response = {
      first_name:rq.body.first_name,
      last_name:rq.body.last_name
   };
   console.log(response);
	var reJSON = JSON.stringify(response);
   rs.end(reJSON);
}

app.post('/process_post', urlencodedParser, fmtMessage)


function stLog () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

}

var server = app.listen(8081, stLog)
