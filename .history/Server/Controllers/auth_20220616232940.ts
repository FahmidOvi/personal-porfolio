import express from 'express';
import user from '../Models/user';
import passport from 'passport';

// Display Functions
export function DisplayLoginPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: ''});
};

export function DisplayRegisterPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: ''});
}

// Processing Functions
export function ProcessLoginPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    passport.authenticate('local', function(err, user, info)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        if (!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        req.logIn(user, function(err){
            if (err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/movie-list');
        });
    })(req, res, next);
}

export function ProcessRegisterPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
}

export function ProcessLogoutPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
};