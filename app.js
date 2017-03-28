const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/static', express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

// connect all routes to our application
app.use('/', routes);

app.listen(3000, function() {
    console.log('App is running on port 3000');
});