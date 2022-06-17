import express from 'express';
import User from '../Models/user';
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
    // instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        EmailAddress: req.body.EmailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function(err){
        if (err) 
        {
            if (err.name == "userExistsError"){
                console.error('ERROR: User already exists!');
                req.flash('registerMessage', 'Registration Error!');
            }
            else
            {
                console.error(err.name);
                req.flash('registerMessage', 'Server-Error');
            }
            res.redirect('/register');
        }
        
    })
}

export function ProcessLogoutPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
};