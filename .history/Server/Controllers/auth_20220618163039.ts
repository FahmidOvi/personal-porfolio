import express from 'express';

// include user model for authentication functions
import User from '../Models/user';

// include passport functionality
import passport from 'passport';

// import UserDisplayName utility method 
import {UserDisplayName} from '../Util';

// Display Functions
export function DisplayLoginPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    if (!req.user)
    {
        return res.render('index', {title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
    }
    return res.redirect('/contact-list');
};

export function DisplayRegisterPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    if (!req.user)
    {
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req)});
    }
    return res.redirect('/contact-list');
}

// Processing Functions
export function ProcessLoginPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    passport.authenticate('local', function(err, user, info)
    {
        // listen to server errors
        if (err)
        {
            console.error(err);
            res.end(err);
        }

        // listen to login errors
        if (!user)
        {
            req.flash('loginMessage', 'Authentication Error!');
            return res.redirect('/login');
        }

        // no problem -> user logged in
        req.logIn(user, function(err){
            if (err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/contact-list');
        });
    })(req, res, next);
}

export function ProcessRegisterPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    // validate user inputs

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
        
        // all ok -> user has been registered
        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/contact-list');
        });
    });
}

export function ProcessLogoutPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    // logout user
    req.logOut(function(err)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        console.log('User Logged Out');
    });
    res.redirect('/login');
};