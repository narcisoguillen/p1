var express = require('express');
var app     = express();

var mainRoutes  = require('./routes')(express.Router());
var adminRoutes = require('./routes/admin')(express.Router());

app.use('/', mainRoutes);
app.use('/admin', adminRoutes);

app.use(express.static(__dirname + '/public'));

app.listen(3000);
