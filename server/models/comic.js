const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const comicSchema = new Schema({
    title: String,
    year: Number,
    number: Number,
    condition: String,
    notes: String,
    image: String
});

module.exports = mongoose.model("Comic", comicSchema);
