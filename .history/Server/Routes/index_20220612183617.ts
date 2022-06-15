import express from 'express';
const router = express.Router();

import {DisplayHomePage , DisplayAboutPage, DisplayContactPage, DisplayServicesPage, DisplayProjectsPage} from "../Controllers/index";

/* GET home page. */
router.get('/', function(req : express.Request, res : express.Response, next : express.NextFunction) {
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET home page. */
router.get('/home', function(req : express.Request, res : express.Response, next : express.NextFunction) {
  res.render('index', { title: 'Home', page: 'home' });
});

/* GET about page. */
router.get('/about', function(req : express.Request, res : express.Response, next : express.NextFunction) {
  res.render('index', { title: 'About', page: 'about' });
});

/* GET projects page. */
router.get('/projects', function(req : express.Request, res : express.Response, next : express.NextFunction) {
  res.render('index', { title: 'Projects' , page: 'projects' });
});

/* GET services page. */
router.get('/services', function(req : express.Request, res : express.Response, next : express.NextFunction) {
  res.render('index', { title: 'Services', page: 'services' });
});

/* GET contact page. */
router.get('/contact', function(req : express.Request, res : express.Response, next : express.NextFunction) {
  res.render('index', { title: 'Contact', page: 'contact' });
});

export default router;