import express from 'express';
import validator from 'express-validator';

export function validateRegistration(req : express.Request, res : express.Response, next: express.NextFunction)
{
    const error = validator.validationResult(req);
    if (!error.isEmpty)
    {
        return res.redirect('/register');
    };
    next();
};