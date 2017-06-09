
const express = require('express');
const router = express.Router();

//https://github.com/Codenator81/ng2do-mean-app
//https://devcenter.heroku.com/articles/mean-apps-restful-api

var mongojs = require('mongojs');
var db = mongojs('mongodb://127.0.0.1:27017/mean_app', ['col_users']);


/* GET api listing. */
router.get('/', (req, res, next) => {
  res.send('api works');
});

//Get All Tasks

router.get('/tasks', function(req, res, next) {
	db.col_users.find(function(err, users){
		if(err){
			res.send(err)
		}
		res.json(users);
	})
})

//Get Single Task
router.get('/task/:id', function(req, res, next) {
	db.col_users.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, user){
		if(err){
			res.send(err)
		}
		res.json(user);
	})
})

module.exports = router;