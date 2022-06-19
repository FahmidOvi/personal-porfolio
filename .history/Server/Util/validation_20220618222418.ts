import bodyParser from 'body-parser';
import {check, validationResult} from 'express-validator';
export const registerValidateCheck = [
    check('firstName', 'Firstname cannot be blanked')
    .exists(),
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