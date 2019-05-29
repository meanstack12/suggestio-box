var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home', function(req, res) {
  res.render('index');
});
router.post('/signinform',function(req,res){
var fname=req.body.name;
console.log(fname);
var rname=req.body.num;
console.log(rname);
})
router.post('/signupform',function(req,res){
var ffname=req.body.name1;
console.log(ffname);
var rrname=req.body.num1;
console.log(rrname);
var sname=req.body.id;
console.log(sname);
var pname=req.body.pass;
console.log(pname);
var cname=req.body.col;
console.log(cname);
var gname=req.body.gender;
console.log(gname);
var chname=req.body.check;
console.log(chname);
res.redirect("/home");
})
module.exports = router;
