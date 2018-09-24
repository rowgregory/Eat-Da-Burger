const express   = require('express');
const router    = express.Router();
const burger    = require('../models/burger.js');

router.get('/', function(req, res) {
    burger.selectAll(data => {
        let hbsObj = {
            burgers: data
        };
        
        res.render("index", hbsObj);
    });
});

router.post("/burgers", function(req, res) {
    burger.insertOne(req.body.burger_name, function(response) {
        console.log(response);
        res.redirect("/");
    });
    
})

router.post("/burgers/:id", function(req, res){
    let condition = req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
        
    }, condition, function() {
        res.redirect("/");
    })
   
})

router.post('/delete/:id', function(req, res) {
    let condition = req.params.id;
    burger.updateOne({
        deleted: true
    }, condition, function() {
        res.redirect('/');
    })
})

//console.log(`This is burger controller`)

module.exports = router; 

// burger.insertOne(function(res){
//     console.log(res);
// })
