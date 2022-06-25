/* 
Filename: Contact model
Name: Fahmid Ovi
Student ID: 301216822
*/

// import Mongoose
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// create contact schema
const ContactSchema = new Schema
({
    FirstName: String,
    LastName: String,
    ContactNumber: String,
    EmailAddress: String
},
{
    collection: "contacts"
});

// create a model using the schema
const Model = mongoose.model("Contacts", ContactSchema);

// export the model to make the file a module
export default Model;