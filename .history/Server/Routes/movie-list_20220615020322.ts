import express from 'express';
const router = express.Router();
import {DisplayMovieList} from '../Controllers/movie-list';
 
/* GET movie-list page */
router.get('/movie-list', DisplayMovieList);

export default router;