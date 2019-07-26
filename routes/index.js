var express = require('express');
var router = express.Router();
var db = require('../db')


/* GET home page. */
router.get('/', function(req, res, next) {
var query = "select * from quantityTypes";
db.query(query,function(err,rows,fields){
	if (err) throw err;
res.render('index', { title: 'Express',products: rows});
});
 });


router.get('/openform',function(req,res,next){
res.render('regform',{title : 'reg'})
})

router.post('/create',function(req,res,next){
var name = req.body.qunty;
var qry = `insert into quantityTypes(quantityName) values("${name}")`;
db.query(qry,function(err,result){
       if (err) throw err;
   res.redirect('/');
})
})

module.exports = router;
