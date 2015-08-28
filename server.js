var express = require('express');
var server = express();

server.use(express.static('public'));
server.set('view engine', 'ejs');

server.get('/poll', function(req,res) {
	res.render('poll',{name:'daniel'});
});

server.listen(3000);

