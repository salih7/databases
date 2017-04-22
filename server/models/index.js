var db = require('../db');

db.connect();

module.exports = {
  messages: {
    get: function (res) {
      console.log('********GETINMODELS****************hello world');
      res.header('Content-Type', 'application/json');
      var query = db.query('SELECT * FROM messages', [], function (error, results) {
        if (error) {
          console.log(error);
        }
        res.end(JSON.stringify({results}));
      });

    }, // a function which produces all the messages
    post: function (message, res) {
      var query = db.query('INSERT INTO messages SET ?', message, function (error, results, fields) {
        if (error) {
          console.log('***?????***' + error);
        }
        res.end();
      });
      console.log('*******POSTINMODELS******************hello world');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};
