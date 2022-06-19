import express from 'express';
import validator from 'express-validator';
const registerSchema = [
    validator.body('emailAddress').isEmail()
];

export default registerSchema;