var express = require('express');
var router = express.Router();
var standupCtrl = require('../controller/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET New Notes page*/
router.get('/newnote', function(req, res){
  return standupCtrl.getNotes(req, res);
})

/* POST New Notes page*/
router.post('/newnote', function(req, res){
  return standupCtrl.create(req, res);
})


module.exports = router;
