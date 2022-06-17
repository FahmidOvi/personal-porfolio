import express from 'express';
const router = express.Router();

import {DisplayLoginPage , DisplayRegisterPage, ProcessLogoutPage, ProcessRegisterPage, ProcessLoginPage} from "../Controllers/auth";

/* GET login page. */
router.get('/login', DisplayLoginPage);

/* GET register page. */
router.get('/register', DisplayRegisterPage);

/* Process login page. */
router.post('/login', ProcessLoginPage);

/* Process register page. */
router.post('/register', ProcessRegisterPage);

/* Process logout page. */
router.get('/logout', ProcessLogoutPage);

export default router;