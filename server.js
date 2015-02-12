var fs = require('fs')
, path = require('path')
, express = require('express')
, bodyParser = require('body-parser')
, app = express();

app.set('port', process.env.PORT || 3000);

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/venezuela.json', function(req, res) {
  fs.readFile('venezuela.json', function(err, data) {
    res.setHeader('Content-Type', 'application/json');
    res.send(data);
  });
});

app.listen(app.set('port'), function() {
	console.log("Server running on http://localhost:" + app.set('port') );
});