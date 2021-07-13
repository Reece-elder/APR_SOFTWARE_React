const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// App instantiation
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes installed and used
const routes = require('./routes/pizzaRoutes');

app.use(routes);

// Hello Path for testing
app.use("/hello", (req,res,next) => {
    res.send("hi");
})

// Custom middleware


// Communicating with port and checking connection
const server = app.listen(5015, () => {
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});

// Exporting app
module.exports = server