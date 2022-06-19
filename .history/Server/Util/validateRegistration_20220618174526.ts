import express from 'express';
import {body, validationResult} from 'express-validator';
export const registerSchema = [
    body('emailAddress').isEmail()
];

export function validationRegister(req: express.Request,res: express.Response,next:express.NextFunction)
{
    const error = validationResult(req);
    if (!error.isEmpty)
    {
        console.error(error.array.name);
        req.flash('registerMessage', 'helo');
        return res.redirect('/register');
    };
    next();
};