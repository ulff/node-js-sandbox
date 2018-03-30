const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((request, response, next) => {
  var now = new Date().toString();
  var logMessage = `${now}: ${request.method} ${request.url}`;
  console.log(logMessage);
  fs.appendFile('server.log', logMessage + '\n', (err) => {
    if (err) {
      console.log(err);
    }
  });
  next();
});

// app.use((request, response, next) => {
//   response.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('screamIt', text => text.toUpperCase());

app.get('/', (request, response) => {
  response.render('home.hbs', {
    pageTitle: 'Home page',
    welcomeMessage: 'Welcome here ble ble',
  })
});

app.get('/about', (request, response) => {
  response.render('about.hbs', {
    pageTitle: 'About',
  });
});

app.get('/bad', (request, response) => {
  response.send({errorMessage: 'Some error'})
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
