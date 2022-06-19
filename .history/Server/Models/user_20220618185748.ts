// import Mongoose
import mongoose, {PassportLocalSchema} from 'mongoose';

// alias for mongoose.Schema
const Schema = mongoose.Schema;

// import passport-local-mongoose
import passportLocalMongoose from 'passport-local-mongoose';

// create a user schema
const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: {
        type: String,
        required: true
    },
    Created:
    {
        type: Date,
        default: Date.now()
    },
    Updated:
    {
        type: Date,
        default: Date.now()
    }
},
{
    collection: "users"
});

declare global
{
    export type userDocument = mongoose.Document &
    {
        username : String,
        EmailAddress: String,
        DisplayName: String
    }
}

// plugin the passport local mongoose module
UserSchema.plugin(passportLocalMongoose);

// create a model using the schema
const Model = mongoose.model("User", UserSchema as PassportLocalSchema);

// export the model to make the file a module
export default Model;