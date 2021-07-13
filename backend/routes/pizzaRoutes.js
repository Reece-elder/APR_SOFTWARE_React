const router = require('express').Router();

// Adding a pizza item to routes
const {Pizza} = require('../database.js');

router.get('/', (req, res) => {
    console.log("Hey im a route");
    res.send("hey im the default")
})

// Create method for app 
router.post("/create", (req, res, next) => {
    // Make a record out of pizza constructor, filling it with request body
    const record = new Pizza(req.body);
    //record.save adds object to db
    record.save()
        .then((result) => {
            res.status(201).send(`${result.customer} has been added successfully!`)
    }).catch((err) => next(err))
})

// Get All
router.get("/getAll", (req, res, next) => {
    Pizza.find((err, pizzas) => {
        if (err) {
            next(err);
        } else{
            res.send(pizzas);
        };
    });
});

// Get All with type of x
router.get("/getAll/:type", (req, res, next) => {
    Pizza.find({"type" : req.params.type},(err, pizzas) => {
        if (err) {
            next(err);
        } else{
            res.send(pizzas);
        };
    });
});

// Delete one by customer
router.delete("/delete/:customer", (req, res, next) => {
    customer = req.params.customer;
    Pizza.deleteOne({customer: customer}, (err) => {
        if(err){
            next(err);
        }
        res.status(202).send(`${customer} order Successfully deleted`);
    });
});

module.exports = router;