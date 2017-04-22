var request = require('request');

request({
  method: 'POST',
  uri: 'http://127.0.0.1:3000/classes/messages',
  json: {
    username: 'Tom',
    message: 'I got a lapdance!',
    roomname: 'StripClubs'
  }
}, function () {

});