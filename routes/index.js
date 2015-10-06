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
      cmsDB.query('SELECT post.post_title, post.guid as post_link, post.post_content, img.guid as image_src from wp_posts post left join wp_posts img on img.post_parent=post.ID where img.post_type!="revision" group by (img.post_parent) order by post.post_date DESC;',
               function(err,rows,fields){  
                  if(!err){
                    
                    for (var i = rows.length - 1; i >= 0; i--) {
                      var postLink = rows[i].post_link;
                      console.log('The changing url for: ',rows[i]);
                      postLink = postLink.replace(/cms2/gi, "currymespicy");
                      rows[i].post_link = postLink;
                    };
                    res.json(rows);
                  } else {
                    console.log('Error while performing query:', err);
                  }
                });
});

module.exports = router;