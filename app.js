var express  = require('express');
var path     = require('path');
var app      = express();
var passport = require('passport');

var mainRoutes  = require('./routes')(express.Router());
var adminRoutes = require('./routes/admin')(express.Router());

app.use('/', mainRoutes);
app.use('/admin', adminRoutes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));

app.listen(3000);
