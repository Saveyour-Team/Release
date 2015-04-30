var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/docs', function(req, res) {
	res.render('docs.html')
})

module.exports = router;
