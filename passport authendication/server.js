const express = require('express'); // server software
const bodyParser = require('body-parser'); // parser middleware
const session = require('express-session');  // session middleware
const passport = require('passport');  // authentication
const connectEnsureLogin = require('connect-ensure-login');// authorization

const User = require('./user'); // User Model

const app = express();

// Configure Sessions Middleware
app.use(session({
  secret: 'r8q,+&1LM3)CD*zAGpx1xm{NeQhc;#',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));

// Configure More Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

// Passport Local Strategy
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/"+'/lfront.html');
  });
  
  // Route to Login Page
  app.get('/login', (req, res) => {
    res.sendFile(__dirname +"/" +'/login.html');
  });
  
  // Route to Dashboard
  app.get('/dashboard', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.send(`Hello ${req.body.username}. Your session ID is ${req.sessionID} 
    and your session expires in ${req.session.cookie.maxAge} 
    milliseconds.<br><br>
    <a href="/logout">Log Out</a><br><br><a href="/secret">Members Only</a>`);
  });
  
  // Route to Secret Page
  app.get('/secret', connectEnsureLogin.ensureLoggedIn(), (req, res) => {
    res.sendFile(__dirname + "/"+'/server.html');
  });
  
  // Route to Log out
  app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/login');
  });
  
  // Post Route: /login
  app.post('/login', passport.authenticate('local', { failureRedirect: '/' }),  function(req, res) {
      console.log(req.query)
      res.redirect('/dashboard');
  });
  
  
  // assign port
  const port = 3000;
  app.listen(port, () => console.log(`This app is listening on port ${port}`));