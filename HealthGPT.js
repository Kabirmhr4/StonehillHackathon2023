// A express server, which will handle api requests coming in and respond back with a json object, it will use a body parser. 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());
app.get('/',(req, res)⇒{
  res.send('Hello World!');
});

app.listen(port,() ⇒ {
console.log('Example app listening')});
  
}