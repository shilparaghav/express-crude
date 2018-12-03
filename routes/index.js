var express = require('express');
var router = express.Router();

var userRoutes = require('./users');
var testRoutes = require('./test');

router.use( '/users', userRoutes );
router.use( '/test', testRoutes );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
