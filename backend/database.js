// Adding Mongoose as a variable
const mongoose = require('mongoose');
const {Schema, model} = mongoose;

// Schema of the pizza, allowing an object to be created
// Validators are used to limit the data that can be entered
const pizzaSchema = new Schema({
    customer: {
        type: String,
        required: true,
        minLength: 5
    },
    flavour: String,
    price: Number,
    type: String
}, {
    versionKey: false 
});

// Model/Object of the schema used in the router
const Pizza = model('Pizza', pizzaSchema);


// connect to MongoDB with - mongoose.connect(uri, options)
mongoose.connect('mongodb://localhost:27017/pizzeria', { useNewUrlParser: true }, 
function (error) {
    if (error) {
        console.log("error");
    } else {
        console.log("no error :)");
    }
});

// Exporting the Pizza object out of the module
module.exports = {"Pizza": Pizza};