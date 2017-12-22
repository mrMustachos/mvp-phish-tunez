const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/phish');

let db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error');
});

db.once('open', () => {
  console.log('mongoose connected successfully');
});

let favSchema = mongoose.Schema({
  uniqId: {
    type: Number,
    unique: true
  },
  quantity: Number,
  description: String
});

exports.Item = mongoose.model('Item', favSchema);

exports.selectAll = function(callback) {
  Item.find({}, (err, items) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};