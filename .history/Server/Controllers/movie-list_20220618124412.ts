import express from 'express';
import { CallbackError } from 'mongoose';
import Movie from '../Models/movie';
import {UserDisplayName} from '../Util';


export function DisplayMovieList(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    Movie.find(function(err, moviesCollection)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        console.log(moviesCollection.sort());
        res.render('index', {title: 'Movie List', page: 'movie-list', movies: moviesCollection, displayName: UserDisplayName(req)});
    });
};

export function DisplayAddPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    res.render('index', {title: 'Add', page: 'edit', movie: '', displayName: UserDisplayName(req)});
}

export function DisplayEditPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    let id = req.params.id;

    Movie.findById(id, {}, {}, function(err, movieToEdit)
    {
        if (err) 
        {
            console.error(err);
            res.end(err);
        }

        // show the edit page with the data
        res.render('index', {title: 'Edit', page: 'edit', movie: movieToEdit, displayName: UserDisplayName(req)});
    });
}

export function ProcessAddPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    // instantiate a new movie to Add
    let newMovie = new Movie
    ({
        "Name" : req.body.movieName,
        "Director" : req.body.movieDirector,
        "Year" : req.body.movieYear,
        "Rating" : req.body.movieRating
    });

    // insert the new Movie object into the database (movies collection)
    Movie.create(newMovie, function(err : CallbackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        };

        res.redirect('/movie-list');
    });
}

export function ProcessEditPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    let id = req.params.id;
    
    // instantiate a new movie to Edit
    let updatedMovie = new Movie
    ({
        "_id" : id,
        "Name" : req.body.movieName,
        "Director" : req.body.movieDirector,
        "Year" : req.body.movieYear,
        "Rating" : req.body.movieRating
    });

    // update the Movie object in the database
    Movie.updateOne({"_id" : id}, updatedMovie, function(err : CallbackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        };

        // edit successful -> redirect back to movie-list page
        res.redirect('/movie-list');
    });
}

export function ProcessDeletePage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    let id = req.params.id;

    Movie.remove({"_id" : id}, function(err : CallbackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        };

        //delete was successful
        res.redirect('/movie-list');
    });
}