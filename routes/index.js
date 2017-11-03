var express = require('express');
var router = express.Router();
var request = require('request');

var pokemon = [
{
 name: 'Sticky Man',
 avatarUrl: 'https://i.pinimg.com/originals/db/1c/24/db1c246a50470ba530a846d67180bf1e.jpg'
}
];

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile('index.html', { root: 'public' });
});
router.get('/pokemon', function (req, res) {
	console.log("in pokemon");
	res.send(pokemon);
});
router.post('/pokemon', function(req, res) {
    console.log("In Pokemon Post");
    console.log(req.body);
    pokemon.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
}); 

var politics = "https://zlzlap7j50.execute-api.us-east-1.amazonaws.com/prod";
router.get('/politics', function(req,res) {
  console.log("In politics");
  request(politics).pipe(res);
});
module.exports = router;
