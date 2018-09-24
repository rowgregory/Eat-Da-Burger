const orm = require("../config/orm.js");

let burger = {

    selectAll: function(_cb) {
        orm.selectAll(function (res) {
            _cb(res);
        })
    },

    insertOne: function(burger_name, _cb) {
        orm.insertOne(burger_name, function(res){
            _cb(res);
        })
    },

    updateOne: function(obsColVals, condition, _cb) {
        orm.updateOne('burgers', obsColVals, condition, function(res){
            _cb(res);
        })
    },

    
};

module.exports = burger;