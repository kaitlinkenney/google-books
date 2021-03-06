const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//creates the schema for how data will enter the database
const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: {},
  description: String,
  image: {},
  link: {}
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
