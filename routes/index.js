var express = require('express');
var router = express.Router();

let serverFoods = [];

let FoodObject = function (Name, Time, Temp, Desc) {
    this.name = Name;
    this.time = Time;
    this.temp = Temp;
    this.desc = Desc;
    this.ID = Foods.length + 1;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET food data */
router.get('/getFoods', function(req, res) {
  res.status(200).json(serverFoods);
});

module.exports = router;