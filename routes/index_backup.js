var express = require('express');
var router = express.Router();
var db = require('mysql');
var cmsDB = new db.createConnection({
    host:"97.74.149.176",
    user:"cms2db",
    password:"binRush615#cdb",
    database:"cms2db"
});

cmsDB.connect(function(err){
    if (!err){
      console.log("Connected to DB");
    }else {
      console.log("couldnt connect to DB: ",err);
    }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/posts', function(req,res,next){

      //cmsDB.query('SELECT post_title from wp_posts limit 20', function(err,rows,fields){
      cmsDB.query('select ID, post_title, guid from wp_posts where post_status="publish" AND post_type="post" and post_title!="" and post_content!="";', function(err,rows,fields){  
      if(!err){
        console.log('The solution is: ',rows);
        res.json(rows);
      } else {
        console.log('Error while performing query:', err);
      }
    });
});

module.exports = router;