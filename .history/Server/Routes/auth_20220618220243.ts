import express from 'express';
const router = express.Router();
import bodyParser from 'body-parser';
import {check, validationResult} from 'express-validator';

const urlencodedParser = bodyParser.urlencoded({extended: false});

// import the controller module
import {DisplayLoginPage , DisplayRegisterPage, ProcessLogoutPage, ProcessRegisterPage, ProcessLoginPage} from "../Controllers/auth";
import { UserDisplayName } from '../Util';

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);

/* Process login page. */
router.post('/login', ProcessLoginPage);

/* Process register page. */
router.post('/register',  [
    check('firstName', 'Name is short!')
    .exists()
    .isLength({min:3}),
    check('emailAddress', 'Enter a valid email address.')
    .exists()
    .isEmail()
    .normalizeEmail(),
    check('password')
    .custom((value, { req }) => {
        if (value !== req.body.confirmPassword) {
          throw new Error('Password confirmation is incorrect');
        }
      })
], (req: express.Request,res: express.Response, next : express.NextFunction)=> 
{
    const errors = validationResult(req);
    if (!errors.isEmpty())
    {
        const err = errors.array();
        console.log(err);
        return res.render('index', {title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req), err});
    }
    next();
}, ProcessRegisterPage);

/* Process logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;