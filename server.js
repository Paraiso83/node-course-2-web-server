(function () {
  /**
   * Imports
   */
  const express = require('express');
  const hbs = require('hbs');
  const fs = require('fs');
  /**
   * Initialization of express
   */
  let app = express();
  /**
   * Setup express view engine for HBS
   */
  hbs.registerPartials(__dirname + '/views/partials');
  app.set('view engine', 'hbs');
  /**
   * maintenance middlewear
   * 
   * The middlewear is executed in the order of declaration, so we need to declate this before the static so we don't go to static pages when on maintenance
   */
  app.use((req, res, next) => {
    res.render('maintenance.hbs');
  });
  /**
   * Define some midlewear "interceptors?"
   * Calling "next" to make sure express knows we are finished
   * 
   * app.use((request, response, next) => {});
   */
  app.use((req, res, next) => {
    let now = new Date().toString();
    let log = `${now}: ${req.method} - ${req.originalUrl}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => { err && console.log('Unable to append to server.log') });
    next();
  });
  /**
   * Define a static folder (definition of express midlewear)
   */
  app.use(express.static(__dirname + '/public'));
  /**
   * Define function for usage int the hbs templates
   */
  hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
  /**
   * Define a function that receives a parameter
   * E.G. {{screamIt welcomeMessage}}
   */
  hbs.registerHelper('screamIt', (text) => text.toUpperCase());
  /**
   * app.get => setup routes
   */
  app.get('/', (resquest, response) => {
    response.render('home.hbs', {
      pageTitle: 'Home Page',
      welcomeMessage: 'Some Welcome Message'
    });
  });
  app.get('/json', (resquest, response) => {
    response.send({ name: 'André', likes: 'games' });
  });
  /*app.get('/about', (resquest, response) => {
    response.send('<h1>About Page!</h1>');
  });*/
  app.get('/about', (resquest, response) => {
    response.render('about.hbs', {
      pageTitle: 'About Page'
    });
  });
  app.get('/bad', (resquest, response) => {
    response.send({ errorMessage: 'Unable to handle request.' });
  });
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
    console.log('http://127.0.0.1:3000');
  })
})();