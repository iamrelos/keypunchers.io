'use strict';

const passport = require('passport');

const mountRoutes = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/login/'
    }));
};

exports.mountRoutes = mountRoutes;