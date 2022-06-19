import express from 'express';
import {body} from 'express-validator';
const registerSchema = [
    body('emailAddress').isEmail()
];

export default registerSchema;