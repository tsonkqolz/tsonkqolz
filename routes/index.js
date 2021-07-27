var express = require('express');
var router = express.Router();

const messages = [

]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200);
  res.set({
    'Cache-Control': 'no-cache'
  });
  res.render('index', { title: 'chat', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form');
})

router.post('/new', (req, res, next) => {
  var user = req.body.user;
  var messageText = req.body.messageText;
  messages.unshift({text: messageText, user: user, added: new Date()});
  res.redirect('/')
})

module.exports = router;
