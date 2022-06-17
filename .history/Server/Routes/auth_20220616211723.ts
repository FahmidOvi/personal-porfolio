import express from 'express';
const router = express.Router();

import {DisplayLoginPage , DisplayAboutPage, DisplayContactPage, DisplayServicesPage, DisplayProjectsPage} from "../Controllers/auth";

/* GET home page. */
router.get('/', DisplayLoginPage);

/* GET home page. */
router.get('/home', DisplayLoginPage);

/* GET about page. */
router.get('/about', DisplayAboutPage);

/* GET projects page. */
router.get('/projects', DisplayProjectsPage);

/* GET services page. */
router.get('/services', DisplayServicesPage);

/* GET contact page. */
router.get('/contact', DisplayContactPage);

export default router;