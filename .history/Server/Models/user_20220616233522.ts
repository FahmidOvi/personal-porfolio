import mongoose, {PassportLocalSchema} from 'mongoose';
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';

const UserSchema = new Schema
({
    DisplayName: String,
    username: String,
    EmailAddress: String,
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

UserSchema.plugin(passportLocalMongoose);

const Model = mongoose.model("user", UserSchema as PassportLocalSchema);
export default Model;