import express from 'express';

export function DisplayHomePage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'Home', page: 'home' , displayName: ''});
};

export function DisplayAboutPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'About', page: 'about', displayName: '' });
}

export function DisplayProjectsPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'Projects' , page: 'projects', displayName: '' }); 
}

export function DisplayServicesPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'Services', page: 'services', displayName: '' });
}

export function DisplayContactPage(req : express.Request, res : express.Response, next : express.NextFunction) 
{
    res.render('index', { title: 'Contact', page: 'contact', displayName: '' });
};