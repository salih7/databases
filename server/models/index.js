var db = require('../db');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

connection.connect();

module.exports = {
  messages: {
    get: function () {
      console.log('********GETINMODELS****************hello world');
    }, // a function which produces all the messages
    post: function (message) {
      //var post  = {id: 1, title: 'Hello MySQL'};
      var query = connection.query('INSERT INTO messages SET ?', message, function (error, results, fields) {
        if (error) throw error;
        // Neat! 
      });
      console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL' 
      console.log(message);
      console.log('*******POSTINMODELS******************hello world');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
