var express = require('express')
var app = express()

var mysql = require('mysql')

app.get('/songs', function (req, res) {
  var connection = mysql.createConnection({
    host     : 'itp460.usc.edu',
    user     : 'student',
    password : 'ttrojan',
    database : 'music'
  });
  connection.query('SELECT * FROM songs', function (err, songs) {
  if (err) { throw err; }
  res.json(songs);
  return songs;
});
connection.end()
});


app.listen(3000, function () {
  console.log('startinf on 3000')
})
