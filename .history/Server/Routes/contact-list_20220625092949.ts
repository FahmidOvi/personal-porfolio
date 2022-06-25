/* 
Filename: Contact-list routes
Name: Fahmid Ovi
Student ID: 301216822
Date: 6/3/2022
*/

import express from 'express';
const router = express.Router();

import {DisplayAddPage, DisplayEditPage, DisplayContactList, ProcessAddPage, ProcessDeletePage, ProcessEditPage} from '../Controllers/contact-list';
import { AuthGuard } from '../Util/index';
 
/* GET contact-list page */
router.get('/contact-list', AuthGuard, DisplayContactList);

/* Display Add page */
router.get('/add', AuthGuard, DisplayAddPage);

/* Display Edit page */
router.get('/edit/:id', AuthGuard, DisplayEditPage);

/* Process Add page */
router.post('/add', AuthGuard, ProcessAddPage);

/* Process Edit page */
router.post('/edit/:id', AuthGuard, ProcessEditPage);

/* Process Delete page */
router.get('/delete/:id', AuthGuard, ProcessDeletePage);

export default router;