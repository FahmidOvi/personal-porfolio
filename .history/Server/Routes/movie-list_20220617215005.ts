import express from 'express';
const router = express.Router();

import {DisplayMovieList} from '../Controllers/movie-list';
import { AuthGuard } from '../Util/index';
 
/* GET movie-list page */
router.get('/movie-list', AuthGuard, DisplayMovieList);

/* Display Add page */

/* Display Edit page */

/* Process Add page */

/* Process Edit page */

/* Process Delete page */

export default router;