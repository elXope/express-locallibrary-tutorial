var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'La pag d Josep amb Express', subtitle: 'Alejandro Acosta World Domination Crew' });
});

module.exports = router;
