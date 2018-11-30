var express = require('express');
var router = express.Router();

var userCtrl = require('../controllers/user_controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getall', [
  userCtrl.fetchAll
]);

router.get('/get/:id', [
  userCtrl.fetchById
]);

router.post('/save', [
  userCtrl.insert
]);

router.post('/update/:id', [
  userCtrl.update
]);

router.delete('/delete/:id', [
  userCtrl.hardDelete
]);

module.exports = router;
