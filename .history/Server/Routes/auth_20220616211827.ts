import express from 'express';
const router = express.Router();

import {DisplayLoginPage , DisplayRegisterPage, ProcessLogoutPage, ProcessRegisterPage, ProcessLoginPage} from "../Controllers/auth";

/* GET home page. */
router.get('/', DisplayLoginPage);

/* GET home page. */
router.get('/home', DisplayLoginPage);

/* GET about page. */
router.get('/about', DisplayRegisterPage);

/* GET projects page. */
router.get('/projects', ProcessLoginPage);

/* GET services page. */
router.get('/services', ProcessRegisterPage);

/* GET contact page. */
router.get('/contact', ProcessLogoutPage);

export default router;