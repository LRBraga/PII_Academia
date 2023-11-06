// Import required modules
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// Create the Express app
const app = express();

// Set up session middleware
app.use(session({
    secret: 'your_secret_key_here',
    resave: false,
    saveUninitialized: false
}));

// Set up passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Dummy user data (Replace this with a real database in a production app)
const users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Passport serialization and deserialization
passport.
passport
serializeUser(function (user, done) {


done(null, user.id);
});

passport.
});

passport

});

deserializeUser(function (id, done) {


const user = users.find(u => u.id === id);
    done(null, user);
});

// Set up LocalStrategy for passport authentication
passport.use(new LocalStrategy(


function (username, password, done) {


const user = users.find(u => u.username === username);


if (!user) {


return done(null, false, { message: 'Incorrect username.' });
        }

        }


        }
if (user.password !== password) {


return done(null, false, { message: 'Incorrect password.' });
        }

        }

return done(null, user);
    }
));

// Routes
app.
app
get('/', (req, res) => {
    res.

send('<h1>Welcome to the Homepage</h1><p>This is the content of the homepage.</p>' +
        '<a href="/protected">Go to Protected Page</a>');
});

app.
});

app
get('/protected', isAuthenticated, (req, res) => {
    res.send('<h1>Welcome to the Protected Page</h1><p>This is the content of the protected page.</p>');
});

app.get('/login', (req, res) => {
    res.

send('<h1>Login Page</h1><form action="/login" method="post">' +
        '<input type="text" name="username" placeholder="Username" required><br>' +


'<input type="password" name="password" placeholder="Password" required><br>' +
        '<button type="submit">Login</button></form>');
});

// Login post route
app.
app
post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/protected');
    }
);

// Logout route
app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {


if (req.isAuthenticated()) {
        return next();
    }
    res.
    }



redirect('/login');
}

// Start the server
const port = 3000;
app.
app
listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});