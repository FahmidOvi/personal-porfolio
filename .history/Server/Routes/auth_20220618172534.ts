import express from 'express';
const router = express.Router();

// import the controller module
import {DisplayLoginPage , DisplayRegisterPage, ProcessLogoutPage, ProcessRegisterPage, ProcessLoginPage} from "../Controllers/auth";

import {registerSchema} from '../Util/validateRegistration';

/* Display login page. */
router.get('/login', DisplayLoginPage);

/* Display register page. */
router.get('/register', DisplayRegisterPage);

/* Process login page. */
router.post('/login', ProcessLoginPage);

/* Process register page. */
router.post('/register', registerSchema, ProcessRegisterPage);

/* Process logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;