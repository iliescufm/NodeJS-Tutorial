var express = require('express');
var app = express();

app.get('/', function (req, res) {
	console.log(req);
	res.send('Hello World');

})

app.get('/login', function (req, res) {
	res.sendFile('/home/mihai/nodejs/tutorial/login.html');
})

app.get('/auth', function (req, res) {
	
	res.send('Welcome');
})


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
