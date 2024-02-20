var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini message board', messages: messages });
});

/* POST for new page */
router.post('/new', function(req, res, next)
{
    const userName = req.body.user_name;
    const userMessage = req.body.user_message;
    messages.push({text: userMessage, user: userName, added: new Date()});

    res.redirect('/'); // send back to index
});

module.exports = router;
