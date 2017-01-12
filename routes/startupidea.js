var express = require('express');
var router = express.Router();

var startupIdeas = [
      {category: 'technology', id: 1, name: 'connected livestock'},
      {category: 'technology', id: 2, name: 'robot delivery vehicles'},
      {category: 'technology', id: 3, name: 'virtual reality for office meetings'}
    ];

/* GET users listing. */
router.get('/', function(req, res, next) {

    //console.log('**service headers**');
    //console.log(req.headers);
    console.log('retrieving all startup ideas!')

    var startup = {ideas: startupIdeas, lastUpdated: new Date().toString() };

    //return all ideas
    res.send(startup);
});

/* GET users listing. */
router.get('/startupideas/:id', function(req, res, next) {

   var startupid = req.params.id;

    //console.log('**service headers**');
    //console.log(req.headers);
    console.log('retriving a specific startup idea!')

    var startup = {ideas: startupIdeas[startupid-1], lastUpdated: new Date().toString() };

    //return one idea
    res.send(startup);
});

module.exports = router;
