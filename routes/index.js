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

var fs = require("fs");

let fileManager = {
  read: function() {
    var rawdata = fs.readFileSync('objectdata.json');
    let goodData = JSON.parse(rawdata);
    serverFoods = goodData;
  },
  write: function() {
    let data = JSON.stringify(serverFoods);
    fs.writeFileSync('objectdata.json', data);
  },
  validData: function() {
    var rawdata = fs.readFileSync('objectdata.json');
    console.log(rawdata.length);
    if(rawdata.length < 1) {
      return false;
    }
    else {
      return true;
    }
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});

/* GET food data */
router.get('/getFoods', function(req, res) {
  fileManager.read();
  res.status(200).json(serverFoods);
});

/* POST new food */
router.post('/addFood', function(req, res) {
  const newFood = req.body;
  serverFoods.push(newFood);
  fileManager.write();
  res.status(200).json(newFood);
});

module.exports = router;
