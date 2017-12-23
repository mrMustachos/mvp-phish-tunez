const express = require('express');
const bodyParser = require('body-parser');
let { getRandomSet } = require('../helpers/index.js');

const app = express();
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());


// app.get('/', function(req, res) {
//   res.status(200).send(req.body)
//   res.end()
// });
// app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
// });

let port = 8008;

app.listen(port, function() {
  console.log(`There's magic happening on ${port}!`);
});

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');