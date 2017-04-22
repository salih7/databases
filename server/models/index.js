var db = require('../db');
var mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

module.exports = {
  messages: {
    get: function () {
      console.log('********GETINMODELS****************hello world');
    }, // a function which produces all the messages
    post: function (message, res) {
      //var post  = {id: 1, title: 'Hello MySQL'};
      connection.connect();
      var query = connection.query('INSERT INTO messages SET ?', message, function (error, results, fields) {
        if (error) {
          console.log('***?????***' + error);
        }
        // Neat!
        res.end();
      });
      // var query2 = connection.query('SELECT * FROM messages', [], function (error, results, fields) {
      //   console.log('THIS IS INSIDE THE DATABASE ' + typeof results);
      //   if (error) {
      //     console.log('***?????****' + error);
      //   }
      //   console.log(results[0]);
      //   // Neat!
      //   res.end();
      // });
      connection.end();
      console.log('*******POSTINMODELS******************hello world');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
