import express from 'express';
import bodyParser from 'body-parser';
import {check, validationResult} from 'express-validator';
import { UserDisplayName } from '.';
export const registerValidateCheck = [
    check('firstName', 'Firstname cannot be blanked')
    .notEmpty(),
    check('emailAddress', 'Enter a valid email address')
    .exists()
    .notEmpty()
    .withMessage("Email cannot be blanked")
    .isEmail()
    .normalizeEmail(),
    check('password', 'Password must be 5 chars long and must contain a number')
    .isLength({ min: 5 })
    .withMessage('Password must be at least 5 chars long')
    .matches(/\d/)
    .withMessage('Password must contain a number')
    .custom((value, { req }) => {
        if (value !== req.body.passwordConfirmation) {
          throw new Error('Password confirmation is incorrect');
        }
      })
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