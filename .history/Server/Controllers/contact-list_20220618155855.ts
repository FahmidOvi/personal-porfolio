import express from 'express';
import { CallbackError } from 'mongoose';
import Contact from '../Models/contact';
import {UserDisplayName} from '../Util';


export function DisplayContactList(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    // fetch contacts from db
    Contact.find(function(err, contactsCollection)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        }
        res.render('index', {title: 'Contact List', page: 'contact-list', contacts: contactsCollection, displayName: UserDisplayName(req)});
    });
};

export function DisplayAddPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    res.render('index', {title: 'Add', page: 'edit', contact: '', displayName: UserDisplayName(req)});
}

export function DisplayEditPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    let id = req.params.id;

    // fetch contact by id
    Contact.findById(id, {}, {}, function(err, contactToEdit)
    {
        if (err) 
        {
            console.error(err);
            res.end(err);
        }

        // show the edit page with the data
        res.render('index', {title: 'Edit', page: 'edit', contact: contactToEdit, displayName: UserDisplayName(req)});
    });
}

export function ProcessAddPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    // instantiate a new contact to Add
    let newContact = new Contact
    ({
        "FirstName" : req.body.firstName,
        "LastName" : req.body.lastName,
        "ContactNumber" : req.body.contactNumber,
        "EmailAddress" : req.body.emailAddress
    });

    // insert the new contact object into the database (contacts collection)
    Contact.create(newContact, function(err : CallbackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        };

        res.redirect('/contact-list');
    });
}

export function ProcessEditPage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    let id = req.params.id;
    
    // instantiate a new contact to Edit
    let updatedContact = new Contact
    ({
        "_id" : id,
        "FirstName" : req.body.firstName,
        "LastName" : req.body.lastName,
        "ContactNumber" : req.body.contactNumber,
        "EmailAddress" : req.body.emailAddress
    });

    // update the contact object in the database
    Contact.updateOne({"_id" : id}, updatedContact, function(err : CallbackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        };

        // edit successful -> redirect back to contact-list page
        res.redirect('/contact-list');
    });
}

export function ProcessDeletePage(req : express.Request, res : express.Response, next : express.NextFunction) : void
{
    let id = req.params.id;

    // remove contact by id
    Contact.remove({"_id" : id}, function(err : CallbackError)
    {
        if (err)
        {
            console.error(err);
            res.end(err);
        };

        //delete was successful
        res.redirect('/contact-list');
    });
}