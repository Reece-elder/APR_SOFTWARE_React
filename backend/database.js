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

// const env = process.env.NODE_ENV;
const env = "test";
console.log(env);
if(env == 'test'){
    console.log("Test env");
    process.env.MONGODB_URI = 'mongodb://localhost:27017/testPizzeria'
  } else {
    console.log("Prod env");
    process.env.MONGODB_URI = 'mongodb://localhost:27017/pizzeria'
  };

// connect to MongoDB with - mongoose.connect(uri, options)
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, 
function (error) {
    if (error) {
        console.log("error");
    } else {
        console.log("no error :)");
    }
});


const Pizza = model('Pizza', pizzaSchema);

// Exporting the Pizza object out of the module
module.exports = {
    "Pizza": Pizza,
};