const passport = require("passport");

module.exports = (app) => {

    // google login
    app.get('/auth/google', passport.authenticate('google', { 
        scope: [ 'email','profile' ] 
    }));

    app.get('/auth/google/user', passport.authenticate( 'google', {
        successRedirect: '/user',
        failureRedirect: '/'
    }));

    // facebook login
    app.get('/auth/facebook', passport.authenticate('facebook'));

    app.get('/auth/facebook/user', passport.authenticate('facebook', { failureRedirect: '/' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/user');
        }
    );

    app.get("/api/currentUser", (req, res) => {
        console.log('in /api/currentUser',req.user);
        res.send(req.user);
    });
      
    app.get("/api/logout", (req, res) => {
        req.logout();
        res.redirect('/');
    });
    
}