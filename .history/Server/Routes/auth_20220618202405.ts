import express from 'express';
const router = express.Router();
import bodyParser from 'body-parser';
import {check, validationResult} from 'express-validator';

const urlencodedParser = bodyParser.urlencoded({extended: false});

// import the controller module
import {DisplayLoginPage , DisplayRegisterPage, ProcessLogoutPage, ProcessRegisterPage, ProcessLoginPage} from "../Controllers/auth";

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);

/* Process login page. */
router.post('/login', ProcessLoginPage);

/* Process register page. */
router.post('/register', urlencodedParser, [
    check('firstName', 'Name is short!')
    .exists()
    .isLength({min:3}),
    check('emailAddress', 'Enter a valid email address.')
    .exists()
    .isEmail()
], (req: express.Request,res: express.Response, next : express.NextFunction)=> 
{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        alert("Wrong");
        return res.status(422).jsonp(errors.array());
    }
    next();
}, ProcessRegisterPage);

/* Process logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;