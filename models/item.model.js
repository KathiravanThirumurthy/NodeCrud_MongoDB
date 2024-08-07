// server/models/item.model.js

// Schema: Defines the structure of the documents within a collection (like a blueprint).
// Model: Provides an interface to interact with the database (like a toolkit).

//First, you need to import Mongoose into your file 
const mongoose = require('mongoose');

// Define a Schema
const Schema = mongoose.Schema;

//Here, itemSchema is a schema that specifies that each item has a name (String), a description (String)
const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

/*
const Book = mongoose.model('Book', itemSchema);
module.exports = Book;  */

// this where the model is created
/*'Item': This is the name of the model. It is a singular name, and Mongoose will automatically look for the plural form (e.g., 'items')
 when interacting with the MongoDB collection.*/
 /* itemSchema: This is the schema we defined earlier, which tells Mongoose what the structure of the documents in
  the 'items' collection should look like.
 */
const Item = mongoose.model('Item', itemSchema);
module.exports = Item;  


