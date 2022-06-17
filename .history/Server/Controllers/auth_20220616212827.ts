import express from 'express';
import user from '../Models/user';
import passport from 'passport';

// Display Functions
export function DisplayLoginPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', {title: 'Login', page: 'login', message: req.flash('loginMessage'), displayName: ''});
};

export function DisplayRegisterPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', {title: 'Register', page: 'register', message: req.flash('registerMessage'), displayName: ''});
}

// Processing Functions
export function ProcessLoginPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
}

export function ProcessRegisterPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
}

export function ProcessLogoutPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
};