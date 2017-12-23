const request = require('request');

exports.getRandomSet = (callback) => {
  let options = {
    type: 'get',
    url: `http://phish.in/api/v1/random-show`,
    headers: {
      'User-Agent': 'request',
    },
    contentType: "application/json"
  };

  request(options, (err, data) => {
    callback(err, JSON.parse(data.body));
  })
}