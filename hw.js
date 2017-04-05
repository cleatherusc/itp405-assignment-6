var express = require('express')
var app = express()

var mysql = require('mysql')
app.get('/api/dvds/', function (req, res) {
  var connection = mysql.createConnection({
    host     : 'itp460.usc.edu',
    user     : 'student',
    password : 'ttrojan',
    database : 'dvd'
  });
  connection.query('SELECT * FROM dvds', function (err, songs) {
  if (err) { throw err; }
  res.json(songs);
});
});

app.get('/api/dvds/:id', function (req, res) {
  var connection = mysql.createConnection({
    host     : 'itp460.usc.edu',
    user     : 'student',
    password : 'ttrojan',
    database : 'dvd'
  });
  connection.query('SELECT * FROM dvds WHERE dvds.id = ?',[req.params.id], function (err, songs) {
  if (err) { throw err; }
  res.json(songs[0]);
});
connection.end()
});


app.listen(3000, function () {
  console.log('startinf on 3000')
})
