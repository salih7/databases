var models = require('../models');
//const querystring = require('querystring');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('*************GETINCONT*****************hello world');
      models.messages.get(res);
    }, // a function which handles a get request for all messages
      
    post: function (req, res) {
      console.log('***********POSTINCONT*****************hello world');
      models.messages.post(req.body, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('*************GETINCONTUSER**************hello world');
    },
    post: function (req, res) {
      console.log('*************POSTINCONTSUER**************hello world');
      res.end();
    }
  }
};

