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
    collection: "Mov"
});

const Model = mongoose.model("Movies", MovieSchema);
export default Model;