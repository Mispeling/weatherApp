const express = require('express')
const app = express()
const port = 3000
const path = require('path')


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/log.txt',function(req,res){
  res.sendFile((__dirname + "/log.txt"));
  //__dirname : It will resolve to your project folder.
});

app.get('/styles.css',function(req,res){
  res.sendFile((__dirname + "/styles.css"));
  //__dirname : It will resolve to your project folder.
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))