import express from 'express';
import bodyParser from 'body-parser';
import {check, validationResult} from 'express-validator';
import { UserDisplayName } from '.';
export const registerValidateCheck = [
    check('firstName', 'Firstname cannot be blanked')
    .notEmpty(),
    check('emailAddress', 'Enter a valid email address.')
    .exists()
    .isEmail()
    .normalizeEmail(),
    check('password')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 chars long')
    .matches(/\d/)
    .withMessage('Password must contain a number')
]

export function validateRegister(req: express.Request,res: express.Response, next : express.NextFunction) 
{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        const err = errors.array();
        console.log(err);
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req), err});
    }
    next();
}