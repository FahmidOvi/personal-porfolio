import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MovieSchema = new Schema
({
    Name: String,
    Year: String,
    Director: String,
    Rating: String
},
{
    collection: "movies"
});

const Model = mongoose.model("Moves", MovieSchema);
export default Model;