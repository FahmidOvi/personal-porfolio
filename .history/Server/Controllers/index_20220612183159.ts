import express from 'express';

export function DisplayHomePage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'Services', page: 'services' });
};

export function DisplayAboutPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'About', page: 'about' });
}

export function DisplayContactPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'Contact', page: 'contact' });
};