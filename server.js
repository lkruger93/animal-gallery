const path = require('path');
const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v0/gallery',function(request,response){
  response.json(animals);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
  dotenv.config();
  console.log(`listening on port ${PORT}...`);
})