/* 
Filename: Authentication Routes
Name: Fahmid Ovi
Student ID: 301216822
Date: 6/3/2022
*/

import express from 'express';
const router = express.Router();
import bodyParser from 'body-parser';
import {check, validationResult} from 'express-validator';
import {registerValidateCheck, validateRegister} from '../Util/validation';

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
router.post('/register',  registerValidateCheck, validateRegister, ProcessRegisterPage);

/* Process logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;