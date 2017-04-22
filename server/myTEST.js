var request = require('request');

request({
  method: 'POST',
  uri: 'http://127.0.0.1:3000/classes/messages',
  json: {
    username: 'Tom',
    text: 'I am 26!',
    roomname: 'lobby'
  }
}, function () {

});

request('http://127.0.0.1:3000/classes/messages', function(error, response, body) {
  var messageLog = JSON.parse(body);
  console.log(messageLog);
});